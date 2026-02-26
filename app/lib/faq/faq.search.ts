import type { FaqEntity, FaqEntitySearchHit, FaqSearchOptions, LangCode } from './faq.types'
import { LEXICON } from './faq.lexicon'

function normalize(s: string): string {
  return (s || '').toLowerCase().replace(/\s+/g, ' ').trim()
}

/** 仍然保留：中文轻量召回字典（不是语义层） */
const ZH_DICT = [
  '购买','哪里','怎么买','邮寄','快递','发货',
  '保存','冷藏','开封','保质','保质期',
  '辣','不辣','口味',
  '认证','安全','防腐剂',
] as const

function tokenizeZh(text: string): string[] {
  const tokens: string[] = []
  for (const w of ZH_DICT) if (text.includes(w)) tokens.push(w)
  for (const ch of text) if (ch.trim()) tokens.push(ch)
  return Array.from(new Set(tokens))
}

function tokenizeLatin(text: string): string[] {
  const arr = text
    .split(/[\s,.;:!?()【】[\]{}"“”'’/\\|+-]+/g)
    .filter(Boolean)
  return Array.from(new Set(arr))
}

/**
 * ✅ 修复点 1：短语匹配不再依赖 displayLang
 * 因为用户可能在 /faq/zh 输入英文短语
 */
function matchPhrasesAnyLang(text: string): string[] {
  const found: string[] = []
  for (const e of LEXICON) {
    if (e.type !== 'phrase') continue
    if (text.includes(e.term.toLowerCase())) found.push(e.term.toLowerCase())
  }
  return Array.from(new Set(found))
}

/**
 * ✅ 修复点 2：概念识别不再按 displayLang 过滤
 * token 命中哪个词条就产生哪个 concept（lang 只用于词条治理，不用于搜索限制）
 */
function detectConcepts(tokens: string[]): Map<string, number> {
  const conceptWeight = new Map<string, number>()

  for (const t of tokens) {
    for (const e of LEXICON) {
      if (e.term.toLowerCase() !== t) continue
      conceptWeight.set(e.concept, Math.max(conceptWeight.get(e.concept) || 0, e.weight))
    }
  }

  return conceptWeight
}

function buildHayByLang(entity: FaqEntity, lang: LangCode): string {
  const it = entity.i18n[lang]
  return normalize([it.q, it.a, ...(it.keywords || [])].join(' '))
}

/**
 * ✅ 修复点 3：召回使用 ALL LANG（跨语言召回）
 * ✅ 展示语言只影响“额外加权”（更符合体验）
 */
function scoreEntity(
  entity: FaqEntity,
  tokens: string[],
  conceptWeights: Map<string, number>,
  displayLang: LangCode
): { score: number; reason: string[]; matchCountAll: number; matchCountDisplay: number } {
  let score = 0
  const reason: string[] = []

  // ALL-LANG hay：用于跨语召回
  const hayAll = normalize([
    buildHayByLang(entity, 'zh'),
    buildHayByLang(entity, 'en'),
    buildHayByLang(entity, 'bm'),
  ].join(' | '))

  // display hay：用于语言偏好加权（不是限制召回）
  const hayDisplay = buildHayByLang(entity, displayLang)

  let matchCountAll = 0
  let matchCountDisplay = 0

  // 1) token 命中（跨语言召回）
  for (const t of tokens) {
    if (!t) continue
    if (hayAll.includes(t)) {
      score += 1
      matchCountAll += 1
      reason.push(`text_all:${t}`)
    }
    if (hayDisplay.includes(t)) {
      // displayLang 额外 boost（让本语言更靠前）
      score += 0.35
      matchCountDisplay += 1
      reason.push(`text_display:+0.35:${t}`)
    }
  }

  // 2) 概念加权（跨语言）
  // category 与 concept 解耦：这里用“弱映射”只做轻微偏好，不做硬等号
  const categoryConceptBias: Record<string, string[]> = {
    shipping: ['topic.shipping'],
    storage: ['topic.storage'],
    product: ['topic.spicy'],
    safety: ['topic.safety'],
    order: ['intent.buy'],
  }

  const bias = categoryConceptBias[entity.category] || []

  for (const [concept, w] of conceptWeights.entries()) {
    if (bias.includes(concept)) {
      score += w
      reason.push(`concept_bias:${concept}+${w}`)
    } else {
      score += w * 0.35
      reason.push(`concept_weak:${concept}+${(w * 0.35).toFixed(2)}`)
    }
  }

  // 3) featured boost
  if (entity.featured) {
    score += 0.5
    reason.push('featured:+0.5')
  }

  return { score, reason, matchCountAll, matchCountDisplay }
}

/**
 * ✅ 核心：即使没有 “primary”，也返回推荐（secondary/fallback）
 * 让 UI 可以做你要的：
 * - "未找到完全匹配，但以下可能有帮助"
 */
export function searchFaqEntities(
  entities: FaqEntity[],
  query: string,
  opts: FaqSearchOptions
): FaqEntitySearchHit[] {
  const clean = normalize(query)
  if (!clean) return []

  const displayLang = opts.displayLang
  const limit = opts.limit ?? 5

  const phraseTokens = matchPhrasesAnyLang(clean)
  const zhTokens = tokenizeZh(clean)
  const latinTokens = tokenizeLatin(clean)
  const tokens = Array.from(new Set([...phraseTokens, ...zhTokens, ...latinTokens]))

  const conceptWeights = detectConcepts(tokens)

  const scored = entities.map((entity) => {
    const r = scoreEntity(entity, tokens, conceptWeights, displayLang)
    return {
      entity,
      item: entity.i18n[displayLang], // ✅ 始终按页面语言展示
      score: r.score,
      reason: r.reason,
      matchCountAll: r.matchCountAll,
      matchCountDisplay: r.matchCountDisplay,
    }
  })

  scored.sort((a, b) => b.score - a.score)

  // tier 规则（可调，但要稳定）
  const hits: FaqEntitySearchHit[] = []
  for (const r of scored) {
    // 这里不要 score<=0 全过滤，否则 notfound 会完全空
    // 我们先收集 top N，再由 tier 判定是否 “answered”
    const tier =
      r.matchCountAll >= 2 || r.score >= 4 ? 'primary' :
      r.matchCountAll >= 1 || r.score >= 2 ? 'secondary' :
      'fallback'

    hits.push({
      entity: r.entity,
      item: r.item,
      score: r.score,
      tier,
      reason: r.reason,
    })

    if (hits.length >= limit) break
  }

  return hits
}

/**
 * 可选：给 UI 的“Try asking about ...” 提示词
 * - 不依赖 LLM
 * - 直接从 lexicon / 常用主题生成
 */
export function buildSuggestionTopics(displayLang: LangCode): string[] {
  const presets: Record<LangCode, string[]> = {
    en: ['shipping', 'delivery time', 'how to store', 'where to buy', 'halal'],
    zh: ['邮寄', '多久到', '开封保存', '哪里购买', '认证/halal'],
    bm: ['penghantaran', 'berapa lama', 'cara simpan', 'mana beli', 'halal'],
  }
  return presets[displayLang]
}
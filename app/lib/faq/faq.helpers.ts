import type { FaqItem, FaqSearchHit, LangCode } from './faq.types'

/* =========================================================
   1️⃣ 基础工具函数
========================================================= */

/**
 * 标准化文本
 * - 小写
 * - 去掉多余空格
 */
function normalize(s: string): string {
  return (s || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}


/* =========================================================
   2️⃣ 轻量 Tokenizer（三语）
   可扩展：往字典中添加更多词即可提升命中率
========================================================= */

/**
 * 中文关键词字典
 * 后续可以持续扩充
 */
const ZH_DICT = [
  '购买','哪里','怎么买','邮寄','快递','发货',
  '保存','冷藏','开封','保质',
  '辣','不辣','口味'
]

/**
 * 轻量分词函数
 * - 英文 / BM: 按空格切
 * - 中文: 先匹配字典词，再按单字切
 */
function tokenize(input: string, lang: LangCode): string[] {
  const text = normalize(input)

  if (!text) return []

  if (lang === 'zh') {
    const tokens: string[] = []

    // 1️⃣ 先匹配字典词
    for (const word of ZH_DICT) {
      if (text.includes(word)) {
        tokens.push(word)
      }
    }

    // 2️⃣ 单字切（提升模糊命中率）
    for (const char of text) {
      if (char.trim()) tokens.push(char)
    }

    return Array.from(new Set(tokens))
  }

  // 英文 / 马来语
  return Array.from(new Set(text.split(/\s+/)))
}


/* =========================================================
   3️⃣ 语义映射层（核心扩展区域）
   token → semantic concept
   concept → weight boost
========================================================= */

/**
 * 概念映射表
 * 可不断添加同义词
 */
const SEMANTIC_MAP: Record<string, string[]> = {
  shipping: [
    '邮寄','快递','delivery','ship','pos','kurier'
  ],
  buy: [
    '购买','哪里','buy','order','beli'
  ],
  storage: [
    '保存','冷藏','store','simpan'
  ],
  spicy: [
    '辣','spicy','pedas'
  ]
}

/**
 * 概念权重
 * 后续可根据实际数据微调
 */
const CONCEPT_WEIGHT: Record<string, number> = {
  shipping: 2.5,
  buy: 2.5,
  storage: 2,
  spicy: 1.5
}


/**
 * 根据 token 找到语义概念
 */
function detectConcepts(tokens: string[]): string[] {
  const found: string[] = []

  for (const [concept, words] of Object.entries(SEMANTIC_MAP)) {
    for (const t of tokens) {
      if (words.includes(t)) {
        found.push(concept)
        break
      }
    }
  }

  return found
}


/* =========================================================
   4️⃣ 加权评分算法
   多维评分组合
========================================================= */

function scoreItem(
  item: FaqItem,
  tokens: string[],
  concepts: string[]
): number {

  let score = 0

  const hay = normalize(
    [item.q, item.a, ...(item.keywords || [])].join(' ')
  )

  // 1️⃣ token 直接匹配
  for (const t of tokens) {
    if (hay.includes(t)) {
      score += 1
    }
  }

  // 2️⃣ 语义概念加权
  for (const concept of concepts) {
    if (item.category === concept) {
      score += CONCEPT_WEIGHT[concept] || 1
    }
  }

  // 3️⃣ featured 轻微加权
  if (item.featured) {
    score += 0.5
  }

  return score
}


/* =========================================================
   5️⃣ 主搜索函数
   - 永远返回 Top N
   - 不再返回空数组
========================================================= */

export function searchFaq(
  list: FaqItem[],
  query: string,
  lang: LangCode = 'en',
  limit = 5
): FaqSearchHit[] {

  const clean = normalize(query)
  if (!clean) return []

  // 1️⃣ tokenize
  const tokens = tokenize(clean, lang)

  // 2️⃣ semantic expansion
  const concepts = detectConcepts(tokens)

  // 3️⃣ 评分
  const scored: FaqSearchHit[] = list.map(item => ({
    item,
    score: scoreItem(item, tokens, concepts),
    reason: concepts.length ? 'semantic_match' : 'keyword_match'
  }))

  // 4️⃣ 排序
  scored.sort((a, b) => b.score - a.score)

  // 5️⃣ 永远返回 Top N
  return scored.slice(0, limit)
}
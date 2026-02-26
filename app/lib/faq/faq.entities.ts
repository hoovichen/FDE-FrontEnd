import type { FaqEntity, FaqItem, LangCode } from './faq.types'
import { FAQ_DATA } from './data/faq.index'

const LANGS: LangCode[] = ['zh', 'en', 'bm']

function stripLangPrefix(id: string, lang: LangCode): string {
  const prefix = `${lang}-`
  return id.startsWith(prefix) ? id.slice(prefix.length) : id
}

/**
 * 由你现有 FAQ_DATA（单语 item）构建跨语言实体列表
 * - 依赖“三语严格对应”
 * - 如果某条缺语言，会跳过（避免输出半残实体）
 */
export function buildFaqEntities(): FaqEntity[] {
  const byBaseId = new Map<string, Partial<Record<LangCode, FaqItem>>>()

  for (const lang of LANGS) {
    for (const item of FAQ_DATA[lang] as FaqItem[]) {
      const baseId = stripLangPrefix(item.id, lang)
      const cur = byBaseId.get(baseId) || {}
      cur[lang] = item
      byBaseId.set(baseId, cur)
    }
  }

  const entities: FaqEntity[] = []

  for (const [baseId, pack] of byBaseId.entries()) {
    const zh = pack.zh
    const en = pack.en
    const bm = pack.bm
    if (!zh || !en || !bm) continue

    // 以 zh 作为“权威来源”决定 category/featured（因为你严格对应）
    entities.push({
      id: baseId,
      category: zh.category,
      featured: !!zh.featured,
      i18n: { zh, en, bm },
    })
  }

  return entities
}

/** 运行时初始化一次即可（静态站点也 ok） */
export const FAQ_ENTITIES: FaqEntity[] = buildFaqEntities()
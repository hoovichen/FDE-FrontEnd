export type LangCode = 'zh' | 'en' | 'bm'

export type FaqCategoryKey =
  | 'order'
  | 'shipping'
  | 'storage'
  | 'safety'
  | 'product'
  | 'product-use'

export interface FaqItem {
  id: string
  category: FaqCategoryKey
  q: string
  a: string
  keywords?: string[] // 先简单用；后面你再做同义词/权重
  featured?: boolean
}

export interface FaqSearchHit {
  item: FaqItem
  score: number
  reason?: string
}
export type FaqLangI18n = Record<LangCode, FaqItem>

/**
 * 跨语言 FAQ 实体（一个问题意图）
 * - 三语严格对应时：i18n 必定三语齐全
 * - featured/category 是实体级属性
 */
export interface FaqEntity {
  /** 跨语言稳定 id（不是 zh-xxx / en-xxx 这种） */
  id: string
  category: FaqCategoryKey
  featured?: boolean
  i18n: FaqLangI18n

  /**
   * 可选：人工标注概念（黄金信号）
   * 例如：['topic.shipping', 'intent.buy']
   * 先不强制，但架构预留
   */
  concepts?: string[]
}

export interface FaqSearchOptions {
  /** 当前页面语言，用于展示与语言偏好排序 */
  displayLang: LangCode
  limit?: number
}

export type FaqHitTier = 'primary' | 'secondary' | 'fallback'

export interface FaqEntitySearchHit {
  entity: FaqEntity
  score: number
  tier: FaqHitTier
  reason: string[]

  /**
   * 给 UI 直接展示用：已经按 displayLang 取好的 FaqItem
   * 所以你现有 FaqAnswer 基本不用动
   */
  item: FaqItem
}
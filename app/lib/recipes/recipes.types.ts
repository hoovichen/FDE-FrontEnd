export type LangCode = 'zh' | 'en' | 'bm'

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface RecipeBase {
  slug: string
  thumbnail: string            // /public 下路径
  youtubeId?: string            // 只存 ID，不存整条 URL（更稳）
  durationSec?: number
  publishedAt?: string         // '2025-01-12'
  tags?: string[]
  featuredHome?: boolean
  featuredOrder?: number
}

export interface RecipeI18n {
  title: string
  summary: string
  ingredients?: string[]
  steps?: string[]
}

export type RecipeI18nMap = Record<LangCode, Record<string, RecipeI18n>>

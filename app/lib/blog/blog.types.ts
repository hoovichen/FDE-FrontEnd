export type LangCode = 'zh' | 'en' | 'bm'

export interface BlogFrontmatter {
  title: string
  summary?: string
  date: string // ISO: 2026-01-16
  slug: string
  tags?: string[]
  cover?: string // /images/...
}

export interface BlogListItem extends BlogFrontmatter {
  lang: LangCode
  to: string // /blog/<slug>
}

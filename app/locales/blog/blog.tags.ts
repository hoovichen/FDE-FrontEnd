// ~/locales/blog/blog.tags.ts
export type LangCode = 'zh' | 'en' | 'bm'

export const BLOG_TAGS: Record<
  string,
  Record<LangCode, string>
> = {
  food_science: {
    zh: '食品科学',
    en: 'Food Science',
    bm: 'Sains Makanan',
  },
  food_design: {
    zh: '风味设计',
    en: 'Food Design',
    bm: 'Reka Bentuk Makanan',
  },
  sauce: {
    zh: '酱料',
    en: 'Sauce',
    bm: 'Sos',
  },
  brand: {
    zh: '品牌',
    en: 'Brand',
    bm: 'Jenama',
  },
  story: {
    zh: '品牌故事',
    en: 'Brand Story',
    bm: 'Kisah Jenama',
  },
  interview: {
    zh: '访谈',
    en: 'Interview',
    bm: 'Temu Bual',
  },
}

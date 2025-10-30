// app/locales/home.ts
export type LangCode = 'zh' | 'en' | 'bm'

export interface HomeI18nText {
  title: string          // <title>
  description: string    // meta description
  ogTitle?: string       // og:title
  ogDescription?: string // og:description
}

export const HOME_TEXT: Record<LangCode, HomeI18nText> = {
  en: {
    title: 'Fire Dragon Enterprise — Home',
    description: 'Official brand portal for product highlights, recipes, and stories.',
    ogTitle: 'Fire Dragon Enterprise',
    ogDescription: 'Discover our signature sauces, everyday recipes, and brand stories.'
  },
  zh: {
    title: '火龙企业 - 首页',
    description: '品牌与产品介绍的门户站点，包含明星产品、日常食谱与品牌故事。',
    ogTitle: '火龙企业',
    ogDescription: '探索我们的明星酱料、每日灵感食谱与品牌故事。'
  },
  bm: {
    title: 'Fire Dragon Enterprise — Laman Utama',
    description: 'Portal rasmi jenama untuk produk terpilih, resipi, dan cerita.',
    ogTitle: 'Fire Dragon Enterprise',
    ogDescription: 'Terokai sos istimewa kami, resipi harian, dan cerita jenama.'
  }
}
// locales/seo.home.ts
export type LangCode = 'zh' | 'en' | 'bm'

export interface HomeI18nText {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

export const HOME_TEXT: Record<LangCode, HomeI18nText> = {
  en: {
    title: 'Fire Dragon Enterprise — Handmade Chili Sauces from Pantai Remis, Malaysia',
    description:
      'Small-batch, handmade chili sauces crafted in Pantai Remis, Perak. Explore our signature sauces, everyday cooking ideas, and brand stories.',
    ogTitle: 'Handmade Chili Sauces from Pantai Remis',
    ogDescription:
      'Authentic Malaysian flavors, crafted in small batches — perfect for home cooking and gifting.'
  },
  zh: {
    title: '火龙企业 — 班台手作辣椒酱｜马来西亚本土风味',
    description:
      '来自霹雳州班台（Pantai Remis）的手工小批量辣椒酱。探索明星产品、日常灵感与品牌故事，体验地道马来西亚风味。',
    ogTitle: '班台手作辣椒酱',
    ogDescription:
      '小批量匠心制作，地道风味，家常烹饪与送礼皆宜。'
  },
  bm: {
    title: 'Fire Dragon Enterprise — Sos Cili Buatan Tangan dari Pantai Remis, Malaysia',
    description:
      'Sos cili buatan tangan secara kelompok kecil di Pantai Remis, Perak. Terokai sos istimewa kami, idea masakan harian, dan kisah jenama.',
    ogTitle: 'Sos Cili Buatan Tangan Pantai Remis',
    ogDescription:
      'Rasa autentik Malaysia, dihasilkan secara kelompok kecil — sesuai untuk masakan harian dan hadiah.'
  }
}

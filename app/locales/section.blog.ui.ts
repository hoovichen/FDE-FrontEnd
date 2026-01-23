export type LangCode = 'zh' | 'en' | 'bm'

export interface BlogsI18nText {
  title: string
  desc: string
  more: string
}

export const BLOGS_TEXT: Record<LangCode, BlogsI18nText> = {
  zh: {
    title: '风味故事',
    desc: '记录我们的味道、思路与一些小地方的真实故事。',
    more: '查看全部文章'
  },
  en: {
    title: 'Stories & Notes',
    desc: 'Sauces, recipes, and food stories from small places with Fire Dragon.',
    more: 'View all posts'
  },
  bm: {
    title: 'Cerita & Catatan',
    desc: 'Resipi, sos, dan cerita makanan dari tempat-tempat kecil bersama Fire Dragon.',
    more: 'Lihat semua artikel'
  }
}

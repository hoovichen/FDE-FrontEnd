export type LangCode = 'zh' | 'en' | 'bm'

export interface RecipesI18nText {
  title: string
  desc: string
  viewAll: string
}

export const RECIPES_TEXT: Record<LangCode, RecipesI18nText> = {
  en: {
    title: 'Everyday Cooking Inspiration',
    desc: 'Learn how our sauces can elevate the flavor of your next meal',
    viewAll: 'View All Recipes'
  },
  zh: {
    title: '每日烹饪灵感',
    desc: '了解我们的酱料，怎样让你的下一餐风味更出众',
    viewAll: '查看全部'
  },
  bm: {
    title: 'Inspirasi Masakan Harian',
    desc: 'Ketahui bagaimana sos kami dapat menyerlahkan lagi keenakan hidangan anda',
    viewAll: 'Lihat Semua Resipi'
  }
}

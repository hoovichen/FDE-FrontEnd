export type LangCode = 'zh' | 'en' | 'bm'

export interface RecipesUiText {
  sectionTitle: string
  sectionDesc: string
  viewAll: string

  pageTitle: string
  pageDesc: string

  watchVideo: string
  backToList: string
  ingredients: string
  steps: string
  related: string
  minutes: string
}

export const RECIPES_UI: Record<LangCode, RecipesUiText> = {
  zh: {
    sectionTitle: '每日烹饪灵感',
    sectionDesc: '用我们的酱料，轻松煮出更够味的一餐',
    viewAll: '查看全部食谱',

    pageTitle: '食谱教学',
    pageDesc: '跟着视频一步步做，简单、快、够味～',

    watchVideo: '观看教学视频',
    backToList: '返回全部食谱',
    ingredients: '材料',
    steps: '做法',
    related: '你可能也会喜欢',
    minutes: '分钟'
  },
  en: {
    sectionTitle: 'Everyday Cooking Inspiration',
    sectionDesc: 'See how our sauces bring your next meal to life',
    viewAll: 'View All Recipes',

    pageTitle: 'Recipes',
    pageDesc: 'Follow the video step by step — simple and flavourful.',

    watchVideo: 'Watch the video',
    backToList: 'Back to all recipes',
    ingredients: 'Ingredients',
    steps: 'Steps',
    related: 'You may also like',
    minutes: 'mins'
  },
  bm: {
    sectionTitle: 'Inspirasi Masakan Harian',
    sectionDesc: 'Ketahui bagaimana sos kami menaikkan rasa hidangan anda',
    viewAll: 'Lihat Semua Resipi',

    pageTitle: 'Resipi',
    pageDesc: 'Ikut video langkah demi langkah — ringkas & sedap.',

    watchVideo: 'Tonton video',
    backToList: 'Kembali ke semua resipi',
    ingredients: 'Bahan-bahan',
    steps: 'Cara',
    related: 'Anda mungkin suka juga',
    minutes: 'minit'
  }
}

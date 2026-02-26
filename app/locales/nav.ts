// app/locales/nav.ts
export type LangCode = 'zh' | 'en' | 'bm'

export const NAV_TEXT: Record<LangCode, {
  home: string
  recipes: string
  products: string
  about: string
  contact: string
  stockists: string
  faq: string
}> = {
  zh: {
    home: '首页',
    recipes: '食谱',
    products: '产品',
    about: '关于我们',
    contact: '联系我们',
    stockists: '线下合作店',
    faq: '常见问题',

  },
  en: {
    home: 'Home',
    recipes: 'Recipes',
    products: 'Products',
    about: 'About us',
    contact: 'Contact us',
    stockists: 'Stockists',
    faq: 'FAQ',
  },
  bm: {
    home: 'Home',
    recipes: 'Resipi',
    products: 'Produk',
    about: 'Tentang Kami',
    contact: 'Hubungi Kami',
    stockists: 'Kedai / Stockists',
    faq: 'FAQ',
  }
}

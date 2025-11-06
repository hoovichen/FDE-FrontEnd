export type LangCode = 'zh' | 'en' | 'bm'

export interface ProductsI18nText {
  title: string
  desc: string
  shopNow: string
}

export const PRODUCTS_TEXT: Record<LangCode, ProductsI18nText> = {
  en: {
    title: 'Shop Our Sauces Online',
    desc: 'Discover our signature Malaysian chilli sauces and homemade specialities. Crafted with authentic flavours to bring the true taste of home to your table.',
    shopNow: 'SHOP NOW'
  },
  zh: {
    title: '在线购买酱料',
    desc: '探索招牌马来西亚辣椒酱与手工特制风味酱。坚守正宗风味，让真实家乡味走进你的日常餐桌。',
    shopNow: '立即选购'
  },
  bm: {
    title: 'Beli Sos Kami Secara Dalam Talian',
    desc: 'Temui sos cili istimewa dan hidangan buatan kami yang penuh keaslian. Dihasilkan dengan rasa tulen untuk membawa citarasa rumah ke meja anda.',
    shopNow: 'BELI SEKARANG'
  },
}

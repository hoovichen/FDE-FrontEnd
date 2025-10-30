
export type HeroAlign = 'text-left' | 'text-right'
export type LangCode = 'zh' | 'en' | 'bm'

export interface HeroSlideBase {
  key: 'I' | 'II' | 'III'
  image: string
  align: HeroAlign
  ratio?: [number, number]
  shopCta?: { url: string }                  // 文案放到翻译里
}

// 翻译类型
export interface HeroI18nText {
  title: string
  mainContent?: string
  subContent?: string
  ctaLabel?: string      // 可选：CTA 按钮的文案
  shopLabel?: string     // 可选：外链“去购买”
}

export const HERO_TEXT: Record<LangCode, Record<HeroSlideBase['key'], HeroI18nText>> = {
  en: {
    'I': {
      title: 'CRISPY PRAWN CHILI',
      mainContent: 'Bringing Hometown Flavours to Every Malaysian Table',
      subContent: 'Full of crunch and flavour. A versatile sauce that pairs perfectly with stir-fries, dry noodles, or simply as a side condiment.'
    },
    'II': {
      title: 'Today’s Must-Try',
      subContent: 'Natural ingredients, crafted with care.',
      ctaLabel: 'Browse Products',
      shopLabel: 'Shop Now'
    },
    'III': {
      title: 'Everyday Cooking Inspiration',
      subContent: 'From breakfast to supper, endless inspirations.',
      ctaLabel: 'See Recipes',
    }
  },
  zh: {
    'I': {
      title: '香脆虾米辣椒酱',
      mainContent: '让家乡的醇厚滋味，走进每一个马来西亚人的日常餐桌',
      subContent: '脆感十足，香气浓郁，这是一瓶 “万能适配” 的酱料：炒热菜时加一勺，鲜香瞬间升级；拌凉面时拌一拌，风味即刻拉满；日常佐餐配一勺，简单饭菜也能吃得有滋有味，轻松满足不同吃法需求'
    },
    'II': {
      title: '明星产品 · 今日必试',
      subContent: '自然原料，工艺加持',
      ctaLabel: '浏览产品',
      shopLabel: '去购买'
    },
    'III': {
      title: '三步上桌 · 100+ 食谱',
      subContent: '从早餐到宵夜，灵感不断',
      ctaLabel: '查看食谱'
    }
  },
  bm: {
    'I': {
      title: 'Sambal Udang Rangup',
      mainContent: 'Membawa Rasa Kampung Halaman ke Setiap Meja Rakyat Malaysia',
      subContent: 'Penuh dengan kerangupan dan rasa yang memikat. Sos serbaguna ini sesuai digandingkan dengan masakan goreng, mi kering, atau sekadar sebagai pencicah.'
    },
    'II': {
      title: 'Produk Pilihan Hari Ini',
      subContent: 'Bahan semula jadi, hasil kraf yang teliti.',
      ctaLabel: 'Lihat Produk',
      shopLabel: 'Beli Sekarang'
    },
    'III': {
      title: '3 Langkah ke Meja · 100+ Resipi',
      subContent: 'Dari sarapan hingga lewat malam, inspirasi tanpa henti.',
      ctaLabel: 'Lihat Resipi'
    }
  }
}
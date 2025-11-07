
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
      mainContent: 'Your Everyday Meal, Instantly Better.',
      subContent: 'Locally crafted with care and passion. Explore our products and taste the difference.',
    },
    'III': {
      title: 'Everyday Cooking Inspiration',
      subContent: 'From breakfast to supper, discover how our sauces make every meal special.',
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
      mainContent: '让您的每一餐，瞬间都变得更美味',
      subContent: ' 探索我们的产品系列，品味那份与众不同的用心',
    },
    'III': {
      title: ' 您的每日烹饪灵感',
      mainContent: '每日烹饪灵感',
      subContent: '三步搞定一餐，美味轻松上桌。搭配我们的酱料，让每一餐都充满家的味道'
    }

  },
  bm: {
    'I': {
      title: 'Sambal Udang Rangup',
      mainContent: 'Membawa Rasa Kampung Halaman ke Setiap Meja Rakyat Malaysia',
      subContent: 'Penuh dengan kerangupan dan rasa yang memikat. Sos serbaguna ini sesuai digandingkan dengan masakan goreng, mi kering, atau sekadar sebagai pencicah.'
    },
    'II': {
      title: 'Produk Pilihan · Wajib Cuba Hari Ini',
      mainContent: 'Setiap hidangan jadi lebih enak dengan sentuhan kami.',
      subContent: 'Jom terokai rangkaian sos kami — rasa keaslian yang dibuat dengan penuh kasih sayang.'
    },
    'III': {
      title: 'Inspirasi Masakan Harian Anda',
      subContent: 'Masak sedap dalam tiga langkah mudah! Dengan sos kami, setiap hidangan penuh dengan rasa rumah.'
    }
  }
}
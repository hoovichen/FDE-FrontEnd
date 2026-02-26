
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
      subContent: 'Full of crunch and flavour. A versatile sauce that pairs perfectly with stir-fries, dry noodles, or simply as a side condiment.',
      ctaLabel: 'Shop Now',
      shopLabel: 'https://www.lazada.com.my/products/pdp-i4772531076-s26897567604.html'
    },

    // ✅ Updated
    'II': {
      title: 'Flavour Series · New Drop',
      mainContent: 'Yellow Cap (Pumpkin) — Bolder Heat, Heavier Garlic.',
      subContent:
        'Built for those who want the chilli to show up clearly. Sweet first, garlic hits fast, then the heat rolls in with a clean chilli bite — not that “artificial burn”.',
      ctaLabel: 'Shop Now',
      shopLabel: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26912325714.html'
    },

    // ✅ Updated
    'III': {
      title: 'For Those Who Don’t Really Eat Spicy',
      mainContent: 'Red Cap (Winter Melon) — Light Heat, Clear Layers.',
      subContent:
        'A gentler chilli sauce that still tastes like a proper sambal. The heat appears, then exits quickly; sweetness and garlic come back again — clean, bright, and easy to enjoy.',
      ctaLabel: 'Shop Now',
      shopLabel: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26906175539.html'
    }
  },

  zh: {
    'I': {
      title: '香脆虾米辣',
      mainContent: '让家乡的醇厚滋味，走进每一个马来西亚人的日常餐桌',
      subContent:
        '脆感十足，香气浓郁，这是一瓶 “万能适配” 的酱料：炒热菜时加一勺，鲜香瞬间升级；拌凉面时拌一拌，风味即刻拉满；日常佐餐配一勺，简单饭菜也能吃得有滋有味，轻松满足不同吃法需求',
      ctaLabel: '去购买',
      shopLabel: 'https://www.lazada.com.my/products/pdp-i4772531076-s26897567604.html'
    },

    // ✅ Updated
    'II': {
      title: '风味系列 · 最新篇章',
      mainContent: '黄盖（南瓜）——更辣、更重蒜，但依然分得出层次。',
      subContent:
        '我们不是简单“加辣”。入口先有传统甜底，蒜味立刻冲上来，最后才是辣味完整释放；辣得明确，但更像辣椒本身的辣，不是工业辣素的“刺痛”。',
      ctaLabel: '去购买',
      shopLabel: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26912325714.html'
    },

    // ✅ Updated
    'III': {
      title: '给“不怎么吃辣”的人',
      mainContent: '红盖（冬瓜）——几乎不辣，但还是一款完整的辣椒酱。',
      subContent:
        '辣味会出现，但不会久留；甜与蒜会在辣味退去后再次浮现。更清透、更轻盈，适合想“沾一点辣椒酱味道”，又不想被辣压着的人。',
      ctaLabel: '去购买',
      shopLabel: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26906175539.html',
    }
  },

  bm: {
    'I': {
      title: 'Sambal Udang Rangup',
      mainContent: 'Membawa Rasa Kampung Halaman ke Setiap Meja Rakyat Malaysia',
      subContent:
        'Penuh dengan kerangupan dan rasa yang memikat. Sos serbaguna ini sesuai digandingkan dengan masakan goreng, mi kering, atau sekadar sebagai pencicah.',
      ctaLabel: 'Beli Sekarang',
      shopLabel: 'https://www.lazada.com.my/products/pdp-i4772531076-s26897567604.html'
    },

    // ✅ Updated
    'II': {
      title: 'Siri Flavour · Baru Keluar',
      mainContent: 'Yellow Cap (Labu) — Lagi Pedas, Lagi Bawang.',
      subContent:
        'Bukan setakat tambah cili. Masuk mulut ada manis tradisional dulu, lepas tu bawang putih “naik” cepat, baru pedas datang penuh. Pedasnya rasa cili sebenar — bukan pedas yang menyengat macam perisa tiruan.',
      ctaLabel: 'Beli Sekarang',
      shopLabel: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26912325714.html'
    },


    // ✅ Updated
    'III': {
      title: 'Untuk Yang Tak Berapa Makan Pedas',
      mainContent: 'Red Cap (Kundur/Winter Melon) — Pedas Ringan, Lapisan Jelas.',
      subContent:
        'Pedas ada, tapi cepat “hilang”. Lepas pedas reda, manis dan bawang timbul balik. Nampak lebih jernih, rasa lebih ringan — sesuai untuk yang nak cicah sambal tapi tak nak pedas lama-lama.',
      ctaLabel: 'Beli Sekarang',
      shopLabel: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26906175539.html'
    }
  }
}
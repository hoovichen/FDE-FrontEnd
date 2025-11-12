import type { LangCode } from '~/lib/products.data'

export interface ProductI18n {
  name: string
  summary?: string
}

export const PRODUCTS_I18N: Record<LangCode, Record<string, ProductI18n>> = {
  en: {
    'green-cap': {
      name: 'Pantai Remis Chili Sauce – Mild',
      summary: 'Mildly spicy with a balanced flavor and signature aroma.'
    },
    'garlic-sauce': {
      name: 'Pantai Remis Chili Sauce – Original',
      summary: 'Medium heat with rich garlic aroma — perfect for everyday meals.'
    },
    'extra-hot': {
      name: 'Pantai Remis Chili Sauce – Hot',
      summary: 'Made from premium chilies for strong, flavorful heat.'
    },
    'sky-pepper': {
      name: 'FDG\'s Sky Pepper Chili Sauce - Extra Hot',
      summary: 'Bright and fragrant flavor from sky peppers — appetizing and delicious.'
    },
    'ginger-garlic': {
      name: 'Ginger Garlic Paste',
      summary: 'A smooth blend of fresh ginger and garlic — warm, aromatic, and mildly spicy.'
    },
    'sambal-shrimp': {
      name: 'FDG\'s Sambal Shrimp Paste',
      summary: 'Authentic sambal with real dried shrimp — moderately spicy and full of umami.'
    },
    'cripy-anchovy': {
      name: 'Crispy Anchovy Chili',
      summary: 'Made with freshly fried anchovies and spicy sambal — crunchy and addictive.'
    },
    'cripy-prawn': {
      name: 'FDG\'s Crispy Shrimp Chili',
      summary: 'Crispy dried shrimp coated with flavorful sambal — perfect with rice or noodles.'
    },
  },

  zh: {
    'green-cap': {
      name: '火龍辣椒酱 · 青盖',
      summary: '辣度平衡，标志性香气。'
    },
    'garlic-sauce': {
      name: '火龍辣椒酱 · 红盖',
      summary: '蒜香浓郁，多场景适配。'
    },
    'extra-hot': {
      name: '火龍辣椒酱 · 黄盖',
      summary: '使用优质辣椒，辣度更强，风味浓郁。'
    },
    'sky-pepper': {
      name: '特制指天椒辣椒酱',
      summary: '鲜亮清香的辣椒风味，香气四溢。'
    },
    'ginger-garlic': {
      name: '生姜蒜蓉',
      summary: '融合姜与蒜的香气，温润中带微辣。'
    },
    'sambal-shrimp': {
      name: '叁巴虾酱',
      summary: '正宗叁巴辣椒酱，辣度适中，融合真实虾米香气，佐饭炒面皆宜。'
    },
    'cripy-anchovy': {
      name: '香脆银鱼仔',
      summary: '采用新鲜江鱼仔特制，口感酥脆，适合拌饭、炒菜，过瘾又香。'
    },
    'cripy-prawn': {
      name: '香脆虾米辣',
      summary: '采用新鲜虾米特制，香辣可口，适合搭配米饭或面食。'
    },
  },

  bm: {
    'green-cap': {
      name: 'Sos Cili Pantai Remis – Hijau',
      summary: 'Kepedasan ringan dengan rasa seimbang dan aroma tersendiri.'
    },
    'garlic-sauce': {
      name: 'Sos Cili Pantai Remis – Merah',
      summary: 'Rasa bawang putih yang kaya dan kepedasan sederhana — sesuai untuk hidangan harian.'
    },
    'extra-hot': {
      name: 'Sos Cili Pantai Remis – Kuning',
      summary: 'Diperbuat daripada cili berkualiti tinggi untuk rasa pedas yang kuat dan beraroma.'
    },
    'sky-pepper': {
      name: 'Sos Cili Padi',
      summary: 'Rasa cili yang segar dan wangi — membuka selera dan lazat.'
    },
    'ginger-garlic': {
      name: 'Pes Halia & Bawang Putih',
      summary: 'Gabungan halia dan bawang putih segar — rasa hangat, beraroma dan sedikit pedas.'
    },
    'sambal-shrimp': {
      name: 'Sambal Udang Kering',
      summary: 'Sambal tradisional dengan rasa udang sebenar — pedas sederhana dan penuh rasa umami.'
    },
    'cripy-anchovy': {
      name: 'Bilis Goreng Ragup Cili',
      summary: 'Ikan bilis goreng rangup dengan sambal pedas — rangup dan menyelerakan.'
    },
    'cripy-prawn': {
      name: 'Undang Kering Rangup Chili',
      summary: 'Udang kering rangup disalut sambal berperisa — sesuai dimakan dengan nasi atau mi.'
    },
  }
}

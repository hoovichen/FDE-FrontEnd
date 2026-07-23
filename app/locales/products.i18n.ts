import type { LangCode } from '~/lib/products.data'

export interface ProductI18n {
  name: string
  summary?: string
  description?: string
  highlights?: string[]
  servingSuggestions?: string[]
}

export const PRODUCTS_I18N: Record<LangCode, Record<string, ProductI18n>> = {
  en: {
    'green-cap': {
      name: 'Pantai Remis Chili Sauce – Mild',
      summary: 'Mildly spicy with a balanced flavor and signature aroma.',
      description: 'Taste an authentic local specialty from Pantai Remis. Crafted from a 15-year family recipe with zero artificial coloring, this freshly made chili sauce comes in three heat levels. The green lid is balanced with a medium kick for everyday meals.',
      highlights: [
        'A true Malaysian classic crafted from a 15-year family recipe',
        'Authentic local specialty from Pantai Remis, Malaysia',
        'No artificial colouring, freshly made',
        'Green Lid: balanced flavor with a medium kick'
      ]
    },
    'red-cap': {
      name: 'Pantai Remis Chili Sauce – Original',
      summary: 'Garlic infused with mild heat — perfect for everyday meals.',
      description: 'Taste an authentic local specialty from Pantai Remis. Crafted from a 15-year family recipe with zero artificial coloring, this freshly made chili sauce delivers a familiar garlic aroma and mild heat.',
      highlights: [
        'A true Malaysian classic crafted from a 15-year family recipe',
        'Authentic local specialty from Pantai Remis, Malaysia',
        'No artificial colouring, freshly made',
        'Red Lid: garlic infused with mild heat'
      ]
    },
    'yellow-cap': {
      name: 'Pantai Remis Chili Sauce – Hot',
      summary: 'Intense garlic with extra fiery heat.',
      description: 'Taste an authentic local specialty from Pantai Remis. Crafted from a 15-year family recipe with zero artificial coloring, this freshly made chili sauce is made for meals that need a stronger garlic punch and extra fiery heat.',
      highlights: [
        'A true Malaysian classic crafted from a 15-year family recipe',
        'Authentic local specialty from Pantai Remis, Malaysia',
        'No artificial colouring, freshly made',
        'Yellow Lid: intense garlic with extra fiery heat'
      ]
    },
    'sky-pepper': {
      name: 'FDG\'s Bird\'s Eye Chilli Sauce - Extra Hot',
      summary: 'Fresh bird’s eye chilli with a fiery kick and layered aroma.',
      description: 'Ignite your tastebuds with FDG’s Bird’s Eye Chilli Sauce. Made from freshly picked sky peppers, garlic and spices, this sauce packs a fiery kick with a smooth, multi-layered aroma. Crafted with natural ingredients and no artificial coloring.',
      highlights: [
        'Made from freshly picked sky pepper chillies',
        'Slow-cooked with garlic and spices for deep aroma',
        'Smooth, fiery heat with a hint of sweetness',
        'No artificial colouring, made with natural ingredients'
      ]
    },
    'ginger-garlic': {
      name: 'FDG\'s Ginger Garlic Paste',
      summary: 'A smooth blend of fresh ginger and garlic — warm, aromatic, and mildly spicy.',
      description: 'Say goodbye to chopping. FDG’s Ginger Garlic Paste combines fresh ginger and garlic in a balanced ratio, helping you release aromatic sizzle and deep flavor into stir-fries, steamed seafood, chicken rice and hotpot bases.',
      highlights: [
        'Perfect harmony of fresh ginger and garlic',
        'Ready to use with no chopping needed',
        'Useful for stir-fries, steamed fish, chicken rice and soup bases',
        'No animal fat and no artificial colouring'
      ],
      servingSuggestions: [
        'Stir-fries, meat and seafood',
        'Steamed fish, chicken and chicken rice',
        'Hotpot, soups and flavour base'
      ]
    },
    'sambal-shrimp': {
      name: 'FDG\'s Sambal Shrimp Paste',
      summary: 'Authentic sambal with real dried shrimp — moderately spicy and full of umami.',
      description: 'An absolute Malaysian pantry staple. FDG’s sambal is handcrafted with no artificial coloring. This versatile, non-spicy multi-use paste instantly boosts dishes with rich umami sweetness and a fragrant hint of lemongrass.',
      highlights: [
        'Authentic Malaysian flavor for everyday cooking',
        'Ready to eat and endlessly versatile',
        'Handcrafted with natural ingredients',
        'No animal fat and no artificial colouring'
      ],
      servingSuggestions: [
        'Stir-frying vegetables such as long beans and kangkung',
        'Flavour booster for Prawn Mee and Curry Laksa broths',
        'Fried rice and fried noodles'
      ]
    },
    'cripy-anchovy': {
      name: 'FDG\'s Crispy Anchovy Chilli',
      summary: 'Made with freshly fried anchovies and spicy sambal — crunchy and addictive.',
      description: 'Made from premium fresh anchovies, this chilli condiment offers a clean, ultra-crunchy bite without fishy aftertaste. Packed with calcium and protein, it is preservative-free and works as a topping, stir-fry booster or crunchy snack.',
      highlights: [
        'Made from premium fresh anchovies, clean and flavourful',
        'Packed with calcium and protein',
        'No preservatives and no artificial colouring',
        'Suitable as topping, stir-fry booster or snack'
      ],
      servingSuggestions: [
        'Porridge, rice and noodles',
        'Fried rice, stir-fries and salads',
        'Enjoy as a crunchy snack'
      ]
    },
    'cripy-prawn': {
      name: 'FDG\'s Crispy Prawn Chilli',
      summary: 'Crispy dried shrimp coated with flavorful sambal — perfect with rice or noodles.',
      description: 'Taste a Malaysian classic crafted from a 15-year family recipe. FDG’s Crispy Prawn Chilli is loaded with over 90% premium dried shrimp, offering an ultra-crispy, less oily punch of pure umami.',
      highlights: [
        'A Malaysian classic made from a 15-year family recipe',
        'Over 90% loaded with premium dried shrimp',
        'Extra crispy, less oily and rich in umami',
        'No preservatives and no artificial colouring'
      ],
      servingSuggestions: [
        'Rice and noodles topping',
        'Fried rice, fried noodles and stir-fried dishes'
      ]
    },
  },

  zh: {
    'green-cap': {
      name: '火龍辣椒酱 · 青盖',
      summary: '辣度平衡，标志性香气。',
      description: '源自霹雳班台的地方特色，传承15年家传秘方，新鲜制作、无人工色素。青盖为黄金比例与恰到好处的辣度，适合日常餐桌搭配。',
      highlights: [
        '15 年家传秘方，马来西亚经典风味',
        '源自霹雳班台地方特色',
        '无人工色素，新鲜制作',
        '青盖：黄金比例，恰到好处的辣'
      ]
    },
    'red-cap': {
      name: '火龍辣椒酱 · 红盖',
      summary: '灵魂蒜香，温和微辣。',
      description: '源自霹雳班台的地方特色，传承15年家传秘方，新鲜制作、无人工色素。红盖主打灵魂蒜香与温和微辣，即开即蘸，点亮日常餐食。',
      highlights: [
        '15 年家传秘方，马来西亚经典风味',
        '源自霹雳班台地方特色',
        '无人工色素，新鲜制作',
        '红盖：灵魂蒜香，温和微辣'
      ]
    },
    'yellow-cap': {
      name: '火龍辣椒酱 · 黄盖',
      summary: '浓郁大蒜，特辣加倍。',
      description: '源自霹雳班台的地方特色，传承15年家传秘方，新鲜制作、无人工色素。黄盖以浓郁蒜香与更强辣度为特色，适合喜欢重口味辣感的料理。',
      highlights: [
        '15 年家传秘方，马来西亚经典风味',
        '源自霹雳班台地方特色',
        '无人工色素，新鲜制作',
        '黄盖：浓郁大蒜，特辣加倍'
      ]
    },
    'sky-pepper': {
      name: '特制指天椒辣椒酱',
      summary: '鲜采指天椒，辣劲十足，香辣层次丰富。',
      description: '一勺激活味蕾。指天椒辣椒酱选用鲜采指天椒，将浓郁香辣层次发挥到极致。入口顺滑、辣劲十足，同时带有一抹微甜，天然食材、零人工色素。',
      highlights: [
        '选用新鲜指天椒，辣劲十足',
        '传统慢火熬制，香辣层次丰富',
        '香辣中带甜，不呛喉',
        '无人工色素，天然食材'
      ]
    },
    'ginger-garlic': {
      name: '生姜蒜蓉',
      summary: '融合姜与蒜的香气，温润中带微辣。',
      description: '免切免剁，开盖即烹。火龍黄金姜蒜蓉将生姜与大蒜比例融合，是爆香提味的厨房必备神器，适合炒菜、蒸鱼、火锅汤底和鸡饭。',
      highlights: [
        '生姜与蒜头黄金比例调配',
        '爆香提味，厨房必备',
        '即开即用，省时方便',
        '无动物油，无人工色素'
      ],
      servingSuggestions: [
        '炒菜、炒肉、炒海鲜',
        '清蒸鱼、白切鸡、鸡饭',
        '火锅、汤底、调味提香'
      ]
    },
    'sambal-shrimp': {
      name: '叁巴虾酱',
      summary: '正宗叁巴辣椒酱，香浓不辣，融合真实虾米香气。',
      description: '家家必备的道地大马风味。火龍参巴酱坚持手工炒制、无添加人造色素，主打香浓不辣，是炒菜、炒饭面、虾面和咖喱汤底的多功能酱料。',
      highlights: [
        '道地马来西亚风味，家家必备',
        '即开即用，料理百搭',
        '纯手工炒制，无人造色素',
        '无动物油，无人工色素'
      ],
      servingSuggestions: [
        '拌炒青菜、四季豆、空心菜',
        '烹煮虾面汤、咖喱汤提香',
        '炒面、炒饭'
      ]
    },
    'cripy-anchovy': {
      name: '香脆银鱼仔',
      summary: '精选上等新鲜银鱼仔，口感香脆、纯净无腥味。',
      description: '酥脆银鱼仔辣椒精选上等新鲜银鱼仔，口感香脆、纯净无腥味。富含钙质与蛋白质，且无添加防腐剂与色素，适合配粥、拌饭面、炒菜或直接当零食。',
      highlights: [
        '精选新鲜银鱼仔，香脆无腥',
        '富含钙质与蛋白质',
        '无防腐剂，无色素',
        '适合全家人的健康美味'
      ],
      servingSuggestions: [
        '配白粥、配饭、拌面',
        '炒饭、炒菜、沙拉配料',
        '直接当零食享用'
      ]
    },
    'cripy-prawn': {
      name: '香脆虾米辣',
      summary: '90%以上优质虾米，少油酥脆，鲜香下饭。',
      description: '传承15年家传秘方，正宗马来西亚风味。FDG香脆虾米酱含90%以上优质虾米，少油酥脆，鲜香浓郁，是下饭、捞面和炒菜的百搭美味。',
      highlights: [
        '马来西亚经典风味，15 年家传秘方',
        '90% 以上优质虾米，少油酥脆',
        '灵魂下饭酱，终极捞面神器',
        '无防腐剂，无人工色素'
      ],
      servingSuggestions: [
        '拌饭、拌面',
        '炒饭、炒面、炒菜'
      ]
    },
  },

  bm: {
    'green-cap': {
      name: 'Sos Cili Pantai Remis – Hijau',
      summary: 'Kepedasan ringan dengan rasa seimbang dan aroma tersendiri.'
    },
    'red-cap': {
      name: 'Sos Cili Pantai Remis – Merah',
      summary: 'Rasa bawang putih yang kaya dan kepedasan sederhana — sesuai untuk hidangan harian.'
    },
    'yellow-cap': {
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

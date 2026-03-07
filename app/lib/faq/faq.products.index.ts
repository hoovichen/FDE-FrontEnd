import type { LangCode } from '~/lib/faq/faq.types'

export interface ProductIndex {
  key: string
  name: Record<LangCode, string>
  aliases: string[]     // 三语别名（搜索用）
  heat?: 0|1|2|3|4|5
  tags: string[]        // 特性标签（shrimp, sambal, non-spicy, etc）
  url?: string
  url2?: string
  image?: string
}

/**
 * ✅ 这里 name/aliases/heat/tags 你只要维护一次，就能驱动智能推荐
 * 你现有 PRODUCTS_BASE 给了 url/url2/image，我们可以引用过来
 */
export const PRODUCT_INDEX: ProductIndex[] = [
  {
    key: 'green-cap',
    name: { zh: '青盖火龙辣椒酱', en: 'Green Cap Chili Sauce', bm: 'Sos Cili Green Cap' },
    aliases: ['青盖','green cap','green-cap','hijau','sos hijau','风味辣椒酱','chilli sauce'],
    heat: 3,
    tags: ['sauce', 'spicy-3', 'brand-story'],
  },
  {
    key: 'red-cap',
    name: { zh: '红盖火龙辣椒酱', en: 'Red Cap Chili Sauce', bm: 'Sos Cili Red Cap' },
    aliases: ['红盖','red cap','red-cap','merah','不辣','mild','tak pedas'],
    heat: 1,
    tags: ['sauce', 'mild', 'spicy-1', 'brand-story'],
  },
  {
    key: 'yellow-cap',
    name: { zh: '黄盖火龙辣椒酱', en: 'Yellow Cap Chili Sauce', bm: 'Sos Cili Yellow Cap' },
    aliases: ['黄盖','yellow cap','yellow-cap','kuning','extra hot','lebih pedas'],
    heat: 4,
    tags: ['sauce', 'spicy-4', 'brand-story'],
  },
  {
    key: 'sky-pepper',
    name: { zh: '指天椒辣椒酱（粉盖）', en: 'Bird’s Eye Chili Sauce (Pink)', bm: 'Sos Cili Padi (Pink)' },
    aliases: ['粉盖','pink','pink cap','指天椒','cili padi','bird eye','paling pedas','最辣'],
    heat: 5,
    tags: ['sauce', 'spicy-5', 'most-spicy'],
  },
  {
    key: 'ginger-garlic',
    name: { zh: '生姜蒜蓉', en: 'Ginger Garlic Paste', bm: 'Pes Halia Bawang Putih' },
    aliases: ['生姜蒜蓉','姜蒜','ginger garlic','halia bawang putih','tak pedas','不辣'],
    heat: 0,
    tags: ['paste', 'non-spicy', 'marinade'],
  },
  {
    key: 'sambal-shrimp',
    name: { zh: 'Sambal 虾酱', en: 'Sambal Shrimp Paste', bm: 'Sambal Udang' },
    aliases: ['sambal','虾酱','udang','sambal udang','不辣','non-spicy'],
    heat: 1,
    tags: ['sambal', 'shrimp', 'spicy-1'],
  },
  {
    key: 'cripy-anchovy',
    name: { zh: '香脆银鱼仔', en: 'Crispy Anchovy', bm: 'Crispy Ikan Bilis' },
    aliases: ['银鱼','银鱼仔','anchovy','ikan bilis','nasi lemak'],
    heat: 1,
    tags: ['crispy', 'fish', 'spicy-1', 'contains-msg', 'contains-sugar'],
  },
  {
    key: 'cripy-prawn',
    name: { zh: '香脆虾米辣', en: 'Crispy Shrimp Chili', bm: 'Crispy Udang Cili' },
    aliases: ['虾米辣','虾米','shrimp chili','udang','prawn','spicy shrimp'],
    heat: 3,
    tags: ['crispy', 'shrimp', 'spicy-3', 'contains-msg', 'contains-sugar'],
  },
]
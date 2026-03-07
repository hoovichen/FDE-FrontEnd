import type { LangCode } from '~/lib/faq/faq.types'

export interface BlogIndex {
  slug: string
  title: Record<LangCode, string>
  triggers: string[]
  relatedProducts: string[]  // product.key
}

export const BLOG_INDEX: BlogIndex[] = [
  {
    slug: 'green-cap-firedragon',
    title: {
      zh: '青盖火龙辣椒酱：风味思路的起点',
      en: 'Green Cap: The Starting Point of Our Flavor Design',
      bm: 'Green Cap: Permulaan Reka Bentuk Perisa Kami',
    },
    triggers: ['青盖','green cap','风味','brand','story','sauce'],
    relatedProducts: ['green-cap'],
  },
  {
    slug: 'yellow-cap-firedragon',
    title: {
      zh: '黄盖火龙辣椒酱：辣度之外的平衡',
      en: 'Yellow Cap: Balance Beyond Heat',
      bm: 'Yellow Cap: Keseimbangan Selain Pedas',
    },
    triggers: ['黄盖','yellow cap','辣度','balance','garlic'],
    relatedProducts: ['extra-hot'],
  },
  {
    slug: 'red-cap-firedragon',
    title: {
      zh: '红盖火龙辣椒酱：如何在“不辣”中保留层次',
      en: 'Red Cap: Layered Flavor Without Heat',
      bm: 'Red Cap: Perisa Berlapis Tanpa Pedas',
    },
    triggers: ['红盖','red cap','不辣','mild','tak pedas'],
    relatedProducts: ['garlic-sauce'],
  },
]
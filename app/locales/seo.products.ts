// locales/seo.products.ts
import type { LangCode } from '~/lib/products.data'

export interface ProductsPageI18n {
  title: string
  description: string
}

export const PRODUCTS_PAGE_TEXT: Record<LangCode, ProductsPageI18n> = {
  en: {
    title: 'Products — Handmade Chili Sauces from Pantai Remis',
    description:
      'Browse our signature chili sauces and condiments handmade in Pantai Remis, Malaysia: from mild to extra hot, including sambal, garlic paste and more.'
  },
  zh: {
    title: '产品一览 — 班台手作辣椒酱',
    description:
      '浏览我们的明星酱料与佐餐调味：从微辣到特辣，含叁巴、蒜蓉酱等多种口味，皆为马来西亚班台手工小批量制作。'
  },
  bm: {
    title: 'Produk — Sos Cili Buatan Tangan Pantai Remis',
    description:
      'Lihat rangkaian sos cili dan perisa buatan tangan kami dari Pantai Remis, Malaysia: daripada pedas ringan hingga sangat pedas, termasuk sambal, pes bawang putih dan banyak lagi.'
  }
}

import type { LangCode } from '~/lib/products.data'

export interface ProductsUiText {
  pageTitle: string
  pageDesc?: string
  all: string
  sort: {
    default: string
    nameAsc: string
    priceAsc: string
    priceDesc: string
  }
  viewDetail?: string
}

export const PRODUCTS_UI_TEXT: Record<LangCode, ProductsUiText> = {
  en: {
    pageTitle: 'Our Products',
    pageDesc: 'Explore our signature sauces.',
    all: 'All Products',
    sort: {
      default: 'Default',
      nameAsc: 'Name A → Z',
      priceAsc: 'Price: Low to High',
      priceDesc: 'Price: High to Low'
    },
    viewDetail: 'View Details'
  },
  zh: {
    pageTitle: '我们的产品',
    pageDesc: '探索我们的招牌酱料。',
    all: '全部产品',
    sort: {
      default: '默认',
      nameAsc: '名称 A → Z',
      priceAsc: '价格从低到高',
      priceDesc: '价格从高到低'
    },
    viewDetail: '查看详情'
  },
  bm: {
    pageTitle: 'Produk Kami',
    pageDesc: 'Terokai sos istimewa kami.',
    all: 'Semua Produk',
    sort: {
      default: 'Lalai',
      nameAsc: 'Nama A → Z',
      priceAsc: 'Harga: Rendah ke Tinggi',
      priceDesc: 'Harga: Tinggi ke Rendah'
    },
    viewDetail: 'Lihat Butiran'
  }
}

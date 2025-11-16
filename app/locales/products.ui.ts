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
  cta?: {
    shopNow: string
    onShopee: string
    onLazada?: string
    backToList: string
    soldViaPartners: string   // 给 B2B 的措辞
  }
  oldPackage?: string
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
    viewDetail: 'View Details',
    cta: {
      shopNow: 'Shop now',
      onShopee: 'Shop on Shopee',
      onLazada: 'Shop on Lazada',
      backToList: 'Back to products',
      soldViaPartners: 'Available via official retail partners'
    },
    oldPackage: 'Old Packaging'
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
    viewDetail: '查看详情',
    cta: {
      shopNow: '立即购买',
      onShopee: '前往 Shopee 购买',
      onLazada: '前往 Lazada 购买',
      backToList: '返回产品列表',
      soldViaPartners: '由官方零售合作伙伴提供'
    },
    oldPackage: '旧包装'
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
    viewDetail: 'Lihat Butiran',
    cta: {
      shopNow: 'Beli sekarang',
      onShopee: 'Beli di Shopee',
      onLazada: 'Beli di Lazada',
      backToList: 'Kembali ke produk',
      soldViaPartners: 'Dijual melalui rakan runcit rasmi',
    },
    oldPackage: 'Bungkusan Lama'
  }
}

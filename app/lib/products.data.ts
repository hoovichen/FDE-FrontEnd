// 三语类型（与你现有保持一致）
export type LangCode = 'zh' | 'en' | 'bm'

/** 不可翻译的基础字段 */
export interface ProductBase {
  key: string
  image: string                  // 建议使用 CDN URL
  imageOld?: string               // 旧版图片 URL（兼容旧站）
  url?: string                   // 外部商城链接（Shopee/Lazada/Shopify等）
  price?: number                 // 可选：建议零售价（数字，不带货币）
  categoryId?: number            // 可选：分类（将来用）
  subcategoryId?: number         // 可选：子分类（将来用）
  gallery?: string[]             // 可选：更多图片
  /** 首页是否展示 */
  featuredHome?: boolean          // 默认 false
  /** 首页展示排序（数字越小越靠前） */
  featuredOrder?: number
  /** 可扩展：通用标签 */
  tags?: string[]                 // 例如 ['popular', 'new', 'bestseller']
}

/** 仅存放不可翻译字段（name 等放到 i18n） */
export const PRODUCTS_BASE: ProductBase[] = [
  {
    key: 'green-cap',
    image: '/images/products/greencap.jpg',
    imageOld:'/images/products/old-products/greencap.png',
    url: undefined,
    price: 4,
    gallery: ['/images/products/greencap.jpg'],
  },
  {
    key: 'garlic-sauce',
    image: '/images/products/redcap.png',
    imageOld:'/images/products/old-products/redcap.jpg',
    price: 4,
    featuredHome: true,
    featuredOrder: 3
  },
  {
    key: 'extra-hot',
    image: '/images/products/yellowcap.png',
    imageOld:'/images/products/old-products/yellowcap.png',
    price: 4,
  },
  {
    key: 'sky-pepper',
    image: '/images/products/spe_chili.jpg',
    price: 9,
  },
  {
    key: 'ginger-garlic',
    image: '/images/products/suanrong.png',
    imageOld:'/images/products/old-products/suanrong.jpg',
    price: 17.8,
  },
  {
    key: 'sambal-shrimp',
    image: '/images/products/sambal.png',
    imageOld:'/images/products/old-products/sambal.jpg',
    price: 8,
    featuredHome: true,
    featuredOrder: 2
  },
  {
    key: 'cripy-anchovy',
    image: '/images/products/yinyu.jpg',
    price: 12,
  },
  {
    key: 'cripy-prawn',
    image: '/images/products/xiami.png',
    imageOld:'/images/products/old-products/xiami.jpg',
    price: 11,
    featuredHome: true,
    featuredOrder: 1
  },
]

/** 用于预渲染路由等 */
export const PRODUCT_KEYS = PRODUCTS_BASE.map(p => p.key)

// 三语类型（与你现有保持一致）
export type LangCode = 'zh' | 'en' | 'bm'

/** 不可翻译的基础字段 */
export interface ProductBase {
  key: string
  image: string                  // 建议使用 CDN URL
  url?: string                   // 外部商城链接（Shopee/Lazada/Shopify等）
  price?: number                 // 可选：建议零售价（数字，不带货币）
  categoryId?: number            // 可选：分类（将来用）
  subcategoryId?: number         // 可选：子分类（将来用）
  gallery?: string[]             // 可选：更多图片
}

/** 仅存放不可翻译字段（name 等放到 i18n） */
export const PRODUCTS_BASE: ProductBase[] = [
  {
    key: 'red-cap',
    image: '/images/products/redcap.png',
    url: undefined,
    price: 4,
    gallery: ['/images/products/redcap.png'],
  },
  {
    key: 'garlic-sauce',
    image: '/images/products/redcap.png',
    price: 4,
  },
  {
    key: 'extra-hot',
    image: '/images/products/redcap.png',
    price: 4,
  },
  {
    key: 'sky-pepper',
    image: '/images/products/redcap.png',
    price: 9,
  },
  {
    key: 'ginger-garlic',
    image: '/images/products/redcap.png',
    price: 17.8,
  },
  {
    key: 'sambal-shrimp',
    image: '/images/products/redcap.png',
    price: 8,
  },
  {
    key: 'cripy-anchovy',
    image: '/images/products/redcap.png',
    price: 12,
  },
{
    key: 'cripy-prawn',
    image: '/images/products/redcap.png',
    price: 11,
  },
]

/** 用于预渲染路由等 */
export const PRODUCT_KEYS = PRODUCTS_BASE.map(p => p.key)

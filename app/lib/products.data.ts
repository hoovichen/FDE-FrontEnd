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
    image: '/images/products/greencap.png',
    imageOld: '/images/products/old-products/greencap.png',
    url: 'https://shopee.com.my/%E2%AD%90%E7%81%AB%E9%BE%99(%E7%94%98%E6%96%87%E9%98%81)%E8%92%9C%E5%A4%B4%E8%BE%A3%E6%A4%92%E9%85%B1*FIRE-DRAGON~GARLIC-CHILI-SAUCE*-i.196672147.3189722290',
    price: 4,
    gallery: ['/images/products/greencap.png'],
  },
  {
    key: 'garlic-sauce',
    image: '/images/products/redcap.png',
    imageOld: '/images/products/old-products/redcap.jpg',
    url: 'https://shopee.com.my/%E2%AD%90%E7%81%AB%E9%BE%99(%E7%94%98%E6%96%87%E9%98%81)%E8%92%9C%E5%A4%B4%E8%BE%A3%E6%A4%92%E9%85%B1*FIRE-DRAGON~GARLIC-CHILI-SAUCE*-i.196672147.3189722290',
    price: 4,
  },
  {
    key: 'extra-hot',
    image: '/images/products/yellowcap.png',
    imageOld: '/images/products/old-products/yellowcap.png',
    url: 'https://shopee.com.my/%E2%AD%90%E7%81%AB%E9%BE%99(%E7%94%98%E6%96%87%E9%98%81)%E8%92%9C%E5%A4%B4%E8%BE%A3%E6%A4%92%E9%85%B1*FIRE-DRAGON~GARLIC-CHILI-SAUCE*-i.196672147.3189722290',
    price: 4,
  },
  {
    key: 'sky-pepper',
    image: '/images/products/cann.png',
    price: 9,
    url: 'https://shopee.com.my/Chili-Pepper-Sauce*%E5%A4%A9%E4%B9%8B%E9%AA%84%E5%AD%90*%E6%8C%87%E5%A4%A9%E6%A4%92%E8%BE%A3%E6%A4%92%E9%85%B1-Sos-Cili-Padi-i.196672147.5944608998',
    featuredHome: true,
    featuredOrder: 3
  },
  {
    key: 'ginger-garlic',
    image: '/images/products/suanrong.png',
    imageOld: '/images/products/old-products/suanrong.jpg',
    url: 'https://shopee.com.my/%E7%94%9F%E5%A7%9C%E8%92%9C%E8%93%89-*Ginger-Garlic-Paste-500gm*Halia-Bawang-Putih-i.196672147.10137959217',
    price: 17.8,
  },
  {
    key: 'sambal-shrimp',
    image: '/images/products/sambal.png',
    imageOld: '/images/products/old-products/sambal.jpg',
    url: 'https://shopee.com.my/Sambal-Udang-Kering-%E4%B8%89%E5%B7%B4%E8%99%BE%E7%B1%B3%E8%BE%A3%E6%A4%92-Dried-shrimp-paste-i.196672147.6644635930',
    price: 8,
    featuredHome: true,
    featuredOrder: 2
  },
  {
    key: 'cripy-anchovy',
    image: '/images/products/yinyu.png',
    url: 'https://shopee.com.my/Crispy-Anchovy-Chili%EF%BC%83%E9%A6%99%E8%84%86%E9%93%B6%E9%B1%BC%E4%BB%94-Bilis-Goreng-Ragup-Cili--i.196672147.6044641090',
    price: 12,
  },
  {
    key: 'cripy-prawn',
    image: '/images/products/shrimps.png',
    imageOld: '/images/products/old-products/xiami.jpg',
    url: 'https://shopee.com.my/Crispy-Prawn-Chili*%E9%A6%99%E8%84%86%E8%99%BE%E7%B1%B3%E8%BE%A3%E6%A4%92-*Cili-Udang-Kering-i.196672147.6444635197',
    price: 11,
    featuredHome: true,
    featuredOrder: 1
  },
]

/** 用于预渲染路由等 */
export const PRODUCT_KEYS = PRODUCTS_BASE.map(p => p.key)

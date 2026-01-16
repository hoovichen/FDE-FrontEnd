// 三语类型（与你现有保持一致）
export type LangCode = 'zh' | 'en' | 'bm'

/** 不可翻译的基础字段 */
export interface ProductBase {
  key: string
  image: string                  // 建议使用 CDN URL
  imageOld?: string               // 旧版图片 URL（兼容旧站）
  url?: string                   // 外部商城链接（Shopee/Lazada/Shopify等）
  url2?: string                  // 可选第二外部链接
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
    url: 'https://shopee.com.my/FGD\'s-Pantai-Remis-Chilli-Sauce-%E7%81%AB%E9%BE%8D%E8%BE%A3%E6%A4%92%E9%85%B1-%E4%B8%89%E7%A7%8D%E8%BE%A3%E5%BA%A6%E5%8F%AF%E9%80%89-Sos-Chilli-i.1708308739.56054449110',
    url2: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26912325715.html',
    price: 4,
    gallery: ['/images/products/greencap.png'],
  },
  {
    key: 'garlic-sauce',
    image: '/images/products/redcap.png',
    imageOld: '/images/products/old-products/redcap.jpg',
    url: 'https://shopee.com.my/FGD\'s-Pantai-Remis-Chilli-Sauce-%E7%81%AB%E9%BE%8D%E8%BE%A3%E6%A4%92%E9%85%B1-%E4%B8%89%E7%A7%8D%E8%BE%A3%E5%BA%A6%E5%8F%AF%E9%80%89-Sos-Chilli-i.1708308739.56054449110',
    url2: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26906175539.html',
    price: 4,
  },
  {
    key: 'extra-hot',
    image: '/images/products/yellowcap.png',
    imageOld: '/images/products/old-products/yellowcap.png',
    url: 'https://shopee.com.my/FGD\'s-Pantai-Remis-Chilli-Sauce-%E7%81%AB%E9%BE%8D%E8%BE%A3%E6%A4%92%E9%85%B1-%E4%B8%89%E7%A7%8D%E8%BE%A3%E5%BA%A6%E5%8F%AF%E9%80%89-Sos-Chilli-i.1708308739.56054449110',
    url2: 'https://www.lazada.com.my/products/fgds-pantai-remis-chilli-sauce-i4773014319-s26912325714.html',
    price: 4,
  },
  {
    key: 'sky-pepper',
    image: '/images/products/cann.png',
    price: 9,
    url: 'https://shopee.com.my/FDG\'s-Brid\'s-Eye-Chilli-Sauce-%E7%81%AB%E9%BE%8D%E6%8C%87%E5%A4%A9%E6%A4%92%E8%BE%A3%E6%A4%92%E9%85%B1-Sos-Chilli-Padi-Extra-Hot-i.1708308739.49854468963',
    url2: 'https://www.lazada.com.my/products/pdp-i4772897649-s26913424201.html',
    featuredHome: true,
    featuredOrder: 3
  },
  {
    key: 'ginger-garlic',
    image: '/images/products/suanrong.png',
    imageOld: '/images/products/old-products/suanrong.jpg',
    url: 'https://shopee.com.my/Ginger-Garlic-Paste-%E7%94%9F%E5%A7%9C%E8%92%9C%E8%93%89-%E7%82%92%E8%8F%9C%E8%92%B8%E9%B1%BC-Pes-Halia-Bawang-Putih-i.1708308739.45004463355',
    url2: 'https://www.lazada.com.my/products/pdp-i4772701971-s26907680134.html',
    price: 17.8,
  },
  {
    key: 'sambal-shrimp',
    image: '/images/products/sambal.png',
    imageOld: '/images/products/old-products/sambal.jpg',
    url: 'https://shopee.com.my/Sambal-Shrimp-Chili-Paste-%E5%8F%81%E5%B7%B4%E8%99%BE%E9%85%B1-%E4%B8%8D%E8%BE%A3Non-spicy-i.1708308739.57854432037',
    url2: 'https://www.lazada.com.my/products/pdp-i4772309686-s26898423098.html',
    price: 8,
    featuredHome: true,
    featuredOrder: 2
  },
  {
    key: 'cripy-anchovy',
    image: '/images/products/yinyu.png',
    url: 'https://shopee.com.my/Crispy-Anchovy-Chilli-%E9%A6%99%E8%84%86%E9%93%B6%E9%B1%BC%E4%BB%94-%E9%85%8DNasiLemak-i.1708308739.53504422683',
    url2: 'https://www.lazada.com.my/products/pdp-i4772699037-s26898098441.html',
    price: 12,
  },
  {
    key: 'cripy-prawn',
    image: '/images/products/shrimps.png',
    imageOld: '/images/products/old-products/xiami.jpg',
    url: 'https://shopee.com.my/Crispy-Shrimp-Chilli-%E9%A6%99%E8%84%86%E8%99%BE%E7%B1%B3%E8%BE%A3-90-%E8%99%BE%E7%B1%B3-%E9%A6%99%E8%84%86-i.1708308739.54904424387',
    url2: 'https://www.lazada.com.my/products/pdp-i4772531076-s26897567604.html',
    price: 11,
    featuredHome: true,
    featuredOrder: 1
  },
]

/** 用于预渲染路由等 */
export const PRODUCT_KEYS = PRODUCTS_BASE.map(p => p.key)

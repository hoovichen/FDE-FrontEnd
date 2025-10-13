export interface Product {
  key: string
  name: string
  image: string
  url?: string // 如果有外部商城链接
}

export const PRODUCTS: Product[] = [
  {
    key: 'red-cap',
    name: 'Classic Medium Kampung Koh Chili Sauce - Red Cap',
    image: '/images/products/redcap.png',
  },
  {
    key: 'garlic-sauce',
    name: 'Garlic Kampung Koh Chili Sauce',
    image: '/images/products/redcap.png',
  },
  {
    key: 'extra-hot',
    name: 'Extra Hot Kampung Koh Chili Sauce',
    image: '/images/products/redcap.png',
  },
]

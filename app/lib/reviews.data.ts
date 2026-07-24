export type ReviewSource = 'Shopee' | 'Lazada'

export interface MarketplaceReview {
  id: string
  productKey: string
  reviewer: string
  source: ReviewSource
  date: string
  rating: 5
  quote: string
  tags: string[]
}

export const MARKETPLACE_REVIEWS: MarketplaceReview[] = [
  {
    id: 'crispy-prawn-2026-07-07-delivery',
    productKey: 'cripy-prawn',
    reviewer: '*******',
    source: 'Shopee',
    date: '2026-07-07',
    rating: 5,
    quote: 'Received item in good condition within 2 days. Expiry is 02/2029.',
    tags: ['Fast delivery', 'Fresh stock']
  },
  {
    id: 'crispy-prawn-2026-07-07-repeat',
    productKey: 'cripy-prawn',
    reviewer: '*******',
    source: 'Shopee',
    date: '2026-07-07',
    rating: 5,
    quote: 'Second time purchase, order received in good condition, fast delivery, good value for money.',
    tags: ['Repeat purchase', 'Value']
  },
  {
    id: 'crispy-prawn-2026-07-04-packaging',
    productKey: 'cripy-prawn',
    reviewer: '*******',
    source: 'Shopee',
    date: '2026-07-04',
    rating: 5,
    quote: 'Seller fast delivery after order placed and received items all in good condition. Good packaging by seller to minimize damage during transition. Recommend to others.',
    tags: ['Packaging', 'Recommended']
  },
  {
    id: 'crispy-prawn-2026-07-03-service',
    productKey: 'cripy-prawn',
    reviewer: '*******',
    source: 'Shopee',
    date: '2026-07-03',
    rating: 5,
    quote: 'Barang diterima tepat waktu, sangat puas dengan barangnya, terima kasih penjual, terima kasih kurir, akan berbelanja di toko ini lagi di lain waktu.',
    tags: ['Satisfied buyer', 'Delivery']
  },
  {
    id: 'crispy-anchovy-2026-07-02-secure',
    productKey: 'cripy-anchovy',
    reviewer: '*******',
    source: 'Shopee',
    date: '2026-07-02',
    rating: 5,
    quote: 'Fast delivery in perfect condition. Parcel was packed nicely and securely. Item matched the description, highly recommended product. Will buy again from this seller.',
    tags: ['Secure packaging', 'Will buy again']
  },
  {
    id: 'crispy-anchovy-2026-07-11-aroma',
    productKey: 'cripy-anchovy',
    reviewer: '*******',
    source: 'Shopee',
    date: '2026-07-11',
    rating: 5,
    quote: 'Nice aroma taste and good packaging. Recommended!',
    tags: ['Aroma', 'Packaging']
  },
  {
    id: 'sambal-shrimp-2026-07-07-yummy',
    productKey: 'sambal-shrimp',
    reviewer: '*******',
    source: 'Shopee',
    date: '2026-07-07',
    rating: 5,
    quote: 'Taste: Yummy. Quality: Yes. Super tasty, will buy again.',
    tags: ['Taste', 'Will buy again']
  }
]

export const FEATURED_REVIEW_IDS = [
  'crispy-prawn-2026-07-07-repeat',
  'crispy-anchovy-2026-07-02-secure',
  'sambal-shrimp-2026-07-07-yummy'
]

export function getReviewsForProduct(productKey: string, limit?: number) {
  const reviews = MARKETPLACE_REVIEWS.filter(review => review.productKey === productKey)
  return typeof limit === 'number' ? reviews.slice(0, limit) : reviews
}

export function getFeaturedMarketplaceReviews() {
  return FEATURED_REVIEW_IDS
    .map(id => MARKETPLACE_REVIEWS.find(review => review.id === id))
    .filter(Boolean) as MarketplaceReview[]
}

export const REVIEWED_PRODUCT_KEYS = Array.from(new Set(MARKETPLACE_REVIEWS.map(review => review.productKey)))

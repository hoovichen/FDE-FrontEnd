export type FaqCategoryKey =
  | 'order'
  | 'shipping'
  | 'product'
  | 'storage'
  | 'safety'
  | 'product-use'

export const FAQ_CATEGORY_META = {
  en: {
    order: { label: 'Ordering & Purchase', desc: 'Where to buy, platform differences, wholesale.' },
    shipping: { label: 'Shipping & Delivery', desc: 'Coverage, dispatch time, couriers, tracking.' },
    product: { label: 'Product Information', desc: 'Spice level and key product notes.' },
    storage: { label: 'Storage & Shelf Life', desc: 'After opening, best storage practice.' },
    safety: { label: 'Safety & Certification', desc: 'Certifications, allergens, preservatives.' },
    'product-use': { label: 'Product Use & Pairing', desc: 'Serving ideas and pairing suggestions.' },
  },
  zh: {
    order: { label: '购买与下单', desc: '购买渠道、平台差异、批发合作。' },
    shipping: { label: '配送与邮寄', desc: '配送范围、发货时间、物流与追踪。' },
    product: { label: '产品信息', desc: '辣度区分与基础产品说明。' },
    storage: { label: '保存与保质期', desc: '开封后保存与最佳食用建议。' },
    safety: { label: '安全与认证', desc: '认证进度、成分与过敏原提示。' },
    'product-use': { label: '产品使用与搭配', desc: '推荐吃法与搭配建议。' },
  },
  bm: {
    order: { label: 'Pembelian & Tempahan', desc: 'Cara beli, beza platform, borong.' },
    shipping: { label: 'Penghantaran', desc: 'Kawasan, masa proses, kurier, tracking.' },
    product: { label: 'Maklumat Produk', desc: 'Tahap pedas dan nota ringkas produk.' },
    storage: { label: 'Penyimpanan', desc: 'Cara simpan selepas buka & kualiti terbaik.' },
    safety: { label: 'Keselamatan & Sijil', desc: 'Pensijilan, alergen & bahan.' },
    'product-use': { label: 'Penggunaan & Padanan', desc: 'Cadangan makan & padanan.' },
  },
} as const
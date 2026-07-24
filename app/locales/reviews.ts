import type { LangCode } from '~/lib/products.data'

export interface ReviewsUiText {
  title: string
  eyebrow: string
  lead: string
  sourceNote: string
  featuredTitle: string
  productTitle: string
  homeEyebrow: string
  homeTitle: string
  homeText: string
  homeLink: string
  detailTitle: string
  detailLink: string
  marketplace: string
  selected: string
  noCheckout: string
  byProduct: string
  viewProduct: string
  sourcePrefix: string
  verified: string
}

export const REVIEWS_UI: Record<LangCode, ReviewsUiText> = {
  en: {
    title: 'What customers say after ordering',
    eyebrow: 'Customer notes',
    lead: 'A small selection of marketplace feedback from buyers who ordered through our official retail channels.',
    sourceNote: 'These notes are manually selected from marketplace reviews and shown for context only. They are not used as site-owned review schema.',
    featuredTitle: 'Short notes worth keeping',
    productTitle: 'Notes by product',
    homeEyebrow: 'From marketplace buyers',
    homeTitle: 'A few words from people who already tried it.',
    homeText: 'We keep the homepage light, but these short notes help show what real buyers notice: delivery, packaging, taste, and repeat orders.',
    homeLink: 'Read customer notes',
    detailTitle: 'Marketplace notes',
    detailLink: 'Read more notes',
    marketplace: 'Marketplace review',
    selected: 'Selected written notes',
    noCheckout: 'Official marketplace checkout',
    byProduct: 'Grouped by product',
    viewProduct: 'View product',
    sourcePrefix: 'Source',
    verified: '5-star marketplace note'
  },
  zh: {
    title: '顾客下单后的真实反馈',
    eyebrow: '顾客记录',
    lead: '我们从电商平台精选出买家的反馈，让大家在购买前更快判断产品的口味、包装与配送体验。',
    sourceNote: '这些内容为人工精选的第三方平台反馈，仅作为参考展示，不写入官网自有评分结构化数据。',
    featuredTitle: '值得保留的短评',
    productTitle: '按产品查看反馈',
    homeEyebrow: '来自平台买家',
    homeTitle: '已经尝试过的顾客，留下了这些重点。',
    homeText: '首页保持轻量，但这些短评能呈现真实买家最关注的部分：配送、包装、味道，以及是否会回购。',
    homeLink: '查看顾客反馈',
    detailTitle: '平台买家反馈',
    detailLink: '查看更多反馈',
    marketplace: '平台评价',
    selected: '精选文字反馈',
    noCheckout: '官方平台下单',
    byProduct: '按产品整理',
    viewProduct: '查看产品',
    sourcePrefix: '来源',
    verified: '5 星平台反馈'
  },
  bm: {
    title: 'Apa kata pelanggan selepas membuat pesanan',
    eyebrow: 'Nota pelanggan',
    lead: 'Pilihan kecil maklum balas marketplace daripada pembeli yang membuat pesanan melalui saluran rasmi kami.',
    sourceNote: 'Nota ini dipilih secara manual daripada ulasan marketplace dan dipaparkan sebagai rujukan sahaja. Ia tidak digunakan sebagai skema ulasan milik laman web.',
    featuredTitle: 'Nota ringkas yang berguna',
    productTitle: 'Nota mengikut produk',
    homeEyebrow: 'Daripada pembeli marketplace',
    homeTitle: 'Beberapa kata daripada pelanggan yang sudah mencuba.',
    homeText: 'Halaman utama kekal ringan, tetapi nota pendek ini menunjukkan perkara yang pelanggan sebenar perhatikan: penghantaran, pembungkusan, rasa dan pembelian berulang.',
    homeLink: 'Baca nota pelanggan',
    detailTitle: 'Nota marketplace',
    detailLink: 'Baca nota lain',
    marketplace: 'Ulasan marketplace',
    selected: 'Nota bertulis terpilih',
    noCheckout: 'Checkout marketplace rasmi',
    byProduct: 'Disusun mengikut produk',
    viewProduct: 'Lihat produk',
    sourcePrefix: 'Sumber',
    verified: 'Nota marketplace 5 bintang'
  }
}

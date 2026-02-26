export type LangCode = 'zh' | 'en' | 'bm'

export interface FaqUiText {
  title: string
  desc: string

  placeholderExamples: string[]

  searchBtn: string
  openClassic: string
  hideClassic: string

  answerLabel: string
  thinking: string
  noResult: string
  suggestionIntro: string

  classicTitle: string
  classicDesc: string

  seoTitle: string
  seoDesc: string

  classicFilterPlaceholder?: string
  classicEmpty?: string
}

export const FAQ_UI: Record<LangCode, FaqUiText> = {
  en: {
    title: 'FAQ',
    desc: 'Search answers instantly — or browse the classic list.',

    placeholderExamples: [
      'Where can I buy?',
      'Do you ship to East Malaysia?',
      'How to store after opening?',
      'Is it spicy?',
    ],

    searchBtn: 'Search',
    openClassic: 'Open Classic',
    hideClassic: 'Hide Classic',

    answerLabel: 'Answer',
    thinking: 'Searching…',
    noResult: 'I’m not fully sure, but these might help:',
    suggestionIntro: 'Try keywords like shipping, storage, spicy, halal',

    classicTitle: 'Classic FAQ',
    classicDesc: 'Browse common questions.',

    seoTitle: 'FAQ – Fire Dragon',
    seoDesc: 'Find answers about shipping, storage, purchasing and product information.',
    classicFilterPlaceholder: 'Filter questions…',
    classicEmpty: 'No matching questions in this category.',
  },

  zh: {
    title: '常见问题',
    desc: '快速搜索答案，或浏览经典问题列表。',

    placeholderExamples: [
      '我在哪里可以购买？',
      '可以邮寄到东马吗？',
      '开封后怎么保存？',
      '辣吗？',
    ],

    searchBtn: '搜索',
    openClassic: '查看经典问题',
    hideClassic: '隐藏经典问题',

    answerLabel: '回答',
    thinking: '正在搜索中…',
    noResult: '未找到完全匹配的结果，但以下内容或许有帮助：',
    suggestionIntro: '可以尝试用“邮寄 / 保存 / 辣度 / halal”等关键词搜索',

    classicTitle: '经典问题',
    classicDesc: '浏览常见问题与答案。',

    seoTitle: '常见问题 – Fire Dragon',
    seoDesc: '了解关于邮寄、保存方式、购买渠道与产品信息的常见问题解答。',

    classicFilterPlaceholder: '筛选本分类问题…',
    classicEmpty: '该分类下暂无匹配问题。',
  },

  bm: {
    title: 'Soalan Lazim',
    desc: 'Cari jawapan dengan pantas atau lihat senarai klasik.',

    placeholderExamples: [
      'Boleh beli dekat mana?',
      'Ada pos ke Sabah Sarawak?',
      'Cara simpan selepas buka?',
      'Pedas ke?',
    ],

    searchBtn: 'Cari',
    openClassic: 'Lihat Soalan Klasik',
    hideClassic: 'Sembunyikan Soalan Klasik',

    answerLabel: 'Jawapan',
    thinking: 'Mencari…',
    noResult: 'Tiada padanan tepat, tetapi ini mungkin membantu:',
    suggestionIntro: 'Cuba kata kunci seperti penghantaran, simpan, pedas, halal',

    classicTitle: 'Soalan Klasik',
    classicDesc: 'Lihat soalan yang kerap ditanya.',

    seoTitle: 'Soalan Lazim – Fire Dragon',
    seoDesc: 'Dapatkan jawapan tentang penghantaran, penyimpanan, pembelian dan maklumat produk.',

    classicFilterPlaceholder: 'Tapis soalan…',
    classicEmpty: 'Tiada soalan sepadan dalam kategori ini.',
  },
}

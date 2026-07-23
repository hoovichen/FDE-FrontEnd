// locales/about.ts
export type LangCode = 'zh' | 'en' | 'bm'

export interface AboutI18nText {
  eyebrow: string
  title: string
  h2: string
  lead: string
  description: string
  ctaContact?: string
  ctaBlog: string
  originTitle: string
  originText: string
  timeline: Array<{
    year: string
    title: string
    text: string
  }>
  valuesTitle: string
  values: Array<{
    title: string
    text: string
  }>
  galleryTitle: string
}

export const ABOUT_TEXT: Record<LangCode, AboutI18nText> = {
  en: {
    eyebrow: 'About Fire Dragon',
    title: 'From Pantai Remis kitchens to Malaysian tables',
    h2: 'A local brand with a passion for real taste',
    lead:
      'Fire Dragon Enterprise grew from years of hands-on food work: cooking, supplying, testing, preserving, and learning what people actually return to eat.',
    description:
      'We are a homegrown Malaysian sauce and paste brand based in Pantai Remis, Perak. Our work is simple: keep local flavours practical, honest, and easy to bring into everyday meals.',
    ctaContact: 'Contact us',
    ctaBlog: 'Read our stories',
    originTitle: 'Built from food, distribution, and family kitchens',
    originText:
      'Before Fire Dragon became a product brand, the road had already passed through restaurants, grocery work, raw material distribution, and years of small-batch sauce making. Those experiences shaped how we think about taste, stability, storage, and the people who carry local food from one table to another.',
    timeline: [
      {
        year: 'Before 2010',
        title: 'Learning through food work',
        text: 'From Johor eateries to Pantai Remis distribution routes, the foundation was built through practical food experience.',
      },
      {
        year: '2010',
        title: 'Fire Dragon Enterprise was formed',
        text: 'The brand began with a simple goal: turn familiar hometown flavours into products people could share more widely.',
      },
      {
        year: 'Today',
        title: 'Everyday sauces with a local memory',
        text: 'Our sauces and pastes are made to support real meals: rice, noodles, stir-fries, snacks, and family cooking.',
      },
    ],
    valuesTitle: 'What we protect',
    values: [
      {
        title: 'Real local flavour',
        text: 'We want small-town Malaysian tastes to be documented, improved, and carried further.',
      },
      {
        title: 'Useful everyday products',
        text: 'A good sauce should not only taste strong once. It should be easy to return to again and again.',
      },
      {
        title: 'Clear information',
        text: 'Ingredients, storage, stockists, and product stories should be easier for customers to find.',
      },
    ],
    galleryTitle: 'Made close to home',
  },
  zh: {
    eyebrow: '关于 Fire Dragon',
    title: '从班台厨房，到马来西亚餐桌',
    h2: '来自霹雳州班台的特产，用心熬制充满回忆的味道',
    lead:
      'Fire Dragon Enterprise 的故事不是突然开始的。它来自多年真实的食物经验：开店、供应、尝试、保存，以及理解顾客真正会反复回购的味道。',
    description:
      '我们是一家来自马来西亚霹雳州班台的本地酱料与调味品牌。我们做的事情很简单：把地方风味做得更稳定、更实用，也更容易进入日常餐桌。',
    ctaContact: '联系我们',
    ctaBlog: '阅读品牌故事',
    originTitle: '从餐饮、分销与家庭厨房累积而来',
    originText:
      '在 Fire Dragon 成为一个产品品牌之前，这条路已经走过餐饮、杂货、原料供应与小批量酱料制作。那些经验影响了我们对味道、稳定性、保存方式，以及地方食品流通方式的理解。',
    timeline: [
      {
        year: '2010 以前',
        title: '在食物行业里摸索',
        text: '从柔佛的餐饮经验，到回到班台后的分销路线，品牌基础来自真实而实际的食物工作。',
      },
      {
        year: '2010',
        title: 'Fire Dragon Enterprise 成立',
        text: '品牌从一个简单目标开始：把熟悉的家乡味道做成可以被更多人分享的产品。',
      },
      {
        year: '现在',
        title: '带着地方记忆的日常酱料',
        text: '我们的酱料与调味品服务真实餐桌：米饭、面食、炒菜、小吃，以及家常料理。',
      },
    ],
    valuesTitle: '我们想保留的东西',
    values: [
      {
        title: '真实的地方风味',
        text: '我们希望小地方的马来西亚味道被记录、被改进，并被带到更远。',
      },
      {
        title: '日常可用的产品',
        text: '好的酱料不只是第一口强烈，而是让人愿意一再回到餐桌。',
      },
      {
        title: '更清楚的信息',
        text: '成分、保存、购买地点与产品故事，都应该让顾客更容易找到。',
      },
    ],
    galleryTitle: '靠近家乡制作',
  },
  bm: {
    eyebrow: 'Tentang Fire Dragon',
    title: 'Dari dapur Pantai Remis ke meja Malaysia',
    h2: 'Jenama tempatan dengan keghairahan terhadap rasa sebenar',
    lead:
      'Fire Dragon Enterprise lahir daripada pengalaman makanan yang sebenar: memasak, membekal, menguji, menyimpan, dan memahami rasa yang pelanggan akan cari semula.',
    description:
      'Kami ialah jenama sos dan pes tempatan dari Pantai Remis, Perak. Tujuan kami mudah: menjadikan rasa tempatan lebih praktikal, jujur, dan senang digunakan dalam masakan harian.',
    ctaContact: 'Hubungi kami',
    ctaBlog: 'Baca cerita kami',
    originTitle: 'Dibina daripada makanan, pengedaran, dan dapur keluarga',
    originText:
      'Sebelum Fire Dragon menjadi jenama produk, perjalanan ini sudah melalui restoran, kedai runcit, pengedaran bahan mentah, dan pembuatan sos kecil-kecilan. Semua pengalaman ini membentuk cara kami melihat rasa, kestabilan, penyimpanan, dan makanan tempatan.',
    timeline: [
      {
        year: 'Sebelum 2010',
        title: 'Belajar melalui kerja makanan',
        text: 'Dari kedai makan di Johor hingga laluan pengedaran di Pantai Remis, asasnya datang daripada pengalaman praktikal.',
      },
      {
        year: '2010',
        title: 'Fire Dragon Enterprise ditubuhkan',
        text: 'Jenama ini bermula dengan tujuan ringkas: membawa rasa kampung halaman kepada lebih ramai orang.',
      },
      {
        year: 'Hari ini',
        title: 'Sos harian dengan memori tempatan',
        text: 'Sos dan pes kami dibuat untuk hidangan sebenar: nasi, mi, tumisan, snek, dan masakan keluarga.',
      },
    ],
    valuesTitle: 'Apa yang kami jaga',
    values: [
      {
        title: 'Rasa tempatan sebenar',
        text: 'Kami mahu rasa bandar kecil Malaysia direkod, diperbaiki, dan dibawa lebih jauh.',
      },
      {
        title: 'Produk harian yang berguna',
        text: 'Sos yang baik bukan sekadar kuat pada suapan pertama. Ia perlu mudah dinikmati berulang kali.',
      },
      {
        title: 'Maklumat yang jelas',
        text: 'Bahan, penyimpanan, lokasi stokis, dan cerita produk patut mudah dicari pelanggan.',
      },
    ],
    galleryTitle: 'Dibuat dekat dengan rumah',
  }
}

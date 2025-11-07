// locales/about.ts
export type LangCode = 'zh' | 'en' | 'bm'

export interface AboutI18nText {
  title: string        // 页面主标题
  h2: string           // 二级标题
  description: string  // 正文
  ctaContact?: string  // 可选：联系按钮
}

export const ABOUT_TEXT: Record<LangCode, AboutI18nText> = {
  en: {
    title: 'Our Story',
    h2: 'A local brand with a passion for real taste',
    description:
      'Fire Dragon Enterprise is a Malaysian homegrown brand dedicated to sharing the true taste of home. Using real, locally sourced ingredients and time-honoured recipes, we craft sauces that bring warmth and flavour to every meal. From family kitchens to busy tables, our goal is simple — to make everyday cooking a little easier, and a lot more delicious.',
    ctaContact: 'Contact Us'
  },
  zh: {
    title: '我们的故事',
    h2: '来自霹雳州班台的特产，用心熬制充满回忆的味道',
    description:
      'Fire Dragon Enterprise（火龙企业） 是一家在霹雳州班台的特产品牌，致力于把充满回忆的味道带到更多人的餐桌。我们坚持选用本地食材与自研多年的工艺配方，并用心熬制每一瓶酱料，促使日常餐迸发出更多温度和滋味。无论是忙碌的厨房，还是家里的饭桌，我们的目标很简单——让做饭变得更轻松，也更好吃。',
    ctaContact: '联系我们'
  },
  bm: {
    title: 'Kisah Kami',
    h2: 'Jenama tempatan dengan keghairahan terhadap rasa sebenar',
    description:
      'Fire Dragon Enterprise ialah jenama tempatan Malaysia yang komited untuk berkongsi citarasa sebenar kampung halaman. Dengan menggunakan bahan-bahan tempatan yang segar serta resipi tradisional turun-temurun, kami menghasilkan sos yang membawa kehangatan dan keenakan dalam setiap hidangan. Dari dapur keluarga hingga ke meja makan, matlamat kami mudah — menjadikan masakan harian lebih senang, dan jauh lebih sedap.',
    ctaContact: 'Hubungi Kami'
  }
}

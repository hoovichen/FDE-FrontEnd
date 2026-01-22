// locales/footer/footer.ui.ts
export type LangCode = 'zh' | 'en' | 'bm'

export interface FooterUiText {
  infoTitle: string
  socialTitle: string
  links: {
    blog: string
    stockists: string
    faq: string
    privacy: string
    terms: string
  }
  comingSoon: string
  copyright: string
}

export const FOOTER_UI: Record<LangCode, FooterUiText> = {
  zh: {
    infoTitle: '信息',
    socialTitle: '关注我们',
    links: {
      blog: '博客',
      stockists: '线下门店',
      faq: '常见问题',
      privacy: '隐私政策',
      terms: '条款与条件',
    },
    comingSoon: '（筹备中）',
    copyright: '版权所有 © 2026 FIRE DRAGON ENTERPRISE',
  },
  en: {
    infoTitle: 'INFO',
    socialTitle: 'STALK US',
    links: {
      blog: 'BLOG',
      stockists: 'STOCKISTS',
      faq: 'FAQ',
      privacy: 'PRIVACY POLICY',
      terms: 'TERMS & CONDITIONS',
    },
    comingSoon: '(Coming soon)',
    copyright: 'COPYRIGHT © 2026 FIRE DRAGON ENTERPRISE',
  },
  bm: {
    infoTitle: 'INFO',
    socialTitle: 'IKUT KAMI',
    links: {
      blog: 'BLOG',
      stockists: 'KEDAI / STOCKISTS',
      faq: 'FAQ',
      privacy: 'POLISI PRIVASI',
      terms: 'TERMA & SYARAT',
    },
    comingSoon: '(Akan datang)',
    copyright: 'HAK CIPTA © 2026 FIRE DRAGON ENTERPRISE',
  },
}

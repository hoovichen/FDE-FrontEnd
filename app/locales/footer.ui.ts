// locales/footer/footer.ui.ts
export type LangCode = 'zh' | 'en' | 'bm'

export interface FooterUiText {
  infoTitle: string
  socialTitle: string
  links: {
    blog: string
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
      faq: '常见问题',
      privacy: '隐私政策',
      terms: '条款与条件',
    },
    comingSoon: '（筹备中）',
    copyright: '版权所有 © 2025 FIRE DRAGON ENTERPRISE',
  },
  en: {
    infoTitle: 'INFO',
    socialTitle: 'STALK US',
    links: {
      blog: 'BLOG',
      faq: 'FAQ',
      privacy: 'PRIVACY POLICY',
      terms: 'TERMS & CONDITIONS',
    },
    comingSoon: '(Coming soon)',
    copyright: 'COPYRIGHT © 2025 FIRE DRAGON ENTERPRISE',
  },
  bm: {
    infoTitle: 'INFO',
    socialTitle: 'IKUT KAMI',
    links: {
      blog: 'BLOG',
      faq: 'FAQ',
      privacy: 'POLISI PRIVASI',
      terms: 'TERMA & SYARAT',
    },
    comingSoon: '(Akan datang)',
    copyright: 'HAK CIPTA © 2025 FIRE DRAGON ENTERPRISE',
  },
}

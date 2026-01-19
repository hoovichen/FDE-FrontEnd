export type LangCode = 'zh' | 'en' | 'bm'

export interface BlogUiText {
  title: string
  desc: string
  emptyTitle: string
  emptyDesc: string
  readMore: string
  back: string
}

export const BLOG_UI: Record<LangCode, BlogUiText> = {
  zh: {
    title: '博客',
    desc: '记录我们的味道、做法与最新消息。',
    emptyTitle: '内容准备中',
    emptyDesc: '我们正在整理文章，敬请期待～',
    readMore: '阅读全文',
    back: '返回博客'
  },
  en: {
    title: 'Blog',
    desc: 'Stories, recipes, and updates from Fire Dragon.',
    emptyTitle: 'Coming soon',
    emptyDesc: 'We’re preparing new posts. Stay tuned!',
    readMore: 'Read more',
    back: 'Back to Blog'
  },
  bm: {
    title: 'Blog',
    desc: 'Kisah, resipi dan berita terbaru dari Fire Dragon.',
    emptyTitle: 'Akan datang',
    emptyDesc: 'Kami sedang sediakan artikel baharu. Nantikan ya!',
    readMore: 'Baca lagi',
    back: 'Kembali ke Blog'
  }
}

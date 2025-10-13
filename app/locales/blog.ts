export type LangCode = 'zh' | 'en' | 'bm'

export interface BlogsI18nText {
  title: string
  desc: string
  more: string
}

export const BLOGS_TEXT: Record<LangCode, BlogsI18nText> = {
  en: {
    title: 'Discover the Stories',
    desc: 'Explore cooking inspiration, food news, and the rich traditions behind authentic Malaysian & Asian flavors with Fire Dragon',
    more: 'View All Cooking Stories '
  },
  zh: {
    title: '探寻风味故事',
    desc: '与我们一同发掘烹饪灵感、新鲜美食资讯，以及正宗马来西亚与亚洲风味承载的深厚文化传统',
    more: '更多美食故事'
  },
  bm: {
    title: 'Terokai Cerita Kami',
    desc: 'Terokai inspirasi masakan, berita makanan, dan warisan tradisi di sebalik rasa asli Malaysia & Asia bersama Fire Dragon.',
    more: 'Lihat Semua Cerita Masakan'
  }
}

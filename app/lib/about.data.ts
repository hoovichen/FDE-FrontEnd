// lib/about.data.ts
export interface AboutBase {
  heroImage: string            // 顶部横幅图（1200x630 或 1600x900）
  gallery: string[]            // 页面内穿插展示的配图
}

export const ABOUT_BASE: AboutBase = {
  heroImage: '/images/about/hero.jpg',
  gallery: [
    '/images/about/food1.jpeg',
    '/images/about/food2.jpeg',
    '/images/about/food3.jpeg',

  ]
}

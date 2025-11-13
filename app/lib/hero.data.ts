// app/lib/hero.data.ts
// 把“每张卡片的文案、图片、布局、CTA 目标”配成可维护的表。以后内容只改这儿就能换图换文案。
export type HeroAlign = 'text-left' | 'text-right'

export interface HeroSlideBase {
  key: 'I' | 'II' | 'III'
  image: string
  align: HeroAlign
  ratio?: [number, number]
  shopCta?: { url: string }                  // 文案放到翻译里
}

// 仅结构/图片/比例/目标
export const HERO_SLIDES_BASE: HeroSlideBase[] = [
  { key: 'I',      image: '/images/hero-recommend.jpg',            align: 'text-left',  ratio: [30, 70] },
  { key: 'II', image: '/images/hero1.jpg',           align: 'text-right', ratio: [40, 60]},
  { key: 'III',     image: '/images/hero3.jpg', align: 'text-left',  ratio: [45, 55] },
]


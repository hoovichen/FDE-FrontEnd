// app/lib/hero.data.ts
// 把“每张卡片的文案、图片、布局、CTA 目标”配成可维护的表。以后内容同学只改这儿就能换图换文案。
export type HeroAlign = 'text-left' | 'text-right'

export interface HeroSlideBase {
  key: 'slogan' | 'top-product' | 'recipes'
  image: string
  align: HeroAlign
  ratio?: [number, number]
  shopCta?: { url: string }                  // 文案放到翻译里
}

// 仅结构/图片/比例/目标
export const HERO_SLIDES_BASE: HeroSlideBase[] = [
  { key: 'slogan',      image: '/images/hero.jpg',            align: 'text-left',  ratio: [30, 70] },
  { key: 'top-product', image: '/images/hero1.jpg',           align: 'text-right', ratio: [40, 60]},
  { key: 'recipes',     image: '/images/interlude_halloween.png', align: 'text-left',  ratio: [45, 55] },
]


export type SocialKey = 'facebook' | 'instagram' | 'tiktok' | 'xiaohongshu' | 'whatsapp' | 'phone'

export interface SocialLink {
  key: SocialKey
  href: string
  icon: string   // 你的 /public/*.ico 或将来换 SVG 名称
  order?: number
}

export const FOOTER_SOCIALS: SocialLink[] = [
  { key: 'facebook',   href: 'https://facebook.com/yourpage',  icon: '/facebook.ico',  order: 1 },
  { key: 'instagram',  href: 'https://instagram.com/firedragonmy', icon: '/ins.ico',       order: 2 },
  { key: 'tiktok',     href: 'https://tiktok.com/@hot.and.hot24',   icon: '/tiktok.ico',    order: 3 },
  { key: 'xiaohongshu',href: 'https://xhslink.com/m/2eIo9Wk4Q1Z', icon: '/xhs.png', order: 4 },
  // 如需在页脚也放电话/WhatsApp，开启：
  { key: 'whatsapp', href: 'https://wa.me/60189501638', icon: '/whatsapp.ico', order: 5 },
  { key: 'phone',    href: 'tel:+60189501638', icon: '/phone-call.png', order: 6 },
]

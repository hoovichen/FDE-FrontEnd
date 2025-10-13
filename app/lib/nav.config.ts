// app/lib/nav.config.ts
export type NavKey = 'home' | 'recipes' | 'products' | 'about' | 'contact'

export interface NavItemDef {
  key: NavKey
  to: string            // 路由路径
  side: 'left' | 'right'
}

export const NAV_ITEMS: NavItemDef[] = [
  // “LOGO居中，两侧各一部分”：
  { key: 'recipes',  to: '/recipes',  side: 'left'  },
  { key: 'products', to: '/products', side: 'left'  },
  // 中间是 LOGO
  { key: 'about',    to: '/about',    side: 'right' },
  { key: 'contact',  to: '/contact',  side: 'right' },
]

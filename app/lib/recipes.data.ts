export interface RecipeCard {
  key: 'left' | 'top' | 'bottom'
  image: string      // public 下的路径，以 / 开头
  to: string         // 先跳到 /recipes（以后换成具体 blog 路由）
  alt?: string
}

export const RECIPES_CARDS: RecipeCard[] = [
  { key: 'left',   image: '/images/recipes/left.jpg',   to: '/recipes', alt: 'noodles with sauce' },
  { key: 'top',    image: '/images/recipes/top.jpg',    to: '/recipes', alt: 'omelette rice' },
  { key: 'bottom', image: '/images/recipes/bottom.jpg', to: '/recipes', alt: 'crispy prawns' },
]

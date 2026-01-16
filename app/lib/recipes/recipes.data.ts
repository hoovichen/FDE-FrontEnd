import type { RecipeBase } from './recipes.types'

export const RECIPES_BASE: RecipeBase[] = [
  {
    slug: 'okra-with-sambal',
    thumbnail: '/images/recipes/OkraWithSambal.jpg',
    youtubeId: 'wry_5HKJrRM',
    tags: ['sambal'],
    featuredHome: true,
    featuredOrder: 1
  },
  {
    slug: 'roast-pork-belly',
    thumbnail: '/images/recipes/RoastPorkBelly.jpg',
    tags: ['Sauce Chilli'],
    featuredHome: true,
    featuredOrder: 2
  },
  {
    slug: 'mee-goreng',
    thumbnail: '/images/recipes/MeeGoreng.jpg',
    tags: ['Sauce Chilli'],
    youtubeId: 'UvSyw5tkMRk',
    featuredHome: true,
    featuredOrder: 3
  }
]

export const RECIPE_SLUGS = RECIPES_BASE.map(r => r.slug)

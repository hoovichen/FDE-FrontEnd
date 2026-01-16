import { RECIPES_BASE } from './recipes.data'
import { RECIPES_CONTENT } from '~/locales/recipes/recipes.content'
import type { LangCode } from './recipes.types'

export function getAllRecipes(lang: LangCode) {
  return RECIPES_BASE.map(base => ({
    ...base,
    ...(RECIPES_CONTENT[lang]?.[base.slug] ?? RECIPES_CONTENT.en[base.slug])
  }))
}

export function getRecipeBySlug(slug: string, lang: LangCode) {
  const base = RECIPES_BASE.find(r => r.slug === slug)
  if (!base) return null

  const content =
    RECIPES_CONTENT[lang]?.[slug] ??
    RECIPES_CONTENT.en?.[slug] ??
    null

  // 即使 content 不存在，也要返回 base
  return {
    ...base,
    ...(content ?? {
      title: slug.replace(/-/g, ' '),
      summary: ''
    })
  }
}

export function getHomeFeaturedRecipes(lang: LangCode, limit = 3) {
  const featured = RECIPES_BASE
    .filter(r => r.featuredHome)
    .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
    .slice(0, limit)

  return featured.map(base => ({
    ...base,
    ...(RECIPES_CONTENT[lang]?.[base.slug] ?? RECIPES_CONTENT.en[base.slug])
  }))
}

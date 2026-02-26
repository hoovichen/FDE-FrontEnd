import type { FaqItem, FaqCategoryKey } from './faq.types'

export const FAQ_CATEGORY_ORDER: FaqCategoryKey[] = [
  'order',
  'shipping',
  'storage',
  'safety',
  'product',
  'product-use',
]

export function normalizeText(s: string): string {
  return (s || '').toLowerCase().replace(/\s+/g, ' ').trim()
}

export function groupFaqByCategory(items: FaqItem[]) {
  const map = new Map<FaqCategoryKey, FaqItem[]>()
  for (const c of FAQ_CATEGORY_ORDER) map.set(c, [])

  for (const it of items) {
    const arr = map.get(it.category) || []
    arr.push(it)
    map.set(it.category, arr)
  }

  return FAQ_CATEGORY_ORDER
    .map((c) => ({ key: c, items: map.get(c) || [] }))
    .filter((g) => g.items.length > 0)
}

export function filterFaqInCategory(
  query: string,
  items: FaqItem[],
  mode: 'q_keywords' | 'q_keywords_a' = 'q_keywords'
): FaqItem[] {
  const q = normalizeText(query)
  if (!q) return items

  return items.filter((it) => {
    const fields =
      mode === 'q_keywords_a'
        ? [it.q, it.a, ...(it.keywords || [])]
        : [it.q, ...(it.keywords || [])]

    const hay = normalizeText(fields.join(' '))
    return hay.includes(q)
  })
}
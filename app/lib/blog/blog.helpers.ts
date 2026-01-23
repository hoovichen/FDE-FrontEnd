// lib/blog/blog.helpers.ts
export type BlogSort = 'latest' | 'oldest' | 'featured'

export function sortBlogs(list: any[], sort: BlogSort) {
  const items = [...list]

  if (sort === 'oldest') {
    return items.sort((a, b) => String(a.date).localeCompare(String(b.date)))
  }

  // featured：你以后可以在 frontmatter 加 featured: true
  if (sort === 'featured') {
    return items.sort((a, b) => {
      const fa = a.featured ? 1 : 0
      const fb = b.featured ? 1 : 0
      if (fa !== fb) return fb - fa
      return String(b.date).localeCompare(String(a.date))
    })
  }

  // 默认 latest
  return items.sort((a, b) => String(b.date).localeCompare(String(a.date)))
}

export function filterByTag(list: any[], tag: string | null) {
  if (!tag) return list
  return list.filter(p => Array.isArray(p.tags) && p.tags.includes(tag))
}

export function collectAllTags(list: any[]) {
  const set = new Set<string>()
  list.forEach(p => p.tags?.forEach((t: string) => set.add(t)))
  return Array.from(set).sort()
}

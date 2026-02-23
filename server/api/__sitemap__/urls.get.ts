export default defineEventHandler(async () => {
  const assets = useStorage('assets:server')

  const langs = ['zh', 'en', 'bm'] as const

  // key: slug, value: Set<lang>
  const slugLangMap = new Map<string, Set<(typeof langs)[number]>>()

  // 1) 优先读 manifest：content/blog/manifest.xx.json
  for (const lang of langs) {
    const raw = await assets.getItemRaw<Buffer>(`content/blog/manifest.${lang}.json`)
    if (!raw) continue

    const manifest = JSON.parse(Buffer.from(raw).toString('utf-8')) as { slugs: string[] }

    for (const slug of manifest.slugs || []) {
      if (!slugLangMap.has(slug)) slugLangMap.set(slug, new Set())
      slugLangMap.get(slug)!.add(lang)
    }
  }

  // 2) fallback 扫 md：content/blog/<lang>/<slug>.md
  if (slugLangMap.size === 0) {
    const keys = await assets.getKeys()

    for (const k of keys) {
      const m = k.match(/^content\/blog\/(zh|en|bm)\/(.+)\.md$/)
      if (!m) continue

      const lang = m[1] as (typeof langs)[number]
      const slug = m[2]

      if (!slugLangMap.has(slug)) slugLangMap.set(slug, new Set())
      slugLangMap.get(slug)!.add(lang)
    }
  }

  // 3) 输出每个语言版本的 URL（关键）
  const out: Array<{ loc: string; changefreq: string; priority: number }> = []

  for (const [slug, langSet] of slugLangMap.entries()) {
    for (const lang of langSet) {
      out.push({
        loc: `/blog/${lang}/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
      })
    }
  }

  return out
})

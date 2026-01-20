export default defineEventHandler(async () => {
  const assets = useStorage('assets:server')

  const langs = ['zh', 'en', 'bm'] as const
  const slugSet = new Set<string>()

  // 1) 优先读 manifest：content/blog/manifest.xx.json
  for (const lang of langs) {
    const raw = await assets.getItemRaw<Buffer>(`content/blog/manifest.${lang}.json`)
    if (!raw) continue
    const manifest = JSON.parse(Buffer.from(raw).toString('utf-8')) as { slugs: string[] }
    for (const slug of manifest.slugs || []) slugSet.add(slug)
  }

  // 2) 如果 manifest 全部读不到，就 fallback 扫 md：content/blog/<lang>/<slug>.md
  if (slugSet.size === 0) {
    const keys = await assets.getKeys()
    for (const k of keys) {
      if (
        (k.startsWith('content/blog/zh/') || k.startsWith('content/blog/en/') || k.startsWith('content/blog/bm/')) &&
        k.endsWith('.md')
      ) {
        const slug = k
          .replace(/^content\/blog\/(zh|en|bm)\//, '')
          .replace(/\.md$/, '')
        if (slug) slugSet.add(slug)
      }
    }
  }

  return Array.from(slugSet).map((slug) => ({
    loc: `/blog/${slug}`,
    changefreq: 'monthly',
    priority: 0.6,
  }))
})

export default defineEventHandler(async () => {
  const assets = useStorage('assets:server')

  const langs = ['zh', 'en', 'bm'] as const
  type Lang = typeof langs[number]

  // key: slug, value: Set<lang>
  const slugLangMap = new Map<string, Set<Lang>>()

  // 1️⃣ 读取 manifest
  for (const lang of langs) {
    const raw = await assets.getItemRaw<Buffer>(`content/blog/manifest.${lang}.json`)
    if (!raw) continue

    const manifest = JSON.parse(Buffer.from(raw).toString('utf-8')) as {
      slugs?: string[]
    }

    for (const slug of manifest.slugs ?? []) {
      if (!slug) continue

      if (!slugLangMap.has(slug)) {
        slugLangMap.set(slug, new Set())
      }

      slugLangMap.get(slug)!.add(lang)
    }
  }

  // 2️⃣ fallback 扫描 md 文件
  if (slugLangMap.size === 0) {
    const keys = await assets.getKeys()

    for (const k of keys) {
      const match = k.match(/^content\/blog\/(zh|en|bm)\/(.+)\.md$/)
      if (!match) continue

      const lang = match[1] as Lang | undefined
      const slug = match[2]

      if (!lang || !slug) continue

      if (!slugLangMap.has(slug)) {
        slugLangMap.set(slug, new Set())
      }

      slugLangMap.get(slug)!.add(lang)
    }
  }

  // 3️⃣ 输出正确语言路径
  const result: Array<{
    loc: string
    changefreq: string
    priority: number
  }> = []

  for (const [slug, langSet] of slugLangMap.entries()) {
    for (const lang of langSet) {
      result.push({
        loc: `/blog/${lang}/${slug}`,
        changefreq: 'weekly',
        priority: 0.6
      })
    }
  }

  return result
})

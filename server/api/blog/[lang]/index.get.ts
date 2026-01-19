import matter from 'gray-matter'
import type { LangCode, BlogListItem } from '~/lib/blog/blog.types'

async function readTextFromAssets(key: string) {
  const assets = useStorage('assets:server')
  const buf = await assets.getItemRaw<Buffer>(key)
  if (!buf) return null
  return Buffer.from(buf).toString('utf-8')
}

async function readManifest(lang: LangCode) {
  // key 对应：server/assets/content/blog/manifest.xx.json
  const raw = await readTextFromAssets(`content/blog/manifest.${lang}.json`)
  if (!raw) return null
  return JSON.parse(raw) as { slugs: string[] }
}

export default defineEventHandler(async (event) => {
  const lang = (getRouterParam(event, 'lang') || 'en') as LangCode

  // 先读对应语言 manifest，失败再 fallback en
  const manifest =
    (await readManifest(lang)) ||
    (await readManifest('en'))

  if (!manifest) {
    throw createError({ statusCode: 500, statusMessage: 'Missing blog manifest' })
  }

  const items: BlogListItem[] = []

  for (const slug of manifest.slugs || []) {
    // md key：server/assets/content/blog/<lang>/<slug>.md
    const raw =
      (await readTextFromAssets(`content/blog/${lang}/${slug}.md`)) ||
      (await readTextFromAssets(`content/blog/en/${slug}.md`))

    if (!raw) continue

    const parsed = matter(raw)
    const fm = parsed.data as any

    items.push({
      lang,
      title: fm.title ?? slug,
      summary: fm.summary ?? '',
      date: fm.date ?? '',
      slug: fm.slug ?? slug,
      tags: fm.tags ?? [],
      cover: fm.cover ?? '',
      to: `/blog/${slug}`,
    })
  }

  items.sort((a, b) => String(b.date).localeCompare(String(a.date)))
  return { items }
})

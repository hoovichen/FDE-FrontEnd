import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
import type { LangCode, BlogListItem } from '~/lib/blog/blog.types'

function baseDir() {
  // ✅ 如果你 md 在 app/content-static，就用这行
  return join(process.cwd(), 'app', 'content-static', 'blog')
  // ✅ 如果你把目录移到根目录 content-static，就改成：
  // return join(process.cwd(), 'content-static', 'blog')
}

export default defineEventHandler(async (event) => {
  const lang = (getRouterParam(event, 'lang') || 'en') as LangCode
  const dir = join(baseDir(), lang)

  let files: string[] = []
  try {
    files = await readdir(dir)
  } catch {
    // fallback: en
    files = await readdir(join(baseDir(), 'en'))
  }

  const mdFiles = files.filter(f => f.endsWith('.md'))

  const items: BlogListItem[] = []
  for (const f of mdFiles) {
    const slug = f.replace(/\.md$/, '')
    const raw = await readFile(join(dir, f), 'utf-8').catch(async () => {
      return await readFile(join(baseDir(), 'en', f), 'utf-8')
    })

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

  // 按日期倒序
  items.sort((a, b) => String(b.date).localeCompare(String(a.date)))

  return { items }
})

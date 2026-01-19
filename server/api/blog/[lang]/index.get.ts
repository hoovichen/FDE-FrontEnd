import { existsSync } from 'node:fs'
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
import type { LangCode, BlogListItem } from '~/lib/blog/blog.types'

function baseDir() {
  return join(process.cwd(), 'content-static', 'blog')
}

export default defineEventHandler(async (event) => {
  const lang = (getRouterParam(event, 'lang') || 'en') as LangCode
  const dir = join(baseDir(), lang)

  console.log('[blog index] cwd=', process.cwd())
  console.log('[blog index] baseDir=', baseDir(), 'exists=', existsSync(baseDir()))
  console.log('[blog index] dir=', dir, 'exists=', existsSync(dir))

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

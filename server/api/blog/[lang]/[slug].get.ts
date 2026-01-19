import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { LangCode } from '~/lib/blog/blog.types'

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

async function readMd(baseDir: string, lang: LangCode, slug: string) {
  const filePath = join(baseDir, lang, `${slug}.md`)
  return await readFile(filePath, 'utf-8')
}

export default defineEventHandler(async (event) => {
  const lang = (getRouterParam(event, 'lang') || 'en') as LangCode
  const slug = getRouterParam(event, 'slug') || ''
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Missing slug' })
  }

  // ✅ 你当前实际路径：app/content-static/blog/<lang>/<slug>.md
  const baseDir = join(process.cwd(), 'app', 'content-static', 'blog')

  let raw = ''
  try {
    raw = await readMd(baseDir, lang, slug)
  } catch {
    try {
      raw = await readMd(baseDir, 'en', slug)
    } catch {
      throw createError({ statusCode: 404, statusMessage: `Not found: ${lang}/${slug}` })
    }
  }

  const parsed = matter(raw)
  const html = md.render(parsed.content)

  return {
    frontmatter: parsed.data,
    html,
  }
})

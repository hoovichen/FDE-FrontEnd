import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { LangCode } from '~/lib/blog/blog.types'

const md = new MarkdownIt({ html: false, linkify: true, typographer: true })

async function readTextFromAssets(key: string) {
  const assets = useStorage('assets:server')
  const buf = await assets.getItemRaw<Buffer>(key)
  if (!buf) return null
  return Buffer.from(buf).toString('utf-8')
}

export default defineEventHandler(async (event) => {
  const lang = (getRouterParam(event, 'lang') || 'en') as LangCode
  const slug = getRouterParam(event, 'slug') || ''
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Missing slug' })

  const raw =
    (await readTextFromAssets(`content/blog/${lang}/${slug}.md`)) ||
    (await readTextFromAssets(`content/blog/en/${slug}.md`))

  if (!raw) {
    throw createError({ statusCode: 404, statusMessage: `Not found: ${lang}/${slug}` })
  }

  const parsed = matter(raw)
  const html = md.render(parsed.content)

  return { frontmatter: parsed.data, html }
})

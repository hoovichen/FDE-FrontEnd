/// <reference types="vite/client" />
// server/utils/blogContent.ts
type Lang = 'en' | 'zh' | 'bm'

// 把所有 markdown 原文在构建时引入（raw）
// 路径按你的真实目录写：server/asset/content/blog/...
const mdMap = import.meta.glob<string>(
  '../asset/content/blog/*/*.md',
  { as: 'raw' }
)

export function listSlugs(lang: Lang) {
  const prefix = `../asset/content/blog/${lang}/`
  return Object.keys(mdMap)
    .filter(k => k.startsWith(prefix))
    .map(k => k.slice(prefix.length).replace(/\.md$/, ''))
}

export async function readPost(lang: Lang, slug: string) {
  const key = `../asset/content/blog/${lang}/${slug}.md`
  const fallbackKey = `../asset/content/blog/en/${slug}.md`

  const loader = mdMap[key] || mdMap[fallbackKey]
  if (!loader) return null

  const raw = await loader()
  return raw
}

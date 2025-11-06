// composables/useSeoPage.ts
import { computed } from 'vue'
import { SEO_BASE } from '~/lib/seo.base'
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'

export function useSeoPage<T extends { title: string; description: string }>(
  dict: Record<LangCode, T>,
  opts?: { ogImage?: string; path?: string } // path 用于 canonical/alternates
) {
  const { lang } = useLanguage()
  const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
  const t = computed(() => dict[l.value])

  const ogImage = computed(() => opts?.ogImage || SEO_BASE.defaultOgImage)
  const canonical = computed(() => {
    const base = SEO_BASE.siteUrl.replace(/\/$/, '')
    const p = (opts?.path || '/').replace(/\/?$/, '/')
    return `${base}${p}`
  })

  // hreflang（简单版本：三语言固定路径）
  const alternates = computed(() => ([
    { hreflang: 'en', href: `${SEO_BASE.siteUrl}/` },
    { hreflang: 'zh-Hans', href: `${SEO_BASE.siteUrl}/?lang=zh` },
    { hreflang: 'ms', href: `${SEO_BASE.siteUrl}/?lang=bm` }
  ]))

  const apply = () => {
    useHead({
      htmlAttrs: { lang: l.value },
      link: [
        { rel: 'canonical', href: canonical.value },
        ...alternates.value.map(a => ({ rel: 'alternate', hreflang: a.hreflang, href: a.href }))
      ]
    })
    useSeoMeta({
      title: () => t.value.title,
      description: () => t.value.description,
      ogTitle: () => t.value.title,
      ogDescription: () => t.value.description,
      ogType: 'website',
      ogSiteName: SEO_BASE.siteName,
      ogImage: () => ogImage.value,
      twitterCard: 'summary_large_image',
      twitterSite: SEO_BASE.twitter,
      twitterTitle: () => t.value.title,
      twitterDescription: () => t.value.description,
      twitterImage: () => ogImage.value,
    })
  }

  return { l, t, apply }
}

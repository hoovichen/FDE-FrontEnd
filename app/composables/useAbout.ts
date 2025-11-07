// composables/useAbout.ts
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/locales/about'
import { ABOUT_TEXT } from '~/locales/about'
import { ABOUT_SEO_TEXT } from '~/locales/seo.about'
import { ABOUT_BASE } from '~/lib/about.data'
import { SEO_BASE } from '~/lib/seo.base'

export function useAboutPage() {
  const { lang } = useLanguage()
  const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')

  const ui = computed(() => ABOUT_TEXT[l.value])
  const seo = computed(() => ABOUT_SEO_TEXT[l.value])
  const base = ABOUT_BASE

  // 结构化数据（Organization + ImageObject）
  const jsonLd = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_BASE.brand,
    url: SEO_BASE.siteUrl,         // 确保在 lib/seo.base.ts 中配置
    logo: SEO_BASE.logo,
    image: base.heroImage,
    // sameAs: SEO_BASE.sameAs || []  // 可选：社媒链接数组
  }))

  return { ui, seo, base, jsonLd }
}

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { HOME_TEXT, type LangCode } from '~/locales/home'

// 你已有的语言状态
const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
// 站点固定信息（可抽到 app.config.ts）
const siteName = 'Fire Dragon Enterprise'
const siteUrl = 'https://example.com'  // 之后替换成你的正式域名
const ogImage = ''   // 放 public 下的默认分享图 1200x630

// 当前语言的首页文案
const home = computed(() => HOME_TEXT[l.value])
// 1) 基础 head（含 <html lang>）
useHead({
  htmlAttrs: { lang: l },  // ✅ 跟随语言变化
})

// 2) 语义化 SEO 元数据（会自动生成常见 meta/og/twitter）
useSeoMeta({
  title: () => home.value.title,
  description: () => home.value.description,

  ogTitle: () => home.value.ogTitle || home.value.title,
  ogDescription: () => home.value.ogDescription || home.value.description,
  ogType: 'website',
  ogSiteName: siteName,
  ogImage: ogImage,

  twitterCard: 'summary_large_image',
  twitterTitle: () => home.value.ogTitle || home.value.title,
  twitterDescription: () => home.value.ogDescription || home.value.description,
  twitterImage: ogImage,
})
onMounted(() => {
  document.documentElement.classList.add('js-ready')
  const btn = document.getElementById('backToTop')
  const toggle = () => {
    if (!btn) return
    const show = window.scrollY > 300
    btn.classList.toggle('back-to-top--visible', show)
  }
  window.addEventListener('scroll', toggle, { passive: true })
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  toggle()
})
</script>

<template>
  <HeroSection />
  <SectionRecipes />
  <SectionProducts />
  <SectionBlog />
</template>

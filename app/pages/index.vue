<script setup lang="ts">
import { useSeoPage } from '~/composables/useSeoPage'
import { HOME_TEXT } from '~/locales/seo.home'
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const { apply } = useSeoPage(HOME_TEXT, {
  ogImage: '/logo-3-topic.png', // 可复用默认图也行
  path: '/'                          // 用于 canonical
})
apply()

onMounted(() => {
  document.documentElement.classList.add('js-ready')
  const btn = document.getElementById('backToTop')
  const toggle = () => {
    if (!btn) return
    btn.classList.toggle('back-to-top--visible', window.scrollY > 300)
  }
  window.addEventListener('scroll', toggle, { passive: true })
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  toggle()
})
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <HeroSection />
  <SectionRecipes />
  <SectionProducts />
  <SectionBlog />
</template>

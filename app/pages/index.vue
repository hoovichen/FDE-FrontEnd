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

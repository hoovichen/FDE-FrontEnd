<script setup lang="ts">
import { useAboutPage } from '~/composables/useAbout'
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const { ui, seo, base, jsonLd } = useAboutPage()

useSeoMeta({
  title: () => seo.value.title,
  description: () => seo.value.description,
  ogTitle: () => seo.value.title,
  ogDescription: () => seo.value.description,
  ogType: 'article',
  ogImage: () => base.heroImage,
  twitterCard: 'summary_large_image'
})

useHead(() => ({
  script: [{
    key: 'about-jsonld',
    type: 'application/ld+json',
    innerHTML: JSON.stringify(jsonLd.value)
  }]
}))

// ✅ 画廊仅取前 3 张，足够营造层次且不留大空白
const gallery = computed(() => (base.gallery || []).slice(0, 3))
// 根据数量切换布局修饰类
const galleryClass = computed(() => `about__gallery about__gallery--layout-${gallery.value.length}`)
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <section class="about">
    <!-- Hero -->
    <div class="about__hero">
      <img :src="base.heroImage" alt="Fire Dragon — About Us" />
      <div class="about__hero-text">
        <h1 class="about__title">{{ ui.title }}</h1>
        <h2 class="about__subtitle">{{ ui.h2 }}</h2>
      </div>
    </div>

    <!-- Two-column content -->
    <div class="about__content container">
      <div>
        <div class="about__text">
          <p class="about__desc">{{ ui.description }}</p>
        </div>
        <NuxtLink to="/contact" class="about__btn" v-if="ui.ctaContact">
          {{ ui.ctaContact }}
        </NuxtLink>
      </div>

      <!-- 改造后的拼贴画廊 -->
      <div :class="galleryClass">
        <img v-for="(g, i) in gallery" :key="i" :src="g" :alt="`About image ${i+1}`" loading="lazy" />
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { useAboutPage } from '~/composables/useAbout'
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const { ui, seo, base, jsonLd, lang } = useAboutPage()

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
const storyRoute = computed(() => `/blog/${lang.value}/the-road-before-firedragon`)
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <section class="about-page">
    <header class="about-hero">
      <div class="about-hero__copy">
        <p class="about-eyebrow">{{ ui.eyebrow }}</p>
        <h1 class="about-hero__title">{{ ui.title }}</h1>
        <p class="about-hero__lead">{{ ui.lead }}</p>
        <div class="about-hero__actions">
          <NuxtLink to="/contact" class="about-pill about-pill--primary" v-if="ui.ctaContact">
            {{ ui.ctaContact }}
          </NuxtLink>
          <NuxtLink :to="storyRoute" class="about-pill">
            {{ ui.ctaBlog }}
          </NuxtLink>
        </div>
      </div>
      <div class="about-hero__media">
        <NuxtImg :src="base.heroImage" alt="Fire Dragon products and local food story" />
      </div>
    </header>

    <section class="about-origin" aria-labelledby="about-origin-title">
      <div class="about-origin__intro">
        <p class="about-eyebrow">{{ ui.h2 }}</p>
        <h2 id="about-origin-title">{{ ui.originTitle }}</h2>
      </div>
      <p class="about-origin__text">{{ ui.originText }}</p>
    </section>

    <section class="about-timeline" aria-label="Fire Dragon timeline">
      <article v-for="item in ui.timeline" :key="item.year" class="about-timeline__item">
        <p class="about-timeline__year">{{ item.year }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </section>

    <section class="about-values" aria-labelledby="about-values-title">
      <div>
        <h2 id="about-values-title">{{ ui.valuesTitle }}</h2>
        <p class="about-values__introText">{{ ui.description }}</p>
      </div>
      <div class="about-values__list">
        <article v-for="item in ui.values" :key="item.title" class="about-value">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="about-gallery" aria-labelledby="about-gallery-title">
      <h2 id="about-gallery-title">{{ ui.galleryTitle }}</h2>
      <div :class="galleryClass">
        <NuxtImg v-for="(g, i) in gallery" :key="i" :src="g" :alt="`About image ${i+1}`" loading="lazy" />
      </div>
    </section>
  </section>
</template>

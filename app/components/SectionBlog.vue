<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { BLOGS_TEXT, type LangCode } from '~/locales/section.blog.ui'

const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const ui = computed(() => BLOGS_TEXT[l.value])

const FEATURED = new Set([
  'hello-fire-dragon',
  'food-that-almost-never-spoils',
  'the-road-before-firedragon'
])

const { data } = await useFetch<{ items: any[] }>(
  () => `/api/blog/${l.value}`
)

const featuredPosts = computed(() =>
  (data.value?.items ?? [])
    .filter(p => FEATURED.has(p.slug))
    .slice(0, 3)
)
</script>


<template>
  <section class="blogs">
    <div class="blogs__overlay"></div>
    <div class="container blogs__inner">
      <header class="blogs__header">
        <h2 class="blogs__title">{{ ui.title }}</h2>
        <p class="blogs__desc">{{ ui.desc }}</p>
      </header>

      <div class="blog-list">
        <BlogCard v-for="p in featuredPosts" :key="p.slug" :post="p" />
      </div>

      <div class="cta">
        <NuxtLink to="/blog" class="pill">
          <NuxtImg src="/images/recipes/icon.png" alt="" class="pill-icon" /> {{ ui.more }}
        </NuxtLink>
      </div>
    </div>
  </section>

</template>

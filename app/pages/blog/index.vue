<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { BLOG_UI, type LangCode } from '~/locales/blog/blog.ui'

const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const ui = computed(() => BLOG_UI[l.value])

// ✅ 只走 API
const { data, pending, error, refresh } = await useFetch<{ items: any[] }>(
  () => `/api/blog/${l.value}`,
  { key: () => `blog-index-${l.value}` }
)

const posts = computed(() => data.value?.items ?? [])

// ✅ SEO（list page）
useSeoMeta({
  title: () => `${ui.value.title} - Fire Dragon`,
  description: () => ui.value.desc,
  ogTitle: () => `${ui.value.title} - Fire Dragon`,
  ogDescription: () => ui.value.desc,
  ogType: 'website',
})

// （可选）Canonical（建议）
// const siteUrl = 'https://www.firedragonmy.com'
// useHead(() => ({
//   link: [{ rel: 'canonical', href: `${siteUrl}/blog` }]
// }))
</script>

<template>
  <section class="blog-page">
    <div class="container">
      <header class="blog-page__header">
        <div class="blog-page__headerInner">
          <h1 class="blog-page__title">{{ ui.title }}</h1>
          <p class="blog-page__desc">{{ ui.desc }}</p>
        </div>
      </header>


      <!-- ✅ Loading -->
      <!-- <div v-if="pending" class="blog-empty">
        <h2>Loading…</h2>
        <p class="muted">Fetching posts.</p>
      </div> -->
      <div v-if="pending" class="blog-list">
        <div v-for="i in 6" :key="i" class="blog-card blog-card--skeleton">
          <div class="blog-card__cover blog-card__cover--skeleton" />
          <div class="blog-card__body">
            <div class="sk-line sk-line--sm" />
            <div class="sk-line" />
            <div class="sk-line" />
          </div>
        </div>
      </div>


      <!-- ✅ Error -->
      <div v-else-if="error" class="blog-empty">
        <h2>Failed to load</h2>
        <p class="muted">Please try again.</p>
        <button class="btn-primary" type="button" @click="refresh()">Retry</button>
      </div>

      <!-- ✅ List -->
      <div v-else-if="posts.length" class="blog-list">
        <BlogCard v-for="p in posts" :key="p.slug" :post="p" />
      </div>

      <!-- ✅ Empty -->
      <div v-else class="blog-empty">
        <h2>{{ ui.emptyTitle }}</h2>
        <p class="muted">{{ ui.emptyDesc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { BLOG_UI, type LangCode } from '~/locales/blog/blog.ui'
import { sortBlogs, collectAllTags } from '~/lib/blog/blog.helpers'

const route = useRoute()

// ✅ 从 URL 取语言
const lang = computed<LangCode>(() => {
  const l = route.params.lang
  return (l === 'zh' || l === 'en' || l === 'bm') ? l : 'en'
})

const ui = computed(() => BLOG_UI[lang.value])

const selectedTag = ref<string>('') // 用 '' 比 null 更适合 <select>
const sortBy = ref<'latest' | 'featured' | 'oldest'>('latest')

// ✅ 只走 API（按 URL lang 拉）
const { data, pending, error, refresh } = await useFetch<{ items: any[] }>(
  () => `/api/blog/${lang.value}`,
  { key: () => `blog-index-${lang.value}` }
)

const rawPosts = computed(() => data.value?.items ?? [])
const tags = computed(() => collectAllTags(rawPosts.value))

const posts = computed(() => {
  const list = selectedTag.value
    ? rawPosts.value.filter(p => Array.isArray(p.tags) && p.tags.includes(selectedTag.value))
    : rawPosts.value

  return sortBlogs(list, sortBy.value)
})

// ✅ SEO（list page）
const siteUrl = 'https://www.firedragonmy.com'
const canonical = computed(() => `${siteUrl}/blog/${lang.value}`)

useSeoMeta({
  title: () => `${ui.value.title} - Fire Dragon`,
  description: () => ui.value.desc,
  ogTitle: () => `${ui.value.title} - Fire Dragon`,
  ogDescription: () => ui.value.desc,
  ogType: 'website',
  ogUrl: () => canonical.value,
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
}))
</script>


<template>
  <section class="blog-page">
    <div class="container">
      <header class="blog-page__header">
        <div class="blog-page__headerInner">
          <h1 class="blog-page__title">{{ ui.title }}</h1>
          <p class="blog-page__desc">{{ ui.desc }}</p>

          <div class="blog-tools">
            <!-- Tag select -->
            <select v-model="selectedTag" class="blog-select">
              <option :value="''">All topics</option>
              <option v-for="t in tags" :key="t" :value="t">{{ t }}</option>
            </select>

            <!-- Sort select -->
            <select v-model="sortBy" class="blog-select">
              <option value="latest">Latest</option>
              <option value="featured">Featured</option>
              <option value="oldest">Oldest</option>
            </select>

            <!-- Clear -->
            <button v-if="selectedTag !== '' || sortBy !== 'latest'" class="blog-clear" type="button"
              @click="() => { selectedTag = ''; sortBy = 'latest' }">
              Clear
            </button>

          </div>
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
        <BlogCard v-for="p in posts" :key="p.slug" :post="p" :lang="lang" />
      </div>

      <!-- ✅ Empty -->
      <div v-else class="blog-empty">
        <h2>{{ ui.emptyTitle }}</h2>
        <p class="muted">{{ ui.emptyDesc }}</p>
      </div>
    </div>
  </section>
</template>

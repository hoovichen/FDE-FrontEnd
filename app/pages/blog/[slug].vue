<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useLanguage } from '~/composables/useLanguage'
import { BLOG_UI, type LangCode } from '~/locales/blog/blog.ui'
import { useDateFormat } from '~/composables/useDateFormat'
const { formatDate } = useDateFormat()
const displayDate = computed(() => formatDate(frontmatter.value?.date, l.value))

const route = useRoute()
const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const ui = computed(() => BLOG_UI[l.value])

const slug = computed(() => String(route.params.slug || ''))

// ✅ 拉取渲染后的 html（server api）
const { data, error } = await useAsyncData(
  () => `blog-${l.value}-${slug.value}`,
  () => $fetch<{ html: string; frontmatter?: Record<string, any> }>(`/api/blog/${l.value}/${slug.value}`)
)

const frontmatter = computed(() => (data.value as any)?.frontmatter ?? null)
const html = computed(() => (data.value as any)?.html ?? '')

// ✅ SEO 全部用 frontmatter（不依赖 lib）
const siteUrl = 'https://www.firedragonmy.com'
const canonical = computed(() => `${siteUrl}/blog/${slug.value}`)

const title = computed(() => frontmatter.value?.title || 'Blog')
const description = computed(() => frontmatter.value?.summary || '')
const cover = computed(() => frontmatter.value?.cover || '/logo-3-topic.png')
const date = computed(() => frontmatter.value?.date || '')

useSeoMeta({
  title: () => `${title.value} - Fire Dragon`,
  description: () => description.value,
  ogTitle: () => `${title.value} - Fire Dragon`,
  ogDescription: () => description.value,
  ogType: 'article',
  ogImage: () => cover.value,
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
  script: [{
    key: 'blogposting-jsonld',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title.value,
      description: description.value,
      image: [cover.value.startsWith('http') ? cover.value : `${siteUrl}${cover.value}`],
      datePublished: date.value || undefined,
      author: { '@type': 'Organization', name: 'Fire Dragon Enterprise' },
      publisher: {
        '@type': 'Organization',
        name: 'Fire Dragon Enterprise',
        logo: { '@type': 'ImageObject', url: `${siteUrl}/logo-3-topic.png` }
      },
      mainEntityOfPage: canonical.value
    })
  }]
}))
</script>

<template>
  <section class="blog-detail">
    <div class="container" v-if="frontmatter && !error">
      <NuxtLink to="/blog" class="blog-back" aria-label="Back to blog list">
        <span class="blog-back__icon">←</span>
        <span class="blog-back__text">{{ ui.back }}</span>
      </NuxtLink>

      <header class="blog-hero">
        <p class="blog-meta">
          <time :datetime="String(frontmatter.date)">{{ displayDate }}</time>

          <span v-if="frontmatter.tags?.length" class="blog-tags" aria-label="Tags">
            <span v-for="t in frontmatter.tags" :key="t" class="blog-tag">{{ t }}</span>
          </span>
        </p>

        <h1 class="blog-title">{{ frontmatter.title }}</h1>
        <p v-if="frontmatter.summary" class="blog-summary">{{ frontmatter.summary }}</p>

        <NuxtImg v-if="frontmatter.cover" class="blog-cover" :src="frontmatter.cover" :alt="frontmatter.title"
          loading="lazy" decoding="async" />
      </header>

      <!-- ✅ Markdown 正文容器：隔离全局样式 -->
      <article class="blog-prose" v-html="html" />
    </div>

    <div class="container" v-else>
      <h1 class="blog-title">Not found</h1>
      <p class="blog-summary muted">This post does not exist.</p>
      <NuxtLink to="/blog" class="blog-back">
        <span class="blog-back__icon">←</span>
        <span class="blog-back__text">{{ ui.back }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

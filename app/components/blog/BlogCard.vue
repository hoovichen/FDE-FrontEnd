<script setup lang="ts">
import { useDateFormat } from '~/composables/useDateFormat'
import type { LangCode } from '~/locales/blog/blog.ui'

type BlogPostCard = {
  slug: string
  title: string
  summary?: string
  date?: string | Date
  tags?: string[]
  cover?: string
}

const props = defineProps<{
  post: BlogPostCard
  lang: LangCode
}>()

const { formatDate } = useDateFormat()
const displayDate = computed(() => formatDate(props.post.date, props.lang))

const post = computed(() => props.post)
</script>

<template>
  <NuxtLink class="blog-card" :to="`/blog/${lang}/${post.slug}`">
    <NuxtImg
      v-if="post.cover"
      class="blog-card__cover"
      :src="post.cover"
      :alt="post.title"
      loading="lazy"
      decoding="async"
    />

    <div class="blog-card__body">
      <div class="blog-card__meta muted">
        <time v-if="post.date" :datetime="String(post.date)">
          {{ displayDate }}
        </time>
        <span v-if="post.tags?.length" class="blog-card__tags">
          · {{ post.tags.join(' / ') }}
        </span>
      </div>

      <h3 class="blog-card__title">{{ post.title }}</h3>

      <p v-if="post.summary" class="blog-card__summary muted">
        {{ post.summary }}
      </p>
    </div>
  </NuxtLink>
</template>

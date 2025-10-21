<script setup lang="ts">
import { BLOGS } from '~/lib/blog.data'
import { BLOGS_TEXT, type LangCode } from '~/locales/blog'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const t = computed(() => BLOGS_TEXT[(lang.value as LangCode) || 'en'])
</script>

<template>
  <section id="blogs" class="blogs">
    <div class="blogs__overlay"></div>

    <div class="container blogs__inner">
      <!-- 标题区 -->
      <header class="blogs__header">
        <h2 class="blogs__title">{{ t.title }}</h2>
        <p class="blogs__desc">{{ t.desc }}</p>
      </header>

      <!-- 博客卡片区 -->
      <div class="blogs__grid">
        <div v-for="b in BLOGS" :key="b.key" class="blogs__card">
          <img :src="b.image" :alt="b.title" loading="lazy" decoding="async" />
          <h3 class="blogs__card-title">{{ b.title }}</h3>
          <NuxtLink :to="b.to" class="blogs__readmore">READ MORE</NuxtLink>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="cta">
        <NuxtLink to="/blog" class="pill">
          <img src="/images/recipes/icon.png" alt="" class="pill-icon" />
          {{ t.more }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

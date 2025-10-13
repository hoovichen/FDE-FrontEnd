<script setup lang="ts">
import { RECIPES_TEXT, type LangCode } from '~/locales/recipes'
import { RECIPES_CARDS } from '~/lib/recipes.data'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const t = computed(() => RECIPES_TEXT[(lang.value as LangCode) || 'en'])

// 拆出三张图，便于布局
const left  = computed(() => RECIPES_CARDS.find(c => c.key === 'left')!)
const top   = computed(() => RECIPES_CARDS.find(c => c.key === 'top')!)
const bottom= computed(() => RECIPES_CARDS.find(c => c.key === 'bottom')!)
</script>

<template>
  <section id="recipes" class="recipes" aria-labelledby="recipes-title">
    <div class="recipes__header">
      <h2 id="recipes-title" class="recipes__title">{{ t.title }}</h2>
      <p class="recipes__desc">{{ t.desc }}</p>
    </div>

    <!-- 三图拼版：左大右上下 -->
    <div class="recipes__grid">
      <!-- 左侧大图 -->
      <NuxtLink :to="left.to" class="recipes__card recipes__card--left">
        <img :src="left.image" :alt="left.alt || ''" loading="lazy" decoding="async" />
      </NuxtLink>

      <!-- 右侧上部（约 38%） -->
      <NuxtLink :to="top.to" class="recipes__card recipes__card--top">
        <img :src="top.image" :alt="top.alt || ''" loading="lazy" decoding="async" />
      </NuxtLink>

      <!-- 右侧下部（约 58%） -->
      <NuxtLink :to="bottom.to" class="recipes__card recipes__card--bottom">
        <img :src="bottom.image" :alt="bottom.alt || ''" loading="lazy" decoding="async" />
      </NuxtLink>
    </div>

    <!-- 中心按钮（椭圆长条） -->
    <div class="cta">
      <NuxtLink to="/recipes" class="pill" aria-label="View all recipes">
        <img class="pill-icon" src="/images/recipes/icon.png" alt="" />
        <span>{{ t.viewAll }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

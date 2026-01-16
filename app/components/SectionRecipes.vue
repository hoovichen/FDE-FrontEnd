<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { RECIPES_UI, type LangCode } from '~/locales/recipes/recipes.ui'
import { getHomeFeaturedRecipes } from '~/lib/recipes/recipes.helpers'

const { lang } = useLanguage()
const ui = computed(() => RECIPES_UI[(lang.value as LangCode) || 'en'])

const featured = computed(() =>
  getHomeFeaturedRecipes((lang.value as LangCode) || 'en', 3)
)

// 安全取值：避免 featured 少于 3 条时报错
const left = computed(() => featured.value[0] ?? null)
const top = computed(() => featured.value[1] ?? null)
const bottom = computed(() => featured.value[2] ?? null)

// 统一生成链接
const recipeLink = (slug: string) => `/recipes/${slug}`

</script>

<template>
  <section id="recipes" class="recipes" aria-labelledby="recipes-title">
    <div class="recipes__header">
      <h2 id="recipes-title" class="recipes__title">{{ ui.sectionTitle }}</h2>
      <p class="recipes__desc">{{ ui.sectionDesc }}</p>
    </div>

    <!-- 三图拼版：左大右上下 -->
    <div class="recipes__grid">
      <!-- 左侧大图 -->
      <NuxtLink
        v-if="left"
        :to="recipeLink(left.slug)"
        class="recipes__card recipes__card--left"
        :aria-label="left.title"
      >
        <NuxtImg
          :src="left.thumbnail"
          :alt="left.title || left.slug"
          loading="lazy"
          decoding="async"
        />
      </NuxtLink>

      <!-- 右侧上部 -->
      <NuxtLink
        v-if="top"
        :to="recipeLink(top.slug)"
        class="recipes__card recipes__card--top"
        :aria-label="top.title"
      >
        <NuxtImg
          :src="top.thumbnail"
          :alt="top.title"
          loading="lazy"
          decoding="async"
        />
      </NuxtLink>

      <!-- 右侧下部 -->
      <NuxtLink
        v-if="bottom"
        :to="recipeLink(bottom.slug)"
        class="recipes__card recipes__card--bottom"
        :aria-label="bottom.title"
      >
        <NuxtImg
          :src="bottom.thumbnail"
          :alt="bottom.title"
          loading="lazy"
          decoding="async"
        />
      </NuxtLink>
    </div>

    <!-- 中心按钮（椭圆长条） -->
    <div class="cta">
      <NuxtLink to="/recipes" class="pill" :aria-label="ui.viewAll">
        <NuxtImg class="pill-icon" src="/images/recipes/icon.png" alt="" />
        <span>{{ ui.viewAll }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

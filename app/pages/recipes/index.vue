<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { RECIPES_UI, type LangCode } from '~/locales/recipes/recipes.ui'
import { getAllRecipes } from '~/lib/recipes/recipes.helpers'

useHead({ title: 'Recipes' })

const { lang } = useLanguage()
const ui = computed(() => RECIPES_UI[(lang.value as LangCode) || 'en'])

const items = computed(() => getAllRecipes((lang.value as LangCode) || 'en'))

const recipeLink = (slug: string) => `/recipes/${slug}`
</script>

<template>
  <section class="section recipes-page">
    <div class="container">
      <header class="recipes-page__header">
        <h1>{{ ui.pageTitle }}</h1>
        <p class="muted">{{ ui.pageDesc }}</p>
      </header>

      <div class="recipes-list">
        <NuxtLink
          v-for="r in items"
          :key="r.slug"
          :to="recipeLink(r.slug)"
          class="recipe-card"
          :aria-label="r.title"
        >
          <NuxtImg
            :src="r.thumbnail"
            :alt="r.title"
            loading="lazy"
            decoding="async"
          />

          <div class="recipe-card__body">
            <h3 class="recipe-card__title">{{ r.title }}</h3>
            <p class="recipe-card__summary muted">{{ r.summary }}</p>

            <div class="recipe-card__meta muted">
              <span v-if="r.durationSec">{{ Math.round(r.durationSec / 60) }} {{ ui.minutes }}</span>
              <span v-if="r.tags?.length"> · {{ r.tags[0] }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

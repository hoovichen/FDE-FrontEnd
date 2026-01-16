<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useLanguage } from '~/composables/useLanguage'
import { RECIPES_UI, type LangCode } from '~/locales/recipes/recipes.ui'
import { getRecipeBySlug, getAllRecipes } from '~/lib/recipes/recipes.helpers'

const route = useRoute()
const { lang } = useLanguage()
const ui = computed(() => RECIPES_UI[(lang.value as LangCode) || 'en'])

const slug = computed(() => String(route.params.slug || ''))
const recipe = computed(() => getRecipeBySlug(slug.value, (lang.value as LangCode) || 'en'))

const isPlaying = ref(false)

const hasVideo = computed(() => Boolean(recipe.value?.youtubeId?.trim()))
const embedUrl = computed(() => {
    const id = recipe.value?.youtubeId?.trim()
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : ''
})

function onPlay() {
    if (!hasVideo.value) return
    isPlaying.value = true
}

useHead(() => ({
    title: recipe.value?.title ? `${recipe.value.title} - Recipes` : 'Recipe',
}))
console.log('slug:', slug.value)
console.log('recipe:', recipe.value)

</script>

<template>
    <section class="recipe-detail">
        <div class="container" v-if="recipe">
            <NuxtLink to="/recipes" class="recipe-back">
                <span class="recipe-back__icon">⬅</span>
                <span>{{ ui.backToList }}</span>
            </NuxtLink>


            <!-- ✅ 页头：全宽更自然 -->
            <header class="recipe-detail__header">
                <h1 class="recipe-detail__title">{{ recipe.title }}</h1>
                <p class="recipe-detail__summary muted">{{ recipe.summary }}</p>
            </header>

            <div class="recipe-detail__layout">
                <!-- 左：视频 -->
                <div class="recipe-video">
                    <!-- 1) 永远显示封面 -->
                    <button v-if="!isPlaying" class="recipe-video__cover" type="button" @click="onPlay"
                        :aria-label="hasVideo ? `Play: ${recipe.title}` : 'Video coming soon'">
                        <NuxtImg :src="recipe.thumbnail" :alt="recipe.title" loading="lazy" decoding="async" />
                        <span v-if="hasVideo" class="recipe-video__play">▶</span>
                        <span v-else class="recipe-video__badge">Coming soon</span>
                    </button>

                    <iframe v-else class="recipe-video__iframe" :src="embedUrl" title="YouTube video player"
                        loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen />
                </div>

                <!-- 右：内容 -->
                <aside class="recipe-detail__aside">
                    <div class="recipe-detail__cards">
                        <div v-if="recipe.ingredients?.length" class="recipe-detail__card">
                            <h2 class="recipe-detail__cardTitle">{{ ui.ingredients }}</h2>
                            <ul class="recipe-detail__list">
                                <li v-for="(x, i) in recipe.ingredients" :key="i">{{ x }}</li>
                            </ul>
                        </div>

                        <div v-if="recipe.steps?.length" class="recipe-detail__card recipe-detail__card--steps">
                            <h2 class="recipe-detail__cardTitle">{{ ui.steps }}</h2>
                            <ol class="recipe-detail__list recipe-detail__list--ordered">
                                <li v-for="(x, i) in recipe.steps" :key="i">{{ x }}</li>
                            </ol>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

        <div class="container" v-else>
            <h1>Not found</h1>
            <p class="muted">This recipe does not exist.</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => HOME_REDESIGN_TEXT[l.value].support)
const links = computed(() => [
  { to: '/about', label: ui.value.about },
  { to: `/faq/${l.value}`, label: ui.value.faq },
  { to: `/blog/${l.value}`, label: ui.value.blog },
])
</script>

<template>
  <section class="home-resources" aria-labelledby="home-resources-title">
    <div class="home-resources__intro">
      <p class="home-resources__eyebrow">{{ ui.eyebrow }}</p>
      <h2 id="home-resources-title" class="home-resources__title">{{ ui.heading }}</h2>
    </div>

    <div class="home-resources__body">
      <p class="home-resources__text">{{ ui.text }}</p>
      <nav class="home-resources__links" aria-label="Helpful links">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="home-resources__link">
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </section>
</template>

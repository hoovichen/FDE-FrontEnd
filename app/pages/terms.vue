<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'
import { TERMS_TEXT } from '~/locales/legal'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const page = computed(() => TERMS_TEXT[l.value])

useSeoMeta({
  title: () => `${page.value.title} - Fire Dragon Enterprise`,
  description: () => page.value.intro,
  ogTitle: () => `${page.value.title} - Fire Dragon Enterprise`,
  ogDescription: () => page.value.intro,
  ogType: 'website'
})
</script>

<template>
  <section class="legal-page">
    <div class="legal-page__container">
      <header class="legal-page__head">
        <p class="legal-page__eyebrow">{{ page.eyebrow }}</p>
        <h1 class="legal-page__title">{{ page.title }}</h1>
        <p class="legal-page__intro">{{ page.intro }}</p>
        <p class="legal-page__updated">{{ page.updated }}</p>
      </header>

      <aside class="legal-page__notice">
        {{ page.notice }}
      </aside>

      <div class="legal-page__content">
        <article v-for="section in page.sections" :key="section.title" class="legal-section">
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

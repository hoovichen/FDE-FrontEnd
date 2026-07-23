<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const hero = computed(() => HOME_REDESIGN_TEXT[l.value].hero)
</script>

<template>
  <section class="home-hero-editorial" aria-labelledby="home-hero-title">
    <NuxtImg
      class="home-hero-editorial__image"
      src="/images/hero-recommend.jpg"
      alt="Fire Dragon sauces and homemade specialities"
      preload
      loading="eager"
      fetchpriority="high"
      decoding="async"
    />
    <div class="home-hero-editorial__overlay" aria-hidden="true" />
    <div class="home-hero-editorial__copy">
      <h1 id="home-hero-title" class="home-hero-editorial__title">
        {{ hero.heading }}
      </h1>
      <div class="home-hero-editorial__rule" aria-hidden="true" />
      <p class="home-hero-editorial__text">
        {{ hero.body }}
      </p>
    </div>
  </section>
</template>


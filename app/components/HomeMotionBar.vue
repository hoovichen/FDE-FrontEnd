<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const text = computed(() => HOME_REDESIGN_TEXT[l.value].motion)
</script>

<template>
  <section class="home-motion" aria-label="Brand promise">
    <p class="home-motion__sr">{{ text }}</p>
    <div class="home-motion__track" aria-hidden="true">
      <span v-for="i in 8" :key="i">{{ text }}</span>
    </div>
  </section>
</template>


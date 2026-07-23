<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const text = computed(() => HOME_REDESIGN_TEXT[l.value].announcement)
</script>

<template>
  <div class="home-announcement" role="banner">
    <NuxtLink class="home-announcement__link" to="/recipes">
      {{ text }}
    </NuxtLink>
  </div>
</template>


<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => HOME_REDESIGN_TEXT[l.value].quote)

const shopeeUrl = 'https://shopee.com.my/FGD-s-Pantai-Remis-Chilli-Sauce-i.1708308739.56054449110'
const lazadaUrl = 'https://www.lazada.com.my/shop/fdg-hot-sauce'
</script>

<template>
  <section class="home-quote" aria-label="Shop Fire Dragon sauces">
    <p class="home-quote__text">{{ ui.text }}</p>
    <div class="home-quote__actions">
      <a class="home-text-link" :href="shopeeUrl" target="_blank" rel="noopener nofollow">
        {{ ui.shopNow }} - {{ ui.shopee }}
      </a>
      <a class="home-text-link" :href="lazadaUrl" target="_blank" rel="noopener nofollow">
        {{ ui.lazada }}
      </a>
    </div>
  </section>
</template>


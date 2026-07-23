<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'
import { useProductsList } from '~/composables/useProducts'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => HOME_REDESIGN_TEXT[l.value].featured)
const { sorted } = useProductsList()

const products = computed(() => sorted.value.slice(0, 4))
</script>

<template>
  <section class="home-featured" aria-labelledby="home-featured-title">
    <h2 id="home-featured-title" class="home-featured__title">
      {{ ui.title }}
    </h2>

    <div class="home-featured__grid">
      <NuxtLink
        v-for="product in products"
        :key="product.key"
        class="home-product-tile"
        :to="`/products/${product.key}`"
      >
        <span class="home-product-tile__media">
          <NuxtImg
            class="home-product-tile__image"
            :src="product.image"
            :alt="product.name"
            loading="lazy"
            decoding="async"
          />
        </span>
        <span class="home-product-tile__name">{{ product.name }}</span>
      </NuxtLink>
    </div>
  </section>
</template>


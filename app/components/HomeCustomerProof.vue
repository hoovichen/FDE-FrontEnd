<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'
import { PRODUCTS_I18N } from '~/locales/products.i18n'
import { REVIEWS_UI } from '~/locales/reviews'
import { getFeaturedMarketplaceReviews } from '~/lib/reviews.data'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => REVIEWS_UI[l.value])
const reviews = computed(() => getFeaturedMarketplaceReviews())
const productName = (productKey: string) => PRODUCTS_I18N[l.value]?.[productKey]?.name || PRODUCTS_I18N.en[productKey]?.name || productKey
</script>

<template>
  <section class="home-proof" aria-labelledby="home-proof-title">
    <div class="home-proof__intro">
      <p class="home-proof__eyebrow">{{ ui.homeEyebrow }}</p>
      <h2 id="home-proof-title" class="home-proof__title">{{ ui.homeTitle }}</h2>
      <p class="home-proof__text">{{ ui.homeText }}</p>
      <NuxtLink class="home-proof__link" to="/reviews">{{ ui.homeLink }}</NuxtLink>
    </div>

    <div class="home-proof__notes">
      <article v-for="review in reviews" :key="review.id" class="home-proof-note">
        <p class="home-proof-note__meta">
          {{ review.source }} · {{ productName(review.productKey) }}
        </p>
        <blockquote>{{ review.quote }}</blockquote>
        <p class="home-proof-note__by">{{ review.reviewer }}</p>
      </article>
    </div>
  </section>
</template>

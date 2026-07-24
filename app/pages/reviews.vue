<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'
import { PRODUCTS_BASE } from '~/lib/products.data'
import { PRODUCTS_I18N } from '~/locales/products.i18n'
import { MARKETPLACE_REVIEWS, REVIEWED_PRODUCT_KEYS, getFeaturedMarketplaceReviews, getReviewsForProduct } from '~/lib/reviews.data'
import { REVIEWS_UI } from '~/locales/reviews'
import { SEO_BASE } from '~/lib/seo.base'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => REVIEWS_UI[l.value])

const productFor = (productKey: string) => PRODUCTS_BASE.find(product => product.key === productKey)
const productName = (productKey: string) => PRODUCTS_I18N[l.value]?.[productKey]?.name || PRODUCTS_I18N.en[productKey]?.name || productKey
const featuredReviews = computed(() => getFeaturedMarketplaceReviews())
const productGroups = computed(() => REVIEWED_PRODUCT_KEYS.map(productKey => ({
  productKey,
  product: productFor(productKey),
  productName: productName(productKey),
  reviews: getReviewsForProduct(productKey)
})))

useHead(() => ({
  link: [
    { rel: 'canonical', href: `${SEO_BASE.siteUrl}/reviews/` }
  ]
}))

useSeoMeta({
  title: () => `${ui.value.title} | ${SEO_BASE.siteName}`,
  description: () => ui.value.lead,
  ogTitle: () => ui.value.title,
  ogDescription: () => ui.value.lead,
  ogImage: SEO_BASE.defaultOgImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <section class="reviews-page">
    <header class="reviews-hero">
      <div class="reviews-hero__copy">
        <p class="reviews-eyebrow">{{ ui.eyebrow }}</p>
        <h1>{{ ui.title }}</h1>
        <p>{{ ui.lead }}</p>
      </div>
      <div class="reviews-hero__note">
        <p>{{ ui.sourceNote }}</p>
      </div>
    </header>

    <section class="reviews-proof-strip" aria-label="Review context">
      <div>
        <strong>{{ MARKETPLACE_REVIEWS.length }}</strong>
        <span>{{ ui.selected }}</span>
      </div>
      <div>
        <strong>Shopee / Lazada</strong>
        <span>{{ ui.noCheckout }}</span>
      </div>
      <div>
        <strong>{{ productGroups.length }}</strong>
        <span>{{ ui.byProduct }}</span>
      </div>
    </section>

    <section class="reviews-featured" aria-labelledby="reviews-featured-title">
      <div class="reviews-section-head">
        <p class="reviews-eyebrow">{{ ui.marketplace }}</p>
        <h2 id="reviews-featured-title">{{ ui.featuredTitle }}</h2>
      </div>

      <div class="reviews-featured__grid">
        <article v-for="review in featuredReviews" :key="review.id" class="review-note review-note--featured">
          <p class="review-note__source">{{ review.source }} · {{ productName(review.productKey) }}</p>
          <blockquote>{{ review.quote }}</blockquote>
          <div class="review-note__footer">
            <span>{{ review.reviewer }}</span>
            <span>{{ review.date }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="reviews-products" aria-labelledby="reviews-products-title">
      <div class="reviews-section-head">
        <p class="reviews-eyebrow">{{ ui.byProduct }}</p>
        <h2 id="reviews-products-title">{{ ui.productTitle }}</h2>
      </div>

      <article v-for="group in productGroups" :key="group.productKey" class="reviews-product">
        <NuxtLink class="reviews-product__media" :to="`/products/${group.productKey}`">
          <NuxtImg
            v-if="group.product"
            :src="group.product.image"
            :alt="group.productName"
            loading="lazy"
            decoding="async"
          />
        </NuxtLink>

        <div class="reviews-product__body">
          <div class="reviews-product__head">
            <div>
              <p class="reviews-eyebrow">{{ ui.verified }}</p>
              <h3>{{ group.productName }}</h3>
            </div>
            <NuxtLink :to="`/products/${group.productKey}`">{{ ui.viewProduct }}</NuxtLink>
          </div>

          <div class="reviews-product__notes">
            <article v-for="review in group.reviews" :key="review.id" class="review-note">
              <p class="review-note__source">{{ ui.sourcePrefix }}: {{ review.source }} · {{ review.date }}</p>
              <blockquote>{{ review.quote }}</blockquote>
              <div class="review-note__tags">
                <span v-for="tag in review.tags" :key="tag">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useProductsList } from '~/composables/useProducts'
import { useSeoPage } from '~/composables/useSeoPage'
import { PRODUCTS_PAGE_TEXT } from '~/locales/seo.products'
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const { sorted: products, sortBy, ui } = useProductsList()
const config = useRuntimeConfig()
const siteUrl = computed(() => String(config.public.siteUrl || 'https://www.firedragonmy.com').replace(/\/$/, ''))

// SEO
const { apply } = useSeoPage(PRODUCTS_PAGE_TEXT, {
  ogImage: '/logo-3-topic.png',
  path: '/products'
})
apply()

// 结构化数据：ItemList（帮助搜索引擎理解这是一个产品列表页）
const itemListJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.value.map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    url: `${siteUrl.value}/products/${p.key}`,
    name: p.name
  }))
}))
useHead(() => ({
  script: [{
    key: 'products-itemlist',
    type: 'application/ld+json',
    innerHTML: JSON.stringify(itemListJsonLd.value)
  }]
}))

</script>


<template>
  <SpeedInsights />
  <Analytics />
  <section class="page-products">
    <div class="page-products__header">
      <div>
        <p class="page-products__eyebrow">{{ ui.all }}</p>
        <h1 class="page-products__title">{{ ui.pageTitle }}</h1>
        <p v-if="ui.pageDesc" class="page-products__desc">{{ ui.pageDesc }}</p>
      </div>

      <label class="page-products__sort">
        <span class="sr-only">Sort</span>
        <select v-model="sortBy" class="page-products__select">
          <option value="default">{{ ui.sort.default }}</option>
          <option value="nameAsc">{{ ui.sort.nameAsc }}</option>
          <option value="priceAsc">{{ ui.sort.priceAsc }}</option>
          <option value="priceDesc">{{ ui.sort.priceDesc }}</option>
        </select>
      </label>
    </div>

    <div class="page-products__content">
      <div class="grid" aria-hidden="false">
        <NuxtLink v-for="p in products" :key="p.key" :to="`/products/${p.key}`" class="product-card">
          <div class="card__image-wrapper">
            <div class="card__image-clip">
              <NuxtImg :src="p.image" :alt="p.name" class="card__main-NuxtImg" loading="lazy" decoding="async" />
            </div>
          </div>
          <div class="card__body">
            <h3 class="card__title">{{ p.name }}</h3>
            <p v-if="p.summary" class="card__summary">{{ p.summary }}</p>
            <p v-if="p.price" class="card__price">RM {{ p.price.toFixed(2) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- 子路由承载位：用于弹窗 -->
    <div class="modal-host">
      <NuxtPage />
    </div>
  </section>
</template>

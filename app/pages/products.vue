<script setup lang="ts">
import { useProductsList } from '~/composables/useProducts'
import { useSeoPage } from '~/composables/useSeoPage'
import { PRODUCTS_PAGE_TEXT } from '~/locales/seo.products'
import { PRODUCT_KEYS } from '~/lib/products.data' // 你已有

const { sorted: products, sortBy, ui } = useProductsList()

// SEO
const { apply } = useSeoPage(PRODUCTS_PAGE_TEXT, {
  ogImage: '/og/products-1200x630.jpg',
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
    url: `https://example.com/products/${p.key}`, // TODO: 上线换域名
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

// —— 手机“第2张居中”体验优化（保留你的逻辑）
const railRef = ref<HTMLDivElement | null>(null)
onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  if (!isMobile) return
  const second = railRef.value?.querySelectorAll<HTMLAnchorElement>('.card')[1]
  second?.scrollIntoView({ behavior: 'instant' as any, inline: 'center', block: 'nearest' })
})
</script>


<template>
  <section class="page-products">
    <div class="page-products__header">
      <h1 class="page-products__title">{{ ui.pageTitle }}</h1>

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

    <!-- 桌面：网格；手机：横向轮播（可见左右半卡） -->
    <div class="page-products__content">
      <!-- Desktop Grid -->
      <div class="grid" aria-hidden="false">
        <NuxtLink
          v-for="p in products"
          :key="p.key"
          :to="`/products/${p.key}`"
          class="card"
        >
          <img :src="p.image" :alt="p.name" loading="lazy" decoding="async" />
          <div class="card__body">
            <h3 class="card__title">{{ p.name }}</h3>
            <p v-if="p.summary" class="card__summary">{{ p.summary }}</p>
            <p v-if="p.price" class="card__price">RM {{ p.price.toFixed(2) }}</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Mobile Rail -->
      <div class="rail" ref="railRef">
        <NuxtLink
          v-for="p in products"
          :key="`m-${p.key}`"
          :to="`/products/${p.key}`"
          class="card"
        >
          <img :src="p.image" :alt="p.name" loading="lazy" decoding="async" />
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

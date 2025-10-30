<script setup lang="ts">
import { useRoute, useRouter } from '#imports'
import { PRODUCTS } from '~/lib/products.data'
import { useLanguage } from '~/composables/useLanguage'
import { PRODUCTS_TEXT, type LangCode } from '~/locales/products'

// 文案
const { lang } = useLanguage()
const t = computed(() => PRODUCTS_TEXT[(lang.value as LangCode) || 'en'])

// 路由参数
const route = useRoute()
const router = useRouter()
const key = computed(() => route.params.key as string)

// 简单的静态“详情字典”（现在临时，未来接 API）
const PRODUCT_DETAILS: Record<string, {
  name: string
  image: string
  msrp?: string
  intro?: string
  gallery?: string[]
  // …后续再加 spec/ingredients 等
}> = Object.fromEntries(
  PRODUCTS.map(p => [p.key, {
    name: p.name,
    image: p.image,
    msrp: undefined,
    intro: 'Coming soon — product introduction placeholder.',
    gallery: [p.image]
  }])
)

const product = computed(() => PRODUCT_DETAILS[key.value])

if (!product.value) {
  // 没有该产品：跳回 /products 或 404
  router.replace('/products')
}

// SEO
useSeoMeta({
  title: () => product.value?.name || 'Product',
  description: () => product.value?.intro || 'Product details',
  ogTitle: () => product.value?.name || 'Product',
  ogDescription: () => product.value?.intro || 'Product details',
})
</script>

<template>
  <section class="product-page">
    <div class="product-hero">
      <div class="product-image">
        <img :src="product?.image" :alt="product?.name" />
      </div>
      <div class="product-info">
        <h1 class="product-title">{{ product?.name }}</h1>
        <p v-if="product?.intro" class="product-intro">{{ product?.intro }}</p>
        <p v-if="product?.msrp" class="product-msrp">MSRP: {{ product?.msrp }}</p>
        <NuxtLink to="/products" class="back-link">← {{ t.backToList || 'Back to Products' }}</NuxtLink>
      </div>
    </div>

    <!-- 详情：放大卡片 + 暗背景的感觉 -->
    <div class="product-focus">
      <div class="focus-card">
        <div class="focus-media">
          <img :src="product?.image" :alt="product?.name" />
        </div>
        <div class="focus-content">
          <h2>{{ product?.name }}</h2>
          <p>• Packaging history — coming soon</p>
          <p>• Product intro — coming soon</p>
          <p>• Regions ranking — coming soon</p>
          <p>• Monthly sales — (内部数据，不对外展示)</p>
        </div>
      </div>
      <div class="focus-backdrop"></div>
    </div>
  </section>
</template>

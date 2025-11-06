<script setup lang="ts">
import { useRoute, useRouter } from '#imports'
import { useProductDetail } from '~/composables/useProducts'
import { SEO_BASE } from '~/lib/seo.base'
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'

const route = useRoute()
const router = useRouter()
const key = route.params.key as string
const { detail } = useProductDetail(key)

if (!detail.value) router.replace('/products')

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')

// SEO
// 基础 meta
useSeoMeta({
  title: () => detail.value?.name || 'Product',
  description: () => detail.value?.summary || 'Product details',
  ogTitle: () => detail.value?.name || 'Product',
  ogDescription: () => detail.value?.summary || 'Product details',
  ogImage: () => detail.value?.image || SEO_BASE.defaultOgImage,
  twitterCard: 'summary_large_image',
  twitterSite: SEO_BASE.twitter,
})
// Product JSON-LD
const productJsonLd = computed(() => {
  const d = detail.value
  if (!d) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: d.name,
    image: [d.image, ...(d.gallery || [])],
    brand: { '@type': 'Brand', name: SEO_BASE.brand },
    description: d.summary || '',
    // 有价格就补 offers（可选）
    ...(d.price ? {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'MYR',
        price: d.price.toFixed(2),
        availability: 'http://schema.org/InStock',
        url: `https://example.com/products/${key}` // TODO: 上线换域名
      }
    } : {})
  }
})
useHead(() => productJsonLd.value ? ({
  script: [{
    key: `product-${key}`,
    type: 'application/ld+json',
    innerHTML: JSON.stringify(productJsonLd.value)
  }]
}) : {})

// 锁定滚动（可选）
onMounted(() => { document.documentElement.style.overflow = 'hidden' })
onBeforeUnmount(() => { document.documentElement.style.overflow = '' })

const close = () => router.push('/products')
</script>

<template>
  <!-- 覆盖层（点击空白关闭） -->
  <div class="product-modal is-open" @click.self="close">
    <div class="modal-panel" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Close" @click="close">×</button>

      <div v-if="detail" class="modal-body">
        <div class="modal-image">
          <img :src="detail.image" :alt="detail.name" decoding="async" />
        </div>
        <div class="modal-info">
          <h2 class="modal-title">{{ detail.name }}</h2>
          <p v-if="detail.summary" class="modal-summary">{{ detail.summary }}</p>
          <a v-if="detail.url" :href="detail.url" target="_blank" class="btn">Buy</a>
        </div>
      </div>
    </div>
  </div>
</template>

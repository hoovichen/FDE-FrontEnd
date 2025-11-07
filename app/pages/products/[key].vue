<script setup lang="ts">
import { useRoute, useRouter } from '#imports'
import { useProductDetail } from '~/composables/useProducts'
import { SEO_BASE } from '~/lib/seo.base'
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'
import { PRODUCTS_UI_TEXT } from '~/locales/products.ui'

const route = useRoute()
const router = useRouter()
const key = route.params.key as string
const { detail } = useProductDetail(key)

if (!detail.value) router.replace('/products')

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => PRODUCTS_UI_TEXT[l.value])

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
// JSON-LD（offers.url 指向你在 lib 里配置的外部购买地址；canonical 仍由 Nuxt 负责）
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
    ...(d.price ? {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'MYR',
        price: d.price.toFixed(2),
        availability: 'http://schema.org/InStock',
        url: d.url || `https://example.com/products/${key}`,
        seller: { '@type': 'Organization', name: SEO_BASE.brand }
      }
    } : {})
  }
})
useHead(() => productJsonLd.value ? ({
  script: [{ key: `product-${key}`, type: 'application/ld+json', innerHTML: JSON.stringify(productJsonLd.value) }]
}) : {})

// 锁定滚动（可选）
onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  // console.log('[ProductDetail]', key, detail.value)   // 👈 看看 url/name/summary 是否都有
})
onBeforeUnmount(() => { document.documentElement.style.overflow = '' })

const close = () => router.push('/products')

// 为 B2B 友好：不暴露店铺名，只显示“官方零售合作伙伴”
const outboundLabel = computed(() => ui.value.cta?.onShopee || ui.value.cta?.shopNow || 'Shop')
const showPartnerNote = computed(() => true) // 如需开关可用环境变量控制
</script>

<template>
  <div class="product-modal is-open" @click.self="close">
    <div class="pdetail-panel" role="dialog" aria-modal="true">
      <button class="pdetail-close" aria-label="Close" @click="close">×</button>

      <div v-if="detail" class="pdetail-body">
        <div class="pdetail-image">
          <img :src="detail.image" :alt="detail.name" decoding="async" />
        </div>

        <div class="pdetail-info">
          <div>
            <h2 class="pdetail-title">{{ detail.name }}</h2>
            <p v-if="detail.summary" class="pdetail-summary">{{ detail.summary }}</p>
            <p v-if="detail.price" class="pdetail-price">RM {{ detail.price.toFixed(2) }}</p>
          </div>
          <div>
            <div class="pdetail-cta">
              <a v-if="detail.url" class="btn-primary" :href="detail.url" target="_blank" rel="noopener nofollow">
                {{ outboundLabel }}
              </a>
            </div>
            <p v-if="showPartnerNote" class="pdetail-note">
              {{ ui.cta?.soldViaPartners }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

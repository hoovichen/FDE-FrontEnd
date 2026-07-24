<script setup lang="ts">
import { useRoute, useRouter } from '#imports'
import { useProductDetail } from '~/composables/useProducts'
import { SEO_BASE } from '~/lib/seo.base'
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'
import { PRODUCTS_UI_TEXT } from '~/locales/products.ui'
import { getReviewsForProduct } from '~/lib/reviews.data'
import { REVIEWS_UI } from '~/locales/reviews'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const key = route.params.key as string
const { detail } = useProductDetail(key)
const siteUrl = computed(() => String(config.public.siteUrl || 'https://www.firedragonmy.com').replace(/\/$/, ''))

if (!detail.value) router.replace('/products')

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => PRODUCTS_UI_TEXT[l.value])
const reviewUi = computed(() => REVIEWS_UI[l.value])

// SEO
// 基础 meta
useSeoMeta({
  title: () => detail.value?.name || 'Product',
  description: () => detail.value?.description || detail.value?.summary || 'Product details',
  ogTitle: () => detail.value?.name || 'Product',
  ogDescription: () => detail.value?.description || detail.value?.summary || 'Product details',
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
    description: d.description || d.summary || '',
    ...(d.price ? {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'MYR',
        price: d.price.toFixed(2),
        availability: 'http://schema.org/InStock',
        url: d.url || `${siteUrl.value}/products/${key}`,
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
})
onBeforeUnmount(() => { document.documentElement.style.overflow = '' })

const close = () => router.push('/products')

// 为 B2B 友好：不暴露店铺名，只显示“官方零售合作伙伴”
const outboundLabel = computed(() => ui.value.cta?.onShopee || ui.value.cta?.shopNow || 'Shop')
const outboundLabel2 = computed(() => ui.value.cta?.onLazada || ui.value.cta?.shopNow || 'Shop')
const showPartnerNote = computed(() => true) // 如需开关可用环境变量控制
const labels = computed(() => {
  if (l.value === 'zh') {
    return {
      highlights: '产品特色',
      serving: '食用建议',
      specs: '产品信息',
      price: '价格',
      weight: '净重',
      storage: '储存方式',
      shelfLife: '保质期',
      origin: '产地',
      ingredients: '成分',
      allergen: '过敏原信息',
      packaging: '包装类型',
      packSize: '整箱重量',
      specialtyDiet: '饮食特性',
      story: '产品故事'
    }
  }
  if (l.value === 'bm') {
    return {
      highlights: 'Sorotan Produk',
      serving: 'Cadangan Hidangan',
      specs: 'Maklumat Produk',
      price: 'Harga',
      weight: 'Berat Bersih',
      storage: 'Penyimpanan',
      shelfLife: 'Jangka Hayat',
      origin: 'Asal',
      ingredients: 'Bahan-bahan',
      allergen: 'Maklumat Alergen',
      packaging: 'Jenis Pembungkusan',
      packSize: 'Saiz Pek',
      specialtyDiet: 'Diet Khas',
      story: 'Kisah Produk'
    }
  }
  return {
    highlights: 'Product Highlights',
    serving: 'Serving Suggestions',
    specs: 'Product Information',
    price: 'Price',
    weight: 'Net Weight',
    storage: 'Storage',
    shelfLife: 'Shelf Life',
    origin: 'Origin',
    ingredients: 'Ingredients',
    allergen: 'Allergen Information',
    packaging: 'Packaging Type',
    packSize: 'Pack Size',
    specialtyDiet: 'Specialty Diet',
    story: 'Product Story'
  }
})
const primaryHighlights = computed(() => detail.value?.highlights?.slice(0, 2) ?? [])
const primarySpecs = computed(() => {
  const d = detail.value
  if (!d) return []
  return [
    d.price ? { label: labels.value.price, value: `RM ${d.price.toFixed(2)} MYR` } : null,
    d.specs?.weight ? { label: labels.value.weight, value: d.specs.weight } : null,
    d.specs?.shelfLife ? { label: labels.value.shelfLife, value: d.specs.shelfLife } : null,
    d.specs?.storage ? { label: labels.value.storage, value: d.specs.storage } : null
  ].filter(Boolean) as Array<{ label: string; value: string }>
})
const specRows = computed(() => {
  const specs = detail.value?.specs
  if (!specs) return []
  return [
    { label: labels.value.weight, value: specs.weight },
    { label: labels.value.storage, value: specs.storage },
    { label: labels.value.shelfLife, value: specs.shelfLife },
    { label: labels.value.origin, value: specs.origin },
    { label: labels.value.ingredients, value: specs.ingredients },
    { label: labels.value.allergen, value: specs.allergenInformation },
    { label: labels.value.packaging, value: specs.packagingType },
    { label: labels.value.packSize, value: specs.packSize },
    { label: labels.value.specialtyDiet, value: specs.specialtyDiet }
  ].filter(row => row.value)
})
const reviewPreview = computed(() => getReviewsForProduct(key, 1))
</script>

<template>
  <div class="product-modal is-open" @click.self="close">
    <div class="pdetail-panel" role="dialog" aria-modal="true">
      <button class="pdetail-close" :aria-label="ui.cta?.backToList || 'Back to products'" @click="close">
        {{ ui.cta?.backToList || 'Back to products' }}
      </button>

      <div v-if="detail" class="pdetail-body">
        <div class="pdetail-image">
          <NuxtImg :src="detail.image" :alt="detail.name" decoding="async" />
        </div>

        <div class="pdetail-info">
          <div class="pdetail-copy">
            <p class="pdetail-eyebrow">{{ ui.all }}</p>
            <h2 class="pdetail-title">{{ detail.name }}</h2>
            <p v-if="detail.summary" class="pdetail-summary">
              {{ detail.summary }}
            </p>

            <div v-if="primarySpecs.length" class="pdetail-keyfacts">
              <div v-for="row in primarySpecs" :key="row.label" class="pdetail-keyfact">
                <span class="pdetail-keyfact__label">{{ row.label }}</span>
                <strong>{{ row.value }}</strong>
              </div>
            </div>

            <div class="pdetail-actions">
              <a v-if="detail.url" class="btn-primary" :href="detail.url" target="_blank" rel="noopener nofollow">
                {{ outboundLabel }}
              </a>
              <a v-if="detail.url2" class="btn-primary-2" :href="detail.url2" target="_blank" rel="noopener nofollow">
                {{ outboundLabel2 }}
              </a>
            </div>
            <p v-if="showPartnerNote" class="pdetail-note">
              {{ ui.cta?.soldViaPartners }}
            </p>

            <section v-if="primaryHighlights.length" class="pdetail-priority">
              <h3>{{ labels.highlights }}</h3>
              <ul>
                <li v-for="item in primaryHighlights" :key="item">{{ item }}</li>
              </ul>
            </section>

            <section v-if="reviewPreview.length" class="pdetail-proof" aria-labelledby="pdetail-proof-title">
              <h3 id="pdetail-proof-title">{{ reviewUi.detailTitle }}</h3>
              <p>{{ reviewPreview[0].quote }}</p>
              <NuxtLink to="/reviews">{{ reviewUi.detailLink }}</NuxtLink>
            </section>
          </div>

          <div class="pdetail-sections">
            <details v-if="detail.description" class="pdetail-section">
              <summary>{{ labels.story }}</summary>
              <p>{{ detail.description }}</p>
            </details>

            <details v-if="detail.highlights?.length && detail.highlights.length > 2" class="pdetail-section">
              <summary>{{ labels.highlights }}</summary>
              <ul>
                <li v-for="item in detail.highlights" :key="item">{{ item }}</li>
              </ul>
            </details>

            <details v-if="detail.servingSuggestions?.length" class="pdetail-section">
              <summary>{{ labels.serving }}</summary>
              <ul>
                <li v-for="item in detail.servingSuggestions" :key="item">{{ item }}</li>
              </ul>
            </details>

            <details v-if="specRows.length" class="pdetail-section pdetail-section--specs">
              <summary>{{ labels.specs }}</summary>
              <dl class="pdetail-specs">
                <template v-for="row in specRows" :key="row.label">
                  <dt>{{ row.label }}</dt>
                  <dd>{{ row.value }}</dd>
                </template>
              </dl>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

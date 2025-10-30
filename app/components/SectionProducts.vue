<script setup lang="ts">
import { PRODUCTS } from '~/lib/products.data'
import { PRODUCTS_TEXT, type LangCode } from '~/locales/products'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const t = computed(() => PRODUCTS_TEXT[(lang.value as LangCode) || 'en'])

// —— 仅用于“手机端初次进来把第2张滚到中间”的体验优化 —— //
const railRef = ref<HTMLDivElement | null>(null)
const cardRefs = ref<HTMLDivElement[]>([])

onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches
  if (!isMobile) return

  // 下一帧滚到第2张（索引1），滚动到居中位置
  nextTick(() => {
    const second = cardRefs.value[1]
    second?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, inline: 'center', block: 'nearest' })
  })
})
</script>

<template>
  <section id="products" class="products">
    <div class="products__inner">
      <!-- 左侧文案 + 虚化背景 -->
      <div class="products__text has-bg">
        <!-- 背景由 CSS ::before 渲染；这里仅放文本内容 -->
        <h2 class="products__title">{{ t.title }}</h2>
        <p class="products__desc">{{ t.desc }}</p>
        <a href="https://shop.example.com" target="_blank" class="products__btn">
          {{ t.shopNow }}
        </a>
      </div>

      <!-- ② 产品展示: :to="products/${p.key}"  目前p.key不太行-->
      <div class="products__grid card-grid" ref="railRef">
        <NuxtLink
          v-for="(p, i) in PRODUCTS"
          :key="p.key"
          class="card"
          :to="`/products/${p.key}`"
          :ref="(el: HTMLDivElement) => { if (el) cardRefs[i] = el as HTMLDivElement }"
        >
          <img :src="p.image" :alt="p.name" loading="lazy" decoding="async" />
          <div class="card__title">{{ p.name }}</div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

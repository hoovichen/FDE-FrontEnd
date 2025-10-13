<script setup lang="ts">
import { PRODUCTS } from '~/lib/products.data'
import { PRODUCTS_TEXT, type LangCode } from '~/locales/products'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const t = computed(() => PRODUCTS_TEXT[(lang.value as LangCode) || 'zh'])
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

      <!-- 右侧产品展示 -->
      <div class="products__grid card-grid">
        <div v-for="p in PRODUCTS" :key="p.key" class="card">
          <img :src="p.image" :alt="p.name" loading="lazy" decoding="async" />
          <div class="card__title">{{ p.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { useScrollToId } from '~/composables/useScrollToId'
import { NAV_ITEMS } from '~/lib/nav.config' 
import { NAV_TEXT } from '~/locales/nav' 
import { useLanguage } from '~/composables/useLanguage'

// 翻译常量
const { lang, setLang } = useLanguage()
const labels = computed(() => NAV_TEXT[lang.value])

// 左右导航
const leftItems = computed(() => NAV_ITEMS.filter(i => i.side === 'left'))
const rightItems = computed(() => NAV_ITEMS.filter(i => i.side === 'right'))

// 路由高亮常量
const route = useRoute()
const isActive = (to: string) => route.path === to

</script>

<template>
  <!-- 包含在 layouts/default.vue 的 .header 内 -->
  <nav class="nav" aria-label="主导航">
    <!-- 网页版菜单 -->
      <!-- 左导航 -->
     <div class="nav--left">
      <NuxtLink
        v-for="it in leftItems"
        :to="it.to"
        :key="it.key"
        class="nav__link"
        :aria-current="isActive(it.to) ? 'true' : 'false'"
      >
        {{ labels[it.key] }}
      </NuxtLink>
    </div>
    <!-- 中心LOGO -->
    <div class="logo">
      <NuxtLink to="/" aria-label="品牌主页" class="nav--logo logo">
        <img src="/logo-3-topic.png" alt="火龙企业标志 | Fire Dragon Enterprise Logo">
      </NuxtLink>
    </div>
    <!-- 右导航 -->
    <div class="nav--right">
      <NuxtLink 
        v-for="it in rightItems"
        :to="it.to"
        :key="it.key"
        class="nav__link"
        :aria-current="isActive(it.to) ? 'true' : 'false'"
      >{{ labels[it.key] }}</NuxtLink>
      </div>
  </nav>
    <!-- 语言按钮 -->
  <div class="lang-switch">
    <button
      v-for="code in ['zh', 'en', 'bm']"
      :key="code"
      @click="setLang(code)"
      :class="{ active: lang === code }"
    >
      {{ code.toUpperCase() }}
    </button>
  </div>
</template>

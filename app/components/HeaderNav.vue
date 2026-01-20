<script setup lang="ts">
import { NAV_ITEMS } from '~/lib/nav.config'
import { NAV_TEXT } from '~/locales/nav'
import { useLanguage } from '~/composables/useLanguage'
import { useDisclosure } from '~/composables/useDisclosure'
import { useClickOutside } from '~/composables/useClickOutside'

const { lang, setLang } = useLanguage()
const LANGS = ['zh', 'en', 'bm'] as const
const labels = computed(() => NAV_TEXT[lang.value])

// 左右菜单
const leftItems  = computed(() => NAV_ITEMS.filter(i => i.side === 'left'))
const rightItems = computed(() => NAV_ITEMS.filter(i => i.side === 'right'))

// 路由高亮
const route = useRoute()
const isActive = (to: string) => route.path === to

// 语言下拉
const langMenu = useDisclosure(false)
const { el: langRef } = useClickOutside<HTMLDivElement>(() => langMenu.close())

// 移动端抽屉
const mobileItems = computed(() => NAV_ITEMS) // 移动端合并成一列

// 抽屉（移动下拉面板）
const {
  isOpen: isSheetOpen,
  open: openSheet,
  close: closeSheet,
  toggle: toggleSheet,
} = useDisclosure(false)

// 键盘：Esc 同时关闭抽屉与语言菜单
const onEsc = (e: KeyboardEvent) => {
  if (e.key !== 'Escape') return
  if (langMenu.isOpen.value) langMenu.close()
  if (e.key === 'Escape' && isSheetOpen.value) closeSheet()
}
onMounted(() => document.addEventListener('keydown', onEsc))
onBeforeUnmount(() => document.removeEventListener('keydown', onEsc))

// 临时的小逻辑，当画面从小变大的时候，自动关闭Sheet

</script>


<template>
  <nav class="nav" aria-label="主导航">
    <!-- 左 -->
    <div class="nav--left">
      <NuxtLink
        v-for="it in leftItems"
        :key="it.key"
        :to="it.to"
        class="nav__link"
        :aria-current="isActive(it.to) ? 'page' : undefined"
      >{{ labels[it.key] }}</NuxtLink>
    </div>

    <!-- 中：Logo -->
    <NuxtLink to="/" aria-label="品牌主页" class="nav--logo">
      <NuxtImg class="logo" src="/logo-3-topic.png" alt="Fire Dragon Enterprise Logo" loading="lazy"/>
    </NuxtLink>

    <!-- 右 -->
    <div class="nav--right">
      <div class="nav__right-links">
        <NuxtLink
          v-for="it in rightItems"
          :key="it.key"
          :to="it.to"
          class="nav__link"
          :aria-current="isActive(it.to) ? 'page' : undefined"
        >{{ labels[it.key] }}</NuxtLink>
      </div>

      <!-- 语言下拉 -->
      <div class="lang" ref="langRef">
        <button
          id="lang-btn"
          class="lang__btn"
          :aria-expanded="langMenu.isOpen.value ? 'true' : 'false'"
          aria-haspopup="menu"
          aria-controls="lang-menu"
          @click="langMenu.toggle()"
        >
          🌐 <span class="lang__current">{{ lang.toUpperCase() }}</span>
          <span class="lang__caret" aria-hidden="true">▾</span>
        </button>

        <div
          v-show="langMenu.isOpen.value"
          id="lang-menu"
          class="lang__menu"
          role="menu"
          tabindex="-1"

        >
          <button
            v-for="(code, idx) in LANGS"
            :key="code"
            ref="menuItems"
            class="lang__item"
            :class="{ 'is-active': lang === code }"
            role="menuitemradio"
            :aria-checked="String(lang === code)"
            @click="setLang(code); langMenu.close()"
          >
            <span class="lang__dot" :class="{ 'is-active': lang === code }"></span>
            {{ code.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
    <!-- 移动端汉堡 -->
    <button class="nav__burger" aria-label="打开菜单" @click="toggleSheet()">☰</button>
  </nav>
  <!-- 移动：从 Header 下滑的“下拉面板” -->
  <div
    class="sheet"
    :class="{ 'is-open': isSheetOpen }"
    role="dialog"
    aria-modal="true"
    aria-labelledby="mobile-nav-title"
  >
    <!-- 遮罩：点击关闭 -->
    <div class="sheet__mask" @click="closeSheet()"></div>

    <!-- 面板本体（从顶部下滑） -->
    <div class="sheet__panel">
      <div class="sheet__inner">
        <h2 id="mobile-nav-title" class="visually-hidden">移动主导航</h2>

        <nav class="sheet__nav" aria-label="移动主导航">
          <NuxtLink
            v-for="(it, idx) in mobileItems"
            :key="it.key"
            :to="it.to"
            class="sheet__link"
            @click="closeSheet()"
            :ref="idx === 0 ? 'firstLink' : undefined"
          >
            {{ labels[it.key] }}
          </NuxtLink>
        </nav>

        <!-- 语言（可选：放在菜单底部） -->
        <div class="sheet__langs">
          <button
            v-for="code in LANGS"
            :key="code"
            class="sheet__lang"
            :class="{ 'is-active': lang === code }"
            @click="setLang(code as any); closeSheet()"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'
import { useDisclosure } from '~/composables/useDisclosure'
import { useClickOutside } from '~/composables/useClickOutside'

const { lang, switchLang } = useLanguage()
const LANGS = ['zh', 'en', 'bm'] as const
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const labels = computed(() => HOME_REDESIGN_TEXT[l.value].nav)

const navItems = computed(() => [
  { key: 'home', to: '/', label: labels.value.home },
  { key: 'catalog', to: '/products', label: labels.value.catalog },
  { key: 'contact', to: '/contact', label: labels.value.contact },
])

// 路由高亮
const route = useRoute()
const isActive = (to: string) => to === '/' ? route.path === '/' : route.path === to || route.path.startsWith(`${to}/`)

// 语言下拉
const langMenu = useDisclosure(false)
const { el: langRef } = useClickOutside<HTMLDivElement>(() => langMenu.close())

// 移动端抽屉
const mobileItems = computed(() => navItems.value)

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

</script>


<template>
  <nav class="nav" aria-label="Main navigation">
    <div class="nav__links">
      <NuxtLink
        v-for="it in navItems"
        :key="it.key"
        :to="it.to"
        class="nav__link"
        :aria-current="isActive(it.to) ? 'page' : undefined"
      >{{ it.label }}</NuxtLink>
    </div>

    <div class="nav__actions">
      <div class="lang" ref="langRef">
        <button
          id="lang-btn"
          class="lang__btn"
          :aria-expanded="langMenu.isOpen.value ? 'true' : 'false'"
          aria-haspopup="menu"
          aria-controls="lang-menu"
          :aria-label="labels.language"
          @click="langMenu.toggle()"
        >
          <span class="lang__current">{{ lang.toUpperCase() }}</span>
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
            @click="() => { switchLang(code); langMenu.close() }"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>
      </div>

      <button class="nav__burger" type="button" :aria-label="labels.openMenu" @click="toggleSheet()">
        Menu
      </button>
    </div>
  </nav>

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
            v-for="it in mobileItems"
            :key="it.key"
            :to="it.to"
            class="sheet__link"
            @click="closeSheet()"
          >
            {{ it.label }}
          </NuxtLink>
        </nav>

        <!-- 语言（可选：放在菜单底部） -->
        <div class="sheet__langs">
          <button
            v-for="code in LANGS"
            :key="code"
            class="sheet__lang"
            :class="{ 'is-active': lang === code }"
            @click="() => { switchLang(code); closeSheet() }"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

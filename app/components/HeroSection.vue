<!-- app/components/HeroSection.vue -->
<script setup lang="ts">
import { HERO_SLIDES_BASE } from '~/lib/hero.data'
import { HERO_TEXT, type LangCode } from '~/locales/hero'
import { useScrollToId } from '~/composables/useScrollToId'
import { useCarousel } from '~/composables/useCarousel'

const SHOP_URL = 'https://shop.example.com'
// 翻译状态
const { lang } = useLanguage()

/** 把“基础数据 + 文案”合并成当前语言的可渲染数据 */
const slides = computed(() => {
  const l = (lang.value as LangCode) || 'en'
  return HERO_SLIDES_BASE.map(base => ({
    ...base,
    ...HERO_TEXT[l][base.key], // 合并 title / mainContent / subContent / 文案
  }))
})

/** 轮播逻辑用合并后的长度 */
const { index, next, prev, goTo, start, stop } = useCarousel(
  computed(() => slides.value.length).value, // 初始值（后续 reactive 用 watch 也行）
  6000
)
const scrollToId = useScrollToId()
// 键盘支持：左右切换
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') 
    next()
  else if (e.key === 'ArrowLeft') 
    prev()
}
</script>

<template>
  <section id="hero" class="section hero" aria-label="品牌主视觉">
    <!-- ViewPort -->
    <div
      class="hero__viewport"
      tabindex="0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Banner 轮播"
      @mouseenter="stop" @mouseleave="stop" @keydown="onKey"
    >
      <!-- Slides -->
      <div class="hero__slides">
        <article
          v-for="(s, i) in slides"
          :key="s.key"
          class="hero__slide"
          :class="[
            s.align,          // 'text-left' | 'text-right'
            { 'is-active': index === i }
          ]"
          :style="{
            '--text': (s.ratio?.[0] ?? 40) + '%',
            '--image': (s.ratio?.[1] ?? 60) + '%'
          }"
          role="group"
          :aria-roledescription="'slide'"
          :aria-label="`${i+1} / ${slides.length}`"
          v-show="index === i"
        >
          <div class="hero__text">
            <h1 class="hero__title">{{ s.title }}</h1>
            <h4 v-if="s.mainContent" class="hero__main">{{ s.mainContent }}</h4>
            <p v-if="s.subContent" class="hero__sub">{{ s.subContent }}</p>
            <button
                v-if="s.cta && s.ctaLabel"
                class="btn btn--ghost"
                @click="scrollToId(s.cta.targetId)"
              >{{ s.ctaLabel }}</button>
          </div>
          <div class="hero__image">
            <img
              :src="s.image"
              alt=""
              :loading="i === 0 ? 'eager' : 'lazy'"
              :fetchpriority="i === 0 ? 'high' : 'low'"
              decoding="async"
            />
          </div>
        </article>
      </div>
      <!-- 透明可拖动条（scrubber） -->
      <div class="hero__scrubber">
        <input
          type="range"
          :min="0"
          :max="slides.length - 1"
          step="1"
          :value="index"
          @input="(e:any) => { stop(); goTo(parseInt(e.target.value)); }"
          @change="start"
          aria-label="切换 Banner"
        />
      </div>
    </div>
  </section>
</template>

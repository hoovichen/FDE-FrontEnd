<!-- app/components/HeroSection.vue -->
<script setup lang="ts">
import { HERO_SLIDES_BASE } from '~/lib/hero.data'
import { HERO_TEXT, type LangCode } from '~/locales/hero'
import { useScrollToId } from '~/composables/useScrollToId'
import { useCarousel } from '~/composables/useCarousel'
import { useLanguage } from '~/composables/useLanguage'


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
// 指示器点击
const onDotClick = (i: number) => {
  stop()
  goTo(i)
}
// 悬停暂停，离开继续（当前 @mouseleave="stop" ）
const onEnter = () => stop()
const onLeave = () => stop()

// 生成占位“图标/字母”（也可换成真实图片的小缩略图）
/** 指示器数据：key/label/缩略图（先用大图兜底） */
const dots = computed(() => {
  return slides.value.map(s => ({
    key: s.key,
    label: s.key,        // 无障碍与 tooltip 用
    thumb: undefined as string | undefined,  // 未来可换成真正的缩略图
  }))
})
/** 精细化：给特定 key 配专门 thumb */
// const THUMB_MAP: Partial<Record<HeroSlideBase['key'], string>> = {
//   'top-product': '/images/thumbs/top-product.png'
// }
// const dots = computed(() => slides.value.map(s => ({
//   key: s.key,
//   label: s.title ?? s.key,
//   thumb: THUMB_MAP[s.key] ?? s.image,
// })))
</script>

<template>
  <section id="hero" class="section hero" aria-label="品牌主视觉">
    <!-- ViewPort -->
    <div class="hero__viewport" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Banner 轮播"
      @mouseenter="onEnter" @mouseleave="onLeave" @keydown="onKey">
      <!-- Slides -->
      <div class="hero__track" :style="{ transform: `translateX(-${index * 100}%)` }">
        <article v-for="(s, i) in slides" :key="s.key" class="hero__slide" :class="[
          s.align,          // 'text-left' | 'text-right'
          { 'is-active': index === i }
        ]" :style="{
          '--text': (s.ratio?.[0] ?? 40) + '%',
          '--image': (s.ratio?.[1] ?? 60) + '%'
        }" role="group" :aria-roledescription="'slide'" :aria-label="`${i + 1} / ${slides.length}`">
          <div class="hero__text">
            <h1 class="hero__title">{{ s.title }}</h1>
            <h4 v-if="s.mainContent" class="hero__main">{{ s.mainContent }}</h4>
            <p v-if="s.subContent" class="hero__sub">{{ s.subContent }}</p>
            <button v-if="s.shopCta && s.shopLabel" class="btn btn--ghost" @click="scrollToId(s.shopCta.url)">{{
              s.shopLabel
            }}</button>
          </div>
          <div class="hero__image">
            <NuxtImg preload :src="s.image" alt="" :loading="i === 0 ? 'eager' : 'lazy'"
              :fetchpriority="i === 0 ? 'high' : 'low'" decoding="async" />
          </div>
        </article>
      </div>
      <!-- 指示器：ol / li / button -->
      <ol class="hero__dots" role="tablist" aria-label="切换产品">
        <li v-for="(d, i) in dots" :key="`dot-${d.key}`" class="hero__dot">
          <button role="tab" class="hero__dot-btn" :aria-selected="String(index === i)"
            :aria-controls="`slide-${d.key}`" :tabindex="index === i ? 0 : -1" @click="onDotClick(i)" :title="d.label">
            <!-- 有 thumb 用图；没有则用占位字母 -->
            <NuxtImg v-if="d.thumb" class="hero__dot-thumb" :src="d.thumb" :alt="d.label" loading="lazy"
              decoding="async" fit="cover" format="webp" />
            <span v-else class="hero__dot-icon" aria-hidden="true">
              {{ d.label }}
            </span>
            <span class="visually-hidden">{{ d.label }}</span>
          </button>
        </li>
      </ol>
    </div>
  </section>
</template>

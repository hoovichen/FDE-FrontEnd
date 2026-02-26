<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import type { LangCode, FaqEntitySearchHit } from '~/lib/faq/faq.types'
import { FAQ_ENTITIES } from '~/lib/faq/faq.entities'
import { searchFaqEntities, buildSuggestionTopics } from '~/lib/faq/faq.search'
import { FAQ_UI } from '~/locales/faq/faq.ui'
import { useHead } from '#app'

const route = useRoute()

// 1️⃣ language
const lang = computed<LangCode>(() => {
  const l = String(route.params.lang || 'en')
  return (l === 'zh' || l === 'en' || l === 'bm') ? l : 'en'
})

// 2️⃣ ui
const ui = computed(() => FAQ_UI[lang.value])

// 3️⃣ classic data（当前语言）
const list = computed(() => FAQ_ENTITIES.map(e => e.i18n[lang.value]))

// 4️⃣ state
const q = ref('')
const showClassic = ref(false)

const state = ref<'idle' | 'thinking' | 'answered' | 'notfound'>('idle')
const hits = ref<FaqEntitySearchHit[]>([])
const hit = computed<FaqEntitySearchHit | null>(() => hits.value[0] || null)

const suggestions = computed(() => buildSuggestionTopics(lang.value))

// 5️⃣ search
function submit() {
  const query = q.value.trim()
  if (!query) {
    state.value = 'idle'
    hits.value = []
    return
  }

  state.value = 'thinking'
  hits.value = []

  window.setTimeout(() => {
    const result = searchFaqEntities(FAQ_ENTITIES, query, {
      displayLang: lang.value,
      limit: 5,
    })

    hits.value = result

    // ✅ 判定 answered / notfound：
    // - 只有 primary 才认为“找到了明确答案”
    // - 否则进入 notfound（但仍显示推荐）
    if (result.length && result[0] && result[0].tier === 'primary') {
      state.value = 'answered'
    } else {
      state.value = 'notfound'
    }
  }, 180)
}

function clearAll() {
  q.value = ''
  hits.value = []
  state.value = 'idle'
}

// 6️⃣ dynamic placeholder
const placeholder = ref('')
let timer: any = null

function rotatePlaceholder() {
  const arr = ui.value.placeholderExamples
  placeholder.value = arr[Math.floor(Math.random() * arr.length)] || ''
}

onMounted(() => {
  rotatePlaceholder()
  timer = setInterval(rotatePlaceholder, 4000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

// 7️⃣ SEO (meta)
useSeoMeta({
  title: () => ui.value.seoTitle,
  description: () => ui.value.seoDesc,
  ogTitle: () => ui.value.seoTitle,
  ogDescription: () => ui.value.seoDesc,
  ogType: 'website',
})

// 8️⃣ SEO (FAQPage JSON-LD): 用 featured 固定注入，别跟搜索动态变化
const featuredForSeo = computed(() => {
  return FAQ_ENTITIES
    .filter(e => e.featured)
    .slice(0, 10)
    .map(e => e.i18n[lang.value])
})

const faqJsonLd = computed(() => {
  const items = featuredForSeo.value
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(faqJsonLd.value),
    },
  ],
})
</script>

<template>
  <section class="faq-page">
    <div class="faq-veil"></div>

    <div class="container faq-wrap">
      <header class="faq-head">
        <h1 class="faq-title">{{ ui.title }}</h1>
        <p class="faq-desc muted">{{ ui.desc }}</p>
      </header>

      <!-- Search Panel -->
      <div class="faq-panel">
        <form class="faq-search" @submit.prevent="submit">
          <div class="faq-search__box">
            <input v-model="q" class="faq-search__input" type="search" autocomplete="off" :placeholder="placeholder"
              @keydown.enter.prevent="submit" />

            <button class="faq-search__btn" type="submit" aria-label="Search">
              ⌕
            </button>
          </div>

          <div class="faq-actions">
            <button class="faq-action" type="button" @click="submit">
              {{ ui.searchBtn }}
            </button>

            <button class="faq-action faq-action--ghost" type="button" @click="showClassic = !showClassic">
              {{ showClassic ? ui.hideClassic : ui.openClassic }}
            </button>
          </div>
        </form>

        <!-- Answer -->
        <FaqAnswer :ui="ui" :query="q" :hit="hit" :hits="hits" :suggestions="suggestions" :state="state" />
      </div>

      <!-- Classic -->
      <transition name="faq-slide">
        <div v-if="showClassic" class="faq-classicWrap">
          <FaqClassic :items="list" :lang="lang" :ui="ui" />
        </div>
      </transition>
    </div>
  </section>
</template>
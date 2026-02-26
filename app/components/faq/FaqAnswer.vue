<script setup lang="ts">
import { ref, watch, onBeforeUnmount, computed } from 'vue'
import type { FaqUiText } from '~/locales/faq/faq.ui'
import type { FaqEntitySearchHit } from '~/lib/faq/faq.types'

const props = defineProps<{
  ui: FaqUiText
  query: string
  hit: FaqEntitySearchHit | null
  hits: FaqEntitySearchHit[]
  suggestions: string[]
  state: 'idle' | 'thinking' | 'answered' | 'notfound'
}>()

const shown = ref('')
let timer: any = null

function typeText(text: string) {
  clearInterval(timer)
  shown.value = ''
  if (!text) return
  const speed = 10
  let i = 0
  timer = setInterval(() => {
    i++
    shown.value = text.slice(0, i)
    if (i >= text.length) clearInterval(timer)
  }, speed)
}

watch(
  () => [props.state, props.hit?.item?.a],
  () => {
    if (props.state === 'answered' && props.hit?.item?.a) typeText(props.hit.item.a)
    else shown.value = ''
  },
  { immediate: true }
)

onBeforeUnmount(() => clearInterval(timer))

const recommended = computed(() => {
  if (!props.hits?.length) return []
  return props.hits
    .filter(h => h.score > 0)
    .slice(0, 3)
})

/** ✅ 可选：柔和高亮（默认关闭，不会出现你讨厌的“红色高亮”） */
const enableHighlight = false

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightSoft(text: string, query: string): string {
  const q = (query || '').trim()
  if (!q || q.length < 2) return text
  // 只做非常轻量的高亮：按空格拆 token（不做复杂分词）
  const tokens = q.toLowerCase().split(/\s+/).filter(Boolean).slice(0, 6)
  if (!tokens.length) return text

  let out = text
  for (const t of tokens) {
    if (t.length < 2) continue
    const re = new RegExp(`(${escapeRegExp(t)})`, 'ig')
    out = out.replace(re, '<mark class="faq-hl">$1</mark>')
  }
  return out
}

const recoAnswerHtml = (a: string) => {
  if (!enableHighlight) return a
  return highlightSoft(a, props.query)
}
const recoQuestionHtml = (q: string) => {
  if (!enableHighlight) return q
  return highlightSoft(q, props.query)
}
</script>

<template>
  <section class="faq-answer" aria-live="polite">
    <div class="faq-answer__head">
      <div class="faq-answer__label">{{ ui.answerLabel }}</div>
      <div class="faq-answer__status" v-if="state === 'thinking'">
        {{ ui.thinking }}
      </div>
    </div>

    <!-- idle -->
    <div v-if="state === 'idle'" class="faq-answer__hint">
  <span class="faq-answer__hintLead">{{ ui.suggestionIntro }}</span>
  <span class="faq-answer__hintText">
    {{ ui.placeholderExamples?.[0] ? `（ps: ${ui.placeholderExamples[0]}）` : '' }}
  </span>
</div>

    <!-- thinking -->
    <div v-else-if="state === 'thinking'" class="faq-answer__bubble">
      <span class="dot" /><span class="dot" /><span class="dot" />
    </div>

    <!-- notfound -->
    <div v-else-if="state === 'notfound'" class="faq-answer__notfound">
      <div class="faq-answer__hint">
        {{ ui.noResult }}
      </div>

      <div v-if="recommended.length" class="faq-reco">
        <div class="faq-reco__head">
          <div class="faq-reco__title">{{ ui.answerLabel }}</div>
          <div class="faq-reco__sub muted">Recommended</div>
        </div>

        <div class="faq-reco__list">
          <article v-for="h in recommended" :key="h.entity.id" class="faq-reco__item">
            <div class="faq-reco__q" v-if="h.item?.q">
              <span class="faq-reco__qPrefix">Q:</span>
              <span v-if="!enableHighlight">{{ h.item.q }}</span>
              <span v-else v-html="recoQuestionHtml(h.item.q)"></span>
            </div>

            <div class="faq-reco__a" v-if="h.item?.a">
              <span v-if="!enableHighlight">{{ h.item.a }}</span>
              <span v-else v-html="recoAnswerHtml(h.item.a)"></span>
            </div>

            <div class="faq-answer__meta" v-if="h.item">
              <span class="pill">#{{ h.item.category }}</span>
              <span class="pill pill--soft">{{ h.tier }}</span>
            </div>
          </article>
        </div>
      </div>

      <div class="faq-answer__hint" v-if="suggestions.length">
        <span class="faq-answer__hintLead">{{ ui.suggestionIntro }}</span>
        <div class="faq-suggest">
        </div>
      </div>
    </div>

    <!-- answered -->
    <div v-else class="faq-answer__content">
      <div class="faq-answer__q" v-if="hit?.item?.q">Q: {{ hit.item.q }}</div>
      <div class="faq-answer__a">{{ shown }}</div>
    </div>
  </section>
</template>
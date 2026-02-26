<script setup lang="ts">
import { computed, ref } from 'vue'
import type { FaqItem, FaqCategoryKey, LangCode } from '~/lib/faq/faq.types'
import { FAQ_CATEGORY_META } from '~/lib/faq/data/faq.categories'
import { FAQ_CATEGORY_ORDER, groupFaqByCategory, filterFaqInCategory } from '~/lib/faq/faq.classic.helpers'
import type { FaqUiText } from '~/locales/faq/faq.ui'

const props = defineProps<{
  items: FaqItem[]
  lang: LangCode
  ui: FaqUiText
}>()

const openGroup = ref<FaqCategoryKey | null>(null)
const groupQuery = ref<Partial<Record<FaqCategoryKey, string>>>({})

function toggleGroup(cat: FaqCategoryKey) {
  openGroup.value = (openGroup.value === cat ? null : cat)
}

function setGroupQuery(cat: FaqCategoryKey, val: string) {
  groupQuery.value = { ...groupQuery.value, [cat]: val }
}

const groups = computed(() => {
  const base = groupFaqByCategory(props.items)
  const meta = FAQ_CATEGORY_META[props.lang]

  return base.map((g) => ({
    key: g.key,
    label: meta[g.key].label,
    desc: meta[g.key].desc,
    items: g.items,
  }))
})
</script>

<template>
  <section class="faq-classic">
    <div class="faq-classic__head">
      <div class="faq-classic__title">{{ ui.classicTitle }}</div>
      <div class="faq-classic__sub muted">{{ ui.classicDesc }}</div>
    </div>

    <!-- 分类索引 -->
    <nav class="faq-classic__nav" aria-label="FAQ categories">
      <a
        v-for="g in groups"
        :key="g.key"
        class="faq-classic__chip"
        :href="`#faq-cat-${g.key}`"
      >
        <span class="faq-classic__chipText">{{ g.label }}</span>
        <span class="faq-classic__chipCount">{{ g.items.length }}</span>
      </a>
    </nav>

    <div class="faq-classic__groups">
      <section
        v-for="g in groups"
        :key="g.key"
        class="faq-group"
        :id="`faq-cat-${g.key}`"
      >
        <button class="faq-group__head" type="button" @click="toggleGroup(g.key)">
          <div class="faq-group__title">
            <div class="faq-group__titleMain">
              {{ g.label }}
              <span class="faq-group__count">{{ g.items.length }}</span>
            </div>
            <div class="faq-group__desc">{{ g.desc }}</div>
          </div>
          <div class="faq-group__chev" :data-open="openGroup === g.key">⌄</div>
        </button>

        <div v-show="openGroup === g.key" class="faq-group__body">
          <div class="faq-group__filter">
            <input
              class="faq-group__input"
              type="search"
              autocomplete="off"
              :value="groupQuery[g.key] || ''"
              @input="setGroupQuery(g.key, ($event.target as HTMLInputElement).value)"
              :placeholder="ui.classicFilterPlaceholder"
            />
            <button
              v-if="groupQuery[g.key]"
              class="faq-group__clear"
              type="button"
              aria-label="Clear"
              @click="setGroupQuery(g.key, '')"
            >
              ✕
            </button>
          </div>

          <div class="faq-classic__list">
            <details
              v-for="x in filterFaqInCategory(groupQuery[g.key] || '', g.items, 'q_keywords')"
              :key="x.id"
              class="faq-classic__item"
            >
              <summary class="faq-classic__q">{{ x.q }}</summary>
              <div class="faq-classic__a">{{ x.a }}</div>
            </details>

            <div
              v-if="filterFaqInCategory(groupQuery[g.key] || '', g.items, 'q_keywords').length === 0"
              class="faq-group__empty"
            >
              {{ ui.classicEmpty }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
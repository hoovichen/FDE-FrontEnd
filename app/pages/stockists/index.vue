<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { STOCKISTS_UI, type LangCode } from '~/locales/stockists/stockists.ui'
import { STOCKISTS_BASE } from '~/lib/stockists/stockists.data'
import { buildMapsHref, filterStockists, groupByStateCity, formatPhoneMY } from '~/lib/stockists/stockists.helpers'

const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const ui = computed(() => STOCKISTS_UI[l.value])

const q = ref('')

const activeList = computed(() => STOCKISTS_BASE.filter(s => s.active))
const filtered = computed(() => filterStockists(activeList.value, q.value))
const grouped = computed(() => groupByStateCity(filtered.value))

function detailRoute(slug: string) {
    return `/stockists/${encodeURIComponent(slug)}`
}

useSeoMeta({
    title: () => `${ui.value.title} - Fire Dragon`,
    description: () => ui.value.desc,
    ogTitle: () => `${ui.value.title} - Fire Dragon`,
    ogDescription: () => ui.value.desc,
    ogType: 'website',
})
</script>

<template>
    <section class="stockists-page">
        <div class="container">
            <header class="stockists-head">
                <h1 class="stockists-title">{{ ui.title }}</h1>
                <p class="stockists-desc muted">{{ ui.desc }}</p>

                <div class="stockists-tools">
                    <input v-model="q" class="stockists-search" type="search" :placeholder="ui.searchPlaceholder"
                        autocomplete="off" />
                    <span class="stockists-hint muted">{{ ui.groupLabel }}</span>
                </div>
            </header>

            <div v-if="filtered.length" class="stockists-groups">
                <div v-for="(cities, state) in grouped" :key="state" class="stockists-state">
                    <h2 class="stockists-stateTitle">{{ state }}</h2>

                    <div v-for="(items, city) in cities" :key="city" class="stockists-city">
                        <h3 class="stockists-cityTitle">{{ city }}</h3>

                        <div class="stockists-list">
                            <!-- ✅ 整张卡可点：进入详情页 -->
                            <NuxtLink v-for="s in items" :key="s.key" class="stockist-card" :to="detailRoute(s.key)"
                                :aria-label="`Open stockist: ${s.name}`">
                                <div class="stockist-card__media" v-if="s.image">
                                    <img :src="s.image" :alt="s.name" loading="lazy" decoding="async" />
                                </div>

                                <div class="stockist-card__body">
                                    <div class="stockist-card__top">
                                        <div class="stockist-card__name">{{ s.name }}</div>
                                        <div class="stockist-card__code muted">#{{ s.code }}</div>
                                    </div>

                                    <div class="stockist-card__meta muted">
                                        <div v-if="s.address">{{ s.address }}</div>
                                        <div v-else>（地址待补充）</div>
                                        <div v-if="s.phoneRaw">📞 {{ formatPhoneMY(s.phoneRaw) }}</div>
                                    </div>

                                    <!-- ✅ 次按钮：打开 Google Maps（阻止冒泡，避免点按钮也跳详情） -->
                                    <div class="stockist-card__actions">
                                        <a class="btn-ghost stockist-card__maps" :href="buildMapsHref(s)"
                                            target="_blank" rel="noopener" @click.stop>
                                            {{ ui.openMaps }}
                                        </a>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="stockists-empty">
                <h2>{{ ui.emptyTitle }}</h2>
                <p class="muted">{{ ui.emptyDesc }}</p>
            </div>
        </div>
    </section>
</template>

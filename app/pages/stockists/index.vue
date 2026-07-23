<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { STOCKISTS_UI, type LangCode } from '~/locales/stockists/stockists.ui'
import { STOCKISTS_BASE } from '~/lib/stockists/stockists.data'
import { buildMapsHref, filterStockists, groupByStateCity, formatPhoneMY, getCityOptions, getStateOptions, filterByStateCity } from '~/lib/stockists/stockists.helpers'

const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const ui = computed(() => STOCKISTS_UI[l.value])

const q = ref('')

const activeList = computed(() => STOCKISTS_BASE.filter(s => s.active))
// const filtered = computed(() => filterStockists(activeList.value, q.value))
// const grouped = computed(() => groupByStateCity(filtered.value))
const stateSel = ref('') // '' 表示 All
const citySel = ref('')  // '' 表示 All

// dropdown 选项（从 activeList 来）
const stateOptions = computed(() => getStateOptions(activeList.value))
// 如果选了 state，可以进一步缩小 city 选项（更贴心）
const cityOptions = computed(() => {
    const list = filterByStateCity(activeList.value, stateSel.value, '')
    return getCityOptions(list)
})

// 过滤：先 state/city，再 search
const filtered = computed(() => {
    const byRegion = filterByStateCity(activeList.value, stateSel.value, citySel.value)
    return filterStockists(byRegion, q.value)
})

const grouped = computed(() => groupByStateCity(filtered.value))
const activeCitiesCount = computed(() => getCityOptions(activeList.value).length)

// state 改变时：如果当前 city 不属于该 state，自动清空 city
watch(stateSel, () => {
    if (!citySel.value) return
    const ok = cityOptions.value.includes(citySel.value)
    if (!ok) citySel.value = ''
})

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
            </header>

            <div class="stockists-layout">
                <aside class="stockists-panel" aria-label="Stockist filters">
                    <div class="stockists-stats">
                        <div>
                            <strong>{{ filtered.length }}</strong>
                            <span>{{ ui.storesLabel }}</span>
                        </div>
                        <div>
                            <strong>{{ stateOptions.length }}</strong>
                            <span>{{ ui.regionsLabel }}</span>
                        </div>
                        <div>
                            <strong>{{ activeCitiesCount }}</strong>
                            <span>{{ ui.citiesLabel }}</span>
                        </div>
                    </div>

                    <div class="stockists-tools">
                        <input v-model="q" class="stockists-search" type="search" :placeholder="ui.searchPlaceholder"
                            autocomplete="off" />

                        <div class="stockists-filters">
                            <select v-model="stateSel" class="stockists-select" aria-label="Filter by state">
                                <option value="">{{ ui.allStates }}</option>
                                <option v-for="s in stateOptions" :key="s" :value="s">{{ s }}</option>
                            </select>

                            <select v-model="citySel" class="stockists-select" aria-label="Filter by city">
                                <option value="">{{ ui.allCities }}</option>
                                <option v-for="c in cityOptions" :key="c" :value="c">{{ c }}</option>
                            </select>

                            <button class="stockists-clear" type="button" @click="q = ''; stateSel = ''; citySel = ''"
                                v-if="q || stateSel || citySel">
                                {{ ui.clear }}
                            </button>
                        </div>
                        <span class="stockists-hint muted">{{ ui.groupLabel }}</span>
                    </div>
                </aside>

                <div v-if="filtered.length" class="stockists-groups">
                    <div v-for="(cities, state) in grouped" :key="state" class="stockists-state">
                        <div class="stockists-stateHead">
                            <h2 class="stockists-stateTitle">{{ state }}</h2>
                        </div>

                        <div v-for="(items, city) in cities" :key="city" class="stockists-city">
                            <h3 class="stockists-cityTitle">{{ city }}</h3>

                            <div class="stockists-list">
                                <NuxtLink v-for="s in items" :key="s.key" class="stockist-card" :to="detailRoute(s.key)"
                                    :aria-label="`Open stockist: ${s.name}`">
                                    <div class="stockist-card__media" v-if="s.image || s.mapImage">
                                        <img :src="s.image || s.mapImage" :alt="s.name" loading="lazy" decoding="async" />
                                    </div>

                                    <div class="stockist-card__body">
                                        <div class="stockist-card__top">
                                            <div>
                                                <div class="stockist-card__name">{{ s.name }}</div>
                                                <div class="stockist-card__place muted">
                                                    <span v-if="s.city">{{ s.city }}</span>
                                                    <span v-if="s.city && s.state">, </span>
                                                    <span v-if="s.state">{{ s.state }}</span>
                                                </div>
                                            </div>
                                            <div class="stockist-card__code muted">#{{ s.code }}</div>
                                        </div>

                                        <div class="stockist-card__meta muted">
                                            <div v-if="s.address">{{ s.address }}</div>
                                            <div v-else>（地址待补充）</div>
                                            <div v-if="s.phoneRaw">{{ formatPhoneMY(s.phoneRaw) }}</div>
                                        </div>

                                        <div class="stockist-card__actions">
                                            <span class="stockist-card__detail">{{ ui.viewDetails }}</span>
                                            <a class="stockist-card__maps" :href="buildMapsHref(s)" target="_blank"
                                                rel="noopener" @click.stop>
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
        </div>
    </section>
</template>

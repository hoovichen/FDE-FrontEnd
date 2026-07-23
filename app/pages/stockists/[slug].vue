<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '~/composables/useLanguage'
import { STOCKISTS_UI, type LangCode } from '~/locales/stockists/stockists.ui'
import { STOCKISTS_BASE } from '~/lib/stockists/stockists.data'
import { buildMapsHref, formatPhoneMY } from '~/lib/stockists/stockists.helpers'

const route = useRoute()
const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const ui = computed(() => STOCKISTS_UI[l.value])

const slug = computed(() => String(route.params.slug || ''))

const stockist = computed(() => {
    // 用 key 当 slug
    return STOCKISTS_BASE.find(s => s.key === slug.value && s.active) || null
})

useSeoMeta({
    title: () => stockist.value ? `${stockist.value.name} - ${ui.value.title}` : `${ui.value.title} - Fire Dragon`,
    description: () => stockist.value?.address || ui.value.desc,
    ogTitle: () => stockist.value ? `${stockist.value.name} - ${ui.value.title}` : `${ui.value.title} - Fire Dragon`,
    ogDescription: () => stockist.value?.address || ui.value.desc,
    ogType: 'website',
})
</script>

<template>
    <section class="stockist-detail">
        <div class="container" v-if="stockist">
            <NuxtLink to="/stockists" class="stockist-back">
                <span class="stockist-back__icon">←</span>
                <span>{{ ui.backToList }}</span>
            </NuxtLink>

            <header class="stockist-hero">
                <p class="stockist-eyebrow">{{ ui.title }}</p>
                <h1 class="stockist-title">{{ stockist.name }}</h1>
                <p class="stockist-sub muted">
                    <span v-if="stockist.city">{{ stockist.city }}</span>
                    <span v-if="stockist.city && stockist.state"> · </span>
                    <span v-if="stockist.state">{{ stockist.state }}</span>
                </p>
            </header>

            <div class="stockist-grid">
                <aside class="stockist-media">
                    <figure v-if="stockist.mapImage" class="stockist-map">
                        <a :href="buildMapsHref(stockist)" target="_blank" rel="noopener" class="stockist-map__link">
                            <img :src="stockist.mapImage" :alt="`${stockist.name} map`" loading="lazy"
                                decoding="async" />
                            <span class="stockist-map__badge">{{ ui.openMaps }}</span>
                        </a>
                    </figure>

                    <figure v-else-if="stockist.image" class="stockist-photo">
                        <img :src="stockist.image" :alt="stockist.name" loading="lazy" decoding="async" />
                    </figure>
                </aside>

                <div class="stockist-info">
                    <div class="stockist-card">
                        <div class="stockist-card__title">{{ ui.address }}</div>
                        <p class="stockist-card__text">
                            {{ stockist.address || '（地址待补充）' }}
                        </p>
                    </div>

                    <div class="stockist-card" v-if="stockist.phoneRaw">
                        <div class="stockist-card__title">{{ ui.contact }}</div>
                        <p class="stockist-card__text">{{ formatPhoneMY(stockist.phoneRaw) }}</p>
                    </div>

                    <div class="stockist-card">
                        <div class="stockist-card__title">{{ ui.groupLabel }}</div>
                        <p class="stockist-card__text">
                            <span v-if="stockist.city">{{ stockist.city }}</span>
                            <span v-if="stockist.city && stockist.state">, </span>
                            <span v-if="stockist.state">{{ stockist.state }}</span>
                        </p>
                    </div>

                    <div class="stockist-actions">
                        <a class="btn-primary" :href="buildMapsHref(stockist)" target="_blank" rel="noopener">
                            {{ ui.openMaps }}
                        </a>

                        <a v-if="stockist.phoneRaw" class="btn-ghost" :href="`tel:${stockist.phoneRaw}`">
                            {{ ui.call }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" v-else>
            <h1>Not found</h1>
            <p class="muted">This stockist does not exist.</p>
        </div>
    </section>
</template>

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
                <span class="stockist-back__icon">⬅</span>
                <span>{{ ui.backToList }}</span>
            </NuxtLink>

            <!-- 页头 -->
            <header class="stockist-hero">
                <h1 class="stockist-title">{{ stockist.name }}</h1>
                <p class="stockist-sub muted">
                    <span v-if="stockist.city">{{ stockist.city }}</span>
                    <span v-if="stockist.city && stockist.state"> · </span>
                    <span v-if="stockist.state">{{ stockist.state }}</span>
                </p>
            </header>

            <!-- ✅ 参考 contact 的 grid：左媒体 + 右信息 -->
            <div class="stockist-grid">
                <!-- 左：媒体（门店图 / 地图截图） -->
                <aside class="stockist-media">
                    <!-- 门店图优先 -->
                    <figure v-if="stockist.image" class="stockist-photo">
                        <img :src="stockist.image" :alt="stockist.name" loading="lazy" decoding="async" />
                    </figure>

                    <!-- 可选：如果你未来加 mapImage 字段，就显示地图截图 -->

                    <figure v-if="stockist.mapImage" class="stockist-map">
                        <a :href="buildMapsHref(stockist)" target="_blank" rel="noopener" class="stockist-map__link">
                            <img :src="stockist.mapImage" :alt="`${stockist.name} map`" loading="lazy"
                                decoding="async" />
                            <span class="stockist-map__badge">{{ ui.openMaps }}</span>
                        </a>
                    </figure>

                </aside>

                <!-- 右：信息块 -->
                <div class="stockist-info">
                    <div class="stockist-card">
                        <div class="stockist-card__title">Address</div>
                        <p class="stockist-card__text">
                            {{ stockist.address || '（地址待补充）' }}
                        </p>
                    </div>

                    <div class="stockist-card" v-if="stockist.phoneRaw">
                        <div class="stockist-card__title">Contact</div>
                        <div v-if="stockist.phoneRaw">📞 {{ formatPhoneMY(stockist.phoneRaw) }}</div>
                    </div>

                    <!-- 你未来若加入 hours 字段（string[]），这里就能直接启用 -->
                    <!--
          <div class="stockist-card" v-if="stockist.hours?.length">
            <div class="stockist-card__title">Hours</div>
            <ul class="stockist-list">
              <li v-for="(h,i) in stockist.hours" :key="i">{{ h }}</li>
            </ul>
          </div>
          -->

                    <div class="stockist-actions">
                        <a class="btn-primary" :href="buildMapsHref(stockist)" target="_blank" rel="noopener">
                            {{ ui.openMaps }}
                        </a>

                        <a v-if="stockist.phoneRaw" class="btn-ghost" :href="`tel:${stockist.phoneRaw}`">
                            Call
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

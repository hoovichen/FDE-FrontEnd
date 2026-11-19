<script setup lang="ts">
import { buildMapsHref } from '~/lib/stockists/stockists.helpers'
import type { StockistBase } from '~/lib/stockists/stockists.types'

const props = defineProps<{ stockist: StockistBase; label: string; pendingLabel: string }>()
const embedUrl = computed(() => {
    const query = props.stockist.mapQuery
    if (!query) return undefined
    return `https://maps.google.com/maps?${new URLSearchParams({ q: query, t: 'm', z: '16', output: 'embed' })}`
})
</script>

<template>
    <div class="stockist-map-preview">
        <iframe v-if="embedUrl" :src="embedUrl" :title="`${label} · ${stockist.name}`" loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin" />
        <a v-if="embedUrl" :href="buildMapsHref(stockist)" :aria-label="`${label} · ${stockist.name}`"
            :title="label" target="_blank" rel="noopener" />
        <span v-else class="stockist-pin-pending">{{ pendingLabel }}</span>
    </div>
</template>

<style scoped>
.stockist-map-preview {
    position: relative;
    min-height: 200px;
    height: 100%;
    background: #edf2f1;
}

.stockist-pin-pending {
    display: grid;
    position: absolute;
    inset: 0;
    place-items: center;
    text-align: center;
    padding: 12px;
}

.stockist-map-preview iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

.stockist-map-preview a {
    position: absolute;
    /* Leave Google's attribution and footer links interactive. */
    inset: 0 0 36px;
}
</style>

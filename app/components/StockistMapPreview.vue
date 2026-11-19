<script setup lang="ts">
import { buildMapsHref } from '~/lib/stockists/stockists.helpers'
import type { StockistBase } from '~/lib/stockists/stockists.types'

const props = defineProps<{ stockist: StockistBase; label: string }>()
const embedUrl = computed(() => {
    const query = props.stockist.mapQuery || props.stockist.address || props.stockist.name
    return `https://maps.google.com/maps?${new URLSearchParams({ q: query, t: 'm', z: '16', output: 'embed' })}`
})
</script>

<template>
    <div class="stockist-map-preview">
        <iframe :src="embedUrl" :title="`${label} · ${stockist.name}`" loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin" />
        <a :href="buildMapsHref(stockist)" :aria-label="`${label} · ${stockist.name}`"
            :title="label" target="_blank" rel="noopener" />
    </div>
</template>

<style scoped>
.stockist-map-preview {
    position: relative;
    min-height: 200px;
    height: 100%;
    background: #edf2f1;
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

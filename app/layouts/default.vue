<script setup lang="ts">
/** 默认布局：含 Skip Link 与主容器 */
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <HeaderNav />
    </div>
  </header>

  <main id="main">
    <slot />
  </main>

  <FooterBar />
  <!-- <button id="backToTop" class="fdg-btt" type="button" aria-label="Back to top" title="Back to top">
    <span class="fdg-btt__icon">↑</span>
  </button> -->
</template>
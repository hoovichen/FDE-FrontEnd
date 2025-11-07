<script setup lang="ts">
    /** 默认布局：含 Skip Link 与主容器 */
    import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <SpeedInsights/>
  <header class="site-header">
    <div class="site-header__inner">
      <HeaderNav />
    </div>
  </header>

  <main id="main">
    <slot />
  </main>

  <footer class="footer">
      <FooterBar />
  </footer>

  <button class="btn btn--primary back-to-top" id="backToTop" aria-label="返回顶部">↑</button>
</template>
    
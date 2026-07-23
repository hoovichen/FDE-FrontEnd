<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header class="site-header" :class="{ 'site-header--home': isHome }">
    <HomeAnnouncementBar v-if="isHome" />
    <HeaderNav />
  </header>

  <main id="main">
    <slot />
  </main>

  <FooterBar />
  <FloatingContactDock />
</template>

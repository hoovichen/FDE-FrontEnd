<script setup lang="ts">
    useHead({ title: 'Products - Coming soon' })

    onMounted(() => {
      document.documentElement.classList.add('js-ready')
    })
</script>

<template>
  <section class="section">
    <div class="container">
      <h1>Products</h1>
      <p class="muted">Coming soon…</p>
    </div>
  </section>
</template>

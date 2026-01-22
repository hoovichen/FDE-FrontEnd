<script setup lang="ts">
onMounted(() => {
  const btn = document.getElementById('backToTop')
  if (!btn) return

  const toggle = () => {
    btn.classList.toggle('fdg-btt--visible', window.scrollY > 300)
  }

  window.addEventListener('scroll', toggle, { passive: true })
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

  toggle()

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', toggle)
  })
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <button id="backToTop" class="fdg-btt" type="button" aria-label="Back to top" title="Back to top">
      <span class="fdg-btt__icon">↑</span>
    </button>
  </NuxtLayout>
</template>

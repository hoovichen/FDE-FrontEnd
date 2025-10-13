<script setup lang="ts">
const route = useRoute()
const { slug } = route.params
useHead({ title: `Blog - ${slug}` })
</script>

<template>
  <section class="container" style="padding:40px 0">
    <h1>Blog Detail</h1>
    <p>Slug: {{ $route.params.slug }}</p>
    <p>Coming soon…</p>
    <NuxtLink to="/blog">← Back to Blog</NuxtLink>
  </section>
</template>

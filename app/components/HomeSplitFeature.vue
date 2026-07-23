<script setup lang="ts">
type SplitTone = 'soft' | 'olive'

const props = defineProps<{
  heading: string
  text: string
  button: string
  to: string
  image: string
  imageAlt: string
  imageFit?: 'cover' | 'contain'
  reverse?: boolean
  tone?: SplitTone
}>()

const mediaStyle = computed(() => ({
  '--home-split-image': `url("${props.image}")`,
}))
</script>

<template>
  <section class="home-split" :class="[{ 'home-split--reverse': reverse }, `home-split--${tone || 'soft'}`]">
    <div class="home-split__media" :class="`home-split__media--${imageFit || 'cover'}`" :style="mediaStyle">
      <img class="home-split__image" :src="image" :alt="imageAlt" loading="lazy" decoding="async" />
    </div>
    <div class="home-split__copy">
      <h2 class="home-split__title">{{ heading }}</h2>
      <p class="home-split__text">{{ text }}</p>
      <NuxtLink class="home-pill-link" :to="to">{{ button }}</NuxtLink>
    </div>
  </section>
</template>

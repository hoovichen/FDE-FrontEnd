<script setup lang="ts">
import { HOME_REDESIGN_TEXT, type LangCode } from '~/locales/home.redesign'
import { useLanguage } from '~/composables/useLanguage'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => HOME_REDESIGN_TEXT[l.value])
</script>

<template>
  <div class="home-redesign">
    <HomeEditorialHero />
    <HomeFeaturedProducts />
    <HomeQuoteCta />
    <HomeSplitFeature
      :heading="ui.recipes.heading"
      :text="ui.recipes.text"
      :button="ui.recipes.button"
      to="/recipes"
      image="/images/recipes/top.jpg"
      image-alt="Everyday meal served with Fire Dragon sambal"
      tone="soft"
    />
    <HomeSplitFeature
      :heading="ui.blog.heading"
      :text="ui.blog.text"
      :button="ui.blog.button"
      :to="`/blog/${l}`"
      image="/images/blog/green-cap-firedragon/cover-en.png"
      image-alt="Fire Dragon food story cover"
      image-fit="contain"
      reverse
      tone="olive"
    />
    <HomeMotionBar />
    <HomeResourceLinks />
  </div>
</template>

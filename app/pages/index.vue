<script setup lang="ts">
    useHead({
      title: '火龙企业 - 首页',
      meta: [
        { name: 'description', content: '品牌与产品介绍的门户站点' },
        { property: 'og:title', content: '品牌门户' },
        { property: 'og:description', content: '品牌与产品介绍的门户站点' },
        { property: 'og:type', content: 'website' }
      ]
    })
    onMounted(() => {
      document.documentElement.classList.add('js-ready')
      const btn = document.getElementById('backToTop')
      const toggle = () => {
        if (!btn) return
        const show = window.scrollY > 300
        btn.classList.toggle('back-to-top--visible', show)
      }
      window.addEventListener('scroll', toggle, { passive: true })
      btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
      toggle()
    })
</script>
    
<template>
  <HeroSection />
  <SectionRecipes />
  <SectionProducts />
  <SectionBlog />
</template>

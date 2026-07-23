<script setup lang="ts">
import { FOOTER_SOCIALS } from '~/lib/footer.socials'
import { useLanguage } from '~/composables/useLanguage'
import { FOOTER_UI, type LangCode } from '~/locales/footer.ui'
import { HOME_REDESIGN_TEXT } from '~/locales/home.redesign'

const socials = [...FOOTER_SOCIALS].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const t = computed(() => FOOTER_UI[l.value])
const cta = computed(() => HOME_REDESIGN_TEXT[l.value].footerCta)
const utilityLinks = computed(() => [
  { to: '/about', label: t.value.links.about },
  { to: `/blog/${l.value}`, label: t.value.links.blog },
  { to: `/faq/${l.value}`, label: t.value.links.faq },
  { to: '/terms', label: t.value.links.terms },
  { to: '/privacy-policy', label: t.value.links.privacy },
])
</script>

<template>
  <footer class="footer">
    <section class="footer__cta" aria-labelledby="footer-stockists-title">
      <h2 id="footer-stockists-title" class="footer__cta-title">{{ cta.heading }}</h2>
      <p class="footer__cta-text">{{ cta.text }}</p>
      <NuxtLink class="footer__cta-button" to="/stockists">{{ cta.button }}</NuxtLink>
      <div class="footer__rule" aria-hidden="true" />
    </section>

    <div class="footer__bottom">
      <div class="footer__copyright">
        {{ t.copyright }}
      </div>

      <nav class="footer__legal" aria-label="Footer navigation">
        <NuxtLink v-for="item in utilityLinks" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      </nav>

      <div class="footer__social" :aria-label="t.socialTitle">
        <a v-for="s in socials" :key="s.key" :href="s.href" target="_blank" rel="noopener" :aria-label="s.key">
          <img :src="s.icon" :alt="s.key" width="20" height="20" loading="lazy" decoding="async" />
        </a>
      </div>
    </div>
  </footer>
</template>

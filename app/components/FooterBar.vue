<script setup lang="ts">
import { FOOTER_SOCIALS } from '~/lib/footer.socials'
import { useLanguage } from '~/composables/useLanguage'
import { FOOTER_UI, type LangCode } from '~/locales/footer.ui'

const socials = [...FOOTER_SOCIALS].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

const { lang } = useLanguage()
const l = computed(() => (lang.value as LangCode) || 'en')
const t = computed(() => FOOTER_UI[l.value])

// ✅ 哪些页面目前是 coming soon（用来显示小标签）
const COMING_SOON = new Set(['/faq', '/privacy-policy', '/terms'])
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <!-- 左侧 LOGO -->
      <div class="footer__logo">
        <NuxtLink to="/">
          <NuxtImg class="footer__brand" src="/logo-3-topic.png" alt="Fire Dragon Enterprise Logo" />
        </NuxtLink>
      </div>

      <!-- 中间 INFO -->
      <div class="footer__info">
        <h3 class="footer__title">{{ t.infoTitle }}</h3>
        <ul class="footer__links">
          <li>
            <NuxtLink to="/blog">
              {{ t.links.blog }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/faq">
              {{ t.links.faq }}
              <span v-if="COMING_SOON.has('/faq')" class="footer__soon">{{ t.comingSoon }}</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/privacy-policy">
              {{ t.links.privacy }}
              <span v-if="COMING_SOON.has('/privacy-policy')" class="footer__soon">{{ t.comingSoon }}</span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/terms">
              {{ t.links.terms }}
              <span v-if="COMING_SOON.has('/terms')" class="footer__soon">{{ t.comingSoon }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- 右侧 STALK US -->
      <div class="footer__social">
        <h3 class="footer__title">{{ t.socialTitle }}</h3>
        <div class="footer__icons">
          <a v-for="s in socials" :key="s.key" :href="s.href" target="_blank" rel="noopener" :aria-label="s.key">
            <NuxtImg :src="s.icon" :alt="s.key" />
          </a>
        </div>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="footer__copyright">
      {{ t.copyright }}
    </div>
  </footer>
</template>

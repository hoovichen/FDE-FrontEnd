<script setup lang="ts">
import { FOOTER_SOCIALS } from '~/lib/footer.socials'
const socials = [...FOOTER_SOCIALS].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <!-- 左侧 LOGO -->
      <div class="footer__logo">
        <NuxtLink to="/">
          <NuxtImg class="footer__brand" src="/logo-3-topic.png" alt="火龙企业标志 | Fire Dragon Enterprise Logo" />
        </NuxtLink>
      </div>

      <!-- 中间 INFO -->
      <div class="footer__info">
        <h3 class="footer__title">INFO</h3>
        <ul>
          <li>
            <NuxtLink to="/faq">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy-policy">PRIVACY POLICY</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/terms">TERMS & CONDITIONS</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- 右侧 STALK US -->
      <div class="footer__social">
        <h3 class="footer__title">STALK US</h3>
        <div class="footer__icons">
          <a v-for="s in socials" :key="s.key" :href="s.href" target="_blank" rel="noopener" :aria-label="s.key">
            <NuxtImg :src="s.icon" :alt="s.key" />
          </a>
        </div>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="footer__copyright">
      COPYRIGHT © 2025 FIRE DRAGON ENTERPRISE
    </div>
  </footer>
</template>

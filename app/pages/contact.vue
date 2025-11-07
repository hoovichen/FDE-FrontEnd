<script setup lang="ts">
import { useContactPage } from '~/composables/useContact'
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const { ui, seo, jsonLd, name, email, message, sent, buildWaHref, onSubmit, base, honey, submitViaApi, submitting, submitOk, submitError, } = useContactPage()

useSeoMeta({
  title: () => seo.value.title,
  description: () => seo.value.description,
  ogTitle: () => seo.value.title,
  ogDescription: () => seo.value.description,
  ogImage: () => base.ogImage,           // base 是普通对象，OK
  twitterCard: 'summary_large_image',
  twitterSite: () => base.twitter,
})

// 给这个 script 一个 key，防止重复注入；注意 .value
useHead(() => ({
  script: [{
    key: 'org-jsonld',
    type: 'application/ld+json',
    innerHTML: JSON.stringify(jsonLd.value),
  }],
}))
</script>


<template>
  <Analytics />
  <SpeedInsights />
  <section class="contact-page">
    <header class="contact-head">
      <h1 class="contact-title">{{ ui.title }}</h1>
      <p class="contact-desc">{{ ui.desc }}</p>
    </header>

    <div class="contact-grid">
      <!-- 左：表单 -->
      <form class="contact-form" @submit.prevent="submitViaApi">
        <!-- 蜜罐：视觉隐藏，但可被机器人填写 -->
        <input v-model="honey" type="text" autocomplete="off" tabindex="-1"
          style="position:absolute;left:-9999px;opacity:0" aria-hidden="true" />

        <label class="field">
          <span>{{ ui.form.name }}</span>
          <input v-model="name" type="text" autocomplete="name" />
        </label>
        <label class="field">
          <span>{{ ui.form.email }}</span>
          <input v-model="email" type="email" required autocomplete="email" />
        </label>
        <label class="field">
          <span>{{ ui.form.message }}</span>
          <textarea v-model="message" rows="5" required />
        </label>

        <div class="actions">
          <button class="btn-primary" type="submit" :disabled="submitting">
            {{ submitting ? 'Sending…' : ui.form.submit }}
          </button>
          <a class="btn-ghost" :href="buildWaHref()" target="_blank" rel="noopener">
            {{ ui.orWhatsApp }}
          </a>
        </div>

        <p v-if="submitOk" class="sent-tip">{{ ui.form.submitted }}</p>
        <p v-else-if="submitError" class="error-tip">{{ submitError }}</p>
      </form>

      <!-- 右：地图 + 地址 & 营业时间 -->
      <aside class="contact-aside">
        <!-- 地图截图（点击跳转 Google Maps） -->
        <figure class="contact-map">
          <!-- 建议把图片放在 /public/images/contact-map.webp -->
          <a href="https://www.google.com/maps?q=No.+175,+Batu+11,+Jalan+Segari,+34900,+Perak,+Malaysia" target="_blank"
            rel="noopener" aria-label="Open location in Google Maps" class="contact-map__link">
            <img class="contact-map__img" src="/images/Map/firedragon-map.png" alt="Fire Dragon Enterprise location map"
              loading="lazy" decoding="async" />
            <span class="contact-map__badge">Open in Google Maps</span>
          </a>
          <!-- 可选：显示地址标题 -->
          <!-- <figcaption class="contact-map__cap">{{ ui.address }}</figcaption> -->
        </figure>

        <!-- 地址 -->
        <div class="info-block">
          <div class="info-title">{{ ui.addressLabel }}</div>
          <p class="info-text">{{ ui.address }}</p>
        </div>

        <!-- 营业时间 -->
        <div class="info-block">
          <div class="info-title">{{ ui.hoursLabel }}</div>
          <ul class="info-list">
            <li v-for="(h, i) in ui.hours" :key="i">{{ h }}</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

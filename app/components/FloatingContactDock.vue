<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { CONTACT_SEO_BASE } from '~/lib/seo.contact'
import type { LangCode } from '~/lib/products.data'
import { FLOATING_CONTACT_TEXT } from '~/locales/floating-contact'

const { lang } = useLanguage()
const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')
const ui = computed(() => FLOATING_CONTACT_TEXT[l.value])

const isOpen = ref(false)
const isBackToTopVisible = ref(false)
const message = ref('')

const defaultMessage = computed(() => ui.value.placeholder)
const waHref = computed(() => {
  const text = encodeURIComponent((message.value || defaultMessage.value).trim())
  return `https://wa.me/${CONTACT_SEO_BASE.waNumber}?text=${text}`
})

function togglePanel() {
  isOpen.value = !isOpen.value
}

function closePanel() {
  isOpen.value = false
}

function useQuickReply(reply: string) {
  message.value = reply
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function updateBackToTopVisibility() {
  isBackToTopVisible.value = window.scrollY > 300
}

watch(l, () => {
  message.value = ''
})

onMounted(() => {
  updateBackToTopVisibility()
  window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateBackToTopVisibility)
})
</script>

<template>
  <aside class="fdg-floatdock" :class="{ 'fdg-floatdock--open': isOpen }" aria-label="Floating contact tools">
    <Transition name="fdg-chat-panel">
      <section v-if="isOpen" class="fdg-chat" aria-live="polite">
        <div class="fdg-chat__head">
          <div>
            <p class="fdg-chat__eyebrow">{{ ui.eyebrow }}</p>
            <h2 class="fdg-chat__title">{{ ui.title }}</h2>
          </div>
          <button class="fdg-chat__close" type="button" :aria-label="ui.closeLabel" @click="closePanel">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <p class="fdg-chat__desc">{{ ui.desc }}</p>

        <div class="fdg-chat__replies" aria-label="Quick replies">
          <button
            v-for="reply in ui.quickReplies"
            :key="reply"
            class="fdg-chat__reply"
            type="button"
            @click="useQuickReply(reply)"
          >
            {{ reply }}
          </button>
        </div>

        <label class="fdg-chat__field">
          <span>{{ ui.messageLabel }}</span>
          <textarea v-model="message" rows="3" :placeholder="ui.placeholder" />
        </label>

        <a class="fdg-chat__send" :href="waHref" target="_blank" rel="noopener">
          <img src="/whatsapp.ico" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <span>{{ ui.send }}</span>
        </a>
      </section>
    </Transition>

    <div class="fdg-floatdock__actions">
      <button
        class="fdg-floatdock__button fdg-floatdock__button--whatsapp"
        type="button"
        :aria-expanded="isOpen"
        :aria-label="ui.openLabel"
        @click="togglePanel"
      >
        <img src="/whatsapp.ico" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </button>

      <button
        class="fdg-btt"
        :class="{ 'fdg-btt--visible': isBackToTopVisible }"
        type="button"
        :aria-label="ui.backToTop"
        :title="ui.backToTop"
        @click="scrollToTop"
      >
        <span class="fdg-btt__icon" aria-hidden="true">↑</span>
      </button>
    </div>
  </aside>
</template>

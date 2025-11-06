import { computed, ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import type { LangCode } from '~/lib/products.data'
import { CONTACT_TEXT } from '~/locales/contact'
import { CONTACT_SEO_TEXT } from '~/locales/seo.contact'
import { CONTACT_SEO_BASE } from '~/lib/seo.contact'

export function useContactPage() {
  const { lang } = useLanguage()
  const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')

  const ui = computed(() => CONTACT_TEXT[l.value])
  const seo = computed(() => CONTACT_SEO_TEXT[l.value])

  // 简单表单状态
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const sent = ref(false)

  // mailto 生成
  const buildMailto = () => {
    const subject = encodeURIComponent(`${CONTACT_SEO_BASE.siteName} — Contact`)
    const lines = [
      `Name: ${name.value}`,
      `Email: ${email.value}`,
      '',
      message.value
    ].join('\n')
    const body = encodeURIComponent(lines)
    return `mailto:${CONTACT_SEO_BASE.emailTo}?subject=${subject}&body=${body}`
  }

  // WhatsApp 链接（带语言问候）
  const buildWaHref = () => {
    const hello =
      l.value === 'zh' ? '你好，我想咨询产品。'
        : l.value === 'bm' ? 'Hai, saya ingin bertanya tentang produk.'
          : 'Hi, I would like to ask about your products.'
    const text = encodeURIComponent(hello)
    return `https://wa.me/${CONTACT_SEO_BASE.waNumber}?text=${text}`
  }

  const onSubmit = (e: Event) => {
    e.preventDefault()
    // 简单校验
    if (!email.value || !message.value) return
    window.location.href = buildMailto()
    sent.value = true
  }

  // JSON-LD（可选）
  const jsonLd = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: CONTACT_SEO_BASE.siteName,
    url: 'https://firedragonmy.com',
    logo: CONTACT_SEO_BASE.logo,
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: CONTACT_SEO_BASE.emailTo,
      telephone: `+${CONTACT_SEO_BASE.waNumber}`,
      availableLanguage: ['en', 'zh', 'ms']
    }]
  }))

  const submitting = ref(false)
  const submitOk = ref(false)
  const submitError = ref<string | null>(null)
  const honey = ref('') // 蜜罐，永远留空

  const submitViaApi = async () => {
    submitError.value = null
    submitting.value = true
    try {
      // console.log('Submitting via API...')
      await $fetch('/api/contact', {
        method: 'POST',
        body: { name: name.value, email: email.value, message: message.value, honey: honey.value }
      })
      submitOk.value = true
      name.value = ''
      message.value = ''
      // email 你可选择清空或保留
    } catch (e: any) {
      submitError.value = e?.data?.message || 'Failed to send'
    } finally {
      submitting.value = false
    }
  }

  return {
    ui, seo, jsonLd,
    name, email, message, sent, submitting, submitOk, 
    submitError, submitViaApi, honey,
    buildWaHref, onSubmit,
    base: CONTACT_SEO_BASE,
  }
}
import type { LangCode } from '~/lib/products.data'

export interface FloatingContactText {
  openLabel: string
  closeLabel: string
  backToTop: string
  eyebrow: string
  title: string
  desc: string
  messageLabel: string
  placeholder: string
  send: string
  quickReplies: string[]
}

export const FLOATING_CONTACT_TEXT: Record<LangCode, FloatingContactText> = {
  en: {
    openLabel: 'Open WhatsApp chat',
    closeLabel: 'Close chat',
    backToTop: 'Back to top',
    eyebrow: 'WhatsApp',
    title: 'Need help choosing?',
    desc: 'Send us a quick message and we will reply on WhatsApp.',
    messageLabel: 'Message',
    placeholder: 'Hi, I would like to ask about your sauces.',
    send: 'Continue on WhatsApp',
    quickReplies: [
      'Where can I buy Fire Dragon sauces?',
      'Which sauce is best for daily cooking?',
      'Do you deliver around Malaysia?'
    ]
  },
  zh: {
    openLabel: '打开 WhatsApp 聊天',
    closeLabel: '关闭聊天',
    backToTop: '回到顶部',
    eyebrow: 'WhatsApp',
    title: '需要帮忙选择吗？',
    desc: '留下你想问的问题，我们会通过 WhatsApp 回复。',
    messageLabel: '消息',
    placeholder: '你好，我想咨询火龙辣椒酱。',
    send: '前往 WhatsApp',
    quickReplies: [
      '请问哪里可以买到火龙产品？',
      '哪一款比较适合日常煮食？',
      '请问马来西亚可以配送吗？'
    ]
  },
  bm: {
    openLabel: 'Buka chat WhatsApp',
    closeLabel: 'Tutup chat',
    backToTop: 'Kembali ke atas',
    eyebrow: 'WhatsApp',
    title: 'Perlu bantuan memilih?',
    desc: 'Hantar mesej ringkas dan kami akan membalas melalui WhatsApp.',
    messageLabel: 'Mesej',
    placeholder: 'Hai, saya ingin bertanya tentang sos Fire Dragon.',
    send: 'Teruskan di WhatsApp',
    quickReplies: [
      'Di mana boleh beli produk Fire Dragon?',
      'Sos mana sesuai untuk masakan harian?',
      'Ada penghantaran dalam Malaysia?'
    ]
  }
}

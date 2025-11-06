import type { LangCode } from '~/lib/products.data'

export interface ContactUiText {
  title: string
  desc: string
  form: {
    name: string
    email: string
    message: string
    submit: string
    submitted: string
  }
  orWhatsApp: string
  addressLabel: string
  address: string
  hoursLabel: string
  hours: string[]
}

export const CONTACT_TEXT: Record<LangCode, ContactUiText> = {
  en: {
    title: 'Contact Us',
    desc: 'Leave us a message — we’ll get back soon.',
    form: {
      name: 'Your Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
      submitted: 'Thanks! We will reply soon.',
    },
    orWhatsApp: 'or chat on WhatsApp',
    addressLabel: 'Address',
    address: 'No. 175, Batu 11, Jalan Segari, 34900, Perak, Malaysia',
    hoursLabel: 'Business Hours',
    hours: ['Mon–Fri: 9:30–18:00', 'Sat: 10:00–16:00', 'Sun & PH: Closed'],
  },
  zh: {
    title: '联系我们',
    desc: '给我们留言，我们会尽快回复。',
    form: {
      name: '称呼',
      email: '邮箱',
      message: '留言内容',
      submit: '发送留言',
      submitted: '已收到，我们会尽快联系你。',
    },
    orWhatsApp: '或通过 WhatsApp 与我们沟通',
    addressLabel: '地址',
    address: 'No. 175, Batu 11, Jalan Segari, 34900, Perak, Malaysia',
    hoursLabel: '营业时间',
    hours: ['周一至周五：9:30–18:00', '周六：10:00–16:00', '周日及公共假期：休息'],
  },
  bm: {
    title: 'Hubungi Kami',
    desc: 'Tinggalkan mesej — kami akan membalas secepat mungkin.',
    form: {
      name: 'Nama',
      email: 'Emel',
      message: 'Mesej',
      submit: 'Hantar Mesej',
      submitted: 'Terima kasih! Kami akan membalas tidak lama lagi.',
    },
    orWhatsApp: 'atau berbual di WhatsApp',
    addressLabel: 'Alamat',
    address: 'No. 175, Batu 11, Jalan Segari, 34900, Perak, Malaysia',
    hoursLabel: 'Waktu Operasi',
    hours: ['Isn–Jum: 9:30–18:00', 'Sab: 10:00–16:00', 'Ahad & Cuti Umum: Tutup'],
  },
}

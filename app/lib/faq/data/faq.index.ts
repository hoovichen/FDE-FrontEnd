import type { LangCode } from '../faq.types'
import { FAQ_ZH } from './faq.zh'
import { FAQ_EN } from './faq.en'
import { FAQ_BM } from './faq.bm'

export const FAQ_DATA: Record<LangCode, any[]> = {
  zh: FAQ_ZH,
  en: FAQ_EN,
  bm: FAQ_BM,
}
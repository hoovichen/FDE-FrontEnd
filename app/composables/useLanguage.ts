import type { LangCode } from '~/locales/nav'

export function useLanguage() {
  // SSR/CSR 通用且可持久化
  const lang = useState<LangCode>('lang', () => 'zh')

  // 可选：cookie 持久化（或用 useLocalStorage）
  if (process.client) {
    const saved = localStorage.getItem('lang') as LangCode | null
    if (saved && saved !== lang.value) lang.value = saved
    watch(lang, v => localStorage.setItem('lang', v))
  }

  const setLang = (v: LangCode) => { lang.value = v }
  return { lang, setLang }
}

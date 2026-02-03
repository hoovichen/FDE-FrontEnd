// ~/composables/useLanguage.ts
import type { LangCode } from '~/locales/nav'

function detectFromAcceptLanguage(headers: Record<string, string | string[] | undefined>): LangCode | null {
  const raw = (headers['accept-language'] || '') as string
  const h = raw.toLowerCase()
  // 映射：ms/ms-my -> bm；zh 系都视为 zh；默认 en
  if (h.includes('zh')) return 'zh'
  if (h.includes('ms')) return 'bm'
  if (h.includes('en')) return 'en'
  return null
}

export function useLanguage() {
  // 先用 cookie / Accept-Language 决定 SSR 默认
  const h = process.server ? useRequestHeaders(['accept-language']) : {}
  const langCookie = useCookie<LangCode>('lang', { sameSite: 'lax', path: '/' })

  const initial: LangCode =
    langCookie.value ??
    detectFromAcceptLanguage(h as any) ??
    'en' // 期望默认

  // 全局状态
  const lang = useState<LangCode>('lang', () => initial)

  // 客户端与本地存储同步（同时写 cookie + localStorage）
  if (process.client) {
    const saved = (localStorage.getItem('lang') as LangCode | null) ?? null
    if (saved && saved !== lang.value) lang.value = saved
  }

  watch(lang, (v) => {
    langCookie.value = v
    if (process.client) localStorage.setItem('lang', v)
  }, { immediate: true })

  const setLang = (v: LangCode) => { lang.value = v }

  // =========================
  // ✅ 新增：带路由逻辑的切换
  // =========================
  const router = useRouter()
  const route = useRoute()

  const switchLang = async (next: LangCode) => {
    if (next === lang.value) return

    lang.value = next

    // 只处理 blog 路由
    if (route.path.startsWith('/blog')) {
      const segments = route.path.split('/').filter(Boolean)
      // ['blog', 'zh', 'slug?']

      if (segments[1]) {
        segments[1] = next
        await router.push('/' + segments.join('/'))
      } else {
        await router.push(`/blog/${next}`)
      }
    }
  }

  return { lang, setLang, switchLang }
}

// composables/useDateFormat.ts
import type { LangCode } from '~/locales/blog/blog.ui'

type DateInput = string | Date | null | undefined

function toDateSafe(input: DateInput): Date | null {
  if (!input) return null

  // 已经是 Date
  if (input instanceof Date) return isNaN(input.getTime()) ? null : input

  // string 可能是 "2026-01-16" 或 "2026-01-16T00:00:00.000Z"
  const s = String(input).trim()
  if (!s) return null

  // 如果是 YYYY-MM-DD，避免被当成 UTC 造成日期偏移
  // 用“本地时间中午12点”构造，最稳（不会因为时区跨日）
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (m) {
    const y = Number(m[1])
    const mo = Number(m[2]) - 1
    const d = Number(m[3])
    const dt = new Date(y, mo, d, 12, 0, 0) // local 12:00
    return isNaN(dt.getTime()) ? null : dt
  }

  // 其他 ISO（含 Z）直接 parse
  const dt = new Date(s)
  return isNaN(dt.getTime()) ? null : dt
}

export function useDateFormat() {
  function formatDate(input: DateInput, lang: LangCode = 'en') {
    const dt = toDateSafe(input)
    if (!dt) return ''

    const locale =
      lang === 'zh' ? 'zh-MY' :
      lang === 'bm' ? 'ms-MY' :
      'en-MY'

    // 你想要的显示风格：19 Jan 2026 / 2026年1月19日
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(dt)
  }

  // 如果你更喜欢中文“2026年01月19日”这种固定格式，也可以加一个
  function formatDateZhFixed(input: DateInput) {
    const dt = toDateSafe(input)
    if (!dt) return ''
    const y = dt.getFullYear()
    const m = String(dt.getMonth() + 1).padStart(2, '0')
    const d = String(dt.getDate()).padStart(2, '0')
    return `${y}年${m}月${d}日`
  }

  return { formatDate, formatDateZhFixed }
}

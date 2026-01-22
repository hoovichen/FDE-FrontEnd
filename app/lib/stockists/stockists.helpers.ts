import type { StockistBase } from './stockists.types'

export function normalizeText(x: string) {
  return (x || '').toLowerCase().trim()
}

export function buildMapsHref(s: StockistBase) {
  if (s.mapUrl && s.mapUrl.trim()) return s.mapUrl.trim()
  const q = [s.name, s.address, s.city, s.state].filter(Boolean).join(', ')
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

export function filterStockists(list: StockistBase[], q: string) {
  const query = normalizeText(q)
  if (!query) return list

  return list.filter(s => {
    const hay = [
      s.name,
      s.code,
      s.phoneRaw,
      s.state,
      s.city,
      s.address,
      ...(s.agent ? [s.agent] : []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return hay.includes(query)
  })
}

export type StockistsGrouped = Record<string, Record<string, StockistBase[]>>

export function groupByStateCity(list: StockistBase[]): StockistsGrouped {
  const out: StockistsGrouped = {}

  for (const s of list) {
    const state = (s.state && s.state.trim()) ? s.state.trim() : '未设置州'
    const city = (s.city && s.city.trim()) ? s.city.trim() : '未设置城市'

    out[state] ||= {}
    out[state][city] ||= []
    out[state][city].push(s)
  }

  // 让每组内部排序稳定一点
  for (const [, cities] of Object.entries(out)) {
    for (const [, items] of Object.entries(cities)) {
      items.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  return out
}

export function formatPhoneMY(phoneRaw?: string) {
  const raw = (phoneRaw || '').trim()
  if (!raw) return ''

  // 去掉空格、括号、短横、点号等，但保留 +
  const cleaned = raw.replace(/[^\d+]/g, '')

  // +60xxxxxxxxxx
  if (cleaned.startsWith('+60')) {
    return formatNational(cleaned.slice(3))
  }

  // 60xxxxxxxxxx
  if (cleaned.startsWith('60')) {
    return formatNational(cleaned.slice(2))
  }

  // 0xxxxxxxxxx
  if (cleaned.startsWith('0')) {
    return formatNational(cleaned.slice(1))
  }

  // 兜底：纯数字
  return formatNational(cleaned)

  /**
   * restDigits = 去掉国家码 / 0 之后的号码
   */
  function formatNational(restDigits: string) {
    const d = restDigits.replace(/\D/g, '')
    if (!d) return ''

    /**
     * ✅ 手机号规则
     */

    // 011 开头（11 位）
    if (d.startsWith('11') && d.length === 9) {
      // 11 + 4 + 4
      return `(+60) 11-${d.slice(2, 6)} ${d.slice(6)}`
    }

    // 01x（除 011）→ 9~10 位（去掉 0 后通常 8 位）
    if (d.startsWith('1') && d.length >= 8) {
      const prefix = d.slice(0, 2)
      const rest = d.slice(2)
      return `(+60) ${prefix}-${group(rest)}`
    }

    /**
     * ✅ 固话规则（03 / 04 / 05 / 06 / 07 / 09）
     * 去掉 0 后通常 8~9 位
     */
    if (d.length === 8 || d.length === 9) {
      const area = d.slice(0, 2)
      const rest = d.slice(2)
      return `(+60) ${area}-${group(rest)}`
    }

    /**
     * 兜底
     */
    return `(+60) ${group(d)}`
  }

  function group(num: string) {
    if (num.length <= 4) return num
    if (num.length <= 7) return `${num.slice(0, 3)} ${num.slice(3)}`
    if (num.length <= 8) return `${num.slice(0, 4)} ${num.slice(4)}`
    return `${num.slice(0, 4)} ${num.slice(4, 8)} ${num.slice(8)}`
  }
}

import { computed, ref } from 'vue'
import type { LangCode } from '~/lib/products.data'
import { PRODUCTS_BASE, PRODUCT_KEYS, type ProductBase } from '~/lib/products.data'
import { PRODUCTS_I18N } from '~/locales/products.i18n'
import { PRODUCTS_UI_TEXT } from '~/locales/products.ui'
import { useLanguage } from '~/composables/useLanguage'

/** 前端最终使用的产品类型（合并了 i18n） */
export interface ProductView extends ProductBase {
  name: string
  summary?: string
}

/** 列表/Section 共用：按当前语言合并好产品数组 */
export function useProductsList() {
  const { lang } = useLanguage()
  const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')

  const list = computed<ProductView[]>(() => {
    const dict = PRODUCTS_I18N[l.value] || {}
    return PRODUCTS_BASE.map(base => ({
      ...base,
      name: dict[base.key]?.name || base.key,
      summary: dict[base.key]?.summary
    }))
  })

  // 简单排序状态
  const sortBy = ref<'default'|'nameAsc'|'priceAsc'|'priceDesc'>('default')
  const sorted = computed(() => {
    const arr = [...list.value]
    switch (sortBy.value) {
      case 'nameAsc':
        return arr.sort((a, b) => a.name.localeCompare(b.name))
      case 'priceAsc':
        return arr.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
      case 'priceDesc':
        return arr.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity))
      default:
        return arr
    }
  })

  const ui = computed(() => PRODUCTS_UI_TEXT[l.value])

  return { lang: l, list, sorted, sortBy, ui }
}

/** 单个产品（用于 /products/[key]） */
export function useProductDetail(key: string) {
  const { lang } = useLanguage()
  const l = computed<LangCode>(() => (lang.value as LangCode) || 'en')

  const detail = computed<ProductView | null>(() => {
    const base = PRODUCTS_BASE.find(p => p.key === key)
    if (!base) return null
    const i18n = PRODUCTS_I18N[l.value]?.[key]
    return {
      ...base,
      name: i18n?.name || key,
      summary: i18n?.summary
    }
  })

  return { detail }
}

/** 用于 nitro.prerender 等 */
export function useProductKeys() {
  return PRODUCT_KEYS
}

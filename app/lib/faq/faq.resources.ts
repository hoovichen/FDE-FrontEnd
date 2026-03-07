import type { LangCode } from '~/lib/faq/faq.types'

export type ResourceType = 'platform' | 'page' | 'contact' | 'blog'

export interface Resource {
  id: string
  type: ResourceType
  title: Record<LangCode, string>
  url: string
  triggers: string[]       // 多语言触发词
  weight?: number          // 同类资源排序
}

export const FAQ_RESOURCES: Resource[] = [
  {
    id: 'platform.lazada',
    type: 'platform',
    title: { zh: '前往 Lazada 购买', en: 'Buy on Lazada', bm: 'Beli di Lazada' },
    url: 'https://www.lazada.com.my/shop/fdg-hot-sauce', // ✅ 你也可以改成直接外链；建议做 redirect route 便于统计
    triggers: ['lazada','购买','下单','order','buy','beli','哪里买','platform'],
    weight: 10,
  },
  {
    id: 'platform.shopee',
    type: 'platform',
    title: { zh: '前往 Shopee 购买', en: 'Buy on Shopee', bm: 'Beli di Shopee' },
    url: 'https://shopee.com.my/firedragonmy',
    triggers: ['shopee','购买','order','buy','beli'],
    weight: 8,
  },
  {
    id: 'platform.tiktok',
    type: 'platform',
    title: { zh: '前往 TikTok Shop', en: 'Shop on TikTok', bm: 'Beli di TikTok Shop' },
    url: 'https://www.tiktok.com/@hot.and.hot24',
    triggers: ['tiktok','tiktok shop','购买','order','buy','beli'],
    weight: 6,
  },
  {
    id: 'page.stockists',
    type: 'page',
    title: { zh: '查看线下门店（Stockists）', en: 'View Stockists', bm: 'Lihat Stockists' },
    url: '/stockists',
    triggers: ['stockist','门店','线下','kedai','where','哪里买','ipoh','perak','kl','penang'],
    weight: 9,
  },
  {
    id: 'page.contact',
    type: 'contact',
    title: { zh: '联系合作 / 批发（Contact）', en: 'Contact for Wholesale/Partnership', bm: 'Hubungi untuk Borong/Kerjasama' },
    url: '/contact',
    triggers: ['合作','批发','代理','oem','white label','dropship','wholesale','partnership','contact','hubungi'],
    weight: 10,
  },
]
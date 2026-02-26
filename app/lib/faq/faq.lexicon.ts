import type { LangCode } from './faq.types'

export type ConceptId =
    | 'topic.shipping'
    | 'topic.storage'
    | 'topic.spicy'
    | 'intent.buy'
    | 'topic.safety'

export type LexiconEntryType = 'synonym' | 'phrase' | 'brand'

export interface LexiconEntry {
    term: string
    lang: LangCode | 'any'
    concept: ConceptId
    weight: number
    type?: LexiconEntryType
}

export const LEXICON: LexiconEntry[] = [
    // shipping
    { term: '邮寄', lang: 'zh', concept: 'topic.shipping', weight: 2.5 },
    { term: '快递', lang: 'zh', concept: 'topic.shipping', weight: 2.5 },
    { term: '配送', lang: 'zh', concept: 'topic.shipping', weight: 2.0 },
    { term: '发货', lang: 'zh', concept: 'topic.shipping', weight: 2.0 },

    { term: 'shipping', lang: 'en', concept: 'topic.shipping', weight: 2.5 },
    { term: 'ship', lang: 'en', concept: 'topic.shipping', weight: 2.0 },
    { term: 'delivery', lang: 'en', concept: 'topic.shipping', weight: 2.5 },
    { term: 'courier', lang: 'en', concept: 'topic.shipping', weight: 2.0 },

    { term: 'penghantaran', lang: 'bm', concept: 'topic.shipping', weight: 2.5 },
    { term: 'kurier', lang: 'bm', concept: 'topic.shipping', weight: 2.0 },
    { term: 'pos', lang: 'bm', concept: 'topic.shipping', weight: 1.6 },

    // buy intent（注意：intent.buy 不等于 category.order）
    { term: '购买', lang: 'zh', concept: 'intent.buy', weight: 2.5 },
    { term: '哪里买', lang: 'zh', concept: 'intent.buy', weight: 2.5, type: 'phrase' },
    { term: '怎么买', lang: 'zh', concept: 'intent.buy', weight: 2.5, type: 'phrase' },

    { term: 'buy', lang: 'en', concept: 'intent.buy', weight: 2.5 },
    { term: 'order', lang: 'en', concept: 'intent.buy', weight: 2.0 },
    { term: 'where to buy', lang: 'en', concept: 'intent.buy', weight: 2.8, type: 'phrase' },

    { term: 'beli', lang: 'bm', concept: 'intent.buy', weight: 2.5 },
    { term: 'mana beli', lang: 'bm', concept: 'intent.buy', weight: 2.8, type: 'phrase' },
    { term: 'kedai', lang: 'bm', concept: 'intent.buy', weight: 1.4 },

    // storage
    { term: '保存', lang: 'zh', concept: 'topic.storage', weight: 2.0 },
    { term: '冷藏', lang: 'zh', concept: 'topic.storage', weight: 2.0 },
    { term: '开封', lang: 'zh', concept: 'topic.storage', weight: 1.4 },
    { term: '保质期', lang: 'zh', concept: 'topic.storage', weight: 1.8 },

    { term: 'store', lang: 'en', concept: 'topic.storage', weight: 2.0 },
    { term: 'refrigerate', lang: 'en', concept: 'topic.storage', weight: 2.0 },
    { term: 'shelf life', lang: 'en', concept: 'topic.storage', weight: 1.8, type: 'phrase' },

    { term: 'simpan', lang: 'bm', concept: 'topic.storage', weight: 2.0 },
    { term: 'peti sejuk', lang: 'bm', concept: 'topic.storage', weight: 2.0, type: 'phrase' },
    { term: 'tarikh luput', lang: 'bm', concept: 'topic.storage', weight: 1.8, type: 'phrase' },

    // spicy
    { term: '辣', lang: 'zh', concept: 'topic.spicy', weight: 1.8 },
    { term: '不辣', lang: 'zh', concept: 'topic.spicy', weight: 1.8 },
    { term: '口味', lang: 'zh', concept: 'topic.spicy', weight: 1.2 },

    { term: 'spicy', lang: 'en', concept: 'topic.spicy', weight: 1.8 },
    { term: 'mild', lang: 'en', concept: 'topic.spicy', weight: 1.4 },

    { term: 'pedas', lang: 'bm', concept: 'topic.spicy', weight: 1.8 },
    { term: 'tak pedas', lang: 'bm', concept: 'topic.spicy', weight: 1.8, type: 'phrase' },

    // safety（你当前数据有 halal / mesti 等关键词）
    { term: '认证', lang: 'zh', concept: 'topic.safety', weight: 1.6 },
    { term: '安全', lang: 'zh', concept: 'topic.safety', weight: 1.4 },
    { term: '防腐剂', lang: 'zh', concept: 'topic.safety', weight: 1.6 },
    { term: 'halal', lang: 'any', concept: 'topic.safety', weight: 2.0 },

    { term: 'certified', lang: 'en', concept: 'topic.safety', weight: 1.6 },
    { term: 'preservative', lang: 'en', concept: 'topic.safety', weight: 1.6 },
    { term: 'safe', lang: 'en', concept: 'topic.safety', weight: 1.2 },

    { term: 'sijil', lang: 'bm', concept: 'topic.safety', weight: 1.6 },
    { term: 'selamat', lang: 'bm', concept: 'topic.safety', weight: 1.2 },
]
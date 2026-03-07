import type { LangCode } from '~/lib/faq/faq.types'
import type { FaqEntitySearchHit } from '~/lib/faq/faq.types'
import { searchFaqEntities } from '~/lib/faq/faq.search'
import { FAQ_ENTITIES } from '~/lib/faq/faq.entities'
import { FAQ_RESOURCES } from './faq.resources'
import { PRODUCT_INDEX } from './faq.products.index'
import { BLOG_INDEX } from './faq.blog.index'

export type SmartAction = {
    id: string
    label: string
    url: string
    kind: 'primary' | 'secondary'
}

export type SmartCard =
    | { type: 'product'; key: string; title: string; image?: string; url?: string; url2?: string; meta?: string }
    | { type: 'blog'; slug: string; title: string; url: string; meta?: string }
    | { type: 'stockist'; key: string; title: string; url?: string; meta?: string }

export type SmartResult = {
    hits: FaqEntitySearchHit[]
    best?: FaqEntitySearchHit | null
    actions: SmartAction[]
    cards: SmartCard[]
    suggestions: string[]
    state: 'answered' | 'notfound'
    debug?: { intents: string[]; entities: Record<string, string[]> }
}

/* -------------------------
   1) normalize + token
-------------------------- */
function normalize(s: string): string {
    return (s || '').toLowerCase().replace(/\s+/g, ' ').trim()
}

function uniq(arr: string[]) {
    return Array.from(new Set(arr.filter(Boolean)))
}

/* -------------------------
   2) Entity dictionaries
   （可持续扩展）
-------------------------- */
const PLATFORM_ALIASES = {
    lazada: ['lazada'],
    shopee: ['shopee'],
    tiktok: ['tiktok', 'tiktok shop'],
    whatsapp: ['whatsapp', 'wa', 'wts', '私讯', '私信', 'dm'],
    stockists: ['stockist', '门店', '线下', 'kedai', '店', '哪里买', 'where to buy'],
}

const GEO_ALIASES = {
    perak: ['perak', '霹雳'],
    ipoh: ['ipoh', '怡保'],
    kl: ['kl', 'kuala lumpur', '吉隆坡'],
    selangor: ['selangor', '雪兰莪'],
    penang: ['penang', '槟城'],
    sabah: ['sabah', '沙巴'],
    sarawak: ['sarawak', '砂拉越'],
    singapore: ['singapore', '新加坡', 'sg'],
}

function detectPlatforms(text: string) {
    const found: string[] = []
    for (const [k, arr] of Object.entries(PLATFORM_ALIASES)) {
        if (arr.some(x => text.includes(x))) found.push(k)
    }
    return uniq(found)
}

function detectGeos(text: string) {
    const found: string[] = []
    for (const [k, arr] of Object.entries(GEO_ALIASES)) {
        if (arr.some(x => text.includes(x))) found.push(k)
    }
    return uniq(found)
}

function detectProducts(text: string) {
    const found: string[] = []
    for (const p of PRODUCT_INDEX) {
        const hit = p.aliases.some(a => normalize(a) && text.includes(normalize(a)))
            || text.includes(normalize(p.name.zh))
            || text.includes(normalize(p.name.en))
            || text.includes(normalize(p.name.bm))
        if (hit) found.push(p.key)
    }
    return uniq(found)
}

/* -------------------------
   3) Intent routing (rule-based)
-------------------------- */
type Intent =
    | 'purchase'
    | 'delivery'
    | 'product_help'
    | 'product_use'
    | 'partnership'
    | 'location_stockist'
    | 'brand_story'

function detectIntents(text: string, entities: { platform: string[]; geo: string[]; product: string[] }): Intent[] {
    const intents: Intent[] = []

    const hasBuy = /buy|order|purchase|beli|购买|下单|哪里买|怎么买/.test(text)
    const hasShip = /ship|delivery|courier|kurier|pos|邮寄|快递|配送|运费|东马/.test(text)
    const hasPartner = /wholesale|oem|white label|dropship|合作|批发|代理|经销/.test(text)
    const hasUse = /怎么吃|吃法|搭配|pair|use|masak|recipe|海南鸡饭|chicken rice/.test(text)
    const hasHealth = /msg|味精|糖|热量|孕妇|小孩|高血压|allergy|allergen|shrimp|udang|海鲜/.test(text)
    const hasStory = /story|brand|起点|风味|理念|设计|the road|hello/.test(text)

    if (hasBuy || entities.platform.length) intents.push('purchase')
    if (hasShip || entities.geo.length) intents.push('delivery')
    if (hasPartner) intents.push('partnership')
    if (hasUse) intents.push('product_use')
    if (hasHealth) intents.push('product_help')
    if (entities.geo.length && (hasBuy || /哪里买|where to buy|mana beli/.test(text))) intents.push('location_stockist')
    if (hasStory) intents.push('brand_story')

    return uniq(intents) as Intent[]
}

/* -------------------------
   4) Actions builder (Lazada first)
-------------------------- */
function buildActions(lang: LangCode, intents: Intent[], platforms: string[]): SmartAction[] {
    const actions: SmartAction[] = []

    // Purchase CTA: Lazada first, then Shopee
    const lazada = FAQ_RESOURCES.find(r => r.id === 'platform.lazada')
    const shopee = FAQ_RESOURCES.find(r => r.id === 'platform.shopee')
    const tiktok = FAQ_RESOURCES.find(r => r.id === 'platform.tiktok')
    const stockists = FAQ_RESOURCES.find(r => r.id === 'page.stockists')
    const contact = FAQ_RESOURCES.find(r => r.id === 'page.contact')

    const pickLabel = (r: any) => r?.title?.[lang] || r?.title?.en || ''

    if (intents.includes('purchase')) {
        if (lazada) actions.push({ id: lazada.id, label: pickLabel(lazada), url: lazada.url, kind: 'primary' })
        if (shopee) actions.push({ id: shopee.id, label: pickLabel(shopee), url: shopee.url, kind: 'secondary' })
        if (tiktok) actions.push({ id: tiktok.id, label: pickLabel(tiktok), url: tiktok.url, kind: 'secondary' })
        if (stockists) actions.push({ id: stockists.id, label: pickLabel(stockists), url: stockists.url, kind: 'secondary' })
    }

    if (intents.includes('partnership') && contact) {
        actions.unshift({ id: contact.id, label: pickLabel(contact), url: contact.url, kind: 'primary' })
    }

    if (intents.includes('location_stockist') && stockists) {
        actions.push({ id: stockists.id, label: pickLabel(stockists), url: stockists.url, kind: 'secondary' })
    }

    // Remove duplicates
    const seen = new Set<string>()
    return actions.filter(a => (seen.has(a.id) ? false : (seen.add(a.id), true))).slice(0, 4)
}

/* -------------------------
   5) Cards builder
-------------------------- */
function buildProductCards(lang: LangCode, productKeys: string[]): SmartCard[] {
    return productKeys.slice(0, 3).map((k) => {
        const p = PRODUCT_INDEX.find(x => x.key === k)
        if (!p) return null
        const title = p.name[lang] || p.name.en
        const meta =
            typeof p.heat === 'number'
                ? (lang === 'zh' ? `辣度 ${p.heat}/5` : lang === 'bm' ? `Pedas ${p.heat}/5` : `Heat ${p.heat}/5`)
                : undefined

        return { type: 'product', key: p.key, title, meta } as SmartCard
    }).filter(Boolean) as SmartCard[]
}

function buildBlogCards(lang: LangCode, text: string, productKeys: string[]): SmartCard[] {
    const hits = BLOG_INDEX.filter(b =>
        b.triggers.some(t => text.includes(normalize(t))) ||
        b.relatedProducts.some(k => productKeys.includes(k))
    ).slice(0, 2)

    return hits.map(b => {
        const url = `/blog/${lang}/${b.slug}`  // ✅ 这里按你现有 /blog/[lang]/... 规则拼
        return {
            type: 'blog',
            slug: b.slug,
            title: b.title[lang] || b.title.en,
            url,
            meta: lang === 'zh' ? '相关文章' : lang === 'bm' ? 'Artikel berkaitan' : 'Related article',
        }
    })
}

/* -------------------------
   6) Suggestions (short & stable)
-------------------------- */
function buildSuggestions(lang: LangCode): string[] {
    if (lang === 'zh') return ['购买渠道', '配送范围', '最辣是哪款', '开封怎么保存']
    if (lang === 'bm') return ['cara beli', 'penghantaran', 'paling pedas', 'cara simpan']
    return ['where to buy', 'delivery coverage', 'which is spiciest', 'how to store']
}

/* -------------------------
   7) Main entry
-------------------------- */
export function smartFaqSearch(
    query: string,
    opts: { displayLang: LangCode; limit?: number } = { displayLang: 'en' }
): SmartResult {
    const displayLang = opts.displayLang
    const limit = opts.limit ?? 5
    const text = normalize(query)

    const hits = searchFaqEntities(FAQ_ENTITIES, query, { displayLang, limit })
    const best = hits?.[0] || null

    const entities = {
        platform: detectPlatforms(text),
        geo: detectGeos(text),
        product: detectProducts(text),
    }
    const intents = detectIntents(text, entities)

    const actions = buildActions(displayLang, intents, entities.platform)

    // Cards: product first when detected; also blog when story/use triggered
    const productCards = buildProductCards(displayLang, entities.product)
    const blogCards = (intents.includes('brand_story') || intents.includes('product_use'))
        ? buildBlogCards(displayLang, text, entities.product)
        : []

    const cards = [...productCards, ...blogCards].slice(0, 3)

    // Fallback state:
    // - answered if FAQ best score is decent OR we have actions/cards
    const hasSmart = actions.length > 0 || cards.length > 0
    const answered = Boolean(best && best.score > 0) || hasSmart

    return {
        hits,
        best,
        actions,
        cards,
        suggestions: buildSuggestions(displayLang),
        state: answered ? 'answered' : 'notfound',
        debug: { intents, entities },
    }
}
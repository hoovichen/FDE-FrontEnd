export type LangCode = 'zh' | 'en' | 'bm'

export interface StockistsUiText {
    title: string
    desc: string
    searchPlaceholder: string
    openMaps: string
    emptyTitle: string
    emptyDesc: string
    backToList: string
    groupLabel: string
}

export const STOCKISTS_UI: Record<LangCode, StockistsUiText> = {
    zh: {
        title: '线下合作店',
        desc: '想在附近买到 Fire Dragon？这里是我们目前的合作店列表（持续更新）。',
        searchPlaceholder: '搜索店名 / 城市 / 州 / 电话…',
        openMaps: '打开地图',
        emptyTitle: '暂时找不到匹配的店',
        emptyDesc: '换个关键词试试，例如城市名或店名。',
        backToList: '返回所有店铺',
        groupLabel: '按州 / 城市分组'
    },
    en: {
        title: 'Stockists',
        desc: 'Find Fire Dragon at our partnered stores (list will be updated).',
        searchPlaceholder: 'Search name / city / state / phone…',
        openMaps: 'Open Maps',
        emptyTitle: 'No matching stockist',
        emptyDesc: 'Try a different keyword — city or store name.',
        backToList: 'Back to stockist list',
        groupLabel: 'Grouped by state / city'
    },
    bm: {
        title: 'Stockists',
        desc: 'Cari Fire Dragon di kedai rakan niaga kami (akan dikemas kini).',
        searchPlaceholder: 'Cari nama / bandar / negeri / telefon…',
        openMaps: 'Buka Peta',
        emptyTitle: 'Tiada padanan',
        emptyDesc: 'Cuba kata kunci lain — bandar atau nama kedai.',
        backToList: 'Kembali ke senarai kedai',
        groupLabel: 'Mengikut negeri / bandar'
    }
}

export type StockistStatus = 'active' | 'inactive'

export interface StockistBase {
    /** 稳定主键（用于前端 key / 未来 DB id 映射） */
    key: string

    /** Excel: Customer Code */
    code: string

    /** 店名 */
    name: string

    /** 可选：联络 */
    phoneRaw?: string   // ✅ 原始值（excel）

    /** Excel: Tax Entity */
    taxEntity?: string

    /** Excel: Currency */
    currency?: string

    /** Excel: Agent */
    agent?: string

    /** 是否启用（Excel: Active） */
    active: boolean

    /** 未来你补：州/城市/地址/地图/图片 */
    state?: string
    city?: string
    address?: string

    /** 直接放 Google Maps 链接（最省事） */
    mapUrl?: string

    /** 店面截图 / 地图截图（建议放 public/images/stockists/...） */
    image?: string
    mapImage?: string
}

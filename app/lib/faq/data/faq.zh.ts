import type { FaqItem } from '../faq.types'

export const FAQ_ZH: FaqItem[] = [

  /* =========================
     A. 购买与平台
  ========================== */

  {
    id: 'order.buy.channels',
    category: 'order',
    q: '在哪里可以购买 Fire Dragon 产品？官网可以下单吗？',
    a: `Fire Dragon 目前通过 Shopee、Lazada、TikTok Shop 以及线下合作门店销售。

官网暂时不开放零售，仅提供建议零售价（RRP）与品牌资讯。由于我们尚未建立完整的全国物流网络，因此暂不提供官网零售服务。

不同平台会有不同优惠与活动，建议您比较后选择合适的平台购买。`,
    keywords: ['购买', '哪里买', 'Shopee', 'Lazada', 'TikTok', '官网', 'RRP'],
    featured: true,
  },

  {
    id: 'order.platform.difference',
    category: 'order',
    q: '不同平台的价格和优惠为什么会不同？',
    a: `各平台的促销机制与后台优惠设置不同，因此价格与折扣形式可能存在差异。

例如：
• Lazada 支持“买三送一”等多买多送机制  
• Shopee 主要提供同类产品多件折扣  

此外，在大型促销期间（如双十一），平台通常设有最低折扣门槛，因此价格会随活动而调整。`,
    keywords: ['平台价格差异', '优惠机制', '双十一', '买三送一'],
  },

  {
    id: 'order.offline.price',
    category: 'order',
    q: '为什么线下门店价格与线上不同？',
    a: `我们提供统一的批发价与建议零售价（RRP）。

但线下门店可根据自身经营策略与成本结构进行价格调整，因此不同地区门店售价可能略有差异。`,
    keywords: ['线下价格', '门店售价', 'RRP'],
  },

  {
    id: 'order.private.order',
    category: 'order',
    q: '可以通过 WhatsApp 或私讯直接下单吗？',
    a: `可以。

霹雳班台地区可安排直接送达；其他地区将通过物流公司寄送，运费由客户承担。

若为批量或长期合作订单，欢迎进一步洽谈。`,
    keywords: ['WhatsApp', '私讯下单', '直接购买', '班台配送'],
  },

  {
    id: 'order.wholesale',
    category: 'order',
    q: '是否提供批发、代理或合作？',
    a: `我们支持批发、餐饮定制与经销合作。

• 电商平台可零售购买  
• 私下批发订单一般以 3 打起订  
• 阶梯价格与合作细节可另行商议  

我们更优先发展 Fire Dragon 自有品牌，同时也欢迎理念契合的合作伙伴。`,
    keywords: ['批发', '代理', 'MOQ', '合作', '经销'],
    featured: true,
  },

  {
    id: 'order.oem.white.label',
    category: 'order',
    q: '是否支持 OEM 或 White Label 合作？',
    a: `我们支持 OEM 与定制合作，并曾与部分品牌方合作开发产品。

但我们更优先专注于 Fire Dragon 自有品牌的发展。

如需 OEM 或 White Label 合作：
• 可提供不同规格包装  
• 可协助开发适合餐饮渠道的配方  
• 价格与条件需根据项目规模讨论  

我们建议长期合作与联名模式，以确保双方品牌价值的持续提升。`,
    keywords: ['OEM', 'white label', '代工', '定制', '联名合作'],
  },
  {
    id: 'order.promotion.11',
    category: 'order',
    q: '双十一或大型促销期间会有折扣吗？',
    a: `会的。

在双十一、双十二等大型促销期间，我们通常会参与平台活动，并提供较大幅度的折扣。具体优惠力度以当期平台活动为准。`,
    keywords: ['双十一', '促销', '折扣', '大促'],
  },

  {
    id: 'order.bundle.plan',
    category: 'order',
    q: '是否会推出礼包或组合装？',
    a: `是的。

我们计划在各平台陆续推出礼包或组合装选项，以方便顾客一次购买多种产品，并尽可能统一不同平台的优惠形式。`,
    keywords: ['礼包', '组合装', '套装'],
  },

  {
    id: 'order.stock.display',
    category: 'order',
    q: '为什么看不到库存数量？',
    a: `目前我们尚未开放实时库存显示功能。

作为生产商，我们大部分时间都有稳定库存。未来会逐步优化库存显示系统。`,
    keywords: ['库存', '缺货', '库存显示'],
  },
  /* =========================
   Aa. 合作与出口
========================== */
  {
    id: 'cooperation.dropship',
    category: 'order',
    q: '是否支持 Drop Shipping？',
    a: `目前仅在霹雳配送网络内较为方便。

其他地区需视物流条件而定。`,
    keywords: ['dropship', '代发'],
  },

  {
    id: 'cooperation.export',
    category: 'order',
    q: '是否支持出口或海外代理？',
    a: `我们欢迎海外代理合作。

目前新加坡已有代理。如有其他国家合作意向，欢迎联系我们洽谈。`,
    keywords: ['出口', '海外代理', '新加坡'],
  },

  {
    id: 'cooperation.stockist.apply',
    category: 'order',
    q: '如何成为 Fire Dragon 的 Stockist？',
    a: `欢迎有兴趣的合作伙伴通过 Contact 页面联系我们。

我们将根据地区与合作模式进一步讨论。`,
    keywords: ['stockist', '成为经销商', '合作申请'],
  },

  /* =========================
     B. 物流与配送
  ========================== */

  {
    id: 'shipping.coverage.region',
    category: 'shipping',
    q: '配送范围包括哪些地区？',
    a: `通过电商平台下单，可覆盖全马来西亚（部分平台支持新加坡）。

私人合作配送以霹雳为优先，其次为槟城、雪兰莪与吉隆坡。东马配送运费较高，需额外承担。

我们也欢迎东马及海外代理合作。`,
    keywords: ['配送范围', '西马', '东马', '新加坡', '代理合作'],
    featured: true,
  },

  {
    id: 'shipping.dispatch.time',
    category: 'shipping',
    q: '下单后多久发货？',
    a: `每日中午 12:00 前完成付款的订单，通常当天 14:00–15:00 发货。

12:00 后订单将顺延至下一工作日处理。

周日与公共假期通常不发货。`,
    keywords: ['发货时间', '12点前发货', '工作日'],
  },

  {
    id: 'shipping.same.day',
    category: 'shipping',
    q: '是否可以当天送达？',
    a: `霹雳班台地区若直接联系我们购买，可安排当天送达。

其他地区配送时间取决于物流公司。`,
    keywords: ['当天送达', '班台配送'],
  },

  {
    id: 'shipping.courier.option',
    category: 'shipping',
    q: '使用哪家快递公司？',
    a: `优先使用 J&T，其次为 NinjaVan。

私下订单可根据客户需求选择物流方式。`,
    keywords: ['J&T', 'NinjaVan', '快递公司'],
  },

  {
    id: 'shipping.issue.damage',
    category: 'shipping',
    q: '如果包裹破损或地址填写错误怎么办？',
    a: `若确认非人为损坏，我们将安排补发。

如属地址填写错误且非故意，我们会协助与物流公司沟通并提供解决方案。`,
    keywords: ['破损补发', '地址错误', '物流问题'],
  },
  {
    id: 'shipping.east.why.expensive',
    category: 'shipping',
    q: '为什么东马运费较高？',
    a: `东马（Sabah / Sarawak）配送需通过航空或海运渠道，成本较高。

目前我们尚未建立自有跨海运输网络，因此运费需由客户承担。`,
    keywords: ['东马运费', 'Sabah', 'Sarawak'],
  },

  {
    id: 'shipping.tracking',
    category: 'shipping',
    q: '是否提供物流追踪号码？',
    a: `通过电商平台下单，可在平台订单页面查看追踪信息。

私下订单发货后，我们会提供对应的物流追踪号码。`,
    keywords: ['tracking', '物流追踪', '单号'],
  },

  {
    id: 'shipping.weekend',
    category: 'shipping',
    q: '周末或公共假期是否发货？',
    a: `通常不发货。

因物流公司周日及公共假期未营业，订单将顺延至下一个工作日处理。`,
    keywords: ['周末发货', '假期发货'],
  },

  {
    id: 'shipping.bulk.discount',
    category: 'shipping',
    q: '大量订购是否有运费优惠？',
    a: `若订单数量达到 12 打（120 瓶）且位于霹雳配送网络内，通常可享免运费。

其他地区将根据数量与距离协商运费优惠。`,
    keywords: ['批量运费', '免运费', '120瓶'],
  },

  /* =========================
     C. 保存与认证
  ========================== */

  {
    id: 'storage.after.open',
    category: 'storage',
    q: '开封后如何保存？',
    a: `开封后建议冷藏保存，并使用干净干燥的餐具取用。

常温密封保存 2 个月内风味变化不大，但建议尽早食用以保持最佳品质。`,
    keywords: ['开封保存', '冷藏', '2个月'],
    featured: true,
  },

  {
    id: 'safety.certification.status',
    category: 'safety',
    q: '是否拥有 Halal、MESTI 或 ISO 认证？',
    a: `目前尚未取得 Halal、MESTI 或 ISO 认证。

我们正处于筹备与申请阶段。`,
    keywords: ['Halal', 'MESTI', 'ISO', '食品认证'],
  },
  /* =========================
     Ca. 品牌信任相关
  ========================== */
  {
    id: 'brand.factory.location',
    category: 'safety',
    q: '工厂在哪里？是否可以参观？',
    a: `我们的工厂位于霹雳州班台附近。

欢迎预约参观。详细地址与营业时间请参考 Contact 页面或 Google Maps 搜索 “FireDragon Enterprise”。`,
    keywords: ['工厂地址', '参观', '班台'],
  },

  {
    id: 'brand.self.produced',
    category: 'safety',
    q: '产品是自家生产还是 OEM？',
    a: `所有 Fire Dragon 产品均由自家工厂生产。`,
    keywords: ['自家生产', 'OEM'],
  },

  {
    id: 'brand.family.business',
    category: 'safety',
    q: 'Fire Dragon 是家庭企业吗？',
    a: `是的，我们是一家自 2010 年创立的本地家庭企业。`,
    keywords: ['家庭企业', '成立多久'],
  },

  {
    id: 'brand.founded.year',
    category: 'safety',
    q: 'Fire Dragon 成立多久了？',
    a: `Fire Dragon 成立于 2010 年，至今已有 15 年历史。`,
    keywords: ['成立时间', '2010'],
  },

  /* =========================
     D. 产品信息
  ========================== */

  {
    id: 'product.spicy.level',
    category: 'product',
    q: '产品辣度如何区分？',
    a: `以 5 分为满分：

火龙辣椒酱系列：  
红 1｜黄 4｜青 3｜粉 5  

其他产品：  
香脆虾米辣 3  
Sambal 虾酱 1  
生姜蒜蓉 0  
香脆银鱼仔 1`,
    keywords: ['辣度', '最辣', '不辣'],
    featured: true,
  },

  {
    id: 'product.ingredients.msg',
    category: 'product',
    q: '产品是否含有味精或人工色素？',
    a: `部分产品（如香脆虾米辣、香脆银鱼仔）含有味精。

我们未添加人工色素，产品颜色来自天然辣椒本身。`,
    keywords: ['味精', 'MSG', '人工色素'],
  },

  {
    id: 'product.health.general',
    category: 'product',
    q: '孕妇、小孩或高血压人士可以食用吗？',
    a: `一般情况下可以适量食用。

部分产品油盐含量较高，建议根据个人体质与饮食习惯控制摄取量。`,
    keywords: ['孕妇', '小孩', '高血压'],
  },
  {
    id: 'product.sugar.content',
    category: 'product',
    q: '产品是否含有糖分？',
    a: `部分产品（如香脆虾米辣、香脆银鱼仔）含有糖。

火龙辣椒酱系列主要为辅料（瓜果：冬瓜、南瓜、番薯）本身的天然甜味。`,
    keywords: ['糖分', '含糖'],
  },

  {
    id: 'product.allergen.shrimp',
    category: 'product',
    q: '产品是否含有虾或海鲜成分？',
    a: `部分产品含有虾成分，例如香脆虾米辣与 Sambal 虾酱。

对海鲜过敏者请留意产品标签。`,
    keywords: ['过敏', '虾', '海鲜'],
  },

  {
    id: 'product.calorie.range',
    category: 'product',
    q: '产品热量大约是多少？',
    a: `不同产品热量不同。

• 火龙辣椒酱系列：约每 100g 100–400 千卡  
• 香脆虾米辣、Sambal 等：约每 100g 200–800 千卡  

具体以产品标签为准。`,
    keywords: ['热量', '卡路里', 'calorie'],
  },

  {
    id: 'product.most.spicy',
    category: 'product',
    q: '哪一款产品最辣？',
    a: `火龙辣椒酱系列中的“粉盖”辣度最高（5/5）。`,
    keywords: ['最辣', '粉盖'],
  },

  {
    id: 'product.non.spicy',
    category: 'product',
    q: '哪一款产品不辣或微辣？',
    a: `生姜蒜蓉基本不辣（0/5）。

火龙辣椒酱红盖为微辣（1/5）。`,
    keywords: ['不辣', '微辣'],
  },

  /* =========================
     E. 产品使用
  ========================== */

  {
    id: 'product-use.recommendation',
    category: 'product-use',
    q: '产品有哪些推荐吃法？',
    a: `• 辣椒酱：适合搭配炸物、拌面或炒菜  
• 香脆虾米辣：可拌饭、炒饭或干捞面  
• Sambal：适合炒粿条或马来风味料理  
• 生姜蒜蓉 + 指天椒辣椒酱 + 酸柑：可调配成海南鸡饭辣椒  

也欢迎您探索更多创意吃法。`,
    keywords: ['吃法', '搭配', '拌饭', '炒菜', '海南鸡饭'],
  },


]
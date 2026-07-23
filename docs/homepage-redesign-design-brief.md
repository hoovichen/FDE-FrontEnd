# Homepage Redesign Design Brief

Last reviewed: 2026-07-22

## 1. 背景

设计部这轮要求主要针对 homepage，但视觉方向已经会影响整个门户网站。参考图表现出来的风格不是现站原本的红橙品牌门户风，而是更接近 Instagram / editorial commerce / lifestyle catalog 的方向：

- 大面积留白
- 低饱和橄榄绿
- 黑白导航
- 大幅产品摄影
- 极少文字
- 轻量 CTA
- 产品卡片更接近电商 catalog
- section 之间用完整色块或大图分割

因此不能只重写 homepage。Homepage 可以作为第一批落地页面，但必须同步定义全站 token、header、footer、CTA、卡片、图片比例、字体层级和页面节奏，否则产品页、blog、recipes、stockists 会出现明显割裂。

## 2. 设计目标

### 用户目标

- 快速知道 Fire Dragon 是一个本地食品品牌。
- 第一屏看到真实产品，而不是抽象品牌图形。
- 快速进入 Catalog、Recipes、Blog、Stockists、Contact。
- 对产品产生信任并进入 Shopee / Lazada / WhatsApp 等购买路径。

### 品牌目标

- 从“传统品牌展示站”升级为“轻 lifestyle + 产品 catalog 门户”。
- 保留本地味道、家庭配方、马来西亚餐桌这些品牌叙事。
- 减少旧站过多红橙色块，改成更干净、可拍照传播、适合社媒截图的视觉系统。

### 工程目标

- 先做 homepage redesign，但设计 token 和公共组件必须能复用到全站。
- 避免把新风格硬编码进首页单页 CSS。
- 后续接 FDG OS/CMS 时，文案、图片、产品、blog 能进入同一套内容模型。

## 3. 设计方向判断

### 关键词

- Instagram-friendly
- Editorial commerce
- Minimal food catalog
- Soft lifestyle
- Local Malaysian food brand
- Clean product photography

### 视觉语言

- 主色：低饱和橄榄绿。
- 辅色：浅冷灰蓝背景、白色、大量黑色文字。
- 点缀色：产品本身的红、黄、粉、绿，而不是 UI 大面积使用红色。
- 字体：现代无衬线，字重克制。
- 圆角：按钮胶囊可以大圆角；卡片本身不需要厚重装饰。
- 阴影：尽量不用或极轻。
- 图片：真实产品摄影优先，不要抽象插画。

## 4. Homepage Section 规格

### 4.1 Announcement Bar

参考：Image #2

内容：

- `Explore our latest recipes & creations`

样式：

- 高度约 56-64px desktop，mobile 可 44-52px。
- 背景：olive green。
- 文案居中。
- 字号：12px。
- 字重：bold。
- 颜色：白色或近白。

交互：

- 整条 bar 可点击，或文字内提供 Recipes / Blog 两个链接。
- 如果使用整条点击，目标建议先到 `/recipes`；可在右侧/hover 中露出 Blog。

注意：

- 当前设计清单写 link: Recipes / Blog，需要产品层面确认是单链接还是两个链接。
- 建议做成可配置组件，后续能切换新品、活动、食谱推广。

### 4.2 Header / Hero

参考：Image #3

内容：

- Menu: `Home`, `Catalog`, `Contact`
- Middle/right: language icon
- Heading: `A local brand with a passion for real taste`
- Text: `Bringing Hometown Flavours to Every Malaysian Table. Our signature sauces are here to elevate your meals!`

样式：

- Hero 使用全屏或接近全屏产品大图。
- Header 叠在 hero 上方，黑色/透明黑背景。
- Menu 字号：12px。
- Heading 字号：18px，白色，居中，覆盖在图片下半区。
- Body 字号：16px，白色，居中，最大宽度控制，避免长行。
- 中间白色细线可作为 heading 与 body 的视觉分隔。

工程调整：

- 现有 `HeroSection` 是多 slide 左右分栏；新设计应改为 single full-bleed hero 或少量 editorial hero。
- 当前导航项较多，需要重构为简化导航：
  - Home -> `/`
  - Catalog -> `/products`
  - Contact -> `/contact`
  - Recipes / Blog / Stockists 可进入 announcement、section CTA 或 footer。

注意：

- 搜索、账户、购物袋图标在参考图中存在，但当前站没有自营 checkout/account。不要无意义实现假入口。
- 如保留右侧 icon，应使用：
  - language selector
  - search only if站内搜索真的可用
  - social/contact icon
- 不建议加购物袋，除非后续接电商。

### 4.3 Product Listing

参考：Image #4

内容：

- Title: `Featured Product`
- Product name: 13px
- Media: 产品图

样式：

- 标题居中，24px。
- 横向 4 列 desktop，2 列 tablet，横滑或 2 列 mobile。
- 图片区域大，产品名区域小。
- 产品卡不要复杂边框和阴影。
- 背景偏白/浅灰。
- 可保留 `Sold out` badge only if库存状态真实；否则不要显示。

工程调整：

- 当前首页 featured products 只显示 `featuredHome` 产品，能继续复用。
- 但卡片样式需要从现有 `SectionProducts` 中抽出新 ProductTile。
- 产品图需要统一比例和透明边距，避免不同包装高度造成视觉不齐。

### 4.4 Quotes + CTA

参考：Image #6

内容：

- Text: `Discover our signature Malaysian chilli sauces and homemade specialities. Crafted with authentic flavours to bring the true taste of home to your table.`
- Button: `Shop now →`
- Link: Lazada / Shopee

样式：

- 大面积白底。
- 文案居中。
- 字号：16px。
- 行高宽松。
- CTA 字号：12px。
- CTA 可做文字链接或极轻按钮，不要厚重主按钮。

交互：

- 如果只有一个按钮，点击后建议打开一个小选择菜单：
  - Shopee
  - Lazada
  - WhatsApp
- 如果设计部坚持单跳转，优先跳产品页 `/products`，让用户再选择平台，SEO 和体验更稳。

### 4.5 Recipes

参考：Image #7

内容：

- Heading: `Everyday Cooking Inspiration`
- Text: `Transform simple meals into gourmet delights.`
- Button: `Learn more`
- Link: `/recipes`

样式：

- 50/50 split section。
- 左侧大图，右侧浅冷灰蓝背景。
- 文字居中。
- Heading 18px。
- Body 16px。
- Button 12px，橄榄绿胶囊。

注意：

- 参考图用甜品/冰淇淋占位，但 Fire Dragon 应换成真实料理、酱料使用场景或食谱图。
- 不建议长期使用无关甜品图，否则品牌和产品会错位。

### 4.6 Blog

参考：Image #8

内容：

- Heading: `Stories & Notes`
- Text: `Sauces, recipes, and food stories from small places with us.`
- Button: `Read more`
- Link: `/blog/<lang>`

样式：

- 50/50 split section。
- 左侧 olive green 色块。
- 右侧 food/lifestyle 图。
- 文案浅色，居中。
- Button 使用浅色胶囊。

工程调整：

- 当前 blog 已有 API 和三语路由。
- Homepage 只需要 featured blog CTA，不一定要列出 3 张 blog card。
- 如果保留 blog card，必须改成新 catalog/editorial card 风格。

### 4.7 Motion Bar

参考：Image #9

内容：

- `Built for everyday cooking.`

样式：

- 黑底。
- 白色文字。
- 字号：16px。
- 横向重复滚动。
- 动画速度慢，不要抢主内容。

可访问性：

- `prefers-reduced-motion` 下禁用滚动动画。
- 文案重复不要被 screen reader 重复朗读，可用 `aria-hidden` 处理装饰重复项。

### 4.8 Footer / Stockists CTA

参考：Image #10

内容：

- Heading: `Find us at our partnered stores`
- Text: `We’re gradually expanding, more locations coming soon.`
- Button: `Locate here`
- Link: `/stockists`
- Bottom:
  - left: Copyright
  - middle: Terms and Policies
  - right: social media icons

样式：

- 背景：浅冷灰蓝。
- CTA 位于 footer 上半区。
- Button 12px，橄榄绿胶囊。
- Bottom 字号 10px。
- 社交 icon 使用灰色/黑色低对比版本。

注意：

- 参考图出现 `Powered by Shopify`，本站不是 Shopify，不能照抄。
- Copyright 应使用 Fire Dragon Enterprise / FDG，具体 legal name 需确认。
- Terms and Policies 应链接到 `/terms` 和 `/privacy-policy`，如果内容未完成，不应继续标 coming soon 又放进主 footer。

## 5. Homepage 信息架构建议

建议顺序：

1. Announcement Bar
2. Hero / Header
3. Featured Products
4. Quote + Shop CTA
5. Recipes CTA
6. Blog CTA
7. Motion Bar
8. Stockists CTA + Footer

这个顺序符合从品牌识别 -> 产品展示 -> 购买意图 -> 内容探索 -> 线下触达的转化路径。

## 6. 全站一致化影响范围

如果只改 homepage，会产生明显割裂。需要同步规划以下页面：

### Products / Catalog

- `/products` 应更名或显示为 Catalog。
- 产品列表样式要和 homepage Featured Product 保持一致。
- 产品详情当前是 modal 风格，和参考图的详情页更接近 full product page，应评估是否改成独立产品详情布局。

### Blog

- Blog list 不应继续使用旧红橙背景。
- Blog card 应改成 editorial card。
- Blog detail 需要统一 typography、最大正文宽度、图片比例。

### Recipes

- Recipes 页面应使用和 homepage Recipes section 一致的图片语言。
- 需要更真实的料理图，不建议继续用甜品占位方向。

### Stockists

- Footer CTA 会强推 stockists，因此 stockists 页面视觉必须同步升级。
- 地图、门店卡片、搜索框都应进入新 token 系统。

### Contact

- Header 新导航只有 Contact，因此 contact 页会成为核心转化页。
- 表单样式需要更轻，按钮和输入框要和新设计系统统一。

### FAQ / Terms / Privacy

- 低优先级，但 footer 露出后至少要做到不割裂、不像旧页面。

## 7. Design Token 草案

### Colors

```css
--fdg-color-olive: #4f6f45;
--fdg-color-olive-dark: #111b12;
--fdg-color-ink: #101511;
--fdg-color-muted: #6f7771;
--fdg-color-white: #ffffff;
--fdg-color-soft-blue: #dfe8eb;
--fdg-color-soft-gray: #f4f5f3;
--fdg-color-border: #d4dddf;
```

### Typography

```css
--fdg-font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--fdg-type-announcement: 12px;
--fdg-type-menu: 12px;
--fdg-type-product-name: 13px;
--fdg-type-body: 16px;
--fdg-type-section-title: 18px;
--fdg-type-featured-title: 24px;
```

注意：设计部给的 heading/body 字号偏小，desktop 上可按设计稿执行，但 mobile 和 accessibility 需要保证可读性。实际实现可使用 token 名称固定，具体数值按 breakpoint 微调。

### Spacing

```css
--fdg-space-xs: 8px;
--fdg-space-sm: 12px;
--fdg-space-md: 16px;
--fdg-space-lg: 24px;
--fdg-space-xl: 40px;
--fdg-space-2xl: 64px;
--fdg-space-3xl: 96px;
```

### Radius

```css
--fdg-radius-pill: 999px;
--fdg-radius-card: 0px;
--fdg-radius-panel: 0px;
```

参考图整体不是卡片化 UI，主要通过 full-width section 和图片区块表达层级。

## 8. Component 清单

第一阶段需要创建或重构：

- `AnnouncementBar`
- `SiteHeaderMinimal`
- `HomeHeroEditorial`
- `FeaturedProductGrid`
- `ProductTile`
- `EditorialQuoteCta`
- `SplitFeatureSection`
- `MotionTextBar`
- `StockistsFooterCta`
- `FooterMinimal`
- `LanguageSwitcher`
- `PlatformShopLink`

后续全站复用：

- `CatalogProductGrid`
- `EditorialBlogCard`
- `RecipeFeatureCard`
- `ContentPageShell`
- `LegalPageShell`

## 9. Content / i18n 准备

Homepage 新文案必须进入三语结构，而不是写死英文。

建议新增：

- `app/locales/home.redesign.ts`

包含：

- announcement
- nav labels
- hero heading/body
- featured product title
- quote CTA
- recipes CTA
- blog CTA
- motion bar
- footer stockists CTA

如果后续接 FDG OS CMS，这些字段可以迁移成 `website_content_translation` 或 `homepage_section_translation`。

## 10. SEO 注意点

- Hero heading 应保留为页面主 H1 或明确唯一 H1。
- Homepage canonical 必须统一 domain。
- 首页图片应有代表性 `og:image`，不建议继续只用 logo。
- Product images 需要真实 alt，不要空 alt，除非纯装饰。
- Announcement bar 的 link 不应造成重复/隐藏导航问题。
- Motion bar 装饰性重复文本不要影响 screen reader。
- 如果 `/products` 前台显示为 Catalog，URL 可暂时不变，避免重定向成本。

## 11. Accessibility 注意点

- 绿色按钮与浅灰背景要检查对比度。
- Hero 图片上白字必须加暗 overlay，保证可读。
- Header 在 hero 图上方必须有足够对比。
- Motion bar 需要尊重 `prefers-reduced-motion`。
- 语言切换要有 `aria-label`，不能只显示 icon。
- 移动端菜单必须可键盘关闭，保留 Esc / click outside 行为。

## 12. Implementation Plan

### Phase A: Preparation

- 修复当前 Phase 0 技术债：
  - lint
  - canonical domain
  - `/blog` `/faq` server redirect
  - product JSON-LD placeholder
  - CSS invalid token
- 确认 homepage 新文案三语版本。
- 确认 hero / recipes / blog 使用的真实图片。
- 确认是否保留 search/account/cart icons。

### Phase B: Design System Foundation

- 新增 redesign tokens，不直接覆盖旧 token。
- 建立新 homepage components。
- 保留旧页面样式，避免一次性大爆炸。
- Homepage 先接新 token 和新 components。

### Phase C: Homepage Implementation

- 重写 homepage section 顺序。
- 重写 header/footer 但注意全站影响。
- Featured products 接现有 `PRODUCTS_BASE` 和 `PRODUCTS_I18N`。
- Blog CTA 接当前 lang 路由。
- Recipes CTA 接 `/recipes`。
- Stockists CTA 接 `/stockists`。

### Phase D: Cross-page Alignment

优先级：

1. Products / Catalog
2. Product detail
3. Blog list/detail
4. Recipes list/detail
5. Stockists
6. Contact
7. Legal / FAQ

### Phase E: Backend/CMS Ready

- Homepage section 文案抽成结构化数据。
- Product/blog/recipe/stockist 内容逐步从 FDG OS public API 读取。
- 图片进入 media library 或 CDN。

## 13. Open Questions

- `Catalog` 是否只是前台菜单名，URL 是否继续使用 `/products`？
- Hero 右侧 icon 是否需要 search/account/cart？当前门户没有 account/cart，建议不要做假功能。
- Shop now 是直接去 Shopee/Lazada，还是去 `/products` 再选择平台？
- Featured Product 需要显示价格吗？
- 是否真的要 `Sold out` badge？如果没有库存系统，不建议显示。
- Footer legal name 用 `Fire Dragon Enterprise` 还是 `FDG Hot Sauce & Paste`？
- 设计部 placeholder 图是否只是 layout 参考？建议所有 food imagery 换成 Fire Dragon 产品和真实食谱。
- 三语是否都要维持同一版式？英文短文案和中文/BM 长度差异要提前测。

## 14. Recommendation

建议采用这套策略：

1. Homepage 作为新视觉系统试点。
2. 先落 token 和公共组件，不直接复制截图硬写 CSS。
3. Header/footer 一旦改，视为全站改动，需要同步检查所有页面。
4. Products、Blog、Recipes、Stockists 必须排进同一轮风格统一计划。
5. 后端接入不要和 UI 首屏改版绑在同一个 PR；先完成 UI 架构，再迁移 blog CMS。


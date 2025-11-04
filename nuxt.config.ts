// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-10-07', // 根据实际需要
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true
  },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '品牌与产品介绍的门户站点' },
        { property: 'og:site_name', content: 'Brand Portal' }
      ],
      link: [
        { rel: 'icon', href: '/fdicon.ico' }
      ]
    }
  },
  // 全局样式（集中写在 styles/）
  css: [
    '~/assets/styles/tokens/_color.css',
    '~/assets/styles/tokens/_spacing.css',
    '~/assets/styles/base/reset.css',
    '~/assets/styles/base/typography.css',
    '~/assets/styles/pages/home.css',
    '~/assets/styles/pages/products.css',
    '~/assets/styles/pages/keyproducts.css',
    '~/assets/styles/components/cards.css',
    '~/assets/styles/components/button.css',
    '~/assets/styles/components/cta.css',
    '~/assets/styles/components/header.css',
    '~/assets/styles/components/footer.css',
    '~/assets/styles/components/recipes.css',
    '~/assets/styles/components/products.css',
    '~/assets/styles/components/blog.css'
  ],
  // Nitro 站点 URL，供 sitemap/robots 使用（后续可安装 @nuxtjs/sitemap）
  // runtimeConfig: {
  //   public: {
  //     siteUrl: process.env.SITE_URL || 'http://localhost:3100',
  //     analyticsId: process.env.ANALYTICS_ID || '',
  //   },
  //   sentryDsn: process.env.SENTRY_DSN || ''
  // },
  // （可选）modules: ['@nuxtjs/sitemap'] 安装后开启
  // sitemap: { siteUrl: process.env.SITE_URL }
})

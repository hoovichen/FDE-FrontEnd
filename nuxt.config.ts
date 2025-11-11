// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-10-07',
  devtools: { enabled: true },
  typescript: { typeCheck: true, strict: true },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '品牌与产品介绍的门户站点' },
        { property: 'og:site_name', content: 'Brand Portal' }
      ],
      link: [{ rel: 'icon', href: '/fdicon.ico' }]
    }
  },

  // 你的全局样式保持不变
  css: [
    '~/assets/styles/tokens/_color.css',
    '~/assets/styles/tokens/_spacing.css',
    '~/assets/styles/base/reset.css',
    '~/assets/styles/base/typography.css',
    '~/assets/styles/pages/home.css',
    '~/assets/styles/pages/products.css',
    '~/assets/styles/pages/keyproducts.css',
    '~/assets/styles/pages/contact.css',
    '~/assets/styles/pages/about.css',
    '~/assets/styles/components/cards.css',
    '~/assets/styles/components/button.css',
    '~/assets/styles/components/cta.css',
    '~/assets/styles/components/header.css',
    '~/assets/styles/components/footer.css',
    '~/assets/styles/components/recipes.css',
    '~/assets/styles/components/products-section.css',
    '~/assets/styles/components/blog.css'
  ],

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactToEmail: process.env.CONTACT_TO_EMAIL,
    contactFromEmail: process.env.CONTACT_FROM_EMAIL,
    public: {
      siteUrl: process.env.SITE_URL || 'https://www.firedragonmy.com'
    }
  },

  // ✅ 顶层声明站点 URL（v6 新写法）
  site: {
    url: process.env.SITE_URL || 'https://www.firedragonmy.com',
    name: 'Fire Dragon Enterprise',
  },

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],

  // ✅ v6 配置：不再有 sitemap.siteUrl；xsl 为 string | false
  sitemap: {
    // 固定页面
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/about', priority: 0.8, changefreq: 'monthly' },
      { loc: '/contact', priority: 0.7, changefreq: 'monthly' },
      { loc: '/products', priority: 0.9, changefreq: 'weekly' },
      { loc: '/recipes', priority: 0.6, changefreq: 'monthly' },
      { loc: '/faq', priority: 0.6, changefreq: 'monthly' },
      { loc: '/privacy-policy', priority: 0.5, changefreq: 'monthly' },
      { loc: '/terms', priority: 0.5, changefreq: 'monthly' },
      { loc: '/blog', priority: 0.6, changefreq: 'monthly' }
    ],

    defaults: {
      // lastmod 可以给定字符串；也可以省略让模块自动处理
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7
    },

    // 不要用 true；可用 false（关闭）或提供自定义 XSL 路径字符串
    // xsl: '/sitemap.xsl',
    xsl: false,

    // 可先省略缓存选项，避免类型不匹配
    // cacheMaxAge: 3600
  },

  robots: {
    groups: [{ userAgent: '*', allow: '/' }],
    sitemap: ['https://www.firedragonmy.com/sitemap.xml']
  },

  // 可顺便加上旧路径 301（如果你旧站是 /sitemap_index.xml）
  routeRules: {
    // 旧路径 → 新路径（永久 301）
    '/stories': { redirect: { to: '/blog', statusCode: 301 } },
    '/product': { redirect: { to: '/products', statusCode: 301 } },
    // （可选）把非 www 全部 301 到 www（建议在 Vercel 域名设置做，更可靠）
  },
})

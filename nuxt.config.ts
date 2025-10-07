// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: true, typeCheck: false },
  nitro: {
    preset: process.env.VERCEL ? 'vercel' : undefined,
    routeRules: { '/': { isr: 60 } }
  },
  runtimeConfig: {
    shopify: {
      endpoint: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
      token: process.env.SHOPIFY_STOREFRONT_TOKEN
    },
    public: {
      cloudinaryBase: process.env.CLOUDINARY_BASE || '',
      analyticsKey: process.env.ANALYTICS_WRITE_KEY || ''
    }
  },
  modules: ['@nuxt/image', '@nuxtjs/seo', '@nuxtjs/sitemap', '@nuxtjs/i18n', '@sentry/nuxt']
})

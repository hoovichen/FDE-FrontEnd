export type LangCode = 'zh' | 'en' | 'bm'

export const HOME_REDESIGN_TEXT: Record<LangCode, {
  announcement: string
  nav: {
    home: string
    catalog: string
    contact: string
    language: string
    openMenu: string
  }
  hero: {
    heading: string
    body: string
  }
  featured: {
    title: string
  }
  quote: {
    text: string
    shopNow: string
    shopee: string
    lazada: string
  }
  recipes: {
    heading: string
    text: string
    button: string
  }
  blog: {
    heading: string
    text: string
    button: string
  }
  support: {
    eyebrow: string
    heading: string
    text: string
    about: string
    faq: string
    blog: string
  }
  motion: string
  footerCta: {
    heading: string
    text: string
    button: string
  }
}> = {
  en: {
    announcement: 'Explore our latest recipes & creations',
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      contact: 'Contact',
      language: 'Language',
      openMenu: 'Open menu',
    },
    hero: {
      heading: 'A local brand with a passion for real taste',
      body: 'Bringing Hometown Flavours to Every Malaysian Table. Our signature sauces are here to elevate your meals!',
    },
    featured: {
      title: 'Featured Product',
    },
    quote: {
      text: 'Discover our signature Malaysian chilli sauces and homemade specialities. Crafted with authentic flavours to bring the true taste of home to your table.',
      shopNow: 'Shop now',
      shopee: 'Shopee',
      lazada: 'Lazada',
    },
    recipes: {
      heading: 'Everyday Cooking Inspiration',
      text: 'Transform simple meals into gourmet delights.',
      button: 'Learn more',
    },
    blog: {
      heading: 'Stories & Notes',
      text: 'Sauces, recipes, and food stories from small places with us.',
      button: 'Read more',
    },
    support: {
      eyebrow: 'Before you choose',
      heading: 'Need the story, details, or a quick answer?',
      text: 'Keep the main navigation simple, but leave a quieter path for people who want to know more before buying.',
      about: 'Our story',
      faq: 'FAQ',
      blog: 'Stories',
    },
    motion: 'Built for everyday cooking.',
    footerCta: {
      heading: 'Find us at our partnered stores',
      text: "We're gradually expanding, more locations coming soon.",
      button: 'Locate here',
    },
  },
  zh: {
    announcement: '探索我们的最新食谱与创作',
    nav: {
      home: '首页',
      catalog: '产品',
      contact: '联系',
      language: '语言',
      openMenu: '打开菜单',
    },
    hero: {
      heading: '一个坚持真实风味的本地品牌',
      body: '把家乡风味带上每一张马来西亚餐桌。我们的招牌酱料，为日常餐点增添层次。',
    },
    featured: {
      title: '精选产品',
    },
    quote: {
      text: '探索我们的马来西亚辣椒酱与家常风味食品。以真实风味制作，把家的味道带回餐桌。',
      shopNow: '立即购买',
      shopee: 'Shopee',
      lazada: 'Lazada',
    },
    recipes: {
      heading: '日常料理灵感',
      text: '让简单餐点变得更有层次。',
      button: '了解更多',
    },
    blog: {
      heading: '故事与记录',
      text: '和我们一起记录酱料、食谱，以及来自小地方的食物故事。',
      button: '阅读更多',
    },
    support: {
      eyebrow: '购买前了解',
      heading: '想了解故事、产品细节，或快速找到答案？',
      text: '主导航保持简洁，但为想深入了解品牌与购买问题的用户保留安静入口。',
      about: '品牌故事',
      faq: '常见问题',
      blog: '故事记录',
    },
    motion: '为日常料理而生。',
    footerCta: {
      heading: '寻找我们的合作门店',
      text: '我们正在逐步拓展，更多地点即将加入。',
      button: '查看地点',
    },
  },
  bm: {
    announcement: 'Terokai resipi dan ciptaan terbaru kami',
    nav: {
      home: 'Home',
      catalog: 'Katalog',
      contact: 'Hubungi',
      language: 'Bahasa',
      openMenu: 'Buka menu',
    },
    hero: {
      heading: 'Jenama tempatan dengan minat terhadap rasa sebenar',
      body: 'Membawa rasa kampung ke setiap meja Malaysia. Sos istimewa kami sedia menaikkan selera hidangan harian anda!',
    },
    featured: {
      title: 'Produk Pilihan',
    },
    quote: {
      text: 'Kenali sos cili Malaysia dan kepakaran buatan rumah kami. Dihasilkan dengan rasa autentik untuk membawa cita rasa rumah ke meja anda.',
      shopNow: 'Beli sekarang',
      shopee: 'Shopee',
      lazada: 'Lazada',
    },
    recipes: {
      heading: 'Inspirasi Masakan Harian',
      text: 'Jadikan hidangan ringkas lebih istimewa.',
      button: 'Ketahui lagi',
    },
    blog: {
      heading: 'Cerita & Nota',
      text: 'Sos, resipi, dan cerita makanan dari tempat kecil bersama kami.',
      button: 'Baca lagi',
    },
    support: {
      eyebrow: 'Sebelum memilih',
      heading: 'Perlu cerita, maklumat, atau jawapan ringkas?',
      text: 'Navigasi utama kekal ringkas, dengan laluan yang lebih tenang untuk pelanggan yang mahu tahu lebih lanjut.',
      about: 'Kisah kami',
      faq: 'FAQ',
      blog: 'Cerita',
    },
    motion: 'Dibuat untuk masakan harian.',
    footerCta: {
      heading: 'Cari kami di kedai rakan niaga',
      text: 'Kami sedang berkembang secara berperingkat, lebih banyak lokasi akan datang.',
      button: 'Lihat lokasi',
    },
  },
}

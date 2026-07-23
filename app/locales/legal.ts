import type { LangCode } from '~/lib/products.data'

export interface LegalSection {
  title: string
  body: string[]
}

export interface LegalPageText {
  eyebrow: string
  title: string
  intro: string
  updated: string
  notice: string
  sections: LegalSection[]
}

export const TERMS_TEXT: Record<LangCode, LegalPageText> = {
  en: {
    eyebrow: 'Website Terms',
    title: 'Terms & Conditions',
    intro: 'These terms apply when you browse firedragonmy.com, read our content, contact us, or follow links to our official retail partners.',
    updated: 'Last updated: 23 July 2026',
    notice: 'This website is for general brand and product information. It does not replace product labels, retail partner terms, or direct confirmation from Fire Dragon Enterprise.',
    sections: [
      {
        title: 'About this website',
        body: [
          'This website is operated for Fire Dragon Enterprise (IP0327174-X). We may update, change, suspend, or remove website content at any time without prior notice.',
          'By using this website, you agree to use it lawfully and not misuse, copy, scrape, interfere with, or damage the website or its content.'
        ]
      },
      {
        title: 'Product information',
        body: [
          'Product descriptions, images, prices, stock availability, ingredients, serving suggestions, and store information are provided for general guidance only.',
          'Actual packaging, labels, batch information, expiry dates, storage instructions, allergens, availability, and prices may differ. Please check the physical product label and confirm with the relevant retail partner before purchase or consumption.'
        ]
      },
      {
        title: 'Third-party links and purchases',
        body: [
          'Some buttons and links may take you to third-party platforms such as Shopee, Lazada, Google Maps, WhatsApp, or social media pages.',
          'Purchases, payments, delivery, refunds, platform accounts, and marketplace disputes are handled under the relevant third party’s terms and policies. Fire Dragon Enterprise is not responsible for the availability, security, content, or actions of third-party websites.'
        ]
      },
      {
        title: 'Food safety and responsibility',
        body: [
          'Customers are responsible for checking ingredients, allergens, dietary suitability, storage conditions, and expiry information before buying or consuming any product.',
          'If you have allergies, medical conditions, dietary restrictions, or food safety concerns, do not rely only on website descriptions. Contact us or check the product label before use.'
        ]
      },
      {
        title: 'Intellectual property',
        body: [
          'All trademarks, logos, product photos, written content, layout, and other materials on this website belong to Fire Dragon Enterprise or their respective owners unless stated otherwise.',
          'You may not copy, reproduce, edit, distribute, sell, or use our content for commercial purposes without written permission.'
        ]
      },
      {
        title: 'Limitation of liability',
        body: [
          'We try to keep this website accurate and available, but we do not guarantee that it will always be complete, current, uninterrupted, or error-free.',
          'To the fullest extent permitted by Malaysian law, Fire Dragon Enterprise is not liable for loss or damage arising from your use of this website, reliance on website content, or use of third-party links.'
        ]
      },
      {
        title: 'Changes and contact',
        body: [
          'We may update these terms from time to time. The latest version will be shown on this page.',
          'For questions, contact us at firedragonco2010@gmail.com or through the contact options shown on this website.'
        ]
      }
    ]
  },
  zh: {
    eyebrow: '网站条款',
    title: '条款与条件',
    intro: '当你浏览 firedragonmy.com、阅读内容、联系我们或点击官方零售合作伙伴链接时，以下条款适用。',
    updated: '最后更新：2026年7月23日',
    notice: '本网站主要用于品牌与产品资讯展示，不取代产品包装标签、零售平台条款，或 Fire Dragon Enterprise 的直接确认。',
    sections: [
      {
        title: '关于本网站',
        body: [
          '本网站由 Fire Dragon Enterprise (IP0327174-X) 运营。我们可随时更新、修改、暂停或移除网站内容，无需另行通知。',
          '使用本网站即表示你同意合法使用，并不得滥用、复制、抓取、干扰或破坏本网站及其内容。'
        ]
      },
      {
        title: '产品信息',
        body: [
          '产品描述、图片、价格、库存、成分、食用建议和门店资料仅供一般参考。',
          '实际包装、标签、批次、有效期、保存方式、过敏原、库存和售价可能不同。购买或食用前，请以实物标签和相关零售合作伙伴确认为准。'
        ]
      },
      {
        title: '第三方链接与购买',
        body: [
          '部分按钮或链接会跳转至 Shopee、Lazada、Google Maps、WhatsApp 或社交媒体等第三方平台。',
          '购买、付款、配送、退款、平台账户与交易纠纷，适用相关第三方平台的条款与政策。Fire Dragon Enterprise 不对第三方网站的可用性、安全性、内容或行为负责。'
        ]
      },
      {
        title: '食品安全与用户责任',
        body: [
          '顾客有责任在购买或食用前确认成分、过敏原、饮食适配性、保存条件和有效期。',
          '如你有过敏、健康状况、饮食限制或食品安全疑问，请勿仅依赖网站描述，应先联系我们或查看产品标签。'
        ]
      },
      {
        title: '知识产权',
        body: [
          '本网站的商标、标志、产品照片、文字、页面设计与其他资料，除非另有说明，均属于 Fire Dragon Enterprise 或相关权利人。',
          '未经书面许可，不得复制、修改、分发、销售或用于商业用途。'
        ]
      },
      {
        title: '责任限制',
        body: [
          '我们会尽力保持网站准确和可访问，但不保证内容永远完整、最新、不中断或无错误。',
          '在马来西亚法律允许的最大范围内，Fire Dragon Enterprise 不对因使用本网站、依赖网站内容或使用第三方链接而产生的损失负责。'
        ]
      },
      {
        title: '更新与联系',
        body: [
          '我们可能不时更新这些条款，最新版本会显示在本页面。',
          '如有疑问，可通过 firedragonco2010@gmail.com 或本网站显示的联系渠道联系我们。'
        ]
      }
    ]
  },
  bm: {
    eyebrow: 'Terma Laman Web',
    title: 'Terma & Syarat',
    intro: 'Terma ini terpakai apabila anda melayari firedragonmy.com, membaca kandungan, menghubungi kami, atau mengikuti pautan ke rakan niaga rasmi kami.',
    updated: 'Dikemas kini: 23 Julai 2026',
    notice: 'Laman ini disediakan untuk maklumat jenama dan produk secara umum. Ia tidak menggantikan label produk, terma rakan niaga, atau pengesahan terus daripada Fire Dragon Enterprise.',
    sections: [
      {
        title: 'Tentang laman ini',
        body: [
          'Laman ini dikendalikan untuk Fire Dragon Enterprise (IP0327174-X). Kami boleh mengemas kini, menukar, menggantung, atau membuang kandungan laman pada bila-bila masa tanpa notis awal.',
          'Dengan menggunakan laman ini, anda bersetuju untuk menggunakannya secara sah dan tidak menyalahguna, menyalin, mengikis data, mengganggu, atau merosakkan laman atau kandungannya.'
        ]
      },
      {
        title: 'Maklumat produk',
        body: [
          'Penerangan produk, gambar, harga, stok, bahan, cadangan hidangan, dan maklumat kedai diberi sebagai panduan umum sahaja.',
          'Pembungkusan, label, maklumat kelompok, tarikh luput, arahan simpanan, alergen, ketersediaan, dan harga sebenar mungkin berbeza. Sila semak label fizikal dan sahkan dengan rakan niaga berkaitan sebelum membeli atau menggunakan produk.'
        ]
      },
      {
        title: 'Pautan pihak ketiga dan pembelian',
        body: [
          'Sesetengah butang atau pautan boleh membawa anda ke platform pihak ketiga seperti Shopee, Lazada, Google Maps, WhatsApp, atau media sosial.',
          'Pembelian, bayaran, penghantaran, pemulangan wang, akaun platform, dan pertikaian transaksi tertakluk kepada terma pihak ketiga tersebut. Fire Dragon Enterprise tidak bertanggungjawab terhadap ketersediaan, keselamatan, kandungan, atau tindakan laman pihak ketiga.'
        ]
      },
      {
        title: 'Keselamatan makanan dan tanggungjawab pengguna',
        body: [
          'Pelanggan bertanggungjawab menyemak bahan, alergen, kesesuaian diet, keadaan simpanan, dan tarikh luput sebelum membeli atau menggunakan produk.',
          'Jika anda mempunyai alahan, keadaan kesihatan, sekatan diet, atau kebimbangan keselamatan makanan, jangan bergantung hanya pada penerangan laman. Hubungi kami atau semak label produk terlebih dahulu.'
        ]
      },
      {
        title: 'Harta intelek',
        body: [
          'Semua tanda dagangan, logo, gambar produk, kandungan bertulis, susun atur, dan bahan lain di laman ini adalah milik Fire Dragon Enterprise atau pemilik masing-masing melainkan dinyatakan sebaliknya.',
          'Anda tidak boleh menyalin, menghasilkan semula, mengubah, mengedar, menjual, atau menggunakan kandungan kami untuk tujuan komersial tanpa kebenaran bertulis.'
        ]
      },
      {
        title: 'Had liabiliti',
        body: [
          'Kami cuba memastikan laman ini tepat dan boleh diakses, tetapi kami tidak menjamin bahawa ia sentiasa lengkap, terkini, tidak terganggu, atau bebas ralat.',
          'Setakat yang dibenarkan oleh undang-undang Malaysia, Fire Dragon Enterprise tidak bertanggungjawab atas kerugian atau kerosakan yang timbul daripada penggunaan laman ini, pergantungan kepada kandungan laman, atau penggunaan pautan pihak ketiga.'
        ]
      },
      {
        title: 'Perubahan dan hubungi kami',
        body: [
          'Kami boleh mengemas kini terma ini dari semasa ke semasa. Versi terkini akan dipaparkan pada halaman ini.',
          'Untuk pertanyaan, hubungi kami di firedragonco2010@gmail.com atau melalui pilihan hubungan yang dipaparkan di laman ini.'
        ]
      }
    ]
  }
}

export const PRIVACY_TEXT: Record<LangCode, LegalPageText> = {
  en: {
    eyebrow: 'Privacy',
    title: 'Privacy Policy',
    intro: 'This policy explains what personal information we may collect through this website and how we use it.',
    updated: 'Last updated: 23 July 2026',
    notice: 'At this stage, this website is mainly informational. We do not operate user accounts, online checkout, or payment processing on firedragonmy.com.',
    sections: [
      {
        title: 'Information we collect',
        body: [
          'When you browse the website, we may receive basic technical information such as device, browser, pages visited, approximate location, and analytics data through hosting or analytics tools.',
          'When you contact us through the contact form, email, WhatsApp, phone, or social media, we may collect the information you choose to provide, such as your name, email address, phone number, message, and enquiry details.'
        ]
      },
      {
        title: 'How we use information',
        body: [
          'We use information to respond to enquiries, provide product or stockist information, improve our website, keep basic business records, prevent misuse, and comply with legal or operational requirements.',
          'We do not sell your personal information.'
        ]
      },
      {
        title: 'Third-party services',
        body: [
          'This website may use service providers such as hosting, analytics, email delivery, WhatsApp, Google Maps, Shopee, Lazada, and social media platforms.',
          'When you click a third-party link or use a third-party platform, that platform may process your information under its own privacy policy.'
        ]
      },
      {
        title: 'Disclosure',
        body: [
          'We may share information only where reasonably necessary with service providers, retail partners involved in your enquiry, professional advisers, authorities, or where required by law.',
          'We do not intentionally publish your contact details or private enquiry content.'
        ]
      },
      {
        title: 'Security and retention',
        body: [
          'We take reasonable steps to protect information we receive, but no website, email, or messaging platform can be guaranteed fully secure.',
          'We keep personal information only for as long as reasonably needed for the purpose collected, business records, dispute handling, or legal compliance.'
        ]
      },
      {
        title: 'Your choices and rights',
        body: [
          'You may contact us to request access, correction, or deletion of personal information you have provided, subject to legal and operational limits.',
          'Malaysia’s Personal Data Protection Act 2010 is built around principles including notice and choice, disclosure, security, retention, data integrity, and access. We aim to handle any personal information in line with those principles.'
        ]
      },
      {
        title: 'Contact',
        body: [
          'For privacy questions, contact Fire Dragon Enterprise at firedragonco2010@gmail.com.',
          'This policy may be updated from time to time. The latest version will be shown on this page.'
        ]
      }
    ]
  },
  zh: {
    eyebrow: '隐私',
    title: '隐私政策',
    intro: '本政策说明我们可能通过本网站收集哪些个人信息，以及如何使用这些信息。',
    updated: '最后更新：2026年7月23日',
    notice: '目前 firedragonmy.com 主要是资讯型网站，不提供用户账户、网站结账或在线付款处理。',
    sections: [
      {
        title: '我们收集的信息',
        body: [
          '当你浏览网站时，我们可能通过托管或分析工具接收基本技术信息，例如设备、浏览器、访问页面、大致位置和分析数据。',
          '当你通过联系表格、电子邮件、WhatsApp、电话或社交媒体联系我们时，我们可能收集你主动提供的信息，例如姓名、邮箱、电话号码、留言和咨询内容。'
        ]
      },
      {
        title: '我们如何使用信息',
        body: [
          '我们使用相关信息来回复咨询、提供产品或门店资料、改善网站、保存基本业务记录、防止滥用，以及满足法律或运营需要。',
          '我们不会出售你的个人信息。'
        ]
      },
      {
        title: '第三方服务',
        body: [
          '本网站可能使用托管、分析、邮件发送、WhatsApp、Google Maps、Shopee、Lazada 和社交媒体等服务或平台。',
          '当你点击第三方链接或使用第三方平台时，该平台可能会根据其自身隐私政策处理你的信息。'
        ]
      },
      {
        title: '披露',
        body: [
          '我们只会在合理必要时向服务供应商、与你咨询相关的零售合作伙伴、专业顾问、主管机关，或法律要求的对象披露信息。',
          '我们不会故意公开你的联系方式或私人咨询内容。'
        ]
      },
      {
        title: '安全与保存',
        body: [
          '我们会采取合理措施保护收到的信息，但任何网站、电子邮件或通讯平台都无法保证绝对安全。',
          '我们只会在收集目的、业务记录、争议处理或法律合规所需的合理期间内保存个人信息。'
        ]
      },
      {
        title: '你的选择与权利',
        body: [
          '你可以联系我们，要求访问、更正或删除你提供的个人信息，但这可能受到法律和运营限制。',
          '马来西亚《2010年个人资料保护法令》的核心原则包括通知与选择、披露、安全、保存、资料完整性和访问权。我们会尽量按照这些原则处理个人信息。'
        ]
      },
      {
        title: '联系',
        body: [
          '如有隐私相关问题，请通过 firedragonco2010@gmail.com 联系 Fire Dragon Enterprise。',
          '本政策可能不时更新，最新版本会显示在本页面。'
        ]
      }
    ]
  },
  bm: {
    eyebrow: 'Privasi',
    title: 'Polisi Privasi',
    intro: 'Polisi ini menerangkan maklumat peribadi yang mungkin kami kumpulkan melalui laman ini dan cara kami menggunakannya.',
    updated: 'Dikemas kini: 23 Julai 2026',
    notice: 'Pada peringkat ini, firedragonmy.com ialah laman maklumat. Kami tidak menyediakan akaun pengguna, daftar keluar dalam talian, atau pemprosesan bayaran di laman ini.',
    sections: [
      {
        title: 'Maklumat yang kami kumpulkan',
        body: [
          'Apabila anda melayari laman ini, kami mungkin menerima maklumat teknikal asas seperti peranti, pelayar, halaman yang dilawati, lokasi anggaran, dan data analitik melalui alat hosting atau analitik.',
          'Apabila anda menghubungi kami melalui borang, e-mel, WhatsApp, telefon, atau media sosial, kami mungkin mengumpulkan maklumat yang anda berikan seperti nama, alamat e-mel, nombor telefon, mesej, dan butiran pertanyaan.'
        ]
      },
      {
        title: 'Cara kami menggunakan maklumat',
        body: [
          'Kami menggunakan maklumat untuk membalas pertanyaan, memberikan maklumat produk atau kedai, menambah baik laman, menyimpan rekod perniagaan asas, mencegah penyalahgunaan, dan memenuhi keperluan undang-undang atau operasi.',
          'Kami tidak menjual maklumat peribadi anda.'
        ]
      },
      {
        title: 'Perkhidmatan pihak ketiga',
        body: [
          'Laman ini mungkin menggunakan penyedia seperti hosting, analitik, penghantaran e-mel, WhatsApp, Google Maps, Shopee, Lazada, dan platform media sosial.',
          'Apabila anda menekan pautan pihak ketiga atau menggunakan platform pihak ketiga, platform tersebut boleh memproses maklumat anda mengikut polisi privasinya sendiri.'
        ]
      },
      {
        title: 'Penzahiran',
        body: [
          'Kami boleh berkongsi maklumat hanya apabila munasabah perlu dengan penyedia perkhidmatan, rakan niaga berkaitan pertanyaan anda, penasihat profesional, pihak berkuasa, atau apabila dikehendaki undang-undang.',
          'Kami tidak sengaja menerbitkan butiran hubungan atau kandungan pertanyaan peribadi anda.'
        ]
      },
      {
        title: 'Keselamatan dan penyimpanan',
        body: [
          'Kami mengambil langkah munasabah untuk melindungi maklumat yang diterima, tetapi tiada laman web, e-mel, atau platform mesej boleh dijamin selamat sepenuhnya.',
          'Kami menyimpan maklumat peribadi hanya selama yang munasabah diperlukan untuk tujuan pengumpulan, rekod perniagaan, pengendalian pertikaian, atau pematuhan undang-undang.'
        ]
      },
      {
        title: 'Pilihan dan hak anda',
        body: [
          'Anda boleh menghubungi kami untuk meminta akses, pembetulan, atau pemadaman maklumat peribadi yang anda berikan, tertakluk kepada had undang-undang dan operasi.',
          'Akta Perlindungan Data Peribadi 2010 Malaysia berasaskan prinsip seperti notis dan pilihan, penzahiran, keselamatan, penyimpanan, integriti data, dan akses. Kami berusaha mengendalikan maklumat peribadi selaras dengan prinsip tersebut.'
        ]
      },
      {
        title: 'Hubungi kami',
        body: [
          'Untuk pertanyaan privasi, hubungi Fire Dragon Enterprise di firedragonco2010@gmail.com.',
          'Polisi ini boleh dikemas kini dari semasa ke semasa. Versi terkini akan dipaparkan pada halaman ini.'
        ]
      }
    ]
  }
}

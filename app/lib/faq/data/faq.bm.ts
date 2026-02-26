import type { FaqItem } from '../faq.types'

export const FAQ_BM: FaqItem[] = [

  /* =========================
     A. Pembelian & Platform
  ========================== */

  {
    id: 'order.buy.channels',
    category: 'order',
    q: 'Di mana saya boleh membeli produk Fire Dragon? Boleh beli melalui laman web rasmi?',
    a: `Produk Fire Dragon boleh dibeli melalui Shopee, Lazada, TikTok Shop serta kedai rakan niaga terpilih.

Laman web rasmi kami tidak menawarkan jualan runcit buat masa ini. Ia hanya memaparkan Harga Runcit Disyorkan (RRP) dan maklumat jenama. Kami belum mempunyai rangkaian logistik nasional sepenuhnya, oleh itu jualan terus melalui laman web belum disediakan.

Kami menyarankan anda membandingkan promosi di setiap platform sebelum membuat pembelian.`,
    keywords: ['beli', 'Shopee', 'Lazada', 'TikTok', 'laman web', 'RRP'],
    featured: true,
  },

  {
    id: 'order.platform.difference',
    category: 'order',
    q: 'Mengapa harga dan promosi berbeza antara platform?',
    a: `Setiap platform mempunyai sistem promosi dan tetapan diskaun yang berbeza, menyebabkan variasi harga dan tawaran.

Contohnya:
• Lazada menyokong promosi “Beli 3 Percuma 1”  
• Shopee biasanya menawarkan diskaun pembelian berganda bagi produk yang sama  

Semasa kempen besar seperti 11.11, platform mungkin menetapkan kadar diskaun minimum yang perlu dipatuhi.`,
    keywords: ['harga berbeza', 'promosi', '11.11'],
  },

  {
    id: 'order.offline.price',
    category: 'order',
    q: 'Mengapa harga di kedai fizikal berbeza daripada harga online?',
    a: `Kami menyediakan harga borong dan Harga Runcit Disyorkan (RRP) yang standard.

Namun, pemilik kedai bebas menetapkan harga mengikut kos dan strategi perniagaan masing-masing. Oleh itu, harga mungkin berbeza antara lokasi.`,
    keywords: ['harga kedai', 'RRP'],
  },

  {
    id: 'order.private.order',
    category: 'order',
    q: 'Boleh buat pesanan melalui WhatsApp atau mesej peribadi?',
    a: `Boleh.

Bagi kawasan Pantai Remis (Perak), penghantaran terus boleh diaturkan. Untuk kawasan lain, pesanan akan dihantar melalui kurier dan caj penghantaran ditanggung oleh pelanggan.

Pesanan pukal atau kerjasama jangka panjang boleh dibincangkan lanjut.`,
    keywords: ['WhatsApp', 'pesanan terus'],
  },

  {
    id: 'order.wholesale',
    category: 'order',
    q: 'Adakah anda menawarkan borong atau kerjasama pengedaran?',
    a: `Kami menyokong jualan borong, penyesuaian untuk F&B serta kerjasama pengedaran.

• Pembelian runcit melalui platform e-dagang  
• Pesanan borong peribadi biasanya bermula dari 3 karton (3 dozen)  
• Harga bertingkat dan terma kerjasama boleh dirunding  

Kami memberi keutamaan kepada pembangunan jenama Fire Dragon, namun mengalu-alukan rakan kerjasama yang sehaluan.`,
    keywords: ['borong', 'pengedar', 'MOQ'],
    featured: true,
  },

  {
    id: 'order.oem.white.label',
    category: 'order',
    q: 'Adakah anda menyokong OEM atau White Label?',
    a: `Kami menyokong kerjasama OEM dan pembuatan tersuai, dan pernah bekerjasama dengan beberapa rakan jenama.

Namun, fokus utama kami adalah pembangunan jenama Fire Dragon sendiri.

Untuk projek OEM atau White Label:
• Pelbagai jenis pembungkusan boleh disediakan  
• Penyesuaian resepi untuk saluran F&B boleh dibincangkan  
• Harga dan syarat bergantung kepada skala projek  

Kami menggalakkan model kerjasama jangka panjang atau co-branding bagi memastikan nilai jenama kedua-dua pihak terus berkembang.`,
    keywords: ['OEM', 'white label', 'kerjasama'],
  },

  {
    id: 'order.promotion.11',
    category: 'order',
    q: 'Adakah terdapat diskaun semasa kempen seperti 11.11?',
    a: `Ya.

Semasa kempen besar seperti 11.11 dan 12.12, kami biasanya menyertai promosi platform dan menawarkan diskaun yang signifikan. Kadar sebenar bergantung kepada kempen semasa.`,
    keywords: ['11.11', 'diskaun'],
  },

  {
    id: 'order.bundle.plan',
    category: 'order',
    q: 'Adakah anda akan memperkenalkan set kombo atau bundle?',
    a: `Ya.

Kami merancang untuk memperkenalkan set kombo di pelbagai platform bagi memudahkan pembelian pelbagai produk dalam satu pakej.`,
    keywords: ['bundle', 'set kombo'],
  },

  {
    id: 'order.stock.display',
    category: 'order',
    q: 'Mengapa kuantiti stok tidak dipaparkan?',
    a: `Fungsi paparan stok masa nyata belum diaktifkan.

Sebagai pengilang, kami biasanya mempunyai stok yang stabil. Sistem paparan stok akan ditambah baik dari semasa ke semasa.`,
    keywords: ['stok', 'habis stok'],
  },

  /* =========================
     B. Penghantaran
  ========================== */

  {
    id: 'shipping.coverage.region',
    category: 'shipping',
    q: 'Kawasan mana yang diliputi untuk penghantaran?',
    a: `Pesanan melalui platform e-dagang meliputi seluruh Malaysia (sesetengah platform menyokong Singapura).

Bagi kerjasama peribadi, penghantaran diutamakan di Perak, diikuti Pulau Pinang, Selangor dan Kuala Lumpur. Penghantaran ke Sabah dan Sarawak melibatkan kos yang lebih tinggi.

Kami juga mengalu-alukan kerjasama pengedar di luar negara.`,
    keywords: ['penghantaran', 'Malaysia', 'Singapura'],
    featured: true,
  },

  {
    id: 'shipping.dispatch.time',
    category: 'shipping',
    q: 'Berapa lama masa pemprosesan sebelum penghantaran?',
    a: `Pesanan yang disahkan sebelum 12:00 tengah hari biasanya dihantar antara 2:00–3:00 petang pada hari yang sama.

Pesanan selepas 12:00 akan diproses pada hari bekerja berikutnya.

Kami tidak menghantar pada hari Ahad dan cuti umum.`,
    keywords: ['masa penghantaran'],
  },

  {
    id: 'shipping.courier.option',
    category: 'shipping',
    q: 'Syarikat kurier apa yang digunakan?',
    a: `Kami mengutamakan J&T dan diikuti NinjaVan.

Pesanan peribadi boleh memilih kurier berdasarkan persetujuan bersama.`,
    keywords: ['J&T', 'NinjaVan'],
  },

  {
    id: 'shipping.issue.damage',
    category: 'shipping',
    q: 'Apa yang perlu dilakukan jika bungkusan rosak?',
    a: `Jika kerosakan disahkan bukan disengajakan, kami akan mengaturkan penghantaran gantian.

Kami juga akan membantu berhubung dengan pihak kurier sekiranya perlu.`,
    keywords: ['rosak', 'gantian'],
  },

  {
    id: 'shipping.tracking',
    category: 'shipping',
    q: 'Adakah nombor penjejakan disediakan?',
    a: `Pesanan melalui platform boleh dijejak terus di dalam sistem platform tersebut.

Bagi pesanan peribadi, nombor penjejakan akan diberikan selepas penghantaran dibuat.`,
    keywords: ['tracking', 'nombor penjejakan'],
  },

  /* =========================
     C. Penyimpanan & Sijil
  ========================== */

  {
    id: 'storage.after.open',
    category: 'storage',
    q: 'Bagaimana cara penyimpanan selepas dibuka?',
    a: `Disarankan untuk simpan di dalam peti sejuk selepas dibuka dan gunakan sudu yang bersih serta kering.

Jika ditutup rapat pada suhu bilik, rasa biasanya kekal stabil dalam tempoh dua bulan. Namun, penyimpanan sejuk adalah lebih digalakkan.`,
    keywords: ['simpan', 'peti sejuk'],
    featured: true,
  },

  {
    id: 'safety.certification.status',
    category: 'safety',
    q: 'Adakah produk mempunyai sijil Halal, MESTI atau ISO?',
    a: `Buat masa ini kami belum memiliki sijil Halal, MESTI atau ISO.

Proses persediaan dan permohonan sedang dijalankan.`,
    keywords: ['Halal', 'MESTI', 'ISO'],
  },

    /* =========================
     D. Maklumat Produk
  ========================== */

  {
    id: 'product.spicy.level',
    category: 'product',
    q: 'Bagaimana tahap kepedasan dikategorikan?',
    a: `Tahap kepedasan dinilai pada skala 0 hingga 5:

Siri Sos Cili Fire Dragon:
Merah – 1  
Kuning – 4  
Hijau – 3  
Pink – 5  

Produk lain:
Crispy Udang Cili – 3  
Sambal Udang – 1  
Pes Halia Bawang Putih – 0  
Crispy Ikan Bilis – 1`,
    keywords: ['tahap pedas', 'paling pedas', 'tidak pedas'],
    featured: true,
  },

  {
    id: 'product.ingredients.msg',
    category: 'product',
    q: 'Adakah produk mengandungi MSG atau pewarna tiruan?',
    a: `Sesetengah produk seperti Crispy Udang Cili dan Crispy Ikan Bilis mengandungi MSG.

Kami tidak menggunakan pewarna tiruan. Warna merah pada sos datang secara semula jadi daripada cili.`,
    keywords: ['MSG', 'pewarna tiruan'],
  },

  {
    id: 'product.health.general',
    category: 'product',
    q: 'Adakah sesuai untuk ibu mengandung, kanak-kanak atau pesakit darah tinggi?',
    a: `Secara amnya boleh diambil dalam jumlah sederhana.

Beberapa produk mengandungi kadar minyak dan garam yang lebih tinggi. Kami menyarankan pengambilan berdasarkan keadaan kesihatan dan diet individu.`,
    keywords: ['ibu mengandung', 'kanak-kanak', 'darah tinggi'],
  },

  {
    id: 'product.sugar.content',
    category: 'product',
    q: 'Adakah produk mengandungi gula?',
    a: `Sesetengah produk seperti Crispy Udang Cili dan Crispy Ikan Bilis mengandungi gula tambahan.

Bahan utama dalam siri Sos Cili Naga Api ialah kemanisan semulajadi bahan tambahan (buah-buahan: tembikai musim sejuk, labu, ubi keledek).`,
    keywords: ['gula', 'mengandungi gula'],
  },

  {
    id: 'product.allergen.shrimp',
    category: 'product',
    q: 'Adakah produk mengandungi udang atau alergen makanan laut?',
    a: `Beberapa produk mengandungi udang, termasuk Crispy Udang Cili dan Sambal Udang.

Individu yang mempunyai alahan makanan laut dinasihatkan untuk menyemak label produk sebelum pengambilan.`,
    keywords: ['alahan', 'udang', 'makanan laut'],
  },

  {
    id: 'product.calorie.range',
    category: 'product',
    q: 'Berapakah anggaran kandungan kalori?',
    a: `Kandungan kalori berbeza mengikut produk.

• Siri Sos Cili Fire Dragon: sekitar 100–400 kcal bagi setiap 100g  
• Crispy Udang Cili, Sambal dan produk seumpamanya: sekitar 200–800 kcal bagi setiap 100g  

Sila rujuk label produk untuk maklumat pemakanan yang lebih terperinci.`,
    keywords: ['kalori', 'nutrisi', 'kcal'],
  },

  {
    id: 'product.most.spicy',
    category: 'product',
    q: 'Produk mana yang paling pedas?',
    a: `Varian Pink dalam Siri Sos Cili Fire Dragon mempunyai tahap kepedasan tertinggi (5/5).`,
    keywords: ['paling pedas', 'pink'],
  },

  {
    id: 'product.non.spicy',
    category: 'product',
    q: 'Produk mana yang tidak pedas atau ringan?',
    a: `Pes Halia Bawang Putih dinilai 0/5 (tidak pedas).

Varian Merah dalam Siri Sos Cili Fire Dragon adalah ringan (1/5).`,
    keywords: ['tidak pedas', 'ringan'],
  },

  /* =========================
     E. Penggunaan Produk
  ========================== */

  {
    id: 'product-use.recommendation',
    category: 'product-use',
    q: 'Bagaimana cara menggunakan produk Fire Dragon?',
    a: `• Sos Cili: sesuai dipadankan dengan makanan bergoreng, mi atau masakan tumis  
• Crispy Udang Cili: sesuai untuk nasi putih, nasi goreng atau mi kering  
• Sambal: ideal untuk char kuey teow dan masakan gaya Melayu  
• Pes Halia Bawang Putih + Sos Cili Pink + limau: boleh dicampur untuk menghasilkan sos cili nasi ayam Hainan  

Kami juga menggalakkan pelanggan mencuba kreativiti sendiri dalam penyediaan makanan.`,
    keywords: ['cara guna', 'padanan', 'nasi ayam Hainan'],
  },

]
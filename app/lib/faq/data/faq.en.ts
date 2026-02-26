import type { FaqItem } from '../faq.types'

export const FAQ_EN: FaqItem[] = [

  /* =========================
     A. Ordering & Platforms
  ========================== */

  {
    id: 'order.buy.channels',
    category: 'order',
    q: 'Where can I purchase Fire Dragon products? Can I order from the official website?',
    a: `Fire Dragon products are currently available via Shopee, Lazada, TikTok Shop, and selected offline stockists.

Our official website does not offer retail sales at this time. It provides Recommended Retail Pricing (RRP) and brand information only. As we have not yet established a complete nationwide logistics network, direct website retail is temporarily unavailable.

We recommend comparing prices and promotions across platforms before making your purchase.`,
    keywords: ['buy', 'where to buy', 'Shopee', 'Lazada', 'TikTok', 'official website', 'RRP'],
    featured: true,
  },

  {
    id: 'order.platform.difference',
    category: 'order',
    q: 'Why do prices and promotions differ across platforms?',
    a: `Each platform operates with different promotional mechanisms and backend discount structures, which may result in variations in pricing and offers.

For example:
• Lazada supports "Buy 3 Free 1" style promotions  
• Shopee typically provides multi-item discounts within the same product category  

During major campaigns (such as 11.11), platforms may impose minimum discount thresholds, which may further affect pricing.`,
    keywords: ['platform price difference', 'promotion mechanism', '11.11', 'buy 3 free 1'],
  },

  {
    id: 'order.offline.price',
    category: 'order',
    q: 'Why are offline store prices different from online prices?',
    a: `We provide a standardized wholesale price and Recommended Retail Price (RRP).

However, offline retailers may adjust prices based on their individual cost structures and business strategies. Therefore, retail pricing may vary slightly between locations.`,
    keywords: ['offline pricing', 'retail price', 'RRP'],
  },

  {
    id: 'order.private.order',
    category: 'order',
    q: 'Can I place an order directly via WhatsApp or private message?',
    a: `Yes.

Orders within the Pantai Remis (Perak) area may be delivered directly. For other locations, orders will be shipped via courier services, and shipping fees will be borne by the customer.

Bulk or long-term collaboration orders are welcome for further discussion.`,
    keywords: ['WhatsApp order', 'direct order', 'Pantai Remis delivery'],
  },

  {
    id: 'order.wholesale',
    category: 'order',
    q: 'Do you offer wholesale, distribution, or partnership opportunities?',
    a: `We support wholesale supply, F&B customization, and distribution partnerships.

• Retail purchases are available via e-commerce platforms  
• Private wholesale orders typically start from 3 cartons (3 dozen)  
• Tiered pricing and collaboration terms are negotiable  

While we prioritize the development of the Fire Dragon brand, we welcome partnerships aligned with our long-term vision.`,
    keywords: ['wholesale', 'distribution', 'MOQ', 'partnership'],
    featured: true,
  },

  {
    id: 'order.oem.white.label',
    category: 'order',
    q: 'Do you support OEM or White Label collaboration?',
    a: `We support OEM and custom manufacturing collaborations and have previously worked with selected brand partners.

However, our primary focus remains on strengthening the Fire Dragon brand.

For OEM or White Label inquiries:
• Different packaging formats can be provided  
• Recipe customization for F&B channels is available  
• Pricing and conditions are subject to project scale  

We generally recommend long-term collaboration or co-branding models to ensure sustainable brand value growth for both parties.`,
    keywords: ['OEM', 'white label', 'custom manufacturing', 'co-branding'],
  },

  {
    id: 'order.promotion.11',
    category: 'order',
    q: 'Do you offer discounts during major sales campaigns such as 11.11?',
    a: `Yes.

During major sales campaigns such as 11.11 and 12.12, we typically participate in platform-wide promotions and offer substantial discounts. The exact discount rate depends on the platform’s campaign requirements.`,
    keywords: ['11.11', 'sales campaign', 'discount'],
  },

  {
    id: 'order.bundle.plan',
    category: 'order',
    q: 'Will you introduce bundle sets or combo packages?',
    a: `Yes.

We plan to gradually introduce bundle sets across platforms to provide customers with convenient multi-product purchase options and to better standardize promotional structures.`,
    keywords: ['bundle', 'combo set', 'package deal'],
  },

  {
    id: 'order.stock.display',
    category: 'order',
    q: 'Why is inventory quantity not displayed?',
    a: `We have not yet enabled real-time inventory display.

As a manufacturer, we maintain stable stock levels in most circumstances. Inventory transparency features will be enhanced progressively.`,
    keywords: ['inventory', 'out of stock', 'stock display'],
  },

  /* =========================
     B. Shipping & Delivery
  ========================== */

  {
    id: 'shipping.coverage.region',
    category: 'shipping',
    q: 'Which regions do you deliver to?',
    a: `Orders placed via e-commerce platforms cover Malaysia nationwide (selected platforms also support Singapore).

Private collaboration deliveries prioritize Perak, followed by Penang, Selangor, and Kuala Lumpur. East Malaysia deliveries incur higher shipping costs.

We also welcome distributor partnerships in East Malaysia and overseas.`,
    keywords: ['delivery coverage', 'Malaysia', 'Singapore', 'distribution'],
    featured: true,
  },

  {
    id: 'shipping.dispatch.time',
    category: 'shipping',
    q: 'How soon will my order be shipped?',
    a: `Orders completed before 12:00 PM are typically dispatched between 2:00–3:00 PM on the same day.

Orders placed after 12:00 PM will be processed on the next working day.

We generally do not ship on Sundays or public holidays.`,
    keywords: ['dispatch time', 'same day shipping', 'working days'],
  },

  {
    id: 'shipping.same.day',
    category: 'shipping',
    q: 'Is same-day delivery available?',
    a: `Same-day delivery may be arranged within Pantai Remis (Perak) for direct purchases.

Delivery timelines for other regions depend on courier services.`,
    keywords: ['same day delivery', 'Pantai Remis'],
  },

  {
    id: 'shipping.courier.option',
    category: 'shipping',
    q: 'Which courier services do you use?',
    a: `We primarily use J&T, followed by NinjaVan.

Private orders may select alternative courier options upon request.`,
    keywords: ['J&T', 'NinjaVan', 'courier'],
  },

  {
    id: 'shipping.issue.damage',
    category: 'shipping',
    q: 'What if my parcel is damaged or the address was entered incorrectly?',
    a: `If damage is confirmed to be non-intentional, we will arrange for a replacement.

In cases of incorrect address entry (non-deliberate), we will assist in communicating with the courier service and provide a reasonable resolution.`,
    keywords: ['damaged parcel', 'wrong address', 'replacement'],
  },

  {
    id: 'shipping.east.why.expensive',
    category: 'shipping',
    q: 'Why is shipping to East Malaysia more expensive?',
    a: `Shipping to East Malaysia (Sabah / Sarawak) requires air or sea transport, resulting in higher logistics costs.

As we do not currently operate our own cross-sea distribution network, shipping fees must be borne by the customer.`,
    keywords: ['East Malaysia shipping', 'Sabah', 'Sarawak'],
  },

  {
    id: 'shipping.tracking',
    category: 'shipping',
    q: 'Do you provide tracking numbers?',
    a: `Orders placed via e-commerce platforms can be tracked directly within the platform.

For private orders, tracking numbers will be provided once the shipment has been dispatched.`,
    keywords: ['tracking number', 'order tracking'],
  },

  {
    id: 'shipping.weekend',
    category: 'shipping',
    q: 'Do you ship on weekends or public holidays?',
    a: `We generally do not ship on Sundays or public holidays.

Orders will be processed on the next working day.`,
    keywords: ['weekend shipping', 'holiday shipping'],
  },

  {
    id: 'shipping.bulk.discount',
    category: 'shipping',
    q: 'Are there shipping discounts for bulk purchases?',
    a: `Orders reaching 12 cartons (120 bottles) within our Perak delivery network may qualify for free shipping.

Other regions may receive negotiated shipping rates depending on volume and distance.`,
    keywords: ['bulk shipping', 'free shipping', '120 bottles'],
  },

  /* =========================
   C. Storage & Certification
========================== */

  {
    id: 'storage.after.open',
    category: 'storage',
    q: 'How should the product be stored after opening?',
    a: `We recommend refrigerating the product after opening and using clean, dry utensils when handling.

When tightly sealed at room temperature, the product generally maintains stable flavor within two months. However, refrigeration is advised to preserve optimal freshness and quality.`,
    keywords: ['storage', 'refrigerate', 'after opening'],
    featured: true,
  },

  {
    id: 'safety.certification.status',
    category: 'safety',
    q: 'Do your products have Halal, MESTI, or ISO certification?',
    a: `At present, we have not obtained Halal, MESTI, or ISO certification.

Preparations and application processes are currently underway.`,
    keywords: ['Halal', 'MESTI', 'ISO', 'certification'],
  },

  /* =========================
     Brand Trust & Company Information
  ========================== */

  {
    id: 'brand.factory.location',
    category: 'safety',
    q: 'Where is your factory located? Can it be visited?',
    a: `Our factory is located near Pantai Remis, Perak.

Factory visits are welcome by appointment. Please refer to our Contact page for full address details and operating hours, or search “FireDragon Enterprise” on Google Maps.`,
    keywords: ['factory location', 'visit factory', 'Perak'],
  },

  {
    id: 'brand.self.produced',
    category: 'safety',
    q: 'Are your products self-manufactured or outsourced (OEM)?',
    a: `All Fire Dragon products are manufactured in our own facility.`,
    keywords: ['self manufactured', 'OEM'],
  },

  {
    id: 'brand.family.business',
    category: 'safety',
    q: 'Is Fire Dragon a family-owned business?',
    a: `Yes. Fire Dragon is a locally established family business founded in 2010.`,
    keywords: ['family business', 'local brand'],
  },

  {
    id: 'brand.founded.year',
    category: 'safety',
    q: 'When was Fire Dragon founded?',
    a: `Fire Dragon was established in 2010 and has been operating for over 15 years.`,
    keywords: ['established year', '2010'],
  },

  /* =========================
     D. Product Information
  ========================== */

  {
    id: 'product.spicy.level',
    category: 'product',
    q: 'How is the spiciness level categorized?',
    a: `Spiciness is rated on a scale of 0–5:

Fire Dragon Chili Sauce Series:
Red – 1  
Yellow – 4  
Green – 3  
Pink – 5  

Other Products:
Crispy Shrimp Chili – 3  
Sambal Shrimp Paste – 1  
Ginger Garlic Paste – 0  
Crispy Anchovy – 1`,
    keywords: ['spicy level', 'spiciest', 'mild'],
    featured: true,
  },

  {
    id: 'product.ingredients.msg',
    category: 'product',
    q: 'Do your products contain MSG or artificial coloring?',
    a: `Selected products (such as Crispy Shrimp Chili and Crispy Anchovy) contain MSG.

We do not use artificial coloring. The red color of our sauces comes naturally from chili peppers.`,
    keywords: ['MSG', 'artificial coloring'],
  },

  {
    id: 'product.health.general',
    category: 'product',
    q: 'Are your products suitable for pregnant women, children, or individuals with high blood pressure?',
    a: `Our products may generally be consumed in moderation.

Certain products contain higher levels of oil and salt. We recommend adjusting intake according to individual dietary needs and health conditions.`,
    keywords: ['pregnant', 'children', 'high blood pressure'],
  },

  {
    id: 'product.sugar.content',
    category: 'product',
    q: 'Do your products contain sugar?',
    a: `Certain products (such as Crispy Shrimp Chili and Crispy Anchovy) contain added sugar.

The main ingredient in the Fire Dragon Chili Sauce series is the natural sweetness of the auxiliary ingredients (fruits: winter melon, pumpkin, sweet potato).`,
    keywords: ['sugar content', 'contains sugar'],
  },

  {
    id: 'product.allergen.shrimp',
    category: 'product',
    q: 'Do your products contain shrimp or seafood allergens?',
    a: `Some products contain shrimp, including Crispy Shrimp Chili and Sambal Shrimp Paste.

Customers with seafood allergies are advised to review the product label carefully before consumption.`,
    keywords: ['allergen', 'shrimp', 'seafood'],
  },

  {
    id: 'product.calorie.range',
    category: 'product',
    q: 'What is the approximate calorie content?',
    a: `Calorie content varies by product.

• Fire Dragon Chili Sauce Series: approximately 100–400 kcal per 100g  
• Crispy Shrimp Chili, Sambal and similar products: approximately 200–800 kcal per 100g  

Please refer to individual product labels for detailed information.`,
    keywords: ['calories', 'nutrition', 'kcal'],
  },

  {
    id: 'product.most.spicy',
    category: 'product',
    q: 'Which product is the spiciest?',
    a: `The Pink variant in the Fire Dragon Chili Sauce Series has the highest spiciness rating (5/5).`,
    keywords: ['most spicy', 'pink chili'],
  },

  {
    id: 'product.non.spicy',
    category: 'product',
    q: 'Which product is mild or non-spicy?',
    a: `Ginger Garlic Paste is rated 0/5 (non-spicy).

The Red variant in the Fire Dragon Chili Sauce Series is mild (1/5).`,
    keywords: ['non spicy', 'mild'],
  },

  /* =========================
     E. Product Usage & Pairing
  ========================== */

  {
    id: 'product-use.recommendation',
    category: 'product-use',
    q: 'How can Fire Dragon products be used?',
    a: `• Chili Sauce: pairs well with fried foods, noodles, or stir-fry dishes  
• Crispy Shrimp Chili: suitable for rice, fried rice, or dry noodles  
• Sambal: ideal for char kuey teow and Malay-style stir-fry dishes  
• Ginger Garlic Paste + Pink Chili Sauce + lime juice: can be mixed to create a Hainanese chicken rice chili sauce  

We also encourage customers to explore their own creative culinary applications.`,
    keywords: ['how to use', 'pairing', 'Hainanese chicken rice'],
  },

]
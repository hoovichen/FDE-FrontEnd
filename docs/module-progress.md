# Portal Module Progress

Last reviewed: 2026-07-23

## Status Legend

- Done: usable and locally verified
- Partial: works but has known gaps or manual maintenance burden
- Planned: needed for the next product direction
- Not Started: no implementation found

## Module Table

| Module | Current Status | Notes | Recommended Next Step |
| --- | --- | --- | --- |
| Home page | Partial | Homepage has been rebuilt into the current editorial/Instagram-style design direction. Mobile product section now uses horizontal one-product snap browsing. | Continue design-team review, then refine imagery/copy. |
| Header/navigation | Partial | Simplified Home/Catalog/Contact navigation, language selector, and mobile menu are implemented. Active route only checks exact paths. | Verify multilingual route behavior and improve active states after subpage redesign. |
| Footer | Partial | Stockists CTA and minimal legal/social footer are implemented. Footer utility links now expose About, Blog, FAQ, Terms, and Privacy. Social icons use raw `img` tags to avoid Nuxt image optimization issues with `.ico` assets. | Legally review final Terms/Privacy wording before production reliance. |
| About | Partial | Rebuilt as an SEO-oriented editorial brand story page with Pantai Remis origin copy, timeline, values, internal links, and real imagery. | Review final company story wording and add richer structured data if About becomes an SEO landing page. |
| Products list | Partial | Local data, sorting, marketplace links, product images, JSON-LD, centered editorial product wall, fixed-height product card slots, image containment, and mobile one-product snap browsing. JSON-LD now uses the configured site URL rather than placeholder URLs. | Move product content to a content source/API and decide final multilingual URL strategy. |
| Product detail | Partial | Product detail surface has been redesigned with compact desktop first-view CTAs, right-aligned mobile back button, spreadsheet-derived specs, descriptions, highlights, serving suggestions, ingredients, allergens, packaging, and diet fields. | Decide whether product details should remain overlay-style or become fully crawlable standalone pages. |
| Blog list | Done/Partial | API-backed markdown listing works for `zh/en/bm`. Filtering and sorting exist. Page style has been aligned to the new editorial design direction. Designed cover images now render uncropped, and article titles show in full. | Move publish workflow to CMS/backend and fix API contract path field. |
| Blog detail | Done/Partial | Markdown rendering and BlogPosting JSON-LD exist. Detail style has been aligned to the new editorial design direction. Cover images render uncropped. | Add preview/draft/published states, author, updated date, and hreflang metadata. |
| Blog publishing | Not Started | Publishing requires code/markdown commit. | Add FDG OS CMS module or a headless CMS integration. |
| FAQ | Partial | Multilingual FAQ data and search exist. The page now matches the editorial UI direction and shows the classic FAQ list by default. Root `/faq` is still client-side redirect only. | Convert root route to server redirect and decide if FAQ is CMS-managed. |
| Recipes | Partial | List/detail pages exist with local content. Debug logs removed. Page styles have been aligned to the new editorial design direction, and detail back button alignment has been fixed. | Add real video/content model if recipes become a content pillar. |
| Stockists | Partial | Local store data/images exist; list and detail pages are now aligned to the editorial UI direction with scoped CSS, compact filters, map thumbnails, and first-view desktop detail CTAs. | Consider backend-managed stockist list, map metadata, opening hours, partner category, and store status. |
| Contact | Partial | Form posts to Nuxt API and sends via Resend. WhatsApp link exists. Page style has been aligned to the new editorial design direction with centered, constrained desktop layout. | Add rate limiting, stronger spam controls, and operational logging. |
| Floating contact | Done/Partial | Global floating dock now includes editorial-style WhatsApp pre-chat, quick replies, multilingual copy, wa.me handoff, and restyled Back to top. | If real in-site support is needed, plan WhatsApp Business Platform API + FDG OS inbox/webhooks. |
| Privacy/terms | Partial | Lightweight protective Terms & Conditions and Privacy Policy drafts are implemented in `en`, `zh`, and `bm` with the current editorial UI. | Have the wording legally reviewed, then expand it when the site adds accounts, checkout, uploads, analytics changes, or FDG OS data storage. |
| SEO | Partial | Canonical, sitemap, robots, JSON-LD are present in several places. | Standardize canonical domain, hreflang, redirects, and structured data. |
| i18n | Partial | Custom language state works, but URL strategy is inconsistent. | Choose between route-based language pages or in-place language switch for all pages. |
| Media upload | Not Started | Images are committed under `public`. | Add upload/storage plan: Vercel Blob, S3/R2, Cloudinary, or FDG OS media module. |
| Video upload | Not Started | Recipe detail has video placeholder logic only. | Use a video platform/storage service with transcoding instead of raw repo uploads. |
| Admin/CMS | Not Started | No admin UI in this repo. | Build CMS in FDG OS and expose public read APIs to the portal. |
| Analytics | Partial | Vercel Analytics and Speed Insights are rendered on selected pages. | Move analytics insertion to layout/app-level once to avoid inconsistent coverage. |
| CI verification | Partial | Type-check/build pass, lint script fails. | Add ESLint dependency/config or remove lint from `ci:verify`. |

## Suggested Development Phases

### Phase 0: Stabilize Before Redesign

- Fix lint setup.
- Remove debug logs.
- Fix invalid CSS token.
- Fix product JSON-LD placeholder URLs.
- Convert `/blog` and `/faq` to server-side redirects or route rules.
- Normalize canonical domain: choose `https://firedragonmy.com` or `https://www.firedragonmy.com`.

### Phase 1: Content Architecture

- Define a single content schema for blog, recipes, products, stockists, SEO metadata, translations, and media.
- Decide whether FDG OS owns all website content or only blog publishing.
- Add draft/published/scheduled status.
- Add preview URLs protected by admin auth.
- Add content audit fields: createdBy, updatedBy, publishedBy, createdAt, updatedAt, publishedAt.

### Phase 2: UI Redesign Foundation

- Create design tokens for color, typography, spacing, radii, shadows, breakpoints, and motion.
- Convert global page CSS into reusable components.
- Build a component inventory: button, link, card, section header, media block, product tile, article card, form field, modal, tabs/selects.
- Create responsive layout rules before rebuilding pages.

### Phase 3: Backend Integration

- Add public read APIs in FDG OS or a dedicated website service.
- Add Nuxt runtime config for backend base URL.
- Fetch content through typed client functions.
- Add caching/revalidation strategy for Vercel.
- Keep contact form server-side in Nuxt unless FDG OS needs CRM-style lead tracking.

### Phase 4: SEO and Growth

- Add complete sitemap coverage for products, recipes, stockists, blog posts, and language alternates.
- Add article/product/breadcrumb structured data consistently.
- Add Open Graph images per important page.
- Add redirect rules for legacy paths.
- Add Search Console verification and content quality checklist.

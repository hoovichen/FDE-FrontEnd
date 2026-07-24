# FDG OS And Portal Collaboration Brief

Last reviewed: 2026-07-24

Audience: FDG-OS owner / backend lead / portal maintainer.

## 1. Purpose

Fire Dragon currently has two separate products:

- Public portal: `firedragonmy.com`
- Internal operating system: `app.firedragonmy.com`

The portal has finished its first major UI/style correction pass. The next stage is not another visual pass; the next stage is deciding how FDG-OS should support public website content operations without mixing public marketing content directly into ERP/accounting/inventory workflows.

This document summarizes the portal's current state, the backend responsibilities needed, and a staged integration proposal for FDG-OS.

## 2. Current Project Boundary

### Public Portal

Repository:

- `/Users/hineoc/Code/FDG/FDE-FrontEnd`

Production/deployment model:

- Deployed from GitHub to Vercel.
- Public domain: `firedragonmy.com`.
- Nuxt 4 / Vue 3 / TypeScript.
- Uses Nitro server routes for blog read APIs, sitemap URLs, and contact form email submission.

Current content reality:

- Blog posts are markdown files in Git.
- Products are frontend TypeScript data and locale files.
- Recipes are frontend TypeScript data and locale files.
- Stockists are frontend TypeScript data.
- FAQ is frontend TypeScript data.
- Terms, Privacy, About, SEO metadata, translations, and images are source-controlled.
- There is no CMS admin UI, media library, draft workflow, publish workflow, or role-based website editor.

### FDG-OS

Repository:

- `/Users/hineoc/Code/FDG/FDG-os`

Production/deployment model:

- VPS / DigitalOcean Singapore.
- Internal app domain: `https://app.firedragonmy.com`.
- API domain: `https://api.firedragonmy.com`.
- Next.js web app behind Caddy.
- NestJS API behind Caddy.
- PostgreSQL in Docker, bound to localhost.

Current system reality:

- FDG-OS is in internal beta preparation, not public SaaS cover/internal-test complete yet.
- It already has Auth, JWT, roles/permissions, multi-company `companyId` isolation, audit logs, Products, Customers, Suppliers, Inventory, Sales, Purchases, Accounting, Marketplace, Production, Payroll Lite, Internal Messages, Dashboard, and Exports.
- It does not currently appear to have a Website CMS / Blog / Media Library module.

## 3. Main Recommendation

Add a dedicated `Website` / `CMS` boundary inside FDG-OS.

Do not let the public portal directly mutate FDG-OS ERP tables. Do not make the portal an admin system.

The correct long-term boundary is:

```text
FDG-OS authenticated admin
  edits drafts / translations / media / publish state
  stores audit trail and permissions
  exposes public read-only published endpoints
    ↓
Nuxt portal on Vercel
  fetches published content
  renders SEO-friendly public pages
```

The portal should remain a fast public read surface. FDG-OS should own permissioned authoring, review, publishing, audit trail, and operational source-of-truth concerns.

## 4. Integration Scope By Priority

### P0: Blog Publishing

Problem:

- Blog publishing currently requires markdown/code commits.

FDG-OS should provide:

- Blog post CRUD.
- Draft / review / scheduled / published / archived status.
- Per-language content: `en`, `zh`, `bm`.
- Slug management.
- SEO title and description.
- Cover image selection.
- Author / reviewer / publisher tracking.
- Published public read API.

Portal should provide:

- Fetch from FDG-OS public blog endpoints.
- Keep local markdown fallback during migration.
- Preserve current blog list/detail UI and SEO behavior.

### P1: Media Library

Problem:

- Images are committed into the frontend repository.
- No upload workflow exists for blog covers, product images, recipe images, or stockist assets.

FDG-OS should provide:

- Upload and manage media.
- Store metadata: URL, provider, width, height, MIME type, alt text, caption, uploadedBy.
- Restrict upload/manage actions by permission.
- Optionally store image variants or provider transforms.

Recommended storage:

- Cloudflare R2, S3-compatible storage, Cloudinary, Vercel Blob, or another managed object store.
- Avoid storing large files in Git.
- Avoid raw VPS disk-only media unless backup/CDN/URL stability is deliberately handled.

### P2: Product Website Content

Problem:

- FDG-OS already has ERP product data, but public portal product pages need marketing copy, images, SEO, marketplace links, ingredients, allergens, weight, serving suggestions, and multilingual descriptions.

Recommended model:

- Keep ERP `Product` as the operational source of truth.
- Add a separate `WebsiteProductProfile` or `ProductPublicProfile` linked to ERP `Product`.
- Do not overload ERP product rows with long public marketing content.

Public website product fields:

- `productId` or public key.
- `isPublic`.
- `featured`.
- `sortOrder`.
- `marketplaceLinks`: Shopee, Lazada, TikTok, etc.
- `defaultImageId`.
- `galleryMediaIds`.
- `priceDisplayMode`: fixed, hidden, marketplace-only, partner-only.
- `translations`: name, shortDescription, longDescription, highlights, servingSuggestions, ingredients, allergens, SEO.

### P3: Stockists

Problem:

- Stockists are currently frontend local data.

FDG-OS should provide:

- Stockist list CRUD.
- Store name, address, region, city, coordinates/map URL, opening hours, phone, status, notes, partner category.
- Public visibility toggle.
- Locale-aware display text if needed.

Portal should provide:

- Public stockist list/detail pages from FDG-OS API.
- Sitemap entries for public stockist pages.

### P4: Recipes / FAQ / Static Pages

Recipes:

- Can be a content type similar to Blog with ingredients, steps, product references, media, and optional video metadata.

FAQ:

- Can remain local until content changes frequently.
- If migrated, use category, question, answer, locale, status, sortOrder, tags/keywords.

Static pages:

- About, Terms, Privacy can remain code-managed until legal wording and brand story stabilize.
- Later, FDG-OS can own page copy and legal policy revisions if a review workflow is needed.

### P5: Contact Leads / WhatsApp

Current portal:

- Contact form posts to Nuxt API and sends email.
- Floating WhatsApp widget uses a frontend pre-chat and opens `wa.me`.

Recommended later:

- Keep the current email/WhatsApp flow until operations need CRM-style lead tracking.
- If leads should enter FDG-OS, add a separate `WebsiteLead` module.
- Do not automatically create ERP `Customer` records from anonymous website messages.

## 5. Public API Proposal

Public read endpoints should expose only published data:

```text
GET /public/site/blog?lang=en
GET /public/site/blog/:slug?lang=en
GET /public/site/products?lang=en
GET /public/site/products/:key?lang=en
GET /public/site/recipes?lang=en
GET /public/site/recipes/:slug?lang=en
GET /public/site/stockists?lang=en
GET /public/site/stockists/:slug?lang=en
GET /public/site/faq?lang=en
GET /public/site/sitemap
```

Admin write endpoints should remain authenticated under normal FDG-OS admin routing, for example:

```text
GET    /website/content
POST   /website/content
GET    /website/content/:id
PATCH  /website/content/:id
POST   /website/content/:id/submit-review
POST   /website/content/:id/publish
POST   /website/content/:id/unpublish
POST   /website/content/:id/archive
POST   /website/media
```

## 6. Suggested Data Model

### WebsiteContent

Purpose: common publishing container for blog, recipe, FAQ, static page, and other content.

Suggested fields:

- `id`
- `companyId`
- `type`: `BLOG`, `RECIPE`, `FAQ`, `STATIC_PAGE`, `PRODUCT_PAGE`, `STOCKIST_PAGE`
- `slug`
- `status`: `DRAFT`, `IN_REVIEW`, `SCHEDULED`, `PUBLISHED`, `ARCHIVED`
- `publishedAt`
- `scheduledAt`
- `createdById`
- `updatedById`
- `publishedById`
- `createdAt`
- `updatedAt`

### WebsiteContentTranslation

Suggested fields:

- `id`
- `contentId`
- `locale`: `en`, `zh`, `bm`
- `title`
- `summary`
- `bodyMarkdown` or `bodyJson`
- `seoTitle`
- `seoDescription`
- `ogImageId`
- `canonicalPath`
- `metadataJson`
- `createdAt`
- `updatedAt`

Recommendation:

- Treat translations as first-class rows, not only nested JSON blobs.
- This makes review, missing translation checks, and publish completeness easier.

### WebsiteMedia

Suggested fields:

- `id`
- `companyId`
- `storageProvider`
- `url`
- `path`
- `mimeType`
- `size`
- `width`
- `height`
- `altText`
- `caption`
- `uploadedById`
- `createdAt`

### WebsitePublishRevision

Suggested fields:

- `id`
- `contentId`
- `revisionNo`
- `snapshotJson`
- `createdById`
- `publishedById`
- `createdAt`
- `publishedAt`

Purpose:

- Audit public-facing content changes.
- Allow rollback.
- Prove who published legal/marketing/product claims.

## 7. Permissions Proposal

Use FDG-OS's existing role/permission system.

Suggested permissions:

```text
website.content.view
website.content.create
website.content.update
website.content.submit_review
website.content.publish
website.content.archive
website.media.view
website.media.upload
website.media.update
website.media.delete
website.settings.manage
```

Suggested role behavior:

- OWNER / ADMIN:
  - full website CMS permissions.
- MARKETING / CONTENT_EDITOR, if added:
  - create/update drafts, upload media, submit for review.
- PUBLISHER / MANAGER, if added:
  - publish/unpublish/schedule.
- VIEWER:
  - read-only admin view or no website module access.

Important:

- Public API endpoints must not require user login, but must only return published data.
- Admin preview endpoints must require authentication and permission checks.
- Company isolation must apply to website content even if Fire Dragon is currently one company.

## 8. Portal Environment Changes

Nuxt portal should eventually add:

```env
FDG_OS_API_BASE=https://api.firedragonmy.com
FDG_OS_PUBLIC_SITE_TOKEN=<optional-read-token-if-needed>
```

Important:

- If using a public read token, never expose privileged admin tokens in browser code.
- Prefer Nuxt server-side proxy/fetch for any endpoint that should hide credentials.
- Keep published public endpoints cacheable and safe to call from the public internet.

FDG-OS API CORS:

- Current production CORS includes `https://app.firedragonmy.com`.
- It will need to include the portal production domain if the browser calls FDG-OS directly:
  - `https://firedragonmy.com`
  - `https://www.firedragonmy.com`
- If Nuxt server routes proxy FDG-OS, browser CORS pressure is lower.

## 9. Caching And Deployment

Portal is on Vercel, so the integration should be cache-aware.

Recommended first stage:

- Nuxt fetches published content at SSR/runtime.
- Add reasonable cache headers on FDG-OS public endpoints.
- Keep local fallback data while migration is incomplete.

Recommended later:

- Add revalidation webhook:
  - FDG-OS publishes content.
  - FDG-OS calls a Vercel/Nuxt revalidation endpoint.
  - Portal updates cached pages.

Sitemap:

- FDG-OS should expose `updatedAt` / `publishedAt`.
- Portal uses those as sitemap `lastmod`.

## 10. Migration Order

Recommended sequence:

1. Confirm canonical domain: `firedragonmy.com` vs `www.firedragonmy.com`.
2. Confirm language URL strategy for all pages.
3. Build FDG-OS WebsiteContent + WebsiteContentTranslation schema.
4. Build blog CRUD in FDG-OS.
5. Build public blog read API.
6. Update portal Blog list/detail to fetch FDG-OS with local markdown fallback.
7. Add media library.
8. Move product public profiles.
9. Move stockists.
10. Move recipes and FAQ if operationally needed.
11. Add preview/publish/revalidation.
12. Remove obsolete local content only after production parity is verified.

## 11. What Should Not Be Done First

Avoid these in the first integration phase:

- Do not merge portal CMS fields directly into ERP accounting/inventory tables.
- Do not let unauthenticated portal users write into FDG-OS core tables.
- Do not auto-create customers from website contact messages.
- Do not store large media files in Git.
- Do not implement video upload before choosing storage/transcoding.
- Do not rebuild the portal as the FDG-OS web app; they serve different audiences.
- Do not expose FDG-OS internal admin APIs to the public portal.

## 12. Open Decisions For FDG-OS Lead

The FDG-OS owner/backend lead should decide:

- Should FDG-OS own all website content, or only Blog and Media first?
- Should the portal call `api.firedragonmy.com` directly, or through Nuxt server routes?
- Which media provider should be used?
- Should website content use Markdown, rich text JSON, or sanitized HTML?
- What approval workflow is required before publishing public content?
- Who can publish legal/product claims?
- Should product public profiles link to ERP `Product`, or remain initially independent?
- Should Contact Us submissions become FDG-OS `WebsiteLead` records later?
- What canonical host should be used by all SEO, sitemap, and structured data?

## 13. Recommended First Backend Ticket

Title:

```text
Add Website CMS foundation for public portal blog publishing
```

Scope:

- Prisma models:
  - `WebsiteContent`
  - `WebsiteContentTranslation`
  - `WebsitePublishRevision`
- Permissions:
  - `website.content.view`
  - `website.content.create`
  - `website.content.update`
  - `website.content.publish`
- Admin UI:
  - list blog posts
  - create/edit post
  - edit `en`, `zh`, `bm`
  - save draft
  - publish/unpublish
- Public API:
  - `GET /public/site/blog?lang=en`
  - `GET /public/site/blog/:slug?lang=en`
- Audit:
  - create audit entry on publish/unpublish.

Out of scope for first ticket:

- Media upload.
- Product migration.
- Stockist migration.
- Recipe migration.
- Contact CRM.
- Revalidation webhook.

Acceptance criteria:

- Existing portal blog content can be entered into FDG-OS.
- Public API returns only published posts.
- Unpublished draft content is not visible through public API.
- Portal can render list/detail from FDG-OS API in a test branch.
- Role/permission checks prevent normal users from publishing.
- Company isolation is enforced.

## 14. Current Portal Files To Reference

Blog:

- `server/assets/content/blog/<lang>/*.md`
- `server/assets/content/blog/manifest.<lang>.json`
- `server/api/blog/[lang]/index.get.ts`
- `server/api/blog/[lang]/[slug].get.ts`
- `app/components/blog/BlogCard.vue`
- `app/pages/blog/[lang]/index.vue`
- `app/pages/blog/[lang]/[slug].vue`

Products:

- `app/lib/products.data.ts`
- `app/locales/products.i18n.ts`
- `app/pages/products.vue`
- `app/pages/products/[key].vue`

Recipes:

- `app/lib/recipes/recipes.data.ts`
- `app/locales/recipes/recipes.content.ts`
- `app/pages/recipes/index.vue`
- `app/pages/recipes/[slug].vue`

Stockists:

- `app/lib/stockists/stockists.data.ts`
- `app/pages/stockists/index.vue`
- `app/pages/stockists/[slug].vue`

FAQ:

- `app/lib/faq/data`
- `app/lib/faq/faq.entities.ts`
- `app/pages/faq/[lang]/index.vue`

Legal/About/SEO:

- `app/locales/about.ts`
- `app/locales/legal.ts`
- `app/locales/seo.about.ts`
- `app/lib/seo.base.ts`

## 15. Current Portal Verification Baseline

As of this document:

- `pnpm type-check`: passed.
- `pnpm build`: passed.
- Known non-blocking warning: Browserslist/caniuse-lite data is stale.
- Known technical debt:
  - `pnpm lint` fails because ESLint is not configured in the frontend repo.
  - `/blog` and `/faq` root pages still redirect client-side.
  - Canonical host strategy is inconsistent between apex and `www`.


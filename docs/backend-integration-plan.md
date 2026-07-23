# Backend Integration Plan For Portal Content

Last reviewed: 2026-07-20

## Goal

Let FDG OS manage public website content so blog publishing, translation updates, media changes, stockist edits, and product content updates no longer require code commits.

The public portal should stay fast, SEO-friendly, and mostly read-only. FDG OS should own admin workflows, permissions, drafts, publishing, and audit trails.

## Recommended Architecture

Use FDG OS as the content operations system and expose a small public read API to the Nuxt portal.

High-level flow:

1. Admin edits content in FDG OS.
2. FDG OS stores drafts, translations, media references, and publish state.
3. Public read endpoints expose only published content.
4. Nuxt portal fetches published content at SSR/build/runtime.
5. Vercel caches pages/API responses where appropriate.

Avoid making the public portal a CMS admin app. It should consume content, not own back-office permissions and publishing logic.

## Suggested FDG OS CMS Modules

### Website Content

Core fields:

- `id`
- `type`: blog, recipe, product_page, stockist_page, static_page
- `slug`
- `status`: draft, review, scheduled, published, archived
- `publishedAt`
- `scheduledAt`
- `createdBy`
- `updatedBy`
- `publishedBy`
- `createdAt`
- `updatedAt`

### Website Content Translation

Core fields:

- `contentId`
- `locale`: en, zh, bm
- `title`
- `summary`
- `body`
- `seoTitle`
- `seoDescription`
- `ogImageId`
- `canonicalPath`
- `metadataJson`

Keep translations as first-class rows, not nested blobs only. This makes completeness checks and publishing review much easier.

### Media Library

Core fields:

- `id`
- `storageProvider`: s3, r2, cloudinary, vercel_blob, local
- `url`
- `path`
- `mimeType`
- `size`
- `width`
- `height`
- `altText`
- `caption`
- `uploadedBy`
- `createdAt`

Do not store large images/videos in Git after this migration. Git should keep code and seed/demo assets only.

### Publishing Audit

Track:

- Who changed content
- Who published content
- Before/after diff or revision snapshot
- Rollback target
- Public URL affected

This matters because public content affects brand, SEO, and legal/commercial claims.

## Public API Shape

Suggested public endpoints:

- `GET /public/site/blog?lang=en`
- `GET /public/site/blog/:slug?lang=en`
- `GET /public/site/products?lang=en`
- `GET /public/site/products/:key?lang=en`
- `GET /public/site/recipes?lang=en`
- `GET /public/site/recipes/:slug?lang=en`
- `GET /public/site/stockists?lang=en`
- `GET /public/site/sitemap`

Suggested admin endpoints should stay under authenticated FDG OS routes, not public routes.

## Nuxt Frontend Changes Needed

- Add runtime config:
  - `FDG_OS_API_BASE`
  - `FDG_OS_PUBLIC_TOKEN` only if a read token is needed
- Create typed fetch clients under `app/lib/api`.
- Replace local data modules gradually:
  - Blog first
  - Products second
  - Stockists/recipes after the schema is stable
- Keep markdown rendering either:
  - on FDG OS, returning sanitized HTML; or
  - on Nuxt, returning markdown from FDG OS and rendering with `markdown-it`.

Recommendation: return markdown plus structured frontmatter from FDG OS first. Let Nuxt render and sanitize consistently until the CMS model stabilizes.

## Caching Strategy

For Vercel:

- Published blog/detail pages can be cached.
- Admin preview should bypass public cache.
- Add a webhook/revalidation path later if content changes must appear immediately.
- Use stable `updatedAt` and `publishedAt` fields for sitemap `lastmod`.

## Video Upload Recommendation

Do not upload large video files directly into the frontend repository.

Good options:

- YouTube/Vimeo unlisted/public embeds for simple marketing/recipe content.
- Cloudflare Stream, Mux, or similar if you need branded player, adaptive streaming, thumbnails, and upload workflow.
- S3/R2 object storage only if you also handle transcoding, thumbnails, delivery, and bandwidth.

For the first portal upgrade, store video as metadata:

- provider
- externalVideoId or URL
- thumbnail media ID
- locale-specific title/description
- publish state

## Migration Order

1. Freeze current content inventory.
2. Define CMS schema in FDG OS.
3. Build blog admin CRUD in FDG OS.
4. Add public blog read API.
5. Update Nuxt blog pages to consume FDG OS API with fallback to local markdown during transition.
6. Add media library.
7. Migrate product content and stockists.
8. Remove obsolete local content files after production parity is verified.

## Open Decisions

- Canonical domain: `firedragonmy.com` or `www.firedragonmy.com`.
- Language URL strategy: language segment for every page, query/cookie for general pages, or hybrid.
- CMS body format: markdown, rich text JSON, or sanitized HTML.
- Media provider.
- Whether FDG OS production backend is public-internet accessible or proxied through Nuxt server routes.
- Whether website leads from contact form should become FDG OS CRM/customer records.


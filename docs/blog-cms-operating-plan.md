# Blog CMS Operating Plan For FDG OS And Public Portal

Last reviewed: 2026-07-24

Audience: FDG-OS owner, portal maintainer, content/operations users.

## 1. Decision

FDG-OS should provide a small Website CMS module for Blog operations.

The first CMS scope should be:

- Blog create/edit.
- Existing markdown blog import.
- Translation management.
- SEO metadata and keyword planning.
- Draft/review/publish/unpublish/archive workflow.
- Revision log and audit trail.
- Public read API for the Nuxt portal.

Do not start by building a full website CMS for products, recipes, stockists, FAQ, media library, contact CRM, or static legal pages. Those should remain later phases after Blog publishing proves stable.

## 2. Current Constraint

The public portal is deployed from GitHub to Vercel:

```text
GitHub repo: FDE-FrontEnd
Vercel domain: firedragonmy.com
Current Blog content: markdown files in Git
FDG-OS: app/API on VPS
```

A CMS should not require committing generated Blog markdown back into Git for every article.

Recommended model:

```text
FDG-OS admin CMS on VPS
  stores drafts, translations, status, SEO fields, revisions and audit logs in PostgreSQL
  exposes public read-only published Blog API
    ↓
Nuxt portal on Vercel
  fetches published Blog data from FDG-OS public API during SSR/runtime
  renders public Blog list/detail pages with server-rendered HTML and SEO metadata
```

The Blog does not need to be stored as files on the VPS. It is better stored in the FDG-OS database and served through a public read API. The portal should keep its current Git markdown content as a migration fallback until CMS parity is verified.

## 3. SEO Reality

CMS does not automatically create SEO ranking. It only removes operational friction so the team can publish and improve content consistently.

For SEO, FDG-OS + portal must ensure:

- Public Blog pages render real article HTML on the server, not only after client-side JavaScript loads.
- Each published article has stable canonical URL, title, meta description, language, slug and updated date.
- Sitemap includes published articles only.
- Unpublished/draft content never appears in public APIs or sitemap.
- Content quality, originality, search intent, structure, internal links and usefulness remain the responsibility of content operations.

If Nuxt fetches the FDG-OS Blog API during SSR/runtime and renders complete HTML, Google can index it like normal site content. If the Blog is only client-side fetched after page load, SEO will be weaker and should be avoided.

## 4. MVP Content Model

### WebsiteContent

Purpose: one public content container per article.

Fields:

- `id`
- `companyId`
- `type`: `BLOG`
- `slug`
- `status`: `DRAFT`, `IN_REVIEW`, `PUBLISHED`, `UNPUBLISHED`, `ARCHIVED`
- `primaryLocale`: `en`, `zh`, `bm`
- `publishedAt`
- `unpublishedAt`
- `createdById`
- `updatedById`
- `reviewedById`
- `publishedById`
- `createdAt`
- `updatedAt`

### WebsiteContentTranslation

Purpose: one row per article language.

Fields:

- `id`
- `contentId`
- `locale`: `en`, `zh`, `bm`
- `title`
- `summary`
- `bodyMarkdown`
- `seoTitle`
- `seoDescription`
- `canonicalPath`
- `primaryKeyword`
- `secondaryKeywords`
- `searchIntent`
- `ogImageUrl` initially optional text URL, media library later
- `translationStatus`: `MISSING`, `DRAFT`, `READY`, `PUBLISHED`
- `createdAt`
- `updatedAt`

### WebsitePublishRevision

Purpose: record what was published and allow audit/rollback later.

Fields:

- `id`
- `contentId`
- `revisionNo`
- `statusBefore`
- `statusAfter`
- `snapshotJson`
- `changeSummary`
- `createdById`
- `publishedById`
- `createdAt`

## 5. Workflow

Recommended V0 workflow:

```text
Draft → Ready for Review → Published
              ↓             ↓
           Needs Edit     Unpublished / Archived
```

### Draft

Used while writing or importing content.

Allowed actions:

- Save draft.
- Edit translations.
- Preview admin-only article.
- Submit for review.
- Archive draft.

Public API behavior:

- Not visible.

### Ready for Review

Used when the article looks ready but needs final check.

Required review checklist:

- Title exists for the target publish language.
- Summary exists.
- Body has meaningful content.
- SEO title and description exist.
- Slug is stable and not duplicated.
- Primary keyword is defined.
- No obvious placeholder text.
- At least one language is ready.

Allowed actions:

- Publish.
- Send back to draft.
- Edit if user has permission.

Public API behavior:

- Not visible.

### Published

Used for public website content.

Allowed actions:

- Edit new draft revision.
- Unpublish.
- Archive only after unpublish.
- View public URL.

Public API behavior:

- Visible.
- Included in sitemap.

### Unpublished

Used when an article should be removed from public listing but history should remain.

Public API behavior:

- Blog list: hidden.
- Blog detail: return `404` or `410` depending later SEO decision.
- Sitemap: removed.

### Archived

Used for old drafts or content not expected to return.

Public API behavior:

- Hidden.

## 6. Permissions

Keep this simple for family/internal beta.

Suggested permissions:

```text
website.blog.view
website.blog.create
website.blog.update
website.blog.submit_review
website.blog.publish
website.blog.unpublish
website.blog.archive
website.blog.import
```

Suggested role behavior:

- OWNER / ADMIN:
  - full access, including publish/unpublish/archive/import.
- ACCOUNTANT:
  - no CMS access by default unless explicitly granted.
- OPERATOR:
  - no CMS access by default.
- CONTENT_EDITOR if later added:
  - create/edit drafts, import drafts, submit review.
- PUBLISHER if later added:
  - publish/unpublish after review.
- VIEWER:
  - no edit access; optional read-only admin view later.

Important:

- Public read endpoints must not expose draft/review/unpublished content.
- Publish/unpublish must create audit logs.
- Editing public product/legal/health claims should remain OWNER/ADMIN controlled until content governance matures.

## 7. Admin UI Information Architecture

Recommended FDG-OS sidebar group:

```text
Website
  Blog Posts
  Blog Import
  Publish Log
  Website Settings later
```

For internal beta, this can live under `Setup & Admin` first to avoid making the daily sidebar crowded.

### Blog Posts List

Purpose: operations overview.

Layout:

- Top summary strip:
  - Drafts
  - Ready for review
  - Published
  - Missing translations
- Search:
  - title, slug, keyword, summary
- Filters:
  - status
  - locale readiness
  - author
  - updated date
- Table columns:
  - Title / slug
  - Status
  - Languages: EN / ZH / BM readiness badges
  - Primary keyword
  - Last updated
  - Published date
  - Next action
  - Open

UX principle:

- The first question should be: “What article needs action now?”
- Do not show all SEO fields in the list; keep heavy editing inside detail.

### Blog Editor Page

Recommended layout:

```text
Header strip
  Back | Status | Public URL if published | Save Draft | Submit Review / Publish | More

Main two-column workspace
  Left: content editor
  Right: publishing readiness and SEO panel
```

Left content editor:

- Locale tabs: English, 中文, Bahasa Melayu.
- Title.
- Summary.
- Markdown body editor.
- Preview toggle or split preview.
- Internal notes for editors.

Right panel:

- Status and next action.
- Slug.
- SEO title.
- SEO description.
- Primary keyword.
- Secondary keywords.
- Search intent.
- Canonical path.
- Publish checklist.
- Last saved / last published.

Why this design:

- Writers spend most time in the body editor.
- SEO checks should be visible but not block typing.
- Publish controls must be obvious but not mixed into article text.

### Blog Preview

Two preview modes:

- Admin preview:
  - authenticated.
  - can show draft/review content.
  - display “Preview only” banner.
- Public preview:
  - only for published content.
  - matches public portal rendering as closely as practical.

V0 can start with admin preview in FDG-OS and rely on portal rendering after publish.

### Blog Import Page

Purpose: migrate existing Git markdown without manual copy/paste.

Inputs:

- Upload zip or select imported markdown folder later.
- V0 can be a backend script/admin command first if UI is too large.

Import sources:

- `server/assets/content/blog/<lang>/*.md`
- `server/assets/content/blog/manifest.<lang>.json`

Import behavior:

- Dry-run first.
- Match by slug + locale.
- Create missing content/translation records.
- Skip exact duplicates.
- Report conflicts when existing CMS title/body differs from markdown.
- Imported posts default to `DRAFT` or `IN_REVIEW`, not automatically published unless explicitly selected.

Import result table:

- slug
- locale
- title
- action: create / update / skip / conflict
- issue message

### Publish Log

Purpose: accountability and rollback readiness.

Show:

- article title
- action: create/update/publish/unpublish/archive
- actor
- timestamp
- status before/after
- revision number
- public URL affected
- change summary

This should use FDG-OS audit patterns where possible.

## 8. Translation Strategy

Do not rely on automatic translation as the source of truth.

Recommended V0:

- User chooses primary language for the article.
- Other language tabs can be missing/draft.
- Publish can allow one language first if business accepts it.
- The public portal should fallback carefully:
  - If requested locale exists and published, show it.
  - If not, fallback to primary published locale or show a not-found depending SEO strategy.

Editor UI:

- Show EN / ZH / BM readiness badges.
- Each locale has its own title, summary, body, SEO title and description.
- Provide “Copy from primary language” helper to start translation.
- Later optional AI translation suggestion can be added, but human must review before publish.

SEO note:

- Translation is not only wording. Keywords and search intent can differ by language.
- Each locale should have its own SEO title, description and primary keyword.

## 9. Keyword And SEO Editing UX

The CMS should guide SEO without pretending to guarantee ranking.

Right panel fields:

- Primary keyword.
- Secondary keywords.
- Search intent:
  - recipe
  - product education
  - brand story
  - ingredient guide
  - cooking tips
  - marketplace buying guide
- SEO title.
- SEO description.
- Suggested internal links.
- Suggested product references later.

Checklist examples:

- Title contains the main topic naturally.
- SEO description is readable and not keyword-stuffed.
- Article has clear H2 sections.
- Article answers a real customer question.
- Article includes internal links where useful.
- Article has updated date after material changes.

Do not over-optimize keyword density. The UI should encourage helpful writing, not spam.

## 10. Publish And Portal Integration

### Public API

MVP endpoints:

```text
GET /public/site/blog?lang=en
GET /public/site/blog/:slug?lang=en
```

Only published content should be returned.

Response should include:

- slug
- locale
- title
- summary
- bodyMarkdown or rendered sanitized HTML
- seoTitle
- seoDescription
- canonicalPath
- publishedAt
- updatedAt
- author display name if public-safe
- primaryKeyword optional for internal only; public response can omit if not needed

### Portal Fetching

Nuxt portal should fetch through server-side code, not only client-side code.

Recommended V0:

- Keep existing markdown fallback.
- Try FDG-OS public API first.
- If API unavailable during transition, render local markdown fallback.
- Add runtime env:

```env
FDG_OS_API_BASE=https://api.firedragonmy.com
```

If a public token is used later, keep it server-side in Nuxt runtime config and do not expose admin credentials.

### Vercel Caching

Options:

- Short cache TTL first, e.g. minutes.
- Later add revalidation webhook when FDG-OS publishes/unpublishes.

V0 should prefer correctness over aggressive caching.

## 11. Unpublish And SEO Safety

Unpublish is not the same as delete.

Recommended behavior:

- Published article can be unpublished by OWNER/ADMIN.
- Public list removes it.
- Sitemap removes it.
- Detail returns `404` or `410` based on later SEO decision.
- CMS keeps all revisions and logs.

Do not physically delete published content in V0 unless there is a legal/privacy reason. Use archive/unpublish instead.

## 12. Editor Experience Recommendation

V0 editor should be Markdown-first, not a heavy rich text editor.

Reasons:

- Current Blog content is already markdown.
- Markdown is easy to import/export.
- It is safer than arbitrary HTML.
- It keeps implementation smaller.

Editor features that matter:

- Large comfortable writing area.
- Autosave draft later if practical; manual Save Draft is acceptable for V0.
- Preview mode.
- Clear unsaved changes warning.
- Keyboard-friendly editing.
- Sticky right-side publish/SEO checklist.
- Mobile editing can be readable, but serious article writing can remain desktop-first.

Avoid in V0:

- Complex drag-and-drop page builder.
- Arbitrary HTML blocks.
- Full media library.
- AI generation as default content creation.
- Public comments.

## 13. MVP Development Phases

### Phase 0: Design And Migration Prep

- Freeze current Blog inventory.
- Confirm canonical host and language URL strategy.
- Confirm body format: Markdown for V0.
- Confirm publish permissions.

### Phase 1: FDG-OS Blog CMS Backend

- Add Prisma models.
- Add permissions.
- Add admin CRUD API.
- Add publish/unpublish actions.
- Add revision/audit records.
- Add public read API.

### Phase 2: FDG-OS Blog Admin UI

- Blog list.
- Blog editor.
- Locale tabs.
- SEO panel.
- Publish checklist.
- Publish log.

### Phase 3: Import Existing Markdown

- Dry-run import from current portal markdown files.
- Apply import into CMS as drafts/review items.
- Verify slug and locale parity.

### Phase 4: Portal Read Integration

- Nuxt server-side fetch from FDG-OS public Blog API.
- Keep markdown fallback.
- Ensure HTML, meta tags, canonical, sitemap and language routes render correctly.

### Phase 5: Operational Hardening

- Revalidation webhook.
- Media library.
- Product public profiles.
- Stockists/recipes later.

## 14. Acceptance Criteria For First Release

The first CMS release is acceptable when:

- OWNER/ADMIN can create a Blog draft.
- Editor can fill English/Chinese/BM content separately.
- Publish requires permission.
- Public API returns published posts only.
- Draft/review/unpublished posts are not public.
- Existing markdown posts can be imported without creating duplicates.
- Publish/unpublish actions are logged with actor and timestamp.
- Portal can render CMS Blog list/detail in server-rendered HTML.
- Sitemap includes published CMS Blog pages.
- Existing Git markdown fallback remains available during migration.

## 15. Main Risks

- Portal fetches content client-side only, weakening SEO.
- Vercel cache serves stale content after unpublish.
- Public API accidentally exposes draft content.
- Markdown rendering allows unsafe HTML/XSS if not sanitized.
- Editors over-focus on keyword stuffing instead of useful content.
- Media upload is rushed before storage/backup/CDN policy is decided.

Mitigation:

- SSR fetch in Nuxt.
- Public API filters by `PUBLISHED` only.
- Sanitize markdown rendering.
- Keep publish permissions strict.
- Start without media upload; use existing image URLs or defer cover image management.
- Add cache/revalidation only after the basic Blog flow is stable.

## 16. Recommended First FDG-OS Ticket

Title:

```text
Website Blog CMS V0 — Draft/Edit/Import/Publish/Public API
```

Scope:

- Blog-only CMS models.
- Blog admin APIs.
- Blog admin UI.
- Existing markdown import dry-run/apply.
- Publish/unpublish/revision logs.
- Public Blog read API.
- Portal integration test branch using FDG-OS public API with markdown fallback.

Out of scope:

- Media upload.
- Product public profile.
- Stockists.
- Recipes.
- FAQ.
- Contact lead CRM.
- AI writing automation.

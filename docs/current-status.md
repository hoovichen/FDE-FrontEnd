# FDE-FrontEnd Current Status

Last reviewed: 2026-07-23

## Executive Summary

This repository is a Nuxt 4 portal site for Fire Dragon Enterprise, deployed from GitHub to Vercel for `firedragonmy.com`.

The project is more than a pure static frontend: it uses Nuxt/Nitro server routes for blog content, sitemap URLs, and contact form email delivery. However, business content is still source-controlled. Blog posts, products, recipes, stockists, FAQ, translations, images, and SEO metadata are currently maintained by editing code, markdown, or files in the repo.

The current build is deployable. `pnpm type-check` and `pnpm build` pass locally. `pnpm lint` fails because the project defines a lint script but does not currently include an `eslint` dependency/configuration in this frontend repo.

## Repository Snapshot

- Local path: `/Users/hineoc/Code/FDG/FDE-FrontEnd`
- Git remote: `https://github.com/hoovichen/FDE-FrontEnd.git`
- Current branch: `main`
- Latest local commit at review time: `49cbc5b update company reg no;`
- Package name: `fdg-front-end`
- Installed Nuxt version: `4.2.2`
- Domain configured in runtime defaults: `https://www.firedragonmy.com`
- No local `vercel.json` or `.vercel` project metadata found in the repo.

## Tech Stack

- Nuxt 4 / Vue 3 / TypeScript
- Nitro server routes under `server/api`
- `@nuxt/image` for image optimization
- `@nuxtjs/sitemap` and `@nuxtjs/robots`
- Vercel Analytics and Speed Insights
- `gray-matter` and `markdown-it` for markdown blog rendering
- `resend` and `zod` for contact form submission
- CSS is organized manually by global token/base/page/component files, not by a component-scoped design system.

## Main Routes

- `/`
- `/about`
- `/products`
- `/products/:key`
- `/recipes`
- `/recipes/:slug`
- `/blog`
- `/blog/:lang`
- `/blog/:lang/:slug`
- `/faq`
- `/faq/:lang`
- `/stockists`
- `/stockists/:slug`
- `/contact`
- `/privacy-policy`
- `/terms`

Supported language codes are `zh`, `en`, and `bm`.

## Content Model Today

Blog:
- Stored as markdown in `server/assets/content/blog/<lang>/*.md`.
- Per-language manifest files exist at `server/assets/content/blog/manifest.<lang>.json`.
- Blog list and detail pages fetch content through Nitro API routes.
- There are 21 markdown blog files: 7 posts x 3 languages.

Products:
- Product base data lives in `app/lib/products.data.ts`.
- Product translations live in `app/locales/products.i18n.ts`.
- Product UI strings live in `app/locales/products.ui.ts`.
- Product images and marketplace URLs are hardcoded in frontend data.

Recipes:
- Recipe data and helpers live under `app/lib/recipes*` and `app/locales/recipes*`.
- The recipe detail page currently has leftover console logging.

Stockists:
- Stockist data is local frontend data under `app/lib/stockists`.
- Store cover/map assets are static files under `public/images`.

FAQ:
- FAQ data is code-based under `app/lib/faq/data`.
- FAQ has a smarter search layer in `app/lib/faq`.

Translations:
- There is no Nuxt i18n module.
- Language state is custom: cookie + localStorage + `useState`.
- Some pages change language in-place on the same URL; blog and FAQ use URL language segments.

Media:
- 126 public files exist under `public`.
- Images are committed into the repo.
- There is no media upload, CDN asset management workflow, or image metadata model.

## Server/API Surface In This Repo

- `GET /api/blog/:lang`
- `GET /api/blog/:lang/:slug`
- `GET /api/__sitemap__/urls`
- `POST /api/contact`

The frontend repository currently has no authenticated admin UI and no CMS write API.

## FDG OS Backend Relevance

`/Users/hineoc/Code/FDG/FDG-os` contains a larger backend/admin system:

- API app: NestJS + Prisma + PostgreSQL
- Web app: Next.js
- Existing modules include auth, users, products, customers, suppliers, inventory, sales, accounting, production, marketplace, dashboard, imports, exports, and internal messages.
- Current API does not appear to include a public website CMS/blog/media module yet.
- CORS defaults include local frontend origins and can be extended with `CORS_ORIGINS`.

Recommended direction: add a website/CMS boundary inside FDG OS rather than letting the public portal directly mutate operational ERP tables.

## Deployment Status

Local verification:

- `pnpm type-check`: passed
- `pnpm build`: passed
- `pnpm lint`: failed because `eslint` command is missing
- Local runtime checks on port 3002:
  - `/api/blog/en`: 200
  - `/api/blog/en/hello-fire-dragon`: 200
  - `/api/__sitemap__/urls`: 200
  - `/blog/en`: 200
  - `/products`: 200

Build warning:

- Browserslist/caniuse-lite data is 7 months old.

## Homepage Redesign Implementation - 2026-07-22

The homepage has been rebuilt toward the design department's Instagram/editorial commerce direction.

Implemented:

- New homepage section flow:
  - Announcement bar
  - Full-bleed product hero
  - Featured product grid
  - Quote + shop CTA
  - Recipes split CTA
  - Blog split CTA
  - Motion bar
  - Stockists footer CTA
- New reusable homepage components:
  - `HomeAnnouncementBar`
  - `HomeEditorialHero`
  - `HomeFeaturedProducts`
  - `HomeQuoteCta`
  - `HomeSplitFeature`
  - `HomeMotionBar`
  - `HomeRedesign`
- New locale source for redesign copy:
  - `app/locales/home.redesign.ts`
- New redesign CSS:
  - `app/assets/styles/pages/home-redesign.css`
- Header simplified to design direction:
  - Home
  - Catalog
  - Contact
  - language selector
  - mobile menu
- Footer rebuilt around stockists CTA and minimal legal/social bottom bar.
- New editorial commerce design tokens added to `app/assets/styles/tokens/_color.css`.
- Invalid existing CSS token fixed:
  - `--color-bg-softer`

Font decision:

- `@fontsource-variable/inter` has been added as a local dependency for self-hosted Latin UI typography.
- The active font token is:
  - `"Inter Variable"`
  - `Inter`
  - `system-ui`
  - Apple/BlinkMac system fonts
  - `Segoe UI`
  - `PingFang SC`
  - `Noto Sans SC`
  - `Microsoft YaHei`
  - `Arial`
- Reason: Inter improves the English/editorial UI feel, while system CJK fallbacks reduce the risk of Chinese glyph loss or garbled text.

Assets:

- No new placeholder image assets were added.
- The homepage currently reuses existing Fire Dragon/product/recipe/blog assets from `public/images`.
- Design department dessert/generic product references are treated as layout/style references only, not production content.

Local preview:

```bash
pnpm exec nuxt dev --host 127.0.0.1 --port 3002
```

Then open:

```text
http://127.0.0.1:3002/
```

Verification after implementation:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Local HTTP checks:
  - `/`: 200
  - `/products`: 200
  - `/stockists`: 200
  - `/blog/en`: 200

Visual QA status:

- `design-qa.md` now records screenshot-level QA for the latest product/contact/recipe/stockists correction pass.
- Product desktop/mobile, Contact desktop, Recipe detail desktop, and Stockists list/detail desktop/mobile were checked with Playwright geometry metrics.
- Manual visual inspection in the local browser is still recommended before production deployment because design taste and content hierarchy still need human review.

Important follow-up:

- FAQ, Terms, and Privacy still need style alignment after homepage review.
- Current header/footer now affect all pages, so subpage visual QA should be prioritized next.

## Product Listing And Product Detail UI Pass - 2026-07-22

Implemented after design feedback about CSS pollution and poor mobile product recognition:

- Homepage featured product tiles:
  - Removed the oversized `min-height` media blocks that separated product photos from names.
  - Mobile layout was updated to a horizontal snap rail with one product per viewport, matching the requested mobile browsing behavior.
  - Tightened `home-product-tile__name` sizing and spacing under `.home-redesign` context.
  - Product images now align to the bottom of their media area with controlled aspect ratios.
- `/products` catalog page:
  - Replaced the old card/shadow grid with an Instagram/editorial product wall.
  - Removed the duplicate mobile rail and the stale scroll-to-second-card logic.
  - Product photo, name, summary, and price now use the same visual language as the homepage.
  - Mobile catalog now uses a horizontal snap rail with one product per viewport.
  - Product title/summary/price text rows are constrained so long copy such as Crispy Anchovy Chilli does not push the white text block upward unevenly.
- `/products/:key` detail overlay:
  - Reworked from rounded card modal into a cleaner product information surface.
  - Uses large left-side product imagery and right-side product copy/actions on desktop.
  - Stacks into a simple image-first detail page on mobile.
  - Mobile Back to products button is fixed as a small floating control so it no longer consumes right-side product image width.
  - CTA buttons are now pill-style and aligned with the new olive/ink theme.
- Product detail data:
  - Product spreadsheet details were converted into structured frontend fields.
  - Objective SKU/spec fields now live in `app/lib/products.data.ts`.
  - Language-facing description/highlights/serving suggestions now live in `app/locales/products.i18n.ts`.
  - Detail pages now render Product Highlights, Serving Suggestions, Product Information, Ingredients, Allergen Information, Packaging Type, Pack Size, and Specialty Diet where data is available.
- Font loading:
  - Added `@fontsource-variable/inter` to `package.json`.
  - Imported the font through Nuxt global CSS.
  - Updated global reset to use `var(--fdg-font-family)`.

Verification after product UI pass:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Local HTTP checks through non-sandbox environment:
  - `/`: 200
  - `/products`: 200
  - `/products/green-cap`: 200
  - `/products/cripy-anchovy`: 200

Known caveat:

- The in-app browser MCP is still unavailable in this thread. Screenshot QA is currently done through the bundled Playwright CLI and a temporary local script rather than a reusable project-owned Playwright test.

## Stockists UI Pass - 2026-07-22

Implemented after product-design review for `/stockists` and `/stockists/:slug`:

- `/stockists` now uses the same editorial/Instagram-style system language as the redesigned catalog and contact pages.
- Search and region/city filters moved into a constrained left panel on desktop and a compact top panel on mobile.
- Stockist list cards are scoped under `.stockists-page` to avoid leaking `stockist-card` styles into the detail page or other modules.
- Map thumbnails are smaller and lighter so long store names and actions remain readable without a heavy card/shadow look.
- `/stockists/:slug` now uses a focused two-column detail layout with large map media on the left and address/contact/actions on the right.
- Detail CTA buttons now fit inside the desktop first viewport at `1440x900`.
- The old phone emoji/legacy arrow usage was removed from Stockists templates.

Verification after Stockists UI pass:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Screenshot QA through `/private/tmp/fdg-stockists-qa.mjs`:
  - `/stockists` desktop `1440x900`: no horizontal overflow
  - `/stockists` mobile `390x844`: no horizontal overflow
  - `/stockists/pasar-mini-choong-keet-300-0002` desktop `1440x900`: no horizontal overflow; CTA block visible in first viewport
  - `/stockists/pasar-mini-choong-keet-300-0002` mobile `390x844`: no horizontal overflow

QA screenshots:

- `/private/tmp/fdg-stockists-desktop.png`
- `/private/tmp/fdg-stockists-mobile.png`
- `/private/tmp/fdg-stockist-detail-desktop.png`
- `/private/tmp/fdg-stockist-detail-mobile.png`

## Global Floating Contact Dock - 2026-07-23

Implemented:

- Replaced the old DOM-based Back to top implementation in `app/app.vue` with `FloatingContactDock`.
- Added a global floating dock through `app/layouts/default.vue`, so it appears across all default-layout pages.
- Updated the Back to top visual style from the old warm brown gradient to the current olive/ink system.
- Added a lightweight WhatsApp pre-chat widget:
  - fixed bottom-right WhatsApp button
  - expandable chat panel
  - multilingual copy for `en`, `zh`, and `bm`
  - quick reply prompts
  - editable message textarea
  - final CTA opens `https://wa.me/601139387226?text=...`
- No WhatsApp API is required for this version. It uses the official WhatsApp click-to-chat URL with prefilled text.

Important implementation note:

- This is not a live embedded WhatsApp inbox. It is a frontend pre-chat experience that hands the user to WhatsApp.
- True in-site customer service would require WhatsApp Business Platform API, Meta app setup, backend webhooks, message templates, and usually a support inbox/CRM flow in FDG OS.

Verification:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Screenshot QA through `/private/tmp/fdg-floating-contact-qa.mjs`:
  - desktop collapsed/open states captured
  - mobile open state captured
  - mobile `bodyScrollWidth` equals viewport width `390`, so no horizontal overflow

QA screenshots:

- `/private/tmp/fdg-floating-contact-desktop-collapsed.png`
- `/private/tmp/fdg-floating-contact-desktop-open.png`
- `/private/tmp/fdg-floating-contact-mobile-open.png`

## GitHub Pre-upload Final Prep - 2026-07-23

Implemented:

- `/products` category cards now use fixed media/body slots so mixed image ratios and multilingual copy do not create uneven card heights.
- Product card titles and summaries are line-clamped inside stable rows; prices stay aligned at the bottom of the fixed text area.
- Product images are now constrained as complete `contain` images inside the fixed media slot, preventing tall bottle photos from bleeding into or being clipped by the text area.
- Product JSON-LD URLs now use `runtimeConfig.public.siteUrl` instead of the previous `https://example.com` placeholder.
- `/terms` now has a lightweight Terms & Conditions page in `en`, `zh`, and `bm`.
- `/privacy-policy` now has a lightweight Privacy Policy page in `en`, `zh`, and `bm`.
- Legal pages share a new editorial legal-page style under `app/assets/styles/pages/legal.css`.

Legal content caveat:

- The Terms and Privacy pages are protective frontend drafts for the current informational site. They are not a substitute for legal advice.
- Final review is still recommended before relying on the wording for formal compliance, especially after adding user accounts, checkout, analytics expansion, CMS uploads, or FDG OS customer/contact storage.

Verification:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Screenshot QA through `/private/tmp/fdg-final-qa.mjs`:
  - `/products` desktop `1440x900`: first 8 product cards measured at the same height, no horizontal overflow
  - first product image now renders inside the media slot at `420px` high inside a `490px` image area
  - `/terms` desktop `1440x900`: no horizontal overflow, 7 legal sections rendered
  - `/privacy-policy` mobile `390x844`: no horizontal overflow, 7 legal sections rendered

QA screenshots:

- `/private/tmp/fdg-final-products-bm-desktop.png`
- `/private/tmp/fdg-final-terms-desktop.png`
- `/private/tmp/fdg-final-privacy-mobile.png`

## Pre-upload Navigation / About / FAQ / Blog Polish - 2026-07-23

Implemented:

- Homepage now includes a low-noise support/resource section after the motion bar:
  - About / Our story
  - FAQ
  - Blog / Stories
- Footer utility navigation now includes About, Blog, FAQ, Terms & Conditions, and Privacy Policy.
- About Us was rebuilt into an SEO-oriented brand story page:
  - Pantai Remis origin and local food-work narrative
  - timeline
  - values
  - real product/meal imagery
  - internal links to Contact and the longer origin blog story
- FAQ was restyled into the current editorial/Instagram-style system.
- FAQ now shows the classic FAQ list by default and opens the first category by default. Search remains available as an assisted layer instead of being the only obvious entry point.
- Blog list and detail cover images now use `object-fit: contain` with a 16:9 presentation area, so designed cover artwork and cover titles are not cropped.
- Blog card titles now display in full instead of being clamped with ellipses. Summaries remain clamped to preserve scanability.
- Homepage recipe split media now uses a landscape real meal/product image and has a same-source CSS background fallback for cover-mode media, preventing blank image areas if optimized image rendering is unstable.
- Footer social icons now use normal `<img>` tags instead of `NuxtImg`, avoiding IPX/`.ico` handling issues that produced broken icon placeholders in QA.

Design decision:

- FAQ does not need a prominent main-nav item yet. The current recommendation is to keep the header minimal for the Instagram-style portal, then expose FAQ through the homepage support/resource section and the footer. If customer support traffic grows, FAQ can be promoted into header navigation later.

Local preview discipline:

- Start a preview only when needed, then stop it with `Ctrl-C` after QA to avoid repeated port conflicts.
- Suggested command:

```bash
pnpm dev --host 127.0.0.1 --port 3020
```

Verification:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Playwright QA through `/private/tmp/fdg-about-faq-blog-qa.mjs`:
  - `/`, `/about`, `/faq/en`, `/blog/en`, and `/blog/en/green-cap-firedragon` have no desktop horizontal overflow at `1440px`.
  - `/about`, `/faq/en`, and `/blog/en` have no mobile horizontal overflow at `390px`.
  - Homepage resource links resolve to `/about`, `/faq/en`, and `/blog/en`.
  - Footer utility links resolve to `/about`, `/blog/en`, `/faq/en`, `/terms`, and `/privacy-policy`.
  - Blog cover images on home/list/detail are measured as `object-fit: contain`.

QA screenshots:

- `/private/tmp/fdg-home-resources-desktop.png`
- `/private/tmp/fdg-home-split-1.png`
- `/private/tmp/fdg-home-split-2.png`
- `/private/tmp/fdg-about-desktop.png`
- `/private/tmp/fdg-about-mobile.png`
- `/private/tmp/fdg-faq-desktop.png`
- `/private/tmp/fdg-faq-mobile.png`
- `/private/tmp/fdg-blog-list-desktop.png`
- `/private/tmp/fdg-blog-list-mobile.png`
- `/private/tmp/fdg-blog-detail-desktop.png`

## Next UI / Content Scope Captured - 2026-07-22

Pages still requiring design-system alignment:

- Continue human design review for About, FAQ, Blog, Product, Stockists, Recipes, Contact, Terms, and Privacy after the current editorial style pass.

Legal content direction:

- Terms & Conditions and Privacy Policy now have lightweight protective drafts and aligned UI.
- Legal copy should still be reviewed by a qualified legal professional before relying on it, and should be expanded when backend/CMS/account/checkout/storage flows are added.

## Product Detail IA And Subpage Style Pass - 2026-07-22

Implemented after feedback that the desktop product detail page had too much long-form content in the primary view:

- Product detail page:
  - Desktop is now a compact two-column product information panel.
  - Left product image is centered and no longer visually sinks below the text.
  - Right panel now prioritizes:
    - product name
    - short summary
    - price / weight / shelf life / storage
    - top three product highlights
    - Shopee/Lazada CTA buttons
  - Full product story, additional highlights, serving suggestions, and full specs are moved into native `<details>` disclosure sections.
  - Mobile title size is reduced and the same priority structure is used so users are not hit by a long wall of product story text.

Style alignment completed:

- Recipes list now uses the same editorial page header, full-width media grid, and minimal product-style cards.
- Recipe detail now uses a large media-first layout and simplified ingredient/step panels.
- Blog list now matches the same editorial header and media grid language.
- Blog detail now uses the same typography, spacing, and olive/ink palette.
- Contact Us now uses the same editorial header, split layout, minimal form fields, pill actions, and map/info blocks.

Verification after this pass:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Local HTTP checks through non-sandbox environment:
  - `/products/cripy-prawn`: 200
  - `/recipes`: 200
  - `/blog/en`: 200
  - `/contact`: 200

Visual QA result:

- Playwright screenshot/geometry QA completed through `/private/tmp/fdg-visual-qa.mjs`.
- Product detail desktop `1440x900`:
  - panel is `1120x776`
  - no panel scroll overflow
  - Shopee/Lazada CTA row is visible in first viewport at `top 496`, `bottom 535`
- Product detail mobile `390x844`:
  - Back to products button is right aligned
  - first CTA is visible in first viewport at `top 749`, `bottom 837`
- Contact desktop `1440x900`:
  - contact grid is centered and constrained to `1080px` width
- Recipe detail desktop `1440x900`:
  - Back to all recipes button is aligned near the content left edge at `left 130`

## Product Detail / Page Width Bugfix Pass - 2026-07-22

Implemented after feedback that the previous iteration was visually worse and still had CSS/layout bugs:

- Product detail overlay:
  - Desktop panel is constrained to `1120px` and can scroll internally if future content grows.
  - Right-side primary information was compressed and reordered so CTA buttons appear in the first viewport.
  - Specs are now compact key facts instead of a tall `dl` table in the primary area.
  - Primary highlights were reduced to the top two; remaining highlights stay folded.
  - Mobile Back to products button is fixed to the right side.
  - Mobile product image area is shorter so the first purchase CTA is visible in the first viewport.
- Product listing:
  - Desktop product grid is now centered at a max `1240px` width instead of full-bleed.
- Contact:
  - Header is smaller and centered.
  - Main contact form/map grid is centered and constrained to `1080px` width.
- Recipes:
  - Detail page Back to all recipes button now follows the content container instead of viewport-based offsetting.
  - List/detail containers are centered with consistent page margins.
- Blog:
  - List container now follows the same centered editorial width as Recipes.

Verification after bugfix pass:

- `pnpm type-check`: passed
- `pnpm build`: passed
- Local HTTP checks through non-sandbox environment:
  - `/products/green-cap`: 200
  - `/contact`: 200
  - `/recipes/mee-goreng`: 200
  - `/blog/en`: 200

## Rename Assessment: FDE-FrontEnd to FDG-FrontEnd

Renaming is not technically hard, but it touches several external references:

- Local folder name can be changed with low risk.
- GitHub repository can be renamed from `FDE-FrontEnd` to `FDG-FrontEnd`; GitHub usually redirects old remote URLs, but local remotes should be updated.
- Vercel project name can be renamed separately from the GitHub repo.
- The package name is already `fdg-front-end`, so npm/package identity does not need major change.

Recommendation: rename only after the current documentation baseline is committed, then update Git remote and Vercel project metadata in one controlled step.

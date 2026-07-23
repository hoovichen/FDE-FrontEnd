# Known Bugs And Technical Risks

Last reviewed: 2026-07-23

## P1

### `pnpm lint` fails

The frontend `package.json` defines `"lint": "eslint ."`, and `ci:verify` starts with `pnpm lint`, but this repo currently does not include `eslint` in dependencies/devDependencies.

Impact: local and CI verification will fail before type-check/build, even though the app currently builds.

Evidence:

- `pnpm lint` result: `sh: eslint: command not found`
- File: `package.json`

Recommended fix:

- Add an ESLint setup compatible with Nuxt 4, or remove lint from `ci:verify` until rules are intentionally introduced.

## P1

### `/blog` and `/faq` are client-side redirects only

`app/pages/blog/index.vue` and `app/pages/faq/index.vue` redirect inside `onMounted`. Server-side requests return a 200 page with an empty body instead of a 301/302.

Impact: weak SEO, poor no-JS behavior, and less clear canonical routing.

Recommended fix:

- Use Nuxt route rules or server middleware redirects:
  - `/blog` -> `/blog/en` or language-detected canonical strategy
  - `/faq` -> `/faq/en` or language-detected canonical strategy

## P1

### SEO canonical and domain strategy are inconsistent

The config default `runtimeConfig.public.siteUrl` uses `https://www.firedragonmy.com`, while `SEO_BASE.siteUrl` uses `https://firedragonmy.com`. Several pages also hardcode `https://www.firedragonmy.com`.

Impact: duplicate canonical signals between root and `www`, inconsistent structured data, and weaker sitemap/canonical consistency.

Recommended fix:

- Choose one canonical host.
- Update `SEO_BASE`, `nuxt.config.ts`, sitemap, robots, route rules, and Vercel domain redirects together.

### Blog API returns an incorrect `to` field

`server/api/blog/[lang]/index.get.ts` returns `to: /blog/${slug}`, but actual detail routes are `/blog/:lang/:slug`.

Impact: current `BlogCard` ignores `post.to`, so visible pages still work. Future consumers of the API may generate broken links.

Recommended fix:

- Return `to: /blog/${lang}/${slug}`.
- Update `BlogListItem` comment to match the actual route contract.

## P2

### Dead or stale blog utility has wrong path

`server/utils/blogContent.ts` references `../asset/content/blog`, but the actual folder is `server/assets/content/blog`.

Impact: this file appears unused today, but if reused it will silently fail to load content.

Recommended fix:

- Delete it if obsolete, or rewrite it to use the same `assets:server` pattern used by the active API routes.

### Contact form lacks rate limiting

`POST /api/contact` validates input and uses a honeypot, but there is no rate limit, captcha, origin check, or abuse logging.

Impact: email endpoint can be abused if discovered.

Recommended fix:

- Add IP/user-agent based rate limiting and basic audit logging.
- Consider Turnstile/hCaptcha only if spam becomes real.

## Resolved On 2026-07-23

### Footer social icons rendered as broken image placeholders

Footer social links used `NuxtImg` for `.ico` assets. During visual QA, several icons appeared as broken image placeholders even though the files existed in `public`.

Resolution:

- `FooterBar` now renders social icons with native `<img>` tags. These small static assets do not need Nuxt image optimization.

### Blog card titles were visually truncated

Blog card titles used a three-line clamp, which cut off long article titles even after cover artwork was changed to render uncropped.

Resolution:

- Blog card titles now display in full.
- Blog summaries remain clamped for scanability.

### FAQ page looked like a search-only development tool

The FAQ page hid the classic FAQ list by default, so users landed on a sparse search interface with no visible question list.

Resolution:

- The classic FAQ list is now visible by default.
- The first FAQ category opens by default.
- Search remains as an assisted interaction.

### Product structured data placeholder URLs

`app/pages/products.vue` and `app/pages/products/[key].vue` now generate internal product URLs from `runtimeConfig.public.siteUrl` instead of emitting `https://example.com`.

Remaining related risk:

- Canonical host strategy is still inconsistent between `www` and apex host and should be resolved separately.

## P3

### Browserslist data is stale

`pnpm build` warns that `caniuse-lite` is 7 months old.

Impact: not a deploy blocker, but browser targeting data may be outdated.

Recommended fix:

- Refresh browsers data in a controlled dependency update.

## P3

### Vercel Analytics and Speed Insights are inserted inconsistently

Several pages render `<Analytics />` and `<SpeedInsights />` directly, while the default layout imports them but does not render them.

Impact: coverage may be inconsistent, and future pages may forget analytics.

Recommended fix:

- Render analytics once at app/layout level unless there is a reason to limit it.

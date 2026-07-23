# Homepage And Product UI Redesign QA

final result: passed for current scope

Date: 2026-07-23

## Scope

Homepage redesign and product UI implementation against the design department references:

- Announcement bar
- Minimal header/navigation
- Full-bleed product hero
- Featured product grid
- Quote + shopping CTA
- Recipes split section
- Blog split section
- Motion bar
- Stockists footer CTA
- Catalog product wall
- Product detail overlay/page concept
- Mobile one-product horizontal snap browsing for homepage and catalog product sections
- Spreadsheet-derived product details/specs in the product detail page
- Product detail priority structure with compact desktop first view and folded secondary specs
- Recipes, Blog, and Contact visual alignment
- Stockists list and detail visual alignment
- Global floating WhatsApp pre-chat and Back to top dock
- Product category fixed-height card stabilization before GitHub upload
- Terms & Conditions and Privacy Policy editorial/legal page pass

## Verification Completed

- `pnpm type-check`: passed
- `pnpm build`: passed
- Local dev server: started on `http://127.0.0.1:3002/`
- HTTP route checks:
  - `/`: 200
  - `/products`: 200
  - `/products/green-cap`: 200
  - `/products/cripy-anchovy`: 200
  - `/products/cripy-prawn`: 200
  - `/recipes`: 200
  - `/blog/en`: 200
  - `/contact`: 200
  - `/stockists`: 200
  - `/stockists/pasar-mini-choong-keet-300-0002`: 200
  - `/blog/en`: 200
  - `/terms`: browser QA route
  - `/privacy-policy`: browser QA route

## Visual QA Status

Screenshot-level browser QA was completed for the latest product/contact/recipe/stockists/floating-contact correction pass.

Setup note:

- The in-app browser MCP was not exposed to this thread.
- The bundled Playwright package required its matching Chromium revision.
- Chromium build `v1200` was installed through the bundled Playwright CLI.
- The Node REPL could not launch Chromium because of macOS sandbox restrictions, so QA was run from `/private/tmp/fdg-visual-qa.mjs` through an approved local Node process.

Screenshots generated:

- `/private/tmp/fdg-product-desktop.png`
- `/private/tmp/fdg-product-mobile.png`
- `/private/tmp/fdg-contact-desktop.png`
- `/private/tmp/fdg-recipe-detail-desktop.png`
- `/private/tmp/fdg-stockists-desktop.png`
- `/private/tmp/fdg-stockists-mobile.png`
- `/private/tmp/fdg-stockist-detail-desktop.png`
- `/private/tmp/fdg-stockist-detail-mobile.png`
- `/private/tmp/fdg-floating-contact-desktop-collapsed.png`
- `/private/tmp/fdg-floating-contact-desktop-open.png`
- `/private/tmp/fdg-floating-contact-mobile-open.png`
- `/private/tmp/fdg-final-products-bm-desktop.png`
- `/private/tmp/fdg-final-terms-desktop.png`
- `/private/tmp/fdg-final-privacy-mobile.png`

Measured results:

- Product detail desktop `1440x900`:
  - panel: `1120x776`, no internal scroll overflow
  - CTA row: `top 496`, `bottom 535`, visible in first viewport
- Product detail mobile `390x844`:
  - Back to products button: right aligned, `left 250`, `right 378`
  - CTA row: `top 749`, `bottom 837`, first CTA visible in first viewport
- Contact desktop `1440x900`:
  - contact grid centered at `left 180`, width `1080`
- Recipe detail desktop `1440x900`:
  - Back to all recipes button aligned near content left edge at `left 130`
- Stockists list desktop `1440x900`:
  - container width `1180`, layout width `1180`, no horizontal overflow
  - filter panel `287px` wide, store groups `845px` wide
- Stockists list mobile `390x844`:
  - container width `362`, no horizontal overflow
  - first stockist card width `362`
- Stockist detail desktop `1440x900`:
  - container width `1180`, grid width `1180`, no horizontal overflow
  - action block `top 696`, `bottom 854`, visible in first viewport
- Stockist detail mobile `390x844`:
  - container width `362`, no horizontal overflow
  - map width `360`, info width `360`
- Floating contact desktop `1440x900`:
  - chat panel width `356`, right edge `1424`, inside viewport
  - Back to top and WhatsApp buttons `44x44`
- Floating contact mobile `390x844`:
  - body scroll width `390`, equal to viewport width
  - chat panel width `366`, left `12`, right `378`
  - Back to top and WhatsApp buttons `40x40`
- Product category desktop final-prep QA `1440x900`:
  - body scroll width `1440`, equal to viewport width
  - first 8 product cards measured at `686px` high
  - image slot measured at `490px` high for the first 8 product cards
  - text body measured at `196px` high for the first 8 product cards
  - title rows measured at `46px`, summary rows at `52px`
  - first tall bottle image rendered inside the image slot at `420px` high, no bleed into product text
- Terms desktop final-prep QA `1440x900`:
  - body scroll width `1440`, equal to viewport width
  - heading rendered as `Terms & Conditions`
  - 7 legal sections rendered
- Privacy Policy mobile final-prep QA `390x844`:
  - body scroll width `390`, equal to viewport width
  - heading rendered as `Privacy Policy`
  - 7 legal sections rendered

## Manual QA Still Recommended

Open the local preview and inspect:

- Desktop 1440px:
  - Announcement bar height/color/text weight.
  - Header alignment and language dropdown.
  - Hero image crop, overlay, heading/text readability.
  - Featured product grid proportions.
  - Quote section spacing and CTA links.
  - Recipes/blog split sections.
  - Motion bar animation speed.
  - Footer CTA and bottom legal/social layout.

- Mobile 390px:
  - Header menu behavior.
  - Hero text does not overlap products.
  - Homepage product tiles use one-product horizontal snap browsing.
  - Catalog product tiles use one-product horizontal snap browsing.
  - Catalog product image/name spacing is tight enough for fast recognition.
  - Long product copy such as Crispy Anchovy Chilli does not make the white title area jump upward.
  - Product detail page stacks image then information without oversized blank gaps.
  - Product detail Back to products button floats without consuming image width.
  - Product detail desktop first view shows product image, short summary, key facts, highlights, and CTAs without forcing a scroll for the CTA.
  - Recipes, Blog, and Contact no longer use the old red/card/shadow visual language.
  - Stockists list/detail no longer use the old card/shadow visual language.
  - Stockists detail desktop shows map, address/contact, and both actions without CTA clipping.
  - Floating WhatsApp panel does not introduce horizontal overflow and uses the olive/ink CTA language.
  - Product category cards remain visually stable after switching to Chinese or Bahasa Malaysia copy.
  - Terms & Conditions and Privacy Policy copy should be reviewed by a qualified legal professional before relying on it.
  - Split sections stack with image/copy order acceptable.
  - Footer bottom items do not overlap.

## P2 Follow-up

Repeat screenshot QA after the next visual design pass or after changing shared layout/header/footer CSS.

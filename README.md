# SaaS Affiliate SEO Site (Next.js starter)

## Install

```bash
npm i
npm run dev
```

## Notes

- Update the base URL in:
  - `app/layout.tsx`
  - `app/sitemap.ts`
  - `app/robots.ts`
  - `lib/schema.ts`

- Content lives in `/content/*.mdx`.
  - Files starting with `_` are ignored (ex: `content/_template.mdx`).

- Hubs:
  - `/online-business`
  - `/seo`
  - `/ai-tools`

- RSS:
  - `/rss.xml`

- Analytics (opt-in via banner):
  - Default: GA4 via `GA4_ID` in `lib/site.ts`
  - Optional override: `NEXT_PUBLIC_GA4_ID`
  - Disable: `NEXT_PUBLIC_ANALYTICS_PROVIDER=none`
  - Optional providers: set `NEXT_PUBLIC_ANALYTICS_PROVIDER` to `plausible` or `umami`
    - Plausible: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, `NEXT_PUBLIC_PLAUSIBLE_SRC`
    - Umami: `NEXT_PUBLIC_UMAMI_WEBSITE_ID`, `NEXT_PUBLIC_UMAMI_SRC`, `NEXT_PUBLIC_UMAMI_DOMAINS`
    - If you self-host scripts, update CSP in `next.config.mjs`
  - CTA goals: links marked with `data-analytics-event="cta_click"` send events after consent.

## Static deploy like your current HTML sites

If you want a static export (no Node server):

1) In `next.config.mjs`, uncomment:

```js
output: 'export',
trailingSlash: true,
```

2) Build:

```bash
npm run build
```

Then deploy the `out/` folder.
deploy trigger

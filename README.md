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

# Blue Waters Cottages (Next.js)

Modern marketing site rebuild for Blue Waters Executive Cottages.

## Tech
- Next.js App Router + TypeScript
- Static-first rendering
- Client interactivity for sticky header, gallery lightbox, and contact form UX

## Run locally

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Build & quality

```bash
bun run lint
bun run build
```

## Implemented site sections
- Hero with trust badges and primary CTA
- Why stay here highlights
- Cottage details
- Rates & season table
- Interactive gallery with lightbox
- Location/area guide with map link
- FAQ
- Contact block with email/phone + inquiry form

## SEO and platform details
- Homepage metadata (title/description/open graph)
- `LodgingBusiness` + `FAQPage` JSON-LD
- `sitemap.xml` and `robots.txt`
- Redirect from `/home` to `/`

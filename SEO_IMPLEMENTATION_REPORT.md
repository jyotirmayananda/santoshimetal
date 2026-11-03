# Santoshi Metal Industries — SEO Implementation Report

**Prepared:** 3 November 2026  
**Site:** https://santoshimetal.com/  
**Source specification:** `Santoshi_Metal_SEO_Report_FIXED.pdf` (uploaded)  
**Companion prompt MD:** not found in repo; PDF appendix requirements used as the implementation checklist.

---

## 1. Executive summary

Implemented the technical and on-page SEO requirements from the Santoshi Metal SEO report **without changing visual design, animations, layout structure, or form functionality**.

Focus areas completed in-repo:

- Report-aligned page/service titles and meta descriptions
- Canonical URLs, robots, sitemap discovery
- Conservative JSON-LD (no invented hours, prices, ratings, phone, or geo)
- Visible breadcrumbs + related-capability internal links
- Visible FAQ block matched to FAQPage schema (verified facts only)
- Optional GA4 hook via env (no fabricated measurement ID)
- 301 redirects for legacy/alternate capability slugs
- Typecheck + production build verification

**Not claimed without evidence:** rankings, Search Console indexing status, Core Web Vitals field data, PageSpeed scores, or unverified production capacity/certifications.

---

## 2. Audit baseline (repository)

| Check | Status | Notes |
| --- | --- | --- |
| Public routes exist | Pass | `/`, `/about`, `/contact`, `/capabilities`, 5 capability pages, `/industries`, `/gallery` |
| Canonical host | Pass | `metadataBase` + per-page `alternates.canonical` → `https://santoshimetal.com` |
| robots.txt | Pass | Allows site; disallows `/api/`; does **not** block `/_next/` |
| sitemap.xml | Pass | Generated from `src/app/sitemap.ts` |
| Image sitemap | Pass | `public/sitemap-images.xml` referenced in robots |
| 404 | Pass | `src/app/not-found.tsx` with `noindex` |
| Legacy redirects | Pass | `/capabilities/aluminium-supply` → scrap; `/capabilities/aluminium-profiles` → profile |
| Design/animations | Preserved | Hero brand H1 retained; SEO phrase added in supporting copy |
| Invented NAP extras | Removed | Opening hours, priceRange, approximate geo removed from schema |

Live GSC/GA4/crawl evidence remains **pending** (requires property access after deploy).

---

## 3. Business facts used (verified in codebase)

From `src/data/company.ts` only:

- Legal name: SANTOSHI METAL INDUSTRIES PRIVATE LIMITED
- CIN: U24202OD2026PTC055660
- Registered office: Kabisuryanagar, Kodala, Ganjam, Odisha – 761104
- Directors: Sri Kumuda Chandra Sahu; Bikrant Kumar Sahu
- Core offerings listed on site: Ingot, Profile, Scrap & Supply, Powder Coating, Anodising

**Intentionally not added:** phone, email NAP fields, operating hours, certifications, ratings, capacity claims.

---

## 4. URL strategy

Kept existing working URLs (equity preservation):

| URL | Role |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/contact` | Quote / contact |
| `/capabilities` | Capability hub |
| `/capabilities/aluminium-ingots` | Ingots |
| `/capabilities/aluminium-profile` | Profiles (singular slug retained) |
| `/capabilities/aluminium-scrap-supply` | Scrap & supply |
| `/capabilities/powder-coating` | Powder coating |
| `/capabilities/anodising` | Anodising |
| `/industries` | Industries |
| `/gallery` | Gallery |

`/resources` **not** created (report: only if substantive articles are ready).

---

## 5. Metadata implemented (report-aligned)

| Page | Title (absolute) |
| --- | --- |
| Home | Santoshi Metal Industries \| Aluminium Supplier in Odisha |
| Ingots | Aluminium Ingot Supplier in Odisha \| Santoshi Metal |
| Profiles | Aluminium Profiles and Supply \| Santoshi Metal |
| Scrap | Aluminium Scrap Supplier in Odisha \| Santoshi Metal |
| Powder coating | Aluminium Powder Coating Services \| Santoshi Metal |
| Anodising | Aluminium Anodising Services \| Santoshi Metal |
| About | About Santoshi Metal Industries \| Odisha |
| Contact | Contact Santoshi Metal Industries \| Request a Quote |

Descriptions follow the report’s softer enquiry-oriented wording (avoid over-claiming unverified plant specs in meta).

Source of truth: `src/data/seo-pages.ts`.

---

## 6. On-page / internal linking

- Visible **Breadcrumbs** on about, contact, industries, gallery, capabilities hub, and all capability detail pages
- **Related Capabilities** internal links on each capability page
- Homepage supporting line updated to mention Odisha aluminium products/solutions (brand hero H1 unchanged to preserve design)
- Visible **FAQ** section on homepage matching FAQ JSON-LD

---

## 7. Structured data

| Type | Where | Notes |
| --- | --- | --- |
| Organization | Root layout | Legal name, CIN, address, directors, logo URL |
| LocalBusiness | Root layout | Address only — no invented hours/phone/geo/price |
| WebSite | Root layout | Canonical site entity |
| SiteNavigationElement ItemList | Root layout | Primary nav + capability children |
| OfferCatalog | Home + capabilities | Lists five services |
| Service | Each capability page | Name, description, URL, provider |
| BreadcrumbList | Nested pages | Matches visible breadcrumbs |
| FAQPage | Home only | Answers limited to verified facts; visible FAQ present |
| ContactPage | Contact | Points at Organization address |

Removed previously added **ManufacturingBusiness**, **openingHours**, **priceRange**, and **approximate geo** to comply with “do not invent” guidance.

---

## 8. Technical SEO acceptance

- Public pages intended to be indexable + self-canonical
- API routes disallowed in robots
- CSS/JS/`_next` **not** blocked
- Real 404 page with `noindex`
- OG/Twitter: dynamic `opengraph-image.tsx` / `twitter-image.tsx` plus per-page images
- Optional GA4: `Analytics` component + `.env.example` (`NEXT_PUBLIC_GA_MEASUREMENT_ID`)

---

## 9. Image / media / a11y (in-repo)

- Next/Image AVIF/WebP formats enabled
- Descriptive alts present on informational images
- LCP-oriented `priority` on key heroes/logos
- `prefers-reduced-motion` rules in `globals.css`
- Skip-to-content link in layout

**Still pending externally:** full image weight audit, PSI/Lighthouse lab capture, field CWV.

---

## 10. Measurement (handoff)

After deploy:

1. Create Google Search Console domain property for `santoshimetal.com`
2. Submit `https://santoshimetal.com/sitemap.xml` (and image sitemap if desired)
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` and redeploy
4. Track `generate_lead` on successful enquiry submission (form API already exists; event wiring can be added when GA ID is live)
5. Monthly dashboard: non-branded queries, landing pages, CTR, qualified leads

---

## 11. Files changed (this pass)

Key files:

- `src/data/seo-pages.ts`
- `src/lib/seo.ts`, `src/lib/service-seo.ts`
- `src/components/seo/*` (Breadcrumbs, RelatedCapabilities, HomeFaq, Analytics, JsonLd)
- `src/app/page.tsx`, layout, robots, capability/about/contact/industries/gallery pages
- `next.config.mjs` (profiles redirect)
- `.env.example`
- `SEO_IMPLEMENTATION_REPORT.md` (this file)

---

## 12. Tests run

| Command | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npm run lint` | Pass (no ESLint warnings or errors) |
| `npm run build` | Pass — 22 static routes generated; capability pages, sitemap, robots, OG image OK |

---

## 13. Unresolved / needs company approval

- Confirm whether powder coating / anodising / remelt are strictly in-house before stronger process claims
- Provide verified phone/email for NAP + schema `telephone`/`email`
- Confirm operating hours before re-adding `openingHoursSpecification`
- Confirm exact facility coordinates before geo markup
- Approve `/resources` content before creating blog URLs
- Attach companion Markdown prompt file next time if it differs from the PDF checklist

---

## 14. Design preservation statement

No redesign of hero composition, color system, animation libraries, 3D canvases, or enquiry form UX. SEO additions are metadata, schema, breadcrumbs, related links, FAQ block, and analytics hook only.

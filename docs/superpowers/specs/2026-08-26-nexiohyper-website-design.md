# NexioHyper Marketing Website — Design Spec

Date: 2026-08-26

## 1. Purpose

Build a public marketing website for NexioHyper, an IT solutions company
based in Bhubaneswar, Odisha, India. The site must be SEO-friendly out of
the box so the business becomes discoverable in Google search shortly
after launch, and must support Google Analytics for traffic measurement.

## 2. Company Facts (source of truth for content)

- **Name:** NexioHyper
- **Tagline:** "Empowering Tomorrow…."
- **Phone:** +91 93489 74524
- **Address:** 1st Floor, New Annex Building, Arch Bishop's House,
  Satyanagar, Bhubaneswar – 751007
- **Email:** nexiohyper@gmail.com, connect@nexiohyper.com
- **LinkedIn:** https://www.linkedin.com/company/nexiohyper
- **Services:** Custom Software Development; IT Consulting & Staffing;
  Cloud & DevOps; Data, AI & Analytics
- **Market focus:** Local (Bhubaneswar/Odisha) + national (India) +
  global (English-speaking IT outsourcing market)
- **Brand assets:** `icons/favicon.png` (square mark), `icons/nh_flat_logo.png`,
  `icons/nh_logo_gradient.png`, `icons/serveeasy full.jpeg`,
  `icons/serveeasy wideslim.jpeg` (all confirmed NexioHyper wordmark
  variants — navy `#0B2A4A`-ish to teal `#14B8A6`-ish gradient)

## 3. Tech Stack

- **Next.js 15**, App Router, TypeScript
- **Tailwind CSS** for styling
- Hosted on **Vercel** (production target; repo already has `origin`
  pointing at the GitHub repo)
- **Vercel Analytics** (`@vercel/analytics`) — zero-config bonus metric
- **Google Analytics 4** via a small `gtag` component, Measurement ID
  read from `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var (placeholder value
  until the user creates the real GA4 property)
- **Web3Forms** for contact form submission (no backend/CMS required;
  access key stored in `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` env var,
  placeholder until user obtains a real key)

No CMS. No blog (deferred — see Non-Goals). No case studies, team bios,
or client logos (none exist yet — omitted rather than fabricated).

## 4. Site Map

- `/` — Home
- `/about` — Company story, mission, positioning
- `/services` — Overview, links to the four service pages
- `/services/software-development`
- `/services/it-consulting-staffing`
- `/services/cloud-devops`
- `/services/data-ai-analytics`
- `/industries` — Sectors served (single page, not subpages)
- `/contact` — Phone, email, address, map embed, contact form

## 5. Page Content Outline

**Home:** Hero (tagline + CTA), trust/positioning strip, 4 service
pillar cards linking to service pages, industries teaser linking to
`/industries`, "why NexioHyper" (local + global capability), final CTA
banner linking to `/contact`.

**About:** Mission/vision, "Empowering Tomorrow" narrative, what
NexioHyper does and for whom, local-roots-with-global-reach framing.

**Services (overview):** Short intro + 4 cards linking to detail pages.

**Each service detail page:** What the service covers, who it's for,
benefits, relevant keywords worked into natural copy, CTA to contact.

**Industries:** Short descriptive blurbs for target sectors (e.g.
IT/software, healthcare, education, manufacturing, startups/SMEs, public
sector) framed as "who we help," not fabricated case studies.

**Contact:** NAP block (name/address/phone), both emails, LinkedIn
link, Web3Forms-powered contact form, embedded Google Map (static embed,
no API key required — using the public Maps embed iframe).

## 6. On-Page SEO Requirements (every page)

- Unique `<title>` and meta description via the Next.js Metadata API,
  written per-page around a primary keyword cluster
- Canonical URL tag per page
- Open Graph + Twitter Card tags (gradient logo as share image)
- JSON-LD structured data:
  - `Organization` + `LocalBusiness` on the root layout (NAP data)
  - `WebSite` with `SearchAction` omitted (no on-site search)
  - `BreadcrumbList` on nested pages (`/services/*`)
  - `Service` schema on each service detail page
- Exactly one `<h1>` per page; logical heading hierarchy below it
- Descriptive `alt` text on every image
- `app/sitemap.ts` and `app/robots.ts` generating `sitemap.xml` /
  `robots.txt` automatically from the site's route list
- Mobile-responsive layout (Tailwind responsive utilities)
- Performance: `next/image` for all images, `next/font` for webfonts,
  no layout-shifting assets

## 7. Keyword Strategy

Each page targets one primary + several secondary keywords, mixing
local, national, and global intent. Examples (not exhaustive — final
copy will work these in naturally):

- Local: "IT company in Bhubaneswar", "best software company
  Bhubaneswar", "Bhubaneswar IT solutions", "software company Odisha"
- National: "software development company India", "IT consulting
  company India", "cloud services India"
- Global: "IT outsourcing partner", "offshore software development
  team", "custom software development services"
- Service-specific: e.g. "cloud migration services", "DevOps
  consulting", "data engineering and AI solutions", "IT staff
  augmentation"

## 8. Analytics & Search Console Readiness

- GA4 script loads on every page via a client component in the root
  layout, gated behind the env var so it can be swapped in without a
  code change.
- Vercel Analytics added alongside GA4 (both can coexist).
- Metadata/sitemap structured so Google Search Console verification
  (via HTML tag or DNS, once a real domain exists) and sitemap
  submission are a post-deploy checklist item, not a code change.

## 9. Non-Goals (explicitly out of scope for this pass)

- Blog / CMS (deferred until there's a content owner)
- Case studies, testimonials, team bios, client logos (no real content
  exists yet — will be added later, not fabricated)
- Multi-language / i18n
- User accounts, dashboards, or any authenticated functionality
- Careers page

## 10. Post-Launch Checklist (for the user, not part of the build)

1. Create a GA4 property, replace `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. Get a Web3Forms access key, replace
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
3. Point production domain at Vercel, update canonical/OG base URL
4. Verify site in Google Search Console, submit sitemap

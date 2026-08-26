# NexioHyper Website

Marketing website for NexioHyper, built with Next.js (App Router),
TypeScript, and Tailwind CSS. Deployed on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

## Environment variables

| Variable | Purpose | Placeholder until |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL used in metadata, sitemap, JSON-LD | production domain is live |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXX`) | a GA4 property is created |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key powering the contact form | a Web3Forms account is created |

## Testing

```bash
npm test        # Vitest unit tests for src/lib
npm run lint    # ESLint
npm run build   # full production build
```

## Post-launch checklist

1. Create a GA4 property and set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel's
   environment variables.
2. Create a Web3Forms account (web3forms.com), get an access key, and set
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel.
3. Point the production domain at Vercel and set `NEXT_PUBLIC_SITE_URL` to
   match.
4. Verify the site in Google Search Console and submit `/sitemap.xml`.

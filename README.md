# Oldbury MOT Centre

Brochure website for Oldbury MOT Centre — an independent MOT test centre and full garage on Popes Lane, Oldbury, offering Class 4, 5 & 7 MOTs, servicing, repairs, welding, wheel alignment and accident repairs, with German car specialists.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — Page routes (Home, About, MOT Testing, Servicing & Repairs, Accident Repairs, Gallery, Reviews, FAQs, Contact)
- `src/components/` — Reusable UI components
- `src/lib/site.ts` — **Central config** for contact details, navigation, copy, and metadata
- `public/images/` — Logo and static assets

## Updating contact details

Edit `src/lib/site.ts` to update:

- Phone number and email
- Opening hours
- Address
- Site URL (for SEO/sitemap)

## Deploy to GitHub Pages

The site deploys automatically to GitHub Pages on every push to `main`.

**Live site:** [https://haza1410.github.io/oldbury-mot-centre/](https://haza1410.github.io/oldbury-mot-centre/)

The GitHub Actions workflow builds a static export and publishes it. To build locally for GitHub Pages:

```bash
npm run export
```

## Deploy to Vercel

1. Push the project to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Deploy — no environment variables required

Or use the Vercel CLI:

```bash
npx vercel
```

## Before going live

- [ ] Confirm phone number, email, and opening hours in `src/lib/site.ts`
- [ ] Confirm the exact geo coordinates for the JSON-LD in `src/components/LocalBusinessSchema.tsx`
- [ ] Update `siteConfig.url` to the real domain
- [ ] Replace stock imagery with real photos of the garage and team
- [ ] Review placeholder reviews with real customer quotes
- [ ] Add social media links if applicable

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons

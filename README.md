# Diligia Landing

Next.js marketing site for Diligia — Australia's Transaction Management Platform for commercial property.

## Setup

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL used for Formspree redirect after form submit |

For local development, use `http://localhost:3000`. For production, set to `https://diligia.com.au`.

## Forms

Contact and design partner forms submit to Formspree (`xjgjapja`) via native HTML POST — same endpoint and field names as the original static site. Submissions appear in the existing Formspree dashboard.

## Content

Page copy lives in `src/config/content/`. Site-wide settings (company info, nav links, Formspree URL) are in `src/config/site.ts`.

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint

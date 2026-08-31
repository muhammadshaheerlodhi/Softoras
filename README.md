# Softoras Website

Public marketing site for Softoras: SaaS, CRM, AI, and Softoras ERP.

- Theme: white + sky blue
- Case studies: `/case-studies` cards with visuals → `/case-studies/[slug]`
- Nav item **Softoras ERP** opens the live product: https://softoras-erp.vercel.app
- Optional shared Supabase with Softoras ERP (keep marketing tables separate, use RLS)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` if you want Supabase or SMTP. The site runs without them.

## Zip for GitHub

Do **not** zip `node_modules` or `.next`.

# ok.proof

Marketing site for [ok.proof](https://www.okproof.co) — a hiring test platform where candidates work with AI on real tasks.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Backend:** Convex (waitlist)
- **Hosting:** Vercel
- **Fonts:** ABC Gaisyr, Labil Grotesk, Stabil Grotesk

## Getting started

```bash
pnpm install
npx convex dev     # starts Convex backend (creates .env.local)
pnpm dev           # starts Next.js on localhost:3000
```

## Deployment

Pushes to `main` auto-deploy to Vercel. Convex functions deploy separately via `npx convex deploy`.

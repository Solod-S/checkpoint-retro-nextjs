# Checkpoint Retro

AI-ready starter repository for **Checkpoint Retro**.

## Stack
- Next.js App Router
- React
- TypeScript strict
- PostgreSQL
- Prisma
- npm
- custom admin architecture
- RU / UK / EN
- SEO-first public pages
- Vitest + Playwright

## Local runtime
The project runs directly on the host OS:

```text
Next.js / Node.js
       ↓
PostgreSQL localhost
```

## Production target

```text
Internet / Cloudflare (optional)
        ↓
      Nginx
        ↓
Next.js / Node.js under PM2
        ↓
   PostgreSQL
```

## Start here
Read in this order:
1. `START_HERE.md`
2. `docs/GETTING_STARTED.md`
3. `AGENTS.md`
4. `START_PROMPT.md`
5. `docs/ai/WORKFLOW.md`

## Important
- `.env.local` is private and ignored by Git.
- AI agents may read `.env.example`, but must not read `.env.local`.
- Production social networks: X/Twitter, Facebook, Threads, Instagram.
- Do not add VK or YouTube to production UI/assets.
- Build the product phase-by-phase; do not ask an agent to implement the entire portal in one task.

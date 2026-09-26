# Getting Started — step by step

## 0. Prerequisites
Install:
- Git
- Node.js 22+
- npm
- PostgreSQL 16+

Check:

```bash
git --version
node --version
npm --version
psql --version
```

## 1. Create the Git repository
From the project root:

```bash
git init
git add .
git commit -m "chore: initialize Checkpoint Retro"
```

Do this before allowing an AI agent to modify the project.

## 2. Start PostgreSQL locally

### macOS / Homebrew
Example pinned formula:

```bash
brew install postgresql@17
brew services start postgresql@17
```

If the formula name differs on your machine:

```bash
brew search postgresql@
```

Verify:

```bash
pg_isready
```

## 3. Create application DB user

```bash
createuser -P checkpoint_retro
```

Choose a local password when prompted.

Create the database:

```bash
createdb -O checkpoint_retro checkpoint_retro
```

Check connection:

```bash
psql -h 127.0.0.1 -U checkpoint_retro -d checkpoint_retro
```

Exit psql with:

```text
\q
```

## 4. Create local environment file

```bash
cp .env.example .env.local
```

Open `.env.local` manually and replace:

```text
CHANGE_ME_LOCAL_DB_PASSWORD
CHANGE_ME_LOCAL_AUTH_SECRET
```

Generate auth secret:

```bash
openssl rand -base64 32
```

Do not ask an AI coding agent to print or inspect `.env.local`.

## 5. Install dependencies

```bash
npm install
```

Then:

```bash
npm run db:generate
npm run lint
npm run typecheck
npm test
```

## 6. First AI-agent run: audit only
Open the repository in Codex / Claude Code / OpenCode / Cline / Cursor.

Give the agent the contents/instruction from:

```text
START_PROMPT.md
```

The first agent run should analyze the starter and return a plan. It should not implement the entire website.

## 7. Approve Phase 1: design foundation
After the audit, implement only:
- design tokens;
- typography;
- responsive grid/container;
- RetroFrame;
- CornerBrackets;
- RetroButton;
- SectionHeading;
- PlatformBadge;
- ArticleMeta;
- ContentCard;
- Header;
- Footer.

Use fixtures/mock data. Do not connect public UI to the database yet.

Run:

```bash
npm run check
npm run build
```

Commit:

```bash
git add .
git commit -m "feat: implement design foundation"
```

## 8. Implement public pages one at a time
Recommended order:
1. Homepage
2. News listing
3. Articles & Stories listing
4. Article page
5. Search UI
6. About

References are in:

```text
design/reference/
```

After each page:

```bash
npm run check
npm run build
git status
git diff
```

Then commit.

## 9. Review database model before migration
Read:

```text
docs/DATABASE.md
prisma/schema.prisma
```

Only after review create the initial migration:

```bash
npm run db:migrate -- --name init
```

Seed:

```bash
npm run db:seed
```

Open Prisma Studio:

```bash
npm run db:studio
```

## 10. Replace fixtures with repositories
Add a repository/service layer and replace mock content gradually.

Do not call Prisma directly from presentational UI components.

## 11. Build admin in phases
Recommended order:
1. authentication + authorization;
2. admin shell/dashboard;
3. posts CRUD;
4. translations;
5. categories/tags/platforms/eras;
6. authors;
7. media library;
8. TipTap editor;
9. homepage placements;
10. SEO/redirects/settings/social links.

## 12. Search
Start with PostgreSQL full-text search + `pg_trgm` behind `SearchProvider`.

Do not introduce a separate search service for MVP unless measurements justify it.

## 13. SEO
Before release complete:
- metadata;
- canonical;
- hreflang;
- OpenGraph;
- Article/NewsArticle structured data;
- Breadcrumb structured data;
- sitemap;
- robots;
- RSS;
- redirects on published slug changes.

## 14. Final local hardening

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Perform desktop/tablet/mobile visual QA against references.

## 15. VPS deployment
Follow:

```text
docs/DEPLOYMENT.md
```

Production components:
- Ubuntu VPS;
- PostgreSQL;
- Node.js;
- npm;
- PM2;
- Nginx;
- TLS/Cloudflare as appropriate.

Use `ecosystem.config.cjs` and `deploy/nginx/checkpoint-retro.conf.example` as starting points.

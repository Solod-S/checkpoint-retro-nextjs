# AI Development Workflow

## Phase 0 — Repository foundation
Deliverables:
- package manager;
- Next.js app;
- TS strict;
- lint;
- env example;
- Docker PostgreSQL;
- base folders.

DoD:
- install succeeds;
- dev server starts;
- lint/typecheck pass.

## Phase 1 — Design system
Deliverables:
- tokens;
- fonts strategy;
- primitives;
- header/footer;
- responsive container;
- base panels/cards/buttons.

DoD:
- desktop/tablet/mobile shell;
- no arbitrary visual constants;
- visual QA.

## Phase 2 — Public route shells
Routes:
- home;
- news;
- articles;
- article;
- search;
- about.

DoD:
- compositions match references using fixtures;
- responsive behavior done;
- metadata placeholders present.

## Phase 3 — Database
Deliverables:
- Prisma schema;
- migrations;
- seed;
- repositories.

DoD:
- DB setup documented;
- seed works;
- no UI coupled to raw Prisma.

## Phase 4 — Auth + Admin foundation
Deliverables:
- protected admin;
- roles;
- admin shell;
- audit foundation.

DoD:
- unauthorized access blocked server-side;
- role checks tested.

## Phase 5 — Editorial CMS
Deliverables:
- posts;
- translations;
- TipTap;
- taxonomies;
- media;
- publish workflow;
- homepage placements.

DoD:
- create/publish material from UI;
- public page renders DB content.

## Phase 6 — Search
Deliverables:
- SearchProvider;
- PostgreSQL implementation;
- filters;
- pagination.

## Phase 7 — SEO
Deliverables:
- canonical;
- hreflang;
- OG;
- JSON-LD;
- sitemaps;
- robots;
- RSS;
- redirects.

## Phase 8 — Hardening
- security;
- accessibility;
- performance;
- tests;
- visual regressions.

## Phase 9 — Production
- staging;
- DB backup;
- storage;
- deploy;
- monitoring;
- rollback notes.

## Working rule
Один agent task = один ограниченный scope. Не просить AI «сделай весь портал».

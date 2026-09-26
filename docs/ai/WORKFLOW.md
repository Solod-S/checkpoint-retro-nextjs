# AI Development Workflow

## Phase 0 — Repository + local environment audit
Deliverables:
- inspect starter and documentation;
- verify Node/npm versions;
- verify PostgreSQL service availability;
- copy `.env.example` to `.env.local` manually by human;
- install dependencies;
- Prisma client generation;
- baseline lint/typecheck/tests.

DoD:
- install succeeds;
- PostgreSQL responds to `pg_isready`;
- dev server starts;
- lint/typecheck pass;
- agent has not read `.env.local`.

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
- compositions match references using typed fixtures;
- responsive behavior done;
- metadata placeholders present.

## Phase 3 — Database
Deliverables:
- review/finalize Prisma schema;
- initial migration;
- seed;
- repository/query layer;
- PostgreSQL extensions required by search documented as migrations.

DoD:
- DB setup documented;
- migration applies on a clean local PostgreSQL database;
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
- PostgreSQL full-text implementation;
- `pg_trgm` where useful;
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

## Phase 9 — VPS production
- provision Ubuntu server;
- PostgreSQL service;
- Node/npm;
- PM2;
- Nginx;
- staging/production env outside Git;
- DB backup;
- production migration;
- deploy;
- monitoring;
- rollback notes.

## Working rule
Один agent task = один ограниченный scope. Не просить AI «сделай весь портал».

Каждая завершенная фаза должна заканчиваться отдельным Git commit после успешных проверок.

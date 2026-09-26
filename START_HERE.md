# START HERE

## Цель
Построить SEO-ориентированный мультиязычный медиа-портал о ретро-играх и игровой культуре на Next.js с собственной админкой и PostgreSQL.

Визуальный язык уже задан макетами. Задача агента — реализовать систему, а не переосмысливать дизайн.

## Базовый стек
- Next.js, App Router
- React
- TypeScript strict
- PostgreSQL, установленный локально / как системный сервис на VPS
- Prisma ORM
- server-first rendering
- CSS design tokens + scoped/component styles
- TipTap для rich text в админке
- Zod для validation
- Vitest для unit/integration
- Playwright для e2e/visual
- npm

## Локальная инфраструктура
Нужны только:
- Node.js 22+;
- npm;
- PostgreSQL 16+;
- Git.

Подробная установка: `docs/LOCAL_DEVELOPMENT.md`.

## Production infrastructure
Целевая схема:

```text
Internet / Cloudflare (optional)
        ↓
      Nginx
        ↓
Next.js / Node.js :3000
        ↓
   PostgreSQL
```

Процесс Next.js управляется PM2. TLS — через Nginx/Certbot или внешний proxy/CDN.

## Локали
- `ru`
- `uk`
- `en`

Все публичные сущности должны поддерживать отдельные локализованные title, slug, excerpt, content и SEO metadata.

## Публичные разделы
- Главная
- Новости
- Статьи и истории
- Поиск
- Про проект
- Страница новости
- Страница статьи / истории
- Таксономии: платформа, категория, тег, эпоха, автор

## Админка
Минимально:
- dashboard;
- материалы;
- переводы;
- категории / теги / платформы / эпохи;
- авторы;
- медиа;
- управление главной;
- SEO;
- redirects;
- пользователи и роли;
- navigation;
- settings;
- social links.

## Социальные сети
Production set:
- X / Twitter;
- Facebook;
- Threads;
- Instagram.

VK и YouTube не использовать в production UI, footer, share-блоках и новых assets.

## Источник истины
Приоритет:
1. `AGENTS.md`;
2. `docs/ARCHITECTURE.md`;
3. `docs/design/DESIGN_SYSTEM.md`;
4. спецификация конкретной страницы в `docs/pages`;
5. reference PNG;
6. текущий код.

## Порядок разработки
1. repository audit;
2. local PostgreSQL + env configuration;
3. design tokens;
4. primitives;
5. public shell;
6. responsive public pages on fixtures;
7. database repositories + migrations + seed;
8. auth/admin;
9. editorial CMS;
10. search;
11. SEO;
12. QA/hardening;
13. VPS deployment.

Подробно: `docs/ai/WORKFLOW.md`.

# START HERE

## Цель
Построить SEO-ориентированный мультиязычный медиа-портал о ретро-играх и игровой культуре на Next.js с собственной админкой и PostgreSQL.

Визуальный язык уже задан макетами. Задача агента — реализовать систему, а не переосмысливать дизайн.

## Базовый стек
- Next.js, App Router
- React
- TypeScript
- PostgreSQL
- Prisma ORM
- server-first rendering
- CSS design tokens + scoped/component styles
- TipTap для rich text в админке
- Zod для validation
- Vitest для unit/integration
- Playwright для e2e/visual
- Docker Compose для локальной PostgreSQL

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
1. foundation;
2. design tokens;
3. primitives;
4. public shell;
5. responsive layout;
6. database;
7. auth/admin;
8. content;
9. search;
10. SEO;
11. QA;
12. deployment.

Подробно: `docs/ai/WORKFLOW.md`.

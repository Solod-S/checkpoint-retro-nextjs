# AGENTS.md — Checkpoint Retro

Этот файл обязателен для любого AI coding agent.

## 1. Основной принцип
Работай как инженер внутри уже принятой продуктовой и дизайн-системы. Не заменяй требования собственными предпочтениями.

## 2. Источник истины
1. этот файл;
2. `docs/ARCHITECTURE.md`;
3. `docs/DATABASE.md`;
4. `docs/design/**`;
5. `docs/pages/**`;
6. reference images;
7. существующая реализация.

## 3. Безопасность
Запрещено:
- читать `.env`, `.env.local`, production secrets;
- выводить env values в терминал или ответы;
- добавлять ключи в fixtures;
- выполнять `prisma migrate reset`, `DROP DATABASE`, `TRUNCATE`, destructive SQL без явного разрешения;
- удалять migration history;
- отключать auth/security ради удобства;
- устанавливать непроверенные зависимости без объяснения необходимости.

Допустимо читать `.env.example`.

## 4. Изменения архитектуры
Для заметного архитектурного отклонения создай ADR в `docs/adr/`.
Без ADR не менять ORM, базу, локализационную модель, URL strategy, storage strategy, editor или content model.

## 5. UI
Нельзя:
- использовать произвольные hex-цвета в компонентах;
- создавать уникальные spacing/radius без токена;
- заменять ретро-стиль generic SaaS UI;
- делать mobile как механически сжатый desktop;
- менять визуальную иерархию reference screen без причины.

Использовать semantic HTML, keyboard focus, reduced motion и responsive images.

## 6. Соцсети
Production:
- X / Twitter
- Facebook
- Threads
- Instagram

Не добавлять VK и YouTube, даже если они видны в старых reference PNG.

## 7. Код
- TypeScript strict.
- Server Components по умолчанию.
- Client Components только при необходимости.
- Zod на границах ввода.
- Не смешивать DB-запросы с presentational components.
- Не использовать `any`, если тип можно выразить.
- Не оставлять подавленные TS/ESLint ошибки без объяснения.
- Не использовать inline styles как постоянный обход design tokens.

## 8. База
- локализованные тексты через translation models;
- slugs уникальны в пределах locale;
- изменение published slug создает redirect;
- soft-delete предпочтительнее физического удаления;
- timestamps обязательны.

## 9. SEO
Новая публичная страница не готова без title/description, canonical, hreflang для существующих переводов, OpenGraph, robots и structured data, если применимо.

## 10. Definition of Done
Перед отчетом выполнить доступные:
- format/check;
- lint;
- typecheck;
- unit tests;
- integration tests;
- build;
- e2e для критических flows;
- visual QA для измененных экранов.

Если что-то не запускалось — сказать прямо.

## 11. Отчет
1. Summary.
2. Changed files.
3. Checks.
4. Screens/routes verified.
5. Open issues.
6. Next recommended step.

Не объявляй задачу выполненной при красных проверках.

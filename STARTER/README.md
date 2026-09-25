# Checkpoint Retro — Starter

Минимальный skeleton для начала проекта.

Он намеренно не содержит готовой CMS: сначала foundation/design system, затем database/admin по фазам из `../PROJECT_BLUEPRINT/docs/ai/WORKFLOW.md`.

## Быстрый старт
```bash
cp .env.example .env.local
docker compose up -d
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

Перед DB-командами проверьте `.env.local` вручную. AI-агенту содержимое secrets не передавать.

## Routes
- `/` -> `/ru`
- `/ru`, `/uk`, `/en`
- `/{locale}/news`
- `/{locale}/articles`
- `/{locale}/search`
- `/{locale}/about`
- `/admin`

## Следующий шаг
Скопируйте или подключите документацию `PROJECT_BLUEPRINT` в repo и запустите `START_PROMPT.md`.

## Версии зависимостей

`package.json` использует major ranges как baseline starter. Перед первым production lockfile агент должен проверить совместимость актуальных minor/patch версий, обновить lockfile и прогнать `check` + `build`. Архитектуру при этом не менять.

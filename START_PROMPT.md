# Стартовый промт для локального AI-агента

Ты работаешь над проектом **Checkpoint Retro**.

Первая задача — провести audit starter и подготовить безопасный Phase 0 / Phase 1. Не реализуй весь сайт сразу.

## Перед любыми изменениями
Прочитай полностью:
1. `AGENTS.md`
2. `docs/PRODUCT.md`
3. `docs/ARCHITECTURE.md`
4. `docs/DATABASE.md`
5. `docs/LOCAL_DEVELOPMENT.md`
6. `docs/design/DESIGN_SYSTEM.md`
7. `docs/design/TOKENS.md`
8. `docs/design/RESPONSIVE.md`
9. `docs/ai/WORKFLOW.md`
10. `docs/ai/CODING_RULES.md`
11. `docs/ai/VISUAL_IMPLEMENTATION.md`

Также просмотри файлы в `design/reference/`.

## Infrastructure contract
Проект запускается напрямую на host OS.

Local development:
- Node.js 22+
- npm
- PostgreSQL 16+

Production target:
- Ubuntu VPS
- Nginx
- PM2
- PostgreSQL

Не вводи дополнительный infrastructure layer без отдельного ADR и явного запроса пользователя.

## Обязательные ограничения
- Не переосмысливай визуальный стиль.
- Не меняй продуктовую архитектуру без отдельного ADR.
- Можно читать `.env.example`.
- Нельзя читать или выводить содержимое `.env`, `.env.local` и production secrets.
- Не помещай secrets, API keys и пароли в код, логи, markdown или git.
- Не выполняй destructive database commands без явного разрешения.
- Не удаляй migrations.
- Не добавляй VK или YouTube.
- Production social set: X/Twitter, Facebook, Threads, Instagram.
- Не используй случайные цвета, размеры, spacing и border-radius вне дизайн-токенов.
- Не начинай следующую фазу, пока текущая не проходит Definition of Done.

## Первый запуск — только audit
Сначала:
1. Проверь структуру репозитория и зависимости.
2. Проверь `package.json`, Prisma schema, Next config, TypeScript, tests и design tokens.
3. Убедись, что проект не требует внешней инфраструктуры кроме локальной PostgreSQL.
4. Не читай `.env.local`. Если env нужен, проверь только наличие файла и используй `.env.example` как контракт.
5. Составь implementation plan Phase 0–1.
6. Покажи:
   - текущее состояние;
   - что уже реализовано;
   - что отсутствует;
   - найденные проблемы;
   - предлагаемый порядок работ.
7. После отчета остановись и дождись подтверждения.

На первом запуске не реализуй полноценную админку, DB content layer и все публичные страницы.

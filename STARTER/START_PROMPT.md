# Стартовый промт для локального AI-агента

Ты работаешь над проектом **Checkpoint Retro**.

Твоя первая задача — не писать весь сайт сразу, а подготовить и выполнить Phase 0 / Phase 1 согласно проектной документации.

## Перед любыми изменениями
Прочитай полностью:
1. `AGENTS.md`
2. `docs/PRODUCT.md`
3. `docs/ARCHITECTURE.md`
4. `docs/design/DESIGN_SYSTEM.md`
5. `docs/design/TOKENS.md`
6. `docs/design/RESPONSIVE.md`
7. `docs/ai/WORKFLOW.md`
8. `docs/ai/CODING_RULES.md`
9. `docs/ai/VISUAL_IMPLEMENTATION.md`

Также просмотри файлы в `design/reference/`.

## Обязательные ограничения
- Не переосмысливай визуальный стиль.
- Не меняй продуктовую архитектуру без отдельного ADR.
- Не читай и не выводи содержимое `.env`.
- Не помещай secrets, API keys и пароли в код, логи, markdown или git.
- Не выполняй destructive database commands без явного разрешения.
- Не удаляй migrations.
- Не добавляй VK или YouTube.
- Production social set: X/Twitter, Facebook, Threads, Instagram.
- Не используй случайные цвета, размеры, spacing и border-radius вне дизайн-токенов.
- Не начинай следующую фазу, пока текущая не проходит Definition of Done.

## Текущая работа
1. Проверь структуру репозитория и зависимости.
2. Составь короткий implementation plan Phase 0–1.
3. Подними локальную инфраструктуру.
4. Реализуй design tokens.
5. Реализуй базовые UI primitives.
6. Реализуй Header / Footer / page container.
7. Создай route shells для публичных страниц.
8. Проверь desktop / tablet / mobile.
9. Выполни lint, typecheck и доступные тесты.
10. Составь отчет: что сделано, какие файлы изменены, какие проверки прошли, что осталось, риски/блокеры.

Не реализуй полноценную админку и DB-контент до завершения foundation/design phase.

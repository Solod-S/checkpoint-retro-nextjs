# Prompt Library

## Реализация страницы
```text
Работаем только над [PAGE].

Сначала прочитай:
- AGENTS.md
- docs/design/DESIGN_SYSTEM.md
- docs/design/RESPONSIVE.md
- docs/pages/[PAGE].md
- соответствующий design/reference PNG

Не меняй архитектуру.
Не реализуй другие страницы.
Сначала перечисли reusable components и breakpoint plan.
После реализации выполни visual QA, lint и typecheck.
Верни краткий отчет и список оставшихся расхождений.
```

## Реализация DB feature
```text
Работаем только над [FEATURE].

Прочитай AGENTS.md, DATABASE.md и ARCHITECTURE.md.
До изменения schema объясни план migration.
Не выполняй destructive commands.
Добавь repository/service boundary, validation и tests.
Не связывай React component напрямую с Prisma.
```

## Рефакторинг
```text
Не меняй поведение и visual output.
Сначала перечисли проблемы и предполагаемые изменения.
После изменений запусти проверки и перечисли behavioral differences.
```

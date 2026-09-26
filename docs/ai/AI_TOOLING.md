# AI Tooling

## Codex / OpenCode
Главный контекст: `AGENTS.md`.

## Claude Code
Дополнительно: `CLAUDE.md`.

## Cline
Можно использовать `.clinerules` + `.clineignore`, но источник истины остается `AGENTS.md`.

## Cursor
`.cursor/rules/checkpoint-retro.mdc` должен только ссылаться на общие правила, а не создавать вторую независимую спецификацию.

## Rule
Не копировать всю архитектуру в tool-specific rules. Иначе инструкции начнут расходиться.

## Secret boundaries
Tool ignore files должны исключать `.env*`, кроме `.env.example`, когда формат инструмента это позволяет.

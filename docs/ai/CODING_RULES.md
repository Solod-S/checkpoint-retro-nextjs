# Coding Rules

## TypeScript
- `strict: true`;
- не использовать `any` без объяснения;
- input parsing через Zod или эквивалент.

## React / Next
- Server Component by default;
- `use client` минимально;
- data fetch на server boundary;
- mutation только через защищенный server action/route;
- server-only data не отправлять в client props.

## CSS
- tokens first;
- scoped component styles;
- no arbitrary hex в feature components;
- no `!important` как постоянный workaround.

## Data
- UI не импортирует PrismaClient;
- query layer отделен;
- N+1 отслеживать;
- select только нужные поля.

## Errors
- user-facing messages;
- structured server logs;
- no secrets.

## Dependencies
Каждая новая крупная dependency должна иметь объяснение.

## Git
AI не делает `git push` без явного указания пользователя.

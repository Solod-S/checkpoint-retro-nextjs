# Auth / Authorization

## Roles
- ADMIN
- EDITOR
- AUTHOR
- TRANSLATOR

## Server-side authorization
Каждая mutation проверяет actor и permission на сервере.

## Suggested permission matrix
ADMIN:
- everything.

EDITOR:
- content;
- homepage;
- taxonomy;
- media;
- redirects;
- publish.

AUTHOR:
- own drafts;
- submit for review;
- media upload в рамках policy.

TRANSLATOR:
- translations;
- без изменения master editorial state, если отдельно не разрешено.

## Provider
Auth provider выбирается отдельной задачей перед Phase 4.

Не строить authorization вокруг client-only state.

# Search

## MVP backend
PostgreSQL full-text search + `pg_trgm`.

## SearchProvider
UI использует интерфейс, а не Prisma/raw SQL напрямую.

Ожидаемые операции:
- search text;
- locale;
- content kind;
- platform;
- category;
- era;
- date range;
- pagination;
- sort.

## Ranking
Сигналы:
- title match;
- exact phrase;
- tag/platform match;
- excerpt/content match;
- recency как небольшой дополнительный factor.

Не делать recency главным фактором для исторического медиа.

## Analytics
Можно хранить агрегированные popular queries без персональных данных.

## Migration path
Если PostgreSQL станет узким местом, добавить Meilisearch/OpenSearch adapter, сохранив public `SearchProvider`.

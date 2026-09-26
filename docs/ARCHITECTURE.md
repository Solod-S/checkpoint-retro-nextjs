# Architecture

## High-level
Один Next.js application:
- Public site
- Admin
- Route handlers / server actions
- SEO endpoints
- Database access

Отдельные сервисы добавляются только при реальной нагрузке.

## Layers
### App / Routes
Маршрутизация и composition.

### Features
Бизнес-сценарии: posts, homepage, search, media, taxonomy, auth, redirects.

### Domain / Services
Правила публикации, локализации, slug, SEO, search abstraction.

### Data
Prisma repositories / queries.

### UI
Design-system primitives и feature components.

## Rendering strategy
По умолчанию:
- Server Components;
- server-side data fetching;
- static generation/revalidation там, где полезно;
- dynamic rendering для admin.

Публичный сайт не делать SPA.

## URL strategy
```text
/ru
/uk
/en

/{locale}/news
/{locale}/news/{slug}

/{locale}/articles
/{locale}/articles/{slug}

/{locale}/search
/{locale}/about

/{locale}/platform/{slug}
/{locale}/category/{slug}
/{locale}/tag/{slug}
/{locale}/era/{slug}
/{locale}/author/{slug}
```

## Admin
```text
/admin
/admin/posts
/admin/posts/new
/admin/posts/{id}
/admin/media
/admin/taxonomy
/admin/homepage
/admin/users
/admin/redirects
/admin/settings
```

## Search
Интерфейс `SearchProvider`.
Первая реализация: PostgreSQL full-text + `pg_trgm`.
UI не привязывать к SQL.
В будущем backend можно заменить на Meilisearch/OpenSearch.

## Storage
Интерфейс `MediaStorage`.
Adapters:
- local dev filesystem;
- S3/R2-compatible production storage.

В БД хранить metadata и canonical object key, не binary.

## Cache
После публикации/обновления:
- revalidate post path;
- revalidate taxonomy paths;
- revalidate homepage;
- обновить sitemap/search index.

## Background work
Для MVP не вводить очередь без необходимости.
Потенциальные jobs:
- image derivatives;
- social preview generation;
- search indexing;
- scheduled publishing;
- sitemap refresh.

## Observability
Минимум:
- structured application logs;
- error tracking;
- DB slow query monitoring;
- admin audit log;
- publication errors.

Secrets не писать в logs.

## Dependency rule
Route/UI слой не должен напрямую знать детали S3, raw SQL или auth provider.

## Runtime / hosting contract
Local development runs directly on the developer machine with Node.js and a locally installed PostgreSQL service.

Production target is a conventional Ubuntu VPS:

```text
Nginx -> Next.js/Node.js under PM2 -> PostgreSQL
```

Runtime infrastructure must remain replaceable and must not leak into domain/UI code.

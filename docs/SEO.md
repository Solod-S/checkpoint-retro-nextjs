# SEO

## Основной принцип
SEO является частью route/content architecture.

## Metadata
Для каждой indexable публичной страницы:
- title;
- meta description;
- canonical;
- OpenGraph;
- Twitter/X card metadata;
- robots.

## Multilingual
Для translation group:
- canonical на текущую locale;
- hreflang только на реально существующие published translations;
- x-default согласно принятой default locale strategy.

Не создавать fake translated URLs.

## Structured data
### Article pages
`Article` / `NewsArticle`:
- headline;
- image;
- datePublished;
- dateModified;
- author;
- publisher;
- mainEntityOfPage.

### Site
- WebSite;
- Organization;
- SearchAction, если реализация соответствует.

### Navigation
- BreadcrumbList.

## Sitemaps
Разбивка:
- posts/news;
- articles/stories;
- taxonomies;
- static pages.

## RSS
Минимум:
- все материалы;
- новости;
- locale-specific feeds при необходимости.

## Slug changes
1. сохранить old path;
2. обновить slug;
3. создать 301 redirect;
4. revalidate;
5. обновить sitemap.

## Pagination
Не создавать бесконечное число индексируемых filter combinations.

## Search page
Internal search results: `noindex,follow`.

## Performance
- `next/image`;
- корректный `sizes`;
- не грузить full-resolution изображения в cards;
- минимизировать client JS;
- decorative CRT effects не должны блокировать first render.

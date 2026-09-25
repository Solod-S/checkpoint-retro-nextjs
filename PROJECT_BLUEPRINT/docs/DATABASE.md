# Database

## PostgreSQL
Основная БД — PostgreSQL.

Рекомендуемые расширения:
- `pg_trgm`;
- при необходимости `unaccent`.

## Content model

### Post
Языконезависимая сущность материала:
- id;
- kind;
- status;
- authorId;
- featuredMediaId;
- publishedAt;
- scheduledAt;
- createdAt;
- updatedAt;
- deletedAt.

### PostTranslation
Локализованная публикация:
- locale;
- slug;
- title;
- excerpt;
- content JSON;
- seoTitle;
- seoDescription;
- ogTitle;
- ogDescription;
- sourceLocale;
- translationStatus.

Уникальность: `locale + slug`.

### Revision
Редакционные версии. Не хранить каждое нажатие клавиши как revision.

### Taxonomy
- Category + CategoryTranslation
- Tag + TagTranslation
- Platform + PlatformTranslation
- Era + EraTranslation

### HomepagePlacement
Хранит редакционные позиции:
- slot;
- postId;
- sortOrder;
- activeFrom;
- activeTo.

Не кодировать конкретные материалы в homepage source code.

### Redirect
- locale;
- fromPath;
- toPath;
- statusCode;
- reason.

При изменении slug опубликованной страницы автоматически создать 301.

### MediaAsset
- storageKey;
- mimeType;
- width;
- height;
- alt translations;
- caption translations;
- credit;
- sourceUrl;
- checksum.

### User
Roles:
- ADMIN;
- EDITOR;
- AUTHOR;
- TRANSLATOR.

## Publishing state machine
```text
DRAFT
  ↓
IN_REVIEW
  ↓
SCHEDULED / PUBLISHED
  ↓
ARCHIVED
```

## Deletion
Редакционные материалы сначала soft-delete.

## Indexes
Минимум:
- Post(status, publishedAt);
- Post(kind, publishedAt);
- PostTranslation(locale, slug);
- PostTranslation(locale, title);
- taxonomy slugs;
- redirects fromPath;
- homepage slot/order.

Для search добавить GIN/GiST indexes согласно SQL реализации.

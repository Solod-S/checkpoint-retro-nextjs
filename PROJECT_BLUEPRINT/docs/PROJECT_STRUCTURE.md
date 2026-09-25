# Project Structure

Рекомендуемая production-структура после развития starter:

```text
checkpoint-retro/
├── AGENTS.md
├── START_PROMPT.md
├── docs/
│   ├── architecture/
│   ├── design/
│   ├── pages/
│   ├── ai/
│   └── adr/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── public/
│   ├── images/
│   ├── icons/
│   ├── social/
│   └── patterns/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   ├── admin/
│   │   └── api/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── cards/
│   │   ├── article/
│   │   └── admin/
│   ├── features/
│   │   ├── posts/
│   │   ├── homepage/
│   │   ├── search/
│   │   ├── media/
│   │   ├── taxonomy/
│   │   └── auth/
│   ├── lib/
│   │   ├── db/
│   │   ├── auth/
│   │   ├── seo/
│   │   ├── search/
│   │   ├── storage/
│   │   ├── i18n/
│   │   └── validation/
│   ├── styles/
│   └── types/
└── tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    └── visual/
```

## Boundary rule
`components` не должны становиться вторым business layer.

Feature-specific logic живет в `features`, infrastructure adapters — в `lib`.

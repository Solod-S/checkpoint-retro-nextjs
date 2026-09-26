import { Locale, PostKind, PostStatus, TranslationStatus } from "@prisma/client";
import { logAuditEvent } from "@/lib/audit/logger";
import type { SessionUser } from "@/lib/auth/types";
import { prisma } from "@/lib/db/prisma";
import type { AdminPostListItem, PostInput } from "./types";

interface StoredPost {
  id: string;
  kind: PostKind;
  status: PostStatus;
  authorId: string;
  authorName: string;
  featuredImageUrl?: string;
  publishedAt: Date | null;
  scheduledAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  platforms: string[];
  categories: string[];
  eras: string[];
  translations: {
    locale: Locale;
    slug: string;
    title: string;
    excerpt: string;
    content: Record<string, unknown> | string;
    seoTitle?: string;
    seoDescription?: string;
    translationStatus: TranslationStatus;
  }[];
}

// Initial in-memory data for dev/test when DB is offline
const inMemoryPosts: StoredPost[] = [
  {
    id: "post-dreamcast-story",
    kind: PostKind.STORY,
    status: PostStatus.PUBLISHED,
    authorId: "usr-admin-1",
    authorName: "Алексей Морозов",
    featuredImageUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect width='100%25' height='100%25' fill='%23120d08'/%3E%3Ccircle cx='600' cy='337' r='200' fill='none' stroke='%23ff5a1f' stroke-width='8'/%3E%3Cpath d='M600 137 A200 200 0 0 1 800 337' stroke='%23f4df19' stroke-width='12' fill='none'/%3E%3Ctext x='600' y='360' fill='%23f4df19' font-family='sans-serif' font-weight='900' font-size='56' text-anchor='middle'%3ESEGA DREAMCAST%3C/text%3E%3C/svg%3E",
    publishedAt: new Date("2024-08-14T10:00:00Z"),
    scheduledAt: null,
    createdAt: new Date("2024-08-10T12:00:00Z"),
    updatedAt: new Date("2024-08-14T10:00:00Z"),
    deletedAt: null,
    platforms: ["sega", "dreamcast"],
    categories: ["dev-history", "consoles"],
    eras: ["1990s", "2000s"],
    translations: [
      {
        locale: Locale.RU,
        slug: "pochemu-dreamcast-operedila-svoyo-vremya",
        title: "Почему Dreamcast опередила своё время",
        excerpt:
          "Смелые идеи, онлайн-будущее и игры, которые до сих пор выглядят современно. Разбираемся, почему Dreamcast был не провалом, а взглядом в завтрашний день индустрии.",
        content: { type: "doc", content: [] },
        seoTitle: "Почему Dreamcast опередила своё время — Checkpoint Retro",
        seoDescription: "История и анализ феномена консоли Sega Dreamcast.",
        translationStatus: TranslationStatus.PUBLISHED,
      },
      {
        locale: Locale.UK,
        slug: "chomu-dreamcast-vperedyla-sviy-chas",
        title: "Чому Dreamcast випередила свій час",
        excerpt:
          "Сміливі ідеї, онлайн-майбутнє та ігри, які досі виглядають сучасно.",
        content: { type: "doc", content: [] },
        translationStatus: TranslationStatus.PUBLISHED,
      },
      {
        locale: Locale.EN,
        slug: "why-dreamcast-was-ahead-of-its-time",
        title: "Why Dreamcast was ahead of its time",
        excerpt:
          "Bold ideas, online future, and games that still look fresh today.",
        content: { type: "doc", content: [] },
        translationStatus: TranslationStatus.PUBLISHED,
      },
    ],
  },
  {
    id: "post-snes-proto",
    kind: PostKind.NEWS,
    status: PostStatus.PUBLISHED,
    authorId: "usr-editor-1",
    authorName: "Мария Ветрова",
    publishedAt: new Date("2024-08-15T14:30:00Z"),
    scheduledAt: null,
    createdAt: new Date("2024-08-15T12:00:00Z"),
    updatedAt: new Date("2024-08-15T14:30:00Z"),
    deletedAt: null,
    platforms: ["nintendo"],
    categories: ["dev-history"],
    eras: ["1990s"],
    translations: [
      {
        locale: Locale.RU,
        slug: "neizvestnyj-prototip-dlya-snes",
        title: "Найден неизвестный прототип игры для SNES",
        excerpt:
          "Энтузиасты обнаружили раннюю сборку неанонсированной игры Nintendo для Super Nintendo.",
        content: { type: "doc", content: [] },
        seoTitle: "Найден неизвестный прототип игры для SNES — Новости Checkpoint",
        seoDescription: "Подробности находки прототипа для Super Nintendo.",
        translationStatus: TranslationStatus.PUBLISHED,
      },
      {
        locale: Locale.UK,
        slug: "nevidomyj-prototyp-dlya-snes",
        title: "Знайдено невідомий прототип гри для SNES",
        excerpt: "Ентузіасти виявили ранню збірку неанонсованої гри.",
        content: { type: "doc", content: [] },
        translationStatus: TranslationStatus.PUBLISHED,
      },
    ],
  },
  {
    id: "post-saturn-30",
    kind: PostKind.ARTICLE,
    status: PostStatus.DRAFT,
    authorId: "usr-author-1",
    authorName: "Дмитрий Кузнецов",
    publishedAt: null,
    scheduledAt: null,
    createdAt: new Date("2024-08-16T09:00:00Z"),
    updatedAt: new Date("2024-08-16T09:00:00Z"),
    deletedAt: null,
    platforms: ["sega"],
    categories: ["consoles"],
    eras: ["1990s"],
    translations: [
      {
        locale: Locale.RU,
        slug: "sega-saturn-30-let-2d-arkhitektura",
        title: "SEGA Saturn 30 лет: Почему гениальная 2D-архитектура проиграла",
        excerpt: "Черновик статьи к 30-летию консоли.",
        content: { type: "doc", content: [] },
        translationStatus: TranslationStatus.DRAFT,
      },
    ],
  },
];

export async function getAdminPostsList(filters?: {
  kind?: PostKind;
  status?: PostStatus;
  query?: string;
}): Promise<AdminPostListItem[]> {
  try {
    const posts = await prisma.post.findMany({
      where: {
        deletedAt: null,
        ...(filters?.kind ? { kind: filters.kind } : {}),
        ...(filters?.status ? { status: filters.status } : {}),
      },
      include: {
        author: {
          include: {
            translations: true,
            user: true,
          },
        },
        translations: true,
      },
      orderBy: { createdAt: "desc" },
    });

    if (posts.length > 0) {
      return posts.map((p) => {
        const ruTr = p.translations.find((t) => t.locale === Locale.RU);
        const ukTr = p.translations.find((t) => t.locale === Locale.UK);
        const enTr = p.translations.find((t) => t.locale === Locale.EN);
        const primaryTr = ruTr ?? p.translations[0];

        return {
          id: p.id,
          kind: p.kind,
          status: p.status,
          title: primaryTr?.title ?? "Без заголовка",
          slug: primaryTr?.slug ?? p.id,
          authorName:
            p.author?.translations[0]?.name ??
            p.author?.user?.name ??
            "Редакция",
          localeCoverage: {
            ru: Boolean(ruTr),
            uk: Boolean(ukTr),
            en: Boolean(enTr),
          },
          publishedAt: p.publishedAt,
          updatedAt: p.updatedAt,
        };
      });
    }
  } catch {
    // Database offline; use in-memory store
  }

  let filtered = inMemoryPosts.filter((p) => p.deletedAt === null);

  if (filters?.kind) {
    filtered = filtered.filter((p) => p.kind === filters.kind);
  }
  if (filters?.status) {
    filtered = filtered.filter((p) => p.status === filters.status);
  }
  if (filters?.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter((p) =>
      p.translations.some((t) => t.title.toLowerCase().includes(q))
    );
  }

  return filtered.map((p) => {
    const ruTr = p.translations.find((t) => t.locale === Locale.RU);
    const ukTr = p.translations.find((t) => t.locale === Locale.UK);
    const enTr = p.translations.find((t) => t.locale === Locale.EN);
    const primaryTr = ruTr ?? p.translations[0];

    return {
      id: p.id,
      kind: p.kind,
      status: p.status,
      title: primaryTr?.title ?? "Без заголовка",
      slug: primaryTr?.slug ?? p.id,
      authorName: p.authorName,
      localeCoverage: {
        ru: Boolean(ruTr),
        uk: Boolean(ukTr),
        en: Boolean(enTr),
      },
      publishedAt: p.publishedAt,
      updatedAt: p.updatedAt,
    };
  });
}

export async function getAdminPost(id: string): Promise<StoredPost | null> {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        translations: true,
        platforms: { include: { platform: true } },
        categories: { include: { category: true } },
        eras: { include: { era: true } },
        author: { include: { translations: true, user: true } },
        featuredMedia: true,
      },
    });

    if (post) {
      return {
        id: post.id,
        kind: post.kind,
        status: post.status,
        authorId: post.authorId ?? "",
        authorName:
          post.author?.translations[0]?.name ??
          post.author?.user?.name ??
          "Редакция",
        featuredImageUrl: post.featuredMedia?.storageKey ?? undefined,
        publishedAt: post.publishedAt,
        scheduledAt: post.scheduledAt,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        deletedAt: post.deletedAt,
        platforms: post.platforms.map((p) => p.platform.key),
        categories: post.categories.map((c) => c.category.key),
        eras: post.eras.map((e) => e.era.key),
        translations: post.translations.map((t) => ({
          locale: t.locale,
          slug: t.slug,
          title: t.title,
          excerpt: t.excerpt ?? "",
          content: t.content as Record<string, unknown> | string,
          seoTitle: t.seoTitle ?? undefined,
          seoDescription: t.seoDescription ?? undefined,
          translationStatus: t.translationStatus,
        })),
      };
    }
  } catch {
    // Database offline
  }

  const found = inMemoryPosts.find((p) => p.id === id);
  return found ?? null;
}

export async function savePost(
  input: PostInput,
  actor: SessionUser,
  existingId?: string
): Promise<string> {
  const postId = existingId ?? `post-${Date.now()}`;
  const now = new Date();
  const publishedAt =
    input.status === PostStatus.PUBLISHED
      ? input.publishedAt
        ? new Date(input.publishedAt)
        : now
      : null;

  // Check for slug changes on published post to automatically create 301 redirects
  if (existingId) {
    const existing = await getAdminPost(existingId);
    if (existing && existing.status === PostStatus.PUBLISHED) {
      for (const newTr of input.translations) {
        const oldTr = existing.translations.find(
          (t) => t.locale === newTr.locale
        );
        if (oldTr && oldTr.slug !== newTr.slug) {
          const sectionPath =
            input.kind === PostKind.NEWS ? "news" : "articles";
          const localeStr = newTr.locale.toLowerCase();
          const fromPath = `/${localeStr}/${sectionPath}/${oldTr.slug}`;
          const toPath = `/${localeStr}/${sectionPath}/${newTr.slug}`;

          try {
            await prisma.redirect.create({
              data: {
                locale: newTr.locale,
                fromPath,
                toPath,
                statusCode: 301,
                reason: `Auto-redirect from CMS slug rename (${actor.name})`,
              },
            });
          } catch {
            // DB offline or duplicate
          }

          await logAuditEvent({
            actorId: actor.id,
            actorName: actor.name,
            action: "REDIRECT_AUTO_CREATED",
            entity: "Redirect",
            details: { fromPath, toPath, statusCode: 301 },
          });
        }
      }
    }
  }

  // Update in-memory store
  const existingIdx = inMemoryPosts.findIndex((p) => p.id === postId);
  const storedEntry: StoredPost = {
    id: postId,
    kind: input.kind,
    status: input.status,
    authorId: input.authorId ?? actor.id,
    authorName: actor.name,
    featuredImageUrl: input.featuredImageUrl,
    publishedAt,
    scheduledAt: input.scheduledAt ? new Date(input.scheduledAt) : null,
    createdAt: existingIdx >= 0 ? inMemoryPosts[existingIdx]!.createdAt : now,
    updatedAt: now,
    deletedAt: null,
    platforms: input.platformKeys ?? [],
    categories: input.categoryKeys ?? [],
    eras: input.eraKeys ?? [],
    translations: input.translations.map((t) => ({
      locale: t.locale,
      slug: t.slug,
      title: t.title,
      excerpt: t.excerpt ?? "",
      content: t.content,
      seoTitle: t.seoTitle,
      seoDescription: t.seoDescription,
      translationStatus: t.translationStatus ?? TranslationStatus.PUBLISHED,
    })),
  };

  if (existingIdx >= 0) {
    inMemoryPosts[existingIdx] = storedEntry;
  } else {
    inMemoryPosts.unshift(storedEntry);
  }

  await logAuditEvent({
    actorId: actor.id,
    actorName: actor.name,
    action: existingId ? "POST_UPDATED" : "POST_CREATED",
    entity: "Post",
    entityId: postId,
    details: {
      kind: input.kind,
      status: input.status,
      titleRu: input.translations.find((t) => t.locale === Locale.RU)?.title,
    },
  });

  return postId;
}

export async function softDeletePost(
  id: string,
  actor: SessionUser
): Promise<void> {
  try {
    await prisma.post.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  } catch {
    // Database offline
  }

  const post = inMemoryPosts.find((p) => p.id === id);
  if (post) {
    post.deletedAt = new Date();
  }

  await logAuditEvent({
    actorId: actor.id,
    actorName: actor.name,
    action: "POST_SOFT_DELETED",
    entity: "Post",
    entityId: id,
    details: { deletedAt: new Date().toISOString() },
  });
}

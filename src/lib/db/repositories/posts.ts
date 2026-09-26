import { PostKind, PostStatus } from "@prisma/client";
import { prisma } from "@/lib/db/prisma";
import { toPrismaLocale, type AppLocale } from "@/lib/i18n/config";
import type { ContentCardData, PlatformKey } from "@/types/content";

export interface GetPostsOptions {
  limit?: number;
  offset?: number;
  platformKey?: string;
  categoryKey?: string;
}

export async function getPublishedPostsByKind(
  locale: AppLocale,
  kind?: PostKind,
  options: GetPostsOptions = {}
): Promise<ContentCardData[]> {
  const prismaLocale = toPrismaLocale(locale);
  const { limit = 10, offset = 0, platformKey, categoryKey } = options;

  const posts = await prisma.post.findMany({
    where: {
      status: PostStatus.PUBLISHED,
      deletedAt: null,
      ...(kind ? { kind } : {}),
      translations: {
        some: {
          locale: prismaLocale,
        },
      },
      ...(platformKey
        ? {
            platforms: {
              some: {
                platform: { key: platformKey },
              },
            },
          }
        : {}),
      ...(categoryKey
        ? {
            categories: {
              some: {
                category: { key: categoryKey },
              },
            },
          }
        : {}),
    },
    include: {
      translations: {
        where: { locale: prismaLocale },
      },
      platforms: {
        include: {
          platform: {
            include: {
              translations: { where: { locale: prismaLocale } },
            },
          },
        },
      },
      featuredMedia: true,
      author: {
        include: {
          translations: { where: { locale: prismaLocale } },
          avatar: true,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: limit,
    skip: offset,
  });

  return posts.map((post) => {
    const translation = post.translations[0];
    const firstPlatform = post.platforms[0]?.platform;
    const platformTranslation = firstPlatform?.translations[0];

    const platformKey = (firstPlatform?.key ?? "default") as PlatformKey;

    return {
      id: post.id,
      kind: post.kind as ContentCardData["kind"],
      title: translation?.title ?? "Без названия",
      excerpt: translation?.excerpt ?? undefined,
      slug: `/${locale}/${post.kind === PostKind.NEWS ? "news" : "articles"}/${
        translation?.slug ?? post.id
      }`,
      publishedAt: post.publishedAt
        ? new Intl.DateTimeFormat(locale, {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(post.publishedAt)
        : "",
      readingTimeMinutes: 5,
      imageUrl: post.featuredMedia?.storageKey ?? undefined,
      imageAlt: translation?.title ?? undefined,
      platform: firstPlatform
        ? {
            key: platformKey,
            label: platformTranslation?.name ?? firstPlatform.key.toUpperCase(),
            color: firstPlatform.colorToken ?? undefined,
          }
        : undefined,
      authorName: post.author?.translations[0]?.name ?? undefined,
    };
  });
}

export async function getPostBySlug(locale: AppLocale, slug: string) {
  const prismaLocale = toPrismaLocale(locale);

  let translation = null;
  try {
    translation = await prisma.postTranslation.findUnique({
      where: {
        locale_slug: {
          locale: prismaLocale,
          slug,
        },
      },
      include: {
        post: {
          include: {
            translations: {
              select: {
                locale: true,
                slug: true,
              },
            },
            featuredMedia: true,
            platforms: {
              include: {
                platform: {
                  include: {
                    translations: { where: { locale: prismaLocale } },
                  },
                },
              },
            },
            categories: {
              include: {
                category: {
                  include: {
                    translations: { where: { locale: prismaLocale } },
                  },
                },
              },
            },
            author: {
              include: {
                translations: { where: { locale: prismaLocale } },
                avatar: true,
              },
            },
          },
        },
      },
    });
  } catch {
    return null;
  }

  if (!translation || translation.post.status !== PostStatus.PUBLISHED) {
    return null;
  }

  const translatedSlugs: Partial<Record<AppLocale, string>> = {};
  for (const tr of translation.post.translations) {
    if (tr.locale === "RU") translatedSlugs.ru = tr.slug;
    if (tr.locale === "UK") translatedSlugs.uk = tr.slug;
    if (tr.locale === "EN") translatedSlugs.en = tr.slug;
  }

  return {
    id: translation.post.id,
    kind: translation.post.kind,
    slug: translation.slug,
    title: translation.title,
    excerpt: translation.excerpt,
    content: translation.content,
    seoTitle: translation.seoTitle,
    seoDescription: translation.seoDescription,
    ogTitle: translation.ogTitle,
    ogDescription: translation.ogDescription,
    publishedAt: translation.post.publishedAt,
    author: translation.post.author
      ? {
          name:
            translation.post.author.translations[0]?.name ?? "Редакция Checkpoint",
          role:
            translation.post.author.translations[0]?.roleLabel ?? "Автор",
        }
      : null,
    featuredMedia: translation.post.featuredMedia,
    translatedSlugs,
  };
}

export async function getPublishedPostsForSitemap() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: PostStatus.PUBLISHED,
        deletedAt: null,
      },
      select: {
        id: true,
        kind: true,
        updatedAt: true,
        publishedAt: true,
        translations: {
          select: {
            locale: true,
            slug: true,
            updatedAt: true,
          },
        },
      },
    });

    if (posts && posts.length > 0) {
      return posts.flatMap((post) =>
        post.translations.map((tr) => {
          const localeStr = tr.locale.toLowerCase();
          const section = post.kind === PostKind.NEWS ? "news" : "articles";
          return {
            url: `/${localeStr}/${section}/${tr.slug}`,
            lastModified: tr.updatedAt ?? post.publishedAt ?? new Date(),
            changeFrequency:
              post.kind === PostKind.NEWS
                ? ("weekly" as const)
                : ("monthly" as const),
            priority: 0.8,
          };
        })
      );
    }
  } catch {
    // Database offline; fallback to standard static paths
  }

  // Fallback to initial seed items
  return [
    {
      url: "/ru/articles/the-making-of-castlevania-sotn",
      lastModified: new Date("2024-05-18T10:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "/ru/news/sega-saturn-analogue-announcement",
      lastModified: new Date("2024-06-01T12:00:00Z"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];
}

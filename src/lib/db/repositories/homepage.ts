import { prisma } from "@/lib/db/prisma";
import { toPrismaLocale, type AppLocale } from "@/lib/i18n/config";
import type { BreakingNewsItem, HeroStoryData } from "@/types/content";

export async function getHomepagePlacements(locale: AppLocale) {
  const prismaLocale = toPrismaLocale(locale);
  const now = new Date();

  const placements = await prisma.homepagePlacement.findMany({
    where: {
      OR: [
        { activeFrom: null, activeTo: null },
        { activeFrom: { lte: now }, activeTo: null },
        { activeFrom: null, activeTo: { gte: now } },
        { activeFrom: { lte: now }, activeTo: { gte: now } },
      ],
    },
    include: {
      post: {
        include: {
          translations: { where: { locale: prismaLocale } },
          featuredMedia: true,
        },
      },
    },
    orderBy: { sortOrder: "asc" },
  });

  return placements;
}

export async function getHeroStoryFromPlacement(
  locale: AppLocale
): Promise<HeroStoryData | null> {
  const prismaLocale = toPrismaLocale(locale);
  const now = new Date();

  const heroPlacement = await prisma.homepagePlacement.findFirst({
    where: {
      slot: "hero",
      OR: [
        { activeFrom: null, activeTo: null },
        { activeFrom: { lte: now }, activeTo: null },
        { activeFrom: null, activeTo: { gte: now } },
        { activeFrom: { lte: now }, activeTo: { gte: now } },
      ],
    },
    include: {
      post: {
        include: {
          translations: { where: { locale: prismaLocale } },
          featuredMedia: true,
        },
      },
    },
    orderBy: { sortOrder: "asc" },
  });

  if (!heroPlacement || !heroPlacement.post) return null;

  const translation = heroPlacement.post.translations[0];
  if (!translation) return null;

  const kicker =
    locale === "en"
      ? "FEATURED STORY"
      : locale === "uk"
        ? "ГОЛОВНА ІСТОРІЯ"
        : "ГЛАВНАЯ ИСТОРИЯ";

  const ctaText =
    locale === "en"
      ? "Read story"
      : locale === "uk"
        ? "Читати історію"
        : "Читать историю";

  const cornerTagline =
    locale === "en"
      ? "BOLD GAMES BEYOND TIME"
      : locale === "uk"
        ? "СМІЛИВІ ІГРИ ДАЛІ ЧАСУ"
        : "СМЕЛЕЕ ИГРЫ ДАЛЬШЕ ВРЕМЕНИ";

  return {
    kicker,
    title: translation.title,
    dek: translation.excerpt ?? "",
    ctaText,
    ctaHref: `/${locale}/articles/${translation.slug}`,
    readingTimeMinutes: 12,
    publishedAt: heroPlacement.post.publishedAt
      ? new Intl.DateTimeFormat(locale, {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(heroPlacement.post.publishedAt)
      : "",
    imageUrl: heroPlacement.post.featuredMedia?.storageKey ?? "",
    imageAlt: translation.title,
    cornerTagline,
  };
}

export async function getBreakingStripItems(
  locale: AppLocale
): Promise<BreakingNewsItem[]> {
  const prismaLocale = toPrismaLocale(locale);

  const urgentPlacements = await prisma.homepagePlacement.findMany({
    where: {
      slot: "breaking",
    },
    include: {
      post: {
        include: {
          translations: { where: { locale: prismaLocale } },
        },
      },
    },
    orderBy: { sortOrder: "asc" },
    take: 3,
  });

  return urgentPlacements.map((p) => {
    const translation = p.post.translations[0];
    return {
      id: p.id,
      title: translation?.title ?? "Срочная новость",
      href: `/${locale}/news/${translation?.slug ?? p.post.id}`,
      date: p.post.publishedAt
        ? new Intl.DateTimeFormat(locale, {
            day: "numeric",
            month: "short",
          }).format(p.post.publishedAt)
        : "",
      isUrgent: true,
    };
  });
}

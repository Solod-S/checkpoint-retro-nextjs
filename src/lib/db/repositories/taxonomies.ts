import { prisma } from "@/lib/db/prisma";
import { toPrismaLocale, type AppLocale } from "@/lib/i18n/config";
import type { FilterTabItem } from "@/types/content";

export async function getCategories(locale: AppLocale): Promise<FilterTabItem[]> {
  const prismaLocale = toPrismaLocale(locale);

  const categories = await prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      translations: {
        where: { locale: prismaLocale },
      },
      _count: {
        select: { posts: true },
      },
    },
  });

  return categories.map((cat) => ({
    id: cat.key,
    label: cat.translations[0]?.name ?? cat.key,
    count: cat._count.posts,
  }));
}

export async function getPlatforms(locale: AppLocale): Promise<FilterTabItem[]> {
  const prismaLocale = toPrismaLocale(locale);

  const platforms = await prisma.platform.findMany({
    include: {
      translations: {
        where: { locale: prismaLocale },
      },
      _count: {
        select: { posts: true },
      },
    },
  });

  return platforms.map((plat) => ({
    id: plat.key,
    label: plat.translations[0]?.name ?? plat.key,
    count: plat._count.posts,
  }));
}

export async function getEras(locale: AppLocale) {
  const prismaLocale = toPrismaLocale(locale);

  const eras = await prisma.era.findMany({
    orderBy: { startYear: "asc" },
    include: {
      translations: {
        where: { locale: prismaLocale },
      },
      _count: {
        select: { posts: true },
      },
    },
  });

  return eras.map((era) => ({
    id: era.key,
    startYear: era.startYear,
    endYear: era.endYear,
    name: era.translations[0]?.name ?? era.key,
    count: era._count.posts,
  }));
}

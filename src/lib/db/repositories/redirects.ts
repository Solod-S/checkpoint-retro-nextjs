import { prisma } from "@/lib/db/prisma";
import { toPrismaLocale, type AppLocale } from "@/lib/i18n/config";

export async function findRedirect(fromPath: string, locale?: AppLocale) {
  const prismaLocale = locale ? toPrismaLocale(locale) : undefined;

  const redirect = await prisma.redirect.findFirst({
    where: {
      fromPath,
      ...(prismaLocale ? { OR: [{ locale: null }, { locale: prismaLocale }] } : {}),
    },
  });

  return redirect;
}

export async function createRedirect({
  fromPath,
  toPath,
  statusCode = 301,
  locale,
  reason,
}: {
  fromPath: string;
  toPath: string;
  statusCode?: number;
  locale?: AppLocale;
  reason?: string;
}) {
  const prismaLocale = locale ? toPrismaLocale(locale) : undefined;

  return prisma.redirect.upsert({
    where: { fromPath },
    update: {
      toPath,
      statusCode,
      locale: prismaLocale,
      reason,
    },
    create: {
      fromPath,
      toPath,
      statusCode,
      locale: prismaLocale,
      reason,
    },
  });
}

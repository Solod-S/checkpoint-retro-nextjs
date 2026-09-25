import { notFound } from "next/navigation";
import { RouteStub } from "@/components/ui/RouteStub";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/config";

const titles = {
  "ru": "Статьи и истории",
  "uk": "Статті та історії",
  "en": "Articles & stories"
} as const;

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);

  return <RouteStub title={titles[locale]} description={dictionary.common.comingSoon} />;
}

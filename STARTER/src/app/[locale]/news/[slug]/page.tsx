import { notFound } from "next/navigation";
import { RouteStub } from "@/components/ui/RouteStub";
import { isLocale } from "@/lib/i18n/config";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <RouteStub
      title={`News: ${slug}`}
      description="На CMS-фазе здесь появится server-rendered news item из PostTranslation."
    />
  );
}

import { notFound } from "next/navigation";
import { RouteStub } from "@/components/ui/RouteStub";
import { isLocale } from "@/lib/i18n/config";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <RouteStub
      title={`Article: ${slug}`}
      description="На CMS-фазе здесь появится server-rendered article из PostTranslation."
    />
  );
}

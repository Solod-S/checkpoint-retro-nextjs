import { notFound } from "next/navigation";
import { getHomePageData } from "@/lib/data/home";
import { isLocale } from "@/lib/i18n/config";
import { generateRssXml, type RssFeedItem } from "@/lib/seo/rss";

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> }
) {
  const { locale } = await context.params;

  if (!isLocale(locale)) {
    notFound();
  }

  let items: RssFeedItem[] = [];

  try {
    const homeData = await getHomePageData(locale);
    const combined = [
      ...homeData.latestNews.map((n) => ({
        title: n.title,
        link: n.slug,
        description: n.excerpt,
        pubDate: n.publishedAt,
        category: "News",
      })),
      ...homeData.featuredArticles.map((a) => ({
        title: a.title,
        link: a.slug,
        description: a.excerpt,
        pubDate: a.publishedAt,
        category: "Article",
      })),
    ];
    items = combined;
  } catch {
    // Fallback if data loader fails
    items = [
      {
        title: "Почему Dreamcast опередила своё время",
        link: `/${locale}/articles/pochemu-dreamcast-operedila-svoyo-vremya`,
        description:
          "Смелые идеи, онлайн-будущее и игры, которые до сих пор выглядят современно.",
        pubDate: new Date("2024-08-14T10:00:00Z"),
        category: "Article",
      },
    ];
  }

  const xml = generateRssXml({
    locale,
    items,
  });

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

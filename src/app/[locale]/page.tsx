import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentCard } from "@/components/cards/ContentCard";
import { BreakingStrip } from "@/components/home/BreakingStrip";
import { HeroStory } from "@/components/home/HeroStory";
import { HomeArticlesSection } from "@/components/home/HomeArticlesSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getHomePageData } from "@/lib/data/home";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import {
  JsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);

  return buildPageMetadata({
    title: dictionary.home.title || "Checkpoint Retro",
    description:
      dictionary.home.subtitle ||
      "Независимое ретро-игровое медиа о классических играх, консолях и людях, изменивших индустрию.",
    path: "",
    locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const [dictionary, data] = await Promise.all([
    getDictionary(locale),
    getHomePageData(locale),
  ]);

  const websiteJsonLd = buildWebsiteJsonLd(locale);
  const orgJsonLd = buildOrganizationJsonLd();

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={orgJsonLd} />

      <main id="main-content" className="page-shell page-main">
        {/* 1. Hero Story */}
        <HeroStory
          story={data.heroStory}
          readTimeLabel={dictionary.content?.minRead?.toUpperCase() ?? "МИН ЧТЕНИЯ"}
        />

        {/* 2. Breaking News Strip */}
        <BreakingStrip
          items={data.breakingStrip}
          label={dictionary.home?.breaking ?? "СРОЧНО"}
          className="home-breaking-strip"
        />

        {/* 3. Latest News Section */}
        <section className="home-section" aria-labelledby="news-heading">
          <SectionHeading
            title={dictionary.home.latestNews}
            actionHref={`/${locale}/news`}
            actionLabel={dictionary.home.allNews}
          />
          <div className="card-grid">
            {data.latestNews.map((item, idx) => (
              <ContentCard
                key={item.id}
                item={item}
                variant="grid"
                showCornerBrackets
                priority={idx === 0}
              />
            ))}
          </div>
        </section>

        {/* 4. Articles & Stories Section */}
        <HomeArticlesSection
          title={dictionary.home.articlesAndStories}
          actionHref={`/${locale}/articles`}
          actionLabel={dictionary.home.allArticles}
          tabs={data.platformTabs}
          articles={data.featuredArticles}
          filterAriaLabel={dictionary.home.articlesAndStories}
        />

        {/* 5. Newsletter Banner (отключен по запросу) */}
        {/*
        <section className="home-section home-section--newsletter">
          <NewsletterBanner />
        </section>
        */}
      </main>
    </>
  );
}

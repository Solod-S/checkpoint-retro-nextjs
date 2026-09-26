import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticlesHeroBanner } from "@/components/articles/ArticlesHeroBanner";
import { ContentCard } from "@/components/cards/ContentCard";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { getArticlesPageData } from "@/lib/data/articles";
import { isLocale, type AppLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { JsonLd, buildBreadcrumbsJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale as AppLocale);

  return buildPageMetadata({
    title: dictionary.nav.articles || "Статьи и истории",
    description:
      dictionary.articles?.description ||
      "Лонгриды, расследования, история создания культовых игр и анализ золотых эпох видеоигр.",
    path: "/articles",
    locale,
  });
}

export default async function ArticlesIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ category?: string; era?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const queryParams = searchParams ? await searchParams : {};
  const selectedCategory = queryParams.category;

  const appLocale = locale as AppLocale;
  const [dictionary, data] = await Promise.all([
    getDictionary(appLocale),
    getArticlesPageData(appLocale, selectedCategory),
  ]);

  const siteUrl = getSiteUrl();
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    {
      name: dictionary.nav.home || "Главная",
      url: new URL(`/${locale}`, siteUrl).toString(),
    },
    {
      name: dictionary.nav.articles || "Статьи",
      url: new URL(`/${locale}/articles`, siteUrl).toString(),
    },
  ]);

  const isFiltered = data.selectedCategory !== "all";

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />

      <main id="main-content" className="page-shell page-main">
        <div className="articles-page-header">
          <h1 className="display-title">
            {dictionary.nav.articles || "Статьи и истории"}
          </h1>
          <FilterTabs
            items={data.categoryTabs.map((tab) => ({
              ...tab,
              href:
                tab.id === "all"
                  ? `/${locale}/articles`
                  : `/${locale}/articles?category=${tab.id}`,
            }))}
            activeId={data.selectedCategory}
            ariaLabel={
              dictionary.articles?.filterAriaLabel ||
              "Фильтр статей по рубрикам"
            }
            className="articles-category-tabs"
          />
        </div>

        {/* Featured Story Hero Banner - matches design/reference/06-articles.png */}
        <div className="articles-featured-hero">
          <ArticlesHeroBanner item={data.heroFeatured} />
        </div>

        {/* Filtered view vs full magazine layout */}
        {isFiltered ? (
          <section className="home-section" aria-labelledby="filtered-articles-heading">
            <div className="news-section-header">
              <SectionHeading
                title={
                  data.categoryTabs.find((t) => t.id === data.selectedCategory)
                    ?.label || "Статьи"
                }
              />
              <Link href={`/${locale}/articles`} className="muted text-sm">
                ← {dictionary.searchPage?.reset || "Сбросить фильтр"}
              </Link>
            </div>

            {data.editorPicks.length === 0 && data.latestArticles.length === 0 ? (
              <div className="search-empty-state">
                <p className="muted">
                  {dictionary.searchPage?.noResultsQuery || "В этой категории пока нет опубликованных материалов."}
                </p>
                <Link href={`/${locale}/articles`} className="admin-btn admin-btn--primary">
                  {dictionary.searchPage?.viewAll || "Смотреть все статьи"}
                </Link>
              </div>
            ) : (
              <div className="card-grid articles-latest-grid">
                {[...data.editorPicks, ...data.latestArticles].map((item) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    variant="grid"
                    showCornerBrackets
                  />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Editor Picks */}
            <section
              className="home-section"
              aria-labelledby="editor-picks-heading"
            >
              <SectionHeading
                title={dictionary.articles?.editorPicks || "Выбор редакции"}
                actionHref={`/${locale}/articles`}
                actionLabel={dictionary.articles?.viewAll || "Смотреть все"}
              />
              <div className="articles-grid">
                {data.editorPicks.map((item) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    variant="featured"
                    showCornerBrackets
                  />
                ))}
              </div>
            </section>

            {/* Game History by Era Timeline */}
            <section className="home-section" aria-labelledby="timeline-heading">
              <SectionHeading
                title={
                  dictionary.articles?.historyByEra || "Игровая история по годам"
                }
                kicker={
                  dictionary.articles?.historyKicker ||
                  "Ключевые игры, события и люди, которые сформировали индустрию."
                }
              />
              <Timeline items={data.eraTimelineItems} variant="horizontal" />
            </section>

            {/* Latest Materials */}
            <section
              className="home-section"
              aria-labelledby="latest-articles-heading"
            >
              <div className="news-section-header">
                <SectionHeading
                  title={
                    dictionary.articles?.latestMaterials || "Последние материалы"
                  }
                />
                <div className="news-sort-wrap">
                  <span className="muted">
                    {dictionary.articles?.sortNewest || "Сначала новые"}
                  </span>
                  <span aria-hidden="true">▾</span>
                </div>
              </div>

              <div className="card-grid articles-latest-grid">
                {data.latestArticles.map((item) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    variant="grid"
                    showCornerBrackets
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {/* Newsletter (Commented out per request) */}
        <section className="home-section--newsletter">
          <NewsletterBanner />
        </section>
      </main>
    </>
  );
}

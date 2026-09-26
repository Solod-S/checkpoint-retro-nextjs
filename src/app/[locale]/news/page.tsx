import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentCard } from "@/components/cards/ContentCard";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { Pagination } from "@/components/ui/Pagination";
import { RetroFrame } from "@/components/ui/RetroFrame";
import { getNewsPageData } from "@/lib/data/news";
import { isLocale, type AppLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { JsonLd, buildBreadcrumbsJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl } from "@/lib/seo/site";

const PAGE_SIZE = 4;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale as AppLocale);

  return buildPageMetadata({
    title: dictionary.nav.news || "Новости ретро-гейминга",
    description:
      dictionary.news?.description ||
      "Свежие новости из мира ретро-игр, находки прототипов, анонсы переизданий и ретро-железа.",
    path: "/news",
    locale,
  });
}

export default async function NewsIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ platform?: string; page?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const queryParams = searchParams ? await searchParams : {};
  const selectedPlatform = queryParams.platform || "all";
  const requestedPage = Math.max(1, parseInt(queryParams.page ?? "1", 10) || 1);

  const appLocale = locale as AppLocale;
  const [dictionary, data] = await Promise.all([
    getDictionary(appLocale),
    getNewsPageData(appLocale),
  ]);

  const siteUrl = getSiteUrl();
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    {
      name: dictionary.nav.home || "Главная",
      url: new URL(`/${locale}`, siteUrl).toString(),
    },
    {
      name: dictionary.nav.news || "Новости",
      url: new URL(`/${locale}/news`, siteUrl).toString(),
    },
  ]);

  // Filter news by selected platform if specified
  const filteredNews =
    selectedPlatform === "all"
      ? data.allNews
      : data.allNews.filter(
          (item) => item.platform?.key.toLowerCase() === selectedPlatform.toLowerCase()
        );

  // Pagination calculation
  const totalNews = filteredNews.length;
  const totalPages = Math.max(1, Math.ceil(totalNews / PAGE_SIZE));
  const safePage = Math.min(requestedPage, totalPages);
  const paginatedNews = filteredNews.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const buildPageHref = (pageNumber: number) => {
    const sp = new URLSearchParams();
    if (selectedPlatform && selectedPlatform !== "all") {
      sp.set("platform", selectedPlatform);
    }
    if (pageNumber > 1) {
      sp.set("page", String(pageNumber));
    }
    const qs = sp.toString();
    return qs ? `/${locale}/news?${qs}` : `/${locale}/news`;
  };

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />

      <main id="main-content" className="page-shell page-main">
        <div className="news-page-header">
          <h1 className="display-title">{dictionary.nav.news || "Новости"}</h1>
          <FilterTabs
            items={data.platformTabs.map((platform) => ({
              ...platform,
              href:
                platform.id === "all"
                  ? `/${locale}/news`
                  : `/${locale}/news?platform=${platform.id}`,
            }))}
            activeId={selectedPlatform}
            ariaLabel={
              dictionary.news?.filterAriaLabel || "Фильтр новостей по платформам"
            }
            className="news-platform-tabs"
          />
        </div>

        <div className="news-layout-grid">
          {/* Main News Content Column */}
          <div className="news-main-col">
            {/* Lead / Breaking News Card */}
            {selectedPlatform === "all" && safePage === 1 ? (
              <div className="news-lead-wrap">
                <ContentCard
                  item={data.leadNews}
                  variant="featured"
                  showCornerBrackets
                  className="news-lead-card"
                />
              </div>
            ) : null}

            {/* All News Grid */}
            <section
              className="news-all-section"
              aria-labelledby="all-news-heading"
            >
              <div className="news-section-header">
                <h2 id="all-news-heading" className="news-section-title">
                  {selectedPlatform !== "all"
                    ? `${dictionary.news?.allNews || "Новости"}: ${
                        data.platformTabs.find((p) => p.id === selectedPlatform)?.label ||
                        selectedPlatform.toUpperCase()
                      }`
                    : dictionary.news?.allNews || "Все новости"}
                </h2>
                <div className="news-sort-wrap">
                  <span className="muted">
                    {dictionary.news?.sortNewest || "Сначала новые"}
                  </span>
                  <span aria-hidden="true">▾</span>
                </div>
              </div>

              {paginatedNews.length === 0 ? (
                <div className="search-empty-state">
                  <p className="muted">
                    {dictionary.searchPage?.noResultsQuery || "Новостей в этой рубрике пока нет."}
                  </p>
                  <Link href={`/${locale}/news`} className="admin-btn admin-btn--primary">
                    {dictionary.searchPage?.viewAll || "Смотреть все новости"}
                  </Link>
                </div>
              ) : (
                <div className="card-grid news-cards-grid">
                  {paginatedNews.map((item) => (
                    <ContentCard
                      key={item.id}
                      item={item}
                      variant="grid"
                      showCornerBrackets
                    />
                  ))}
                </div>
              )}

              {/* Pagination only renders if totalPages > 1 */}
              {totalPages > 1 ? (
                <div className="news-pagination-wrap">
                  <Pagination
                    currentPage={safePage}
                    totalPages={totalPages}
                    hrefBuilder={buildPageHref}
                  />
                </div>
              ) : null}
            </section>
          </div>

          {/* Sidebar: Popular This Week */}
          <aside
            className="news-sidebar"
            aria-label={dictionary.news?.popularWeekly || "Популярное за неделю"}
          >
            <RetroFrame
              className="popular-news-box"
              brackets
              bracketVariant="orange"
            >
              <h2 className="popular-news-box__title">
                {dictionary.news?.popularWeekly || "Популярное за неделю"}
              </h2>

              <ol className="popular-news-list">
                {data.popularNewsWeekly.map((item) => (
                  <li key={item.id} className="popular-news-item">
                    <span className="popular-news-rank" aria-hidden="true">
                      {item.rank}
                    </span>
                    <div className="popular-news-thumb">
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        fill
                        sizes="60px"
                        className="popular-news-image"
                      />
                    </div>
                    <div className="popular-news-info">
                      <Link href={item.slug} className="popular-news-link">
                        {item.title}
                      </Link>
                      <span className="popular-news-views">
                        {item.viewsCount}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </RetroFrame>
          </aside>
        </div>

        {/* Newsletter (Commented out per request) */}
        <section className="home-section--newsletter">
          <NewsletterBanner />
        </section>
      </main>
    </>
  );
}

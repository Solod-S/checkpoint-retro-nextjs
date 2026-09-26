import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { Pagination } from "@/components/ui/Pagination";
import { PlatformBadge } from "@/components/ui/PlatformBadge";
import { RetroFrame } from "@/components/ui/RetroFrame";
import { SearchField } from "@/components/ui/SearchField";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getLocalizedPopularQueries,
  getLocalizedRecentQueries,
  getLocalizedRelatedTopics,
} from "@/fixtures/search";
import { isLocale, type AppLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { getSearchProvider } from "@/lib/search/provider";
import { PostKind } from "@/lib/search/types";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; era?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale as AppLocale);
  const { q, era } = await searchParams;

  const baseTitle = dictionary.searchPage?.title || "Поиск";
  const queryPart = q ? `${q} ` : era ? `[${era}] ` : "";

  return {
    title: queryPart
      ? `${baseTitle}: ${queryPart}— Checkpoint Retro`
      : `${baseTitle} — Checkpoint Retro`,
    description:
      dictionary.searchPage?.subtitle ||
      "Полнотекстовый поиск по архиву ретро-игр, статей и новостей.",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    q?: string;
    type?: string;
    platform?: string;
    era?: string;
    category?: string;
    page?: string;
  }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const appLocale = locale as AppLocale;
  const dictionary = await getDictionary(appLocale);

  const queryParams = await searchParams;
  const rawQuery = queryParams.q ?? "";
  const selectedType = queryParams.type as PostKind | "ALL" | undefined;
  const selectedPlatform = queryParams.platform;
  const selectedEra = queryParams.era;
  const currentPage = Math.max(1, parseInt(queryParams.page ?? "1", 10) || 1);

  const searchProvider = getSearchProvider();
  const searchResult = await searchProvider.search({
    query: rawQuery,
    locale: appLocale,
    kind: selectedType && selectedType !== "ALL" ? selectedType : "ALL",
    platform: selectedPlatform,
    era: selectedEra,
    page: currentPage,
    pageSize: 6,
  });

  const popularQueries = getLocalizedPopularQueries(appLocale);
  const recentQueries = getLocalizedRecentQueries(appLocale);
  const relatedTopics = getLocalizedRelatedTopics(appLocale);

  const buildSearchUrl = (newParams: {
    q?: string;
    type?: string;
    platform?: string;
    era?: string;
    page?: number;
  }) => {
    const sp = new URLSearchParams();
    const q = newParams.q !== undefined ? newParams.q : rawQuery;
    if (q) sp.set("q", q);

    const type =
      newParams.type !== undefined ? newParams.type : selectedType;
    if (type && type !== "ALL") sp.set("type", type);

    const plat =
      newParams.platform !== undefined
        ? newParams.platform
        : selectedPlatform;
    if (plat && plat !== "all") sp.set("platform", plat);

    const era =
      newParams.era !== undefined ? newParams.era : selectedEra;
    if (era && era !== "all") sp.set("era", era);

    const page =
      newParams.page !== undefined ? newParams.page : currentPage;
    if (page > 1) sp.set("page", String(page));

    const qs = sp.toString();
    return qs ? `/${locale}/search?${qs}` : `/${locale}/search`;
  };

  const getKindLabel = (kind: string) => {
    if (kind === "ARTICLE") return dictionary.content?.article || "СТАТЬЯ";
    if (kind === "NEWS") return dictionary.content?.news || "НОВОСТИ";
    return dictionary.content?.story || "ИСТОРИЯ";
  };

  return (
    <main id="main-content" className="page-shell page-main search-page">
      <header className="search-header">
        <h1 className="display-title">{dictionary.searchPage?.title || "Поиск"}</h1>
        <p className="search-subtitle muted">
          {dictionary.searchPage?.subtitle ||
            "Найдите статьи, новости и истории из мира классических игр"}
        </p>

        {/* Terminal Search Prompt */}
        <div className="search-prompt-wrap">
          <SearchField
            initialQuery={rawQuery}
            action={`/${locale}/search`}
            placeholder={
              dictionary.searchPage?.placeholder ||
              "Введите запрос (например: Dreamcast, Super Nintendo, Doom...)"
            }
            buttonLabel={dictionary.searchPage?.button || "Найти"}
          />
        </div>

        {/* Filter Controls Row */}
        <div className="search-controls-bar">
          <div className="search-type-tabs">
            <Link
              href={buildSearchUrl({ type: "ALL", page: 1 })}
              className={`search-type-tab ${
                !selectedType || selectedType === "ALL"
                  ? "search-type-tab--active"
                  : ""
              }`}
            >
              {dictionary.searchPage?.all || "Все"} ({searchResult.countsByKind.all})
            </Link>
            <Link
              href={buildSearchUrl({ type: PostKind.NEWS, page: 1 })}
              className={`search-type-tab ${
                selectedType === PostKind.NEWS ? "search-type-tab--active" : ""
              }`}
            >
              {dictionary.searchPage?.news || "Новости"} ({searchResult.countsByKind.news})
            </Link>
            <Link
              href={buildSearchUrl({ type: PostKind.ARTICLE, page: 1 })}
              className={`search-type-tab ${
                selectedType === PostKind.ARTICLE
                  ? "search-type-tab--active"
                  : ""
              }`}
            >
              {dictionary.searchPage?.articles || "Статьи"} ({searchResult.countsByKind.article})
            </Link>
          </div>

          <div className="search-filter-dropdowns">
            <Link
              href={buildSearchUrl({ platform: "all", page: 1 })}
              className={`admin-btn admin-btn--sm ${
                !selectedPlatform || selectedPlatform === "all"
                  ? "admin-btn--primary"
                  : "admin-btn--secondary"
              }`}
            >
              {dictionary.searchPage?.allPlatforms || "Все платформы"}
            </Link>
            <Link
              href={buildSearchUrl({ platform: "sega", page: 1 })}
              className={`admin-btn admin-btn--sm ${
                selectedPlatform === "sega"
                  ? "admin-btn--primary"
                  : "admin-btn--secondary"
              }`}
            >
              SEGA
            </Link>
            <Link
              href={buildSearchUrl({ platform: "nintendo", page: 1 })}
              className={`admin-btn admin-btn--sm ${
                selectedPlatform === "nintendo"
                  ? "admin-btn--primary"
                  : "admin-btn--secondary"
              }`}
            >
              Nintendo
            </Link>
            <Link
              href={buildSearchUrl({ platform: "playstation", page: 1 })}
              className={`admin-btn admin-btn--sm ${
                selectedPlatform === "playstation"
                  ? "admin-btn--primary"
                  : "admin-btn--secondary"
              }`}
            >
              PlayStation
            </Link>
          </div>
        </div>
      </header>

      {/* Main Results + Sidebar Grid */}
      <div className="search-layout-grid">
        {/* Results Column */}
        <div className="search-results-col">
          <div className="search-count-bar">
            {rawQuery ? (
              <strong>
                {(dictionary.searchPage?.foundWithQuery || "Найдено материалов: {count} по запросу «{query}»")
                  .replace("{count}", String(searchResult.total))
                  .replace("{query}", rawQuery)}
              </strong>
            ) : selectedEra ? (
              <strong>
                {dictionary.articles?.historyByEra || "Эпоха"}: {selectedEra} ({searchResult.total})
              </strong>
            ) : (
              <strong>
                {(dictionary.searchPage?.archiveCatalog || "Каталог архива: {count} материалов")
                  .replace("{count}", String(searchResult.total))}
              </strong>
            )}

            {selectedEra ? (
              <Link
                href={buildSearchUrl({ era: "all", page: 1 })}
                className="admin-badge admin-badge--published"
                style={{ marginLeft: "0.75rem", textDecoration: "none", cursor: "pointer" }}
                title="Сбросить эпоху"
              >
                🕹️ {selectedEra} ✕
              </Link>
            ) : null}
          </div>

          {searchResult.hits.length === 0 ? (
            <div
              style={{
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                background: "var(--background-surface)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>👾</div>
              <h2 style={{ fontSize: "1.2rem", color: "var(--accent-action)", marginBottom: "0.5rem" }}>
                {dictionary.searchPage?.notFoundTitle || "Ничего не найдено"}
              </h2>
              <p className="muted" style={{ maxWidth: "480px", margin: "0 auto" }}>
                {(dictionary.searchPage?.notFoundDesc || "По запросу «{query}» материалов не обнаружено.")
                  .replace("{query}", rawQuery || selectedEra || "")}
              </p>
              {selectedEra || rawQuery ? (
                <div style={{ marginTop: "1rem" }}>
                  <Link
                    href={`/${locale}/search`}
                    className="admin-btn admin-btn--primary"
                  >
                    {dictionary.searchPage?.reset || "Сбросить все фильтры"}
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="search-results-list">
              {searchResult.hits.map((item) => (
                <article key={item.id} className="search-result-card">
                  {item.imageUrl ? (
                    <div className="search-result-card__thumb">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="search-result-card__image"
                      />
                    </div>
                  ) : null}

                  <div className="search-result-card__content">
                    <div className="search-result-card__meta-top">
                      <span className="search-result-card__kind-badge">
                        {getKindLabel(item.kind)}
                      </span>
                      <time dateTime={item.publishedAt}>{item.publishedAt}</time>
                      {item.platform ? (
                        <PlatformBadge platform={item.platform.key} size="sm">
                          {item.platform.label}
                        </PlatformBadge>
                      ) : null}
                      {item.era ? (
                        <span className="muted text-xs">
                          [{item.era}]
                        </span>
                      ) : null}
                    </div>

                    <h2 className="search-result-card__title">
                      <Link href={item.slug} className="search-result-card__link">
                        {item.title}
                      </Link>
                    </h2>

                    <p className="search-result-card__excerpt muted">
                      {item.excerpt}
                    </p>

                    <div className="search-result-card__meta-bottom">
                      <span className="search-result-card__read-time muted">
                        ⏱ {item.readingTimeMinutes} {dictionary.content?.minRead || "мин чтения"}
                      </span>
                      {item.authorName ? (
                        <span className="search-result-card__author muted">
                          • {item.authorName}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {searchResult.totalPages > 1 ? (
            <div className="search-pagination-wrap">
              <Pagination
                currentPage={searchResult.page}
                totalPages={searchResult.totalPages}
                hrefBuilder={(p) => buildSearchUrl({ page: p })}
              />
            </div>
          ) : null}
        </div>

        {/* Sidebar */}
        <aside className="search-sidebar" aria-label="Фильтры и рекомендации">
          {/* Era Filter Box */}
          <RetroFrame className="search-aside-box" brackets bracketVariant="orange">
            <h3 className="search-aside-box__title">
              <span aria-hidden="true">🕹️</span>{" "}
              {dictionary.articles?.historyByEra || "Эпохи видеоигр"}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", padding: "0.75rem 1rem" }}>
              {["1970s", "1980s", "1990s", "2000s"].map((eraKey) => {
                const isActive = selectedEra?.toLowerCase().includes(eraKey.toLowerCase());
                return (
                  <Link
                    key={eraKey}
                    href={buildSearchUrl({
                      era: isActive ? "all" : eraKey,
                      page: 1,
                    })}
                    className={`admin-btn admin-btn--sm ${
                      isActive ? "admin-btn--primary" : "admin-btn--secondary"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    {eraKey}
                  </Link>
                );
              })}
            </div>
          </RetroFrame>

          {/* Popular Queries */}
          <RetroFrame className="search-aside-box" brackets bracketVariant="orange">
            <h3 className="search-aside-box__title">
              <span aria-hidden="true">🔍</span>{" "}
              {dictionary.searchPage?.popularQueries || "Популярные запросы"}
            </h3>
            <ul className="search-aside-list">
              {popularQueries.map((q) => (
                <li key={q} className="search-aside-item">
                  <Link
                    href={`/${locale}/search?q=${encodeURIComponent(q)}`}
                    className="search-aside-link"
                  >
                    <span>{q}</span>
                    <span aria-hidden="true">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </RetroFrame>

          {/* Recent Queries */}
          <RetroFrame className="search-aside-box search-aside-box--recent" brackets bracketVariant="orange">
            <h3 className="search-aside-box__title">
              <span aria-hidden="true">⏱</span>{" "}
              {dictionary.searchPage?.recentQueries || "Недавние запросы"}
            </h3>
            <ul className="search-aside-list">
              {recentQueries.map((q) => (
                <li key={q} className="search-aside-item">
                  <Link
                    href={`/${locale}/search?q=${encodeURIComponent(q)}`}
                    className="search-aside-query"
                    style={{ textDecoration: "none" }}
                  >
                    {q}
                  </Link>
                </li>
              ))}
            </ul>
          </RetroFrame>

          {/* Help box */}
          <RetroFrame className="search-help-box" brackets bracketVariant="orange">
            <div className="search-help-box__icon" aria-hidden="true">
              👾
            </div>
            <strong className="search-help-box__title">
              {dictionary.searchPage?.helpTitle || "Не нашли нужный материал?"}
            </strong>
            <p className="search-help-box__text muted">
              {dictionary.searchPage?.helpDesc ||
                "Попробуйте изменить поисковые слова или сбросить фильтры платформ."}
            </p>
          </RetroFrame>
        </aside>
      </div>

      {/* Related Topics */}
      <section className="home-section" aria-labelledby="related-topics-heading">
        <SectionHeading
          title={dictionary.searchPage?.relatedTopics || "Похожие темы"}
          actionHref={`/${locale}/articles`}
          actionLabel={dictionary.searchPage?.viewAll || "Смотреть все"}
        />
        <div className="search-related-topics-grid">
          {relatedTopics.map((top) => (
            <Link key={top.id} href={top.slug} className="search-topic-card">
              <RetroFrame className="search-topic-card__frame">
                <div className="search-topic-card__thumb">
                  <Image src={top.imageUrl} alt={top.title} fill sizes="44px" />
                </div>
                <div className="search-topic-card__info">
                  <strong className="search-topic-card__title">{top.title}</strong>
                  <span className="search-topic-card__count muted">{top.countLabel}</span>
                </div>
              </RetroFrame>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter (Commented out per request) */}
      <section className="home-section--newsletter">
        <NewsletterBanner />
      </section>
    </main>
  );
}

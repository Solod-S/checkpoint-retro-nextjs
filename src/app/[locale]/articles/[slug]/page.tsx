import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleShare } from "@/components/article/ArticleShare";
import { FactBox } from "@/components/article/FactBox";
import { TableOfContents } from "@/components/article/TableOfContents";
import { ContentCard } from "@/components/cards/ContentCard";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { RetroFrame } from "@/components/ui/RetroFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLocalizedEditorPicks } from "@/fixtures/articles";
import { getDetailedArticleBySlug, detailedArticlesList } from "@/fixtures/articlesContent";
import { singleArticleFixture } from "@/fixtures/singleArticle";
import { calculateReadingTime } from "@/lib/content/readingTime";
import { getPostBySlug } from "@/lib/db/repositories/posts";
import { isLocale, type AppLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import {
  JsonLd,
  buildArticleJsonLd,
  buildBreadcrumbsJsonLd,
} from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl } from "@/lib/seo/site";

export function generateStaticParams() {
  const locales: AppLocale[] = ["ru", "uk", "en"];
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    for (const art of detailedArticlesList) {
      params.push({
        locale,
        slug: art.slugs[locale],
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const detailed = getDetailedArticleBySlug(locale as AppLocale, slug);

  let dbPost = null;
  if (!detailed) {
    try {
      dbPost = await getPostBySlug(locale as AppLocale, slug);
    } catch {
      // Database offline fallback
    }
  }

  if (!detailed && !dbPost && slug !== "kak-sozdavali-pervyj-fallout" && slug !== singleArticleFixture.id) {
    return {};
  }

  const title =
    detailed?.article.title[locale as AppLocale] ||
    dbPost?.seoTitle ||
    dbPost?.title ||
    singleArticleFixture.title;

  const description =
    detailed?.article.dek[locale as AppLocale] ||
    dbPost?.seoDescription ||
    dbPost?.excerpt ||
    singleArticleFixture.dek;

  const image =
    detailed?.article.heroImageUrl ||
    dbPost?.featuredMedia?.storageKey ||
    singleArticleFixture.heroImageUrl;

  return buildPageMetadata({
    title,
    description,
    path: `/articles/${slug}`,
    locale,
    type: "article",
    image,
    publishedTime: dbPost?.publishedAt?.toISOString(),
    authors: [
      detailed?.article.author.name[locale as AppLocale] ||
        dbPost?.author?.name ||
        singleArticleFixture.author.name,
    ],
    translatedSlugs: detailed?.article.slugs || dbPost?.translatedSlugs,
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const appLocale = locale as AppLocale;
  const dictionary = await getDictionary(appLocale);
  const detailed = getDetailedArticleBySlug(appLocale, slug);

  let dbPost = null;
  if (!detailed) {
    try {
      dbPost = await getPostBySlug(appLocale, slug);
    } catch {
      // Graceful fallback when DB is offline
    }
  }

  // If article not found in DB and not in static detailed list, return 404
  if (!detailed && !dbPost && slug !== "kak-sozdavali-pervyj-fallout" && slug !== singleArticleFixture.id) {
    notFound();
  }

  const title =
    detailed?.article.title[appLocale] ??
    dbPost?.title ??
    singleArticleFixture.title;

  const dek =
    detailed?.article.dek[appLocale] ??
    dbPost?.excerpt ??
    singleArticleFixture.dek;

  const kicker =
    detailed?.article.kicker[appLocale] ??
    dictionary.home?.kicker ??
    "СТАТЬЯ";

  const publishedAt =
    detailed?.article.publishedAt[appLocale] ??
    (dbPost?.publishedAt
      ? new Intl.DateTimeFormat(locale, {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(dbPost.publishedAt)
      : singleArticleFixture.publishedAt);

  const authorName =
    detailed?.article.author.name[appLocale] ??
    dbPost?.author?.name ??
    singleArticleFixture.author.name;

  const heroImageUrl =
    detailed?.article.heroImageUrl ??
    dbPost?.featuredMedia?.storageKey ??
    singleArticleFixture.heroImageUrl;

  const toc = detailed?.article.toc[appLocale] ?? singleArticleFixture.toc;
  const factBox =
    detailed?.article.factBox[appLocale] ?? singleArticleFixture.factBox;
  const sections = detailed?.article.sections[appLocale];

  const readingTimeMinutes = sections && sections.length > 0
    ? calculateReadingTime(sections)
    : (detailed?.article.readingTimeMinutes ?? singleArticleFixture.readingTimeMinutes);

  const siteUrl = getSiteUrl();
  const articleUrl = new URL(`/${locale}/articles/${slug}`, siteUrl).toString();

  const articleJsonLd = buildArticleJsonLd({
    headline: title,
    description: dek,
    url: articleUrl,
    imageUrl: heroImageUrl,
    datePublished:
      dbPost?.publishedAt?.toISOString() ||
      new Date("2024-05-18T10:00:00Z").toISOString(),
    authorName,
    isNews: false,
  });

  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    {
      name: dictionary.nav.home || "Главная",
      url: new URL(`/${locale}`, siteUrl).toString(),
    },
    {
      name: dictionary.nav.articles || "Статьи",
      url: new URL(`/${locale}/articles`, siteUrl).toString(),
    },
    { name: title, url: articleUrl },
  ]);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />

      <article id="main-content" className="page-shell page-main article-page">
        {/* Header & Title Area */}
        <header className="article-header">
          <div className="article-header__kicker-wrap">
            <span className="article-header__kicker">{kicker}</span>
          </div>

          <h1 className="article-header__title">{title}</h1>

          <p className="article-header__dek">{dek}</p>

          <div className="article-header__meta-row">
            <div className="article-header__meta-item">
              <span aria-hidden="true">📅</span>
              <time dateTime={publishedAt}>{publishedAt}</time>
            </div>

            <div className="article-header__meta-item">
              <span aria-hidden="true">⏱</span>
              <span>
                {readingTimeMinutes}{" "}
                {dictionary.content?.minRead || "мин чтения"}
              </span>
            </div>

            <div className="article-header__author">
              <div className="article-header__author-avatar" aria-hidden="true">
                👤
              </div>
              <span className="article-header__author-name">{authorName}</span>
            </div>
          </div>
        </header>

        {/* Main Editorial Grid */}
        <div className="article-layout">
          {/* Left Rail: TOC & Actions */}
          <div className="article-layout__sidebar">
            <TableOfContents items={toc} />
            <ArticleShare className="article-layout__share" />
          </div>

          {/* Center / Main Content Column */}
          <div className="article-layout__content">
            {/* Main Hero Image */}
            <figure className="article-hero-media">
              <div className="article-hero-media__frame">
                <CornerBrackets variant="orange" size={10} />
                <div className="article-hero-media__image-wrap">
                  <Image
                    src={heroImageUrl}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 832px"
                    className="article-hero-media__image"
                  />
                </div>
              </div>
              <figcaption className="article-hero-media__caption">
                {title}
              </figcaption>
            </figure>

            {/* Quick Fact Box */}
            {factBox ? (
              <div className="article-factbox-wrap">
                <FactBox title={factBox.title} items={factBox.items} />
              </div>
            ) : null}

            {/* Article Body Content */}
            <div className="article-body">
              {sections && sections.length > 0 ? (
                sections.map((sec, sIdx) => (
                  <section key={sec.id} id={sec.id} className="article-section">
                    <h2 className="article-section__title">{sec.title}</h2>
                    {sec.paragraphs.map((pText, pIdx) => (
                      <p
                        key={pIdx}
                        className={`article-paragraph ${
                          sIdx === 0 && pIdx === 0
                            ? "article-paragraph--lead"
                            : ""
                        }`}
                      >
                        {sIdx === 0 && pIdx === 0 ? (
                          <span className="article-dropcap">
                            {pText.charAt(0)}
                          </span>
                        ) : null}
                        {sIdx === 0 && pIdx === 0 ? pText.slice(1) : pText}
                      </p>
                    ))}

                    {sec.quote ? (
                      <blockquote className="article-quote">
                        <RetroFrame
                          brackets
                          bracketVariant="orange"
                          className="article-quote__frame"
                        >
                          <div
                            className="article-quote__icon"
                            aria-hidden="true"
                          >
                            “
                          </div>
                          <div className="article-quote__content">
                            <p className="article-quote__text">
                              {sec.quote.text}
                            </p>
                            <cite className="article-quote__author">
                              {sec.quote.author}
                            </cite>
                          </div>
                        </RetroFrame>
                      </blockquote>
                    ) : null}

                    {sec.figure ? (
                      <figure className="article-inline-figure">
                        <div className="article-inline-figure__frame">
                          <CornerBrackets variant="orange" size={8} />
                          <div className="article-inline-figure__image-wrap">
                            <Image
                              src={sec.figure.imageUrl}
                              alt={sec.figure.caption || sec.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 750px"
                              className="article-inline-figure__image"
                            />
                          </div>
                        </div>
                        {sec.figure.caption ? (
                          <figcaption className="article-inline-figure__caption">
                            {sec.figure.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                  </section>
                ))
              ) : (
                <div className="article-section">
                  <p className="article-paragraph article-paragraph--lead">
                    {dek}
                  </p>
                  <p className="article-paragraph muted">
                    {dictionary.common?.comingSoon ||
                      "Материал готовится к публикации."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Materials Section */}
        <section className="home-section" aria-labelledby="related-heading">
          <SectionHeading
            title={dictionary.content?.relatedMaterials || "Похожие материалы"}
            actionHref={`/${locale}/articles`}
            actionLabel={dictionary.content?.viewAll || "Смотреть все"}
          />
          <div className="card-grid">
            {getLocalizedEditorPicks(appLocale)
              .filter((item) => !item.slug.endsWith(slug))
              .slice(0, 3)
              .map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                  variant="featured"
                  showCornerBrackets
                />
              ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="home-section--newsletter">
          <NewsletterBanner />
        </section>
      </article>
    </>
  );
}

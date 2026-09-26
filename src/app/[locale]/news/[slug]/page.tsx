import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentCard } from "@/components/cards/ContentCard";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { PlatformBadge } from "@/components/ui/PlatformBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getLocalizedLeadNews,
  getLocalizedNewsGridFixtures,
} from "@/fixtures/news";
import {
  detailedNewsList,
  getDetailedNewsBySlug,
} from "@/fixtures/newsContent";
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

export async function generateStaticParams() {
  const locales: AppLocale[] = ["ru", "uk", "en"];
  const params: { locale: string; slug: string }[] = [];
  for (const item of detailedNewsList) {
    for (const loc of locales) {
      params.push({ locale: loc, slug: item.slugs[loc] });
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

  const appLocale = locale as AppLocale;
  const fallbackLead = getLocalizedLeadNews(appLocale);
  const detailed = getDetailedNewsBySlug(appLocale, slug);

  let dbPost = null;
  if (!detailed) {
    try {
      dbPost = await getPostBySlug(appLocale, slug);
    } catch {
      // Database offline fallback
    }
  }

  if (!detailed && !dbPost) {
    return {};
  }

  const [dictionary] = await Promise.all([
    getDictionary(appLocale),
  ]);

  const title =
    detailed?.news.title[appLocale] ||
    dbPost?.seoTitle ||
    dbPost?.title ||
    fallbackLead.title;

  const description =
    detailed?.news.excerpt[appLocale] ||
    dbPost?.seoDescription ||
    dbPost?.excerpt ||
    fallbackLead.excerpt ||
    "";

  const image =
    detailed?.news.imageUrl ||
    dbPost?.featuredMedia?.storageKey ||
    fallbackLead.imageUrl;

  return buildPageMetadata({
    title,
    description,
    path: `/news/${slug}`,
    locale,
    type: "article",
    image,
    publishedTime: dbPost?.publishedAt?.toISOString(),
    authors: [
      dbPost?.author?.name ||
        dictionary.content?.editorialTeam ||
        "Редакция Checkpoint",
    ],
    translatedSlugs: detailed?.news.slugs || dbPost?.translatedSlugs,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const appLocale = locale as AppLocale;
  const dictionary = await getDictionary(appLocale);
  const detailed = getDetailedNewsBySlug(appLocale, slug);
  const fallbackLead = getLocalizedLeadNews(appLocale);
  const fallbackGrid = getLocalizedNewsGridFixtures(appLocale);

  let dbPost = null;
  if (!detailed) {
    try {
      dbPost = await getPostBySlug(appLocale, slug);
    } catch {
      // Graceful fallback when DB is offline
    }
  }

  if (!detailed && !dbPost) {
    notFound();
  }

  const title =
    detailed?.news.title[appLocale] ??
    dbPost?.title ??
    "";

  const excerpt =
    detailed?.news.excerpt[appLocale] ??
    dbPost?.excerpt ??
    fallbackLead.excerpt;

  const publishedAt =
    detailed?.news.publishedAt[appLocale] ??
    (dbPost?.publishedAt
      ? new Intl.DateTimeFormat(locale, {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(dbPost.publishedAt)
      : fallbackLead.publishedAt);

  const imageUrl =
    detailed?.news.imageUrl ??
    dbPost?.featuredMedia?.storageKey ??
    fallbackLead.imageUrl;

  const imageAlt =
    detailed?.news.imageAlt[appLocale] ??
    title;

  const platformKey =
    detailed?.news.platform.key ??
    fallbackLead.platform?.key ??
    "default";

  const platformLabel =
    detailed?.news.platform.label[appLocale] ??
    fallbackLead.platform?.label ??
    "NEWS";

  const paragraphs: string[] = (
    detailed?.news.body[appLocale] ?? [
      excerpt || "",
      dictionary.common?.comingSoon || "Материал готовится к публикации.",
    ]
  ).filter((p): p is string => Boolean(p && p.trim()));

  const readingTimeMinutes = calculateReadingTime(paragraphs);

  const siteUrl = getSiteUrl();
  const newsUrl = new URL(`/${locale}/news/${slug}`, siteUrl).toString();

  const newsJsonLd = buildArticleJsonLd({
    headline: title,
    description: excerpt || "",
    url: newsUrl,
    imageUrl,
    datePublished:
      dbPost?.publishedAt?.toISOString() ||
      new Date("2024-06-01T12:00:00Z").toISOString(),
    authorName:
      dbPost?.author?.name ||
      dictionary.content?.editorialTeam ||
      "Редакция Checkpoint",
    isNews: true,
  });

  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    {
      name: dictionary.nav.home || "Главная",
      url: new URL(`/${locale}`, siteUrl).toString(),
    },
    {
      name: dictionary.nav.news || "Новости",
      url: new URL(`/${locale}/news`, siteUrl).toString(),
    },
    { name: title, url: newsUrl },
  ]);

  return (
    <>
      <JsonLd data={newsJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />

      <article id="main-content" className="page-shell page-main article-page">
        <header className="article-header">
          <div className="article-header__kicker-wrap">
            <PlatformBadge platform={platformKey}>
              {platformLabel}
            </PlatformBadge>
          </div>

          <h1 className="article-header__title">{title}</h1>

          <p className="article-header__dek">{excerpt}</p>

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

            <div className="article-header__meta-item">
              <Link href={`/${locale}/news`} className="muted">
                {dictionary.content?.backToNews || "← Назад ко всем новостям"}
              </Link>
            </div>
          </div>
        </header>

        <div className="article-layout article-layout--news">
          <div className="article-layout__content article-layout__content--full">
            {imageUrl ? (
              <figure className="article-hero-media">
                <div className="article-hero-media__frame">
                  <CornerBrackets variant="orange" size={10} />
                  <div className="article-hero-media__image-wrap">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 832px"
                      className="article-hero-media__image"
                    />
                  </div>
                </div>
              </figure>
            ) : null}

            <div className="article-body">
              {paragraphs.map((pText, idx) => (
                <p
                  key={idx}
                  className={`article-paragraph ${
                    idx === 0 ? "article-paragraph--lead" : ""
                  }`}
                >
                  {idx === 0 ? (
                    <span className="article-dropcap">
                      {pText.charAt(0)}
                    </span>
                  ) : null}
                  {idx === 0 ? pText.slice(1) : pText}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Latest News */}
        <section className="home-section" aria-labelledby="other-news-heading">
          <SectionHeading
            title={dictionary.content?.otherNews || "Другие новости"}
            actionHref={`/${locale}/news`}
            actionLabel={dictionary.home?.allNews || "Все новости"}
          />
          <div className="card-grid">
            {fallbackGrid.slice(0, 4).map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                variant="grid"
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

import { getSiteUrl } from "./site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildWebsiteJsonLd(locale: string) {
  const siteUrl = getSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Checkpoint Retro",
    url: siteUrl,
    description: "Независимый ретро-игровой медиапортал о классических играх и истории индустрии.",
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/${locale}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Checkpoint Retro",
    url: siteUrl,
    logo: `${siteUrl}/public/social/x.svg`,
    sameAs: [
      "https://x.com/checkpoint_retro",
      "https://facebook.com/checkpointretro",
      "https://threads.net/@checkpointretro",
      "https://instagram.com/checkpointretro",
    ],
  };
}

export function buildBreadcrumbsJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleJsonLd({
  headline,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  isNews = false,
}: {
  headline: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  isNews?: boolean;
}) {
  const siteUrl = getSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@type": isNews ? "NewsArticle" : "Article",
    headline,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Checkpoint Retro",
      url: siteUrl,
    },
  };
}

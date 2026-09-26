import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  buildArticleJsonLd,
  buildBreadcrumbsJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { generateRssXml } from "@/lib/seo/rss";

describe("SEO - Metadata Builder (buildPageMetadata)", () => {
  const originalSiteUrl = process.env.SITE_URL;

  beforeAll(() => {
    process.env.SITE_URL = "https://checkpoint-retro.org";
  });

  afterAll(() => {
    process.env.SITE_URL = originalSiteUrl;
  });

  it("builds standard canonical and hreflang links", () => {
    const meta = buildPageMetadata({
      title: "Новости",
      description: "Все ретро-новости",
      path: "/news",
      locale: "ru",
    });

    expect(meta.title).toBe("Новости | Checkpoint Retro");
    expect(meta.description).toBe("Все ретро-новости");

    const alternates = meta.alternates;
    expect(alternates?.canonical).toBe("https://checkpoint-retro.org/ru/news");
    expect(alternates?.languages?.ru).toBe("https://checkpoint-retro.org/ru/news");
    expect(alternates?.languages?.uk).toBe("https://checkpoint-retro.org/uk/news");
    expect(alternates?.languages?.en).toBe("https://checkpoint-retro.org/en/news");
    expect(alternates?.languages?.["x-default"]).toBe("https://checkpoint-retro.org/ru/news");
  });

  it("handles translated slugs correctly for localized articles", () => {
    const meta = buildPageMetadata({
      title: "История создания Castlevania",
      description: "Лонгрид о создании Symphony of the Night",
      path: "/articles/the-making-of-castlevania-sotn",
      locale: "ru",
      type: "article",
      translatedSlugs: {
        ru: "the-making-of-castlevania-sotn",
        uk: "istoriya-stvorennia-castlevania-sotn",
        en: "making-of-castlevania-sotn-retrospective",
      },
    });

    expect(meta.alternates?.canonical).toBe(
      "https://checkpoint-retro.org/ru/articles/the-making-of-castlevania-sotn"
    );
    expect(meta.alternates?.languages?.ru).toBe(
      "https://checkpoint-retro.org/ru/articles/the-making-of-castlevania-sotn"
    );
    expect(meta.alternates?.languages?.uk).toBe(
      "https://checkpoint-retro.org/uk/articles/istoriya-stvorennia-castlevania-sotn"
    );
    expect(meta.alternates?.languages?.en).toBe(
      "https://checkpoint-retro.org/en/articles/making-of-castlevania-sotn-retrospective"
    );
    expect(meta.alternates?.languages?.["x-default"]).toBe(
      "https://checkpoint-retro.org/ru/articles/the-making-of-castlevania-sotn"
    );
  });

  it("sets noindex, follow on search or restricted pages", () => {
    const meta = buildPageMetadata({
      title: "Поиск",
      description: "Результаты поиска",
      path: "/search",
      locale: "ru",
      noindex: true,
    });

    expect(meta.robots).toEqual({ index: false, follow: true });
  });

  it("configures OpenGraph and Twitter card metadata properly", () => {
    const meta = buildPageMetadata({
      title: "SEGA Dreamcast",
      description: "Ретроспектива консоли",
      path: "/articles/sega-dreamcast",
      locale: "en",
      type: "article",
      image: "https://checkpoint-retro.org/images/dreamcast.jpg",
    });

    expect(meta.openGraph?.title).toBe("SEGA Dreamcast");
    expect(meta.openGraph?.locale).toBe("en_US");
    const og = meta.openGraph as Record<string, unknown> | undefined;
    expect(og?.type).toBe("article");
    expect(og?.images).toEqual([
      {
        url: "https://checkpoint-retro.org/images/dreamcast.jpg",
        width: 1200,
        height: 630,
        alt: "SEGA Dreamcast",
      },
    ]);
    const tw = meta.twitter as Record<string, unknown> | undefined;
    expect(tw?.card).toBe("summary_large_image");
    expect(tw?.creator).toBe("@checkpoint_retro");
  });
});

describe("SEO - JSON-LD Builders", () => {
  const originalSiteUrl = process.env.SITE_URL;

  beforeAll(() => {
    process.env.SITE_URL = "https://checkpoint-retro.org";
  });

  afterAll(() => {
    process.env.SITE_URL = originalSiteUrl;
  });

  it("generates WebSite structured data with SearchAction", () => {
    const data = buildWebsiteJsonLd("ru");
    expect(data["@type"]).toBe("WebSite");
    expect(data.name).toBe("Checkpoint Retro");
    expect(data.inLanguage).toBe("ru");
    expect(data.potentialAction["@type"]).toBe("SearchAction");
    expect(data.potentialAction.target).toContain("/ru/search?q=");
  });

  it("generates Organization data with strictly compliant social links", () => {
    const data = buildOrganizationJsonLd();
    expect(data["@type"]).toBe("Organization");
    expect(data.name).toBe("Checkpoint Retro");
    expect(data.sameAs).toContain("https://x.com/checkpoint_retro");
    expect(data.sameAs).toContain("https://facebook.com/checkpointretro");
    expect(data.sameAs).toContain("https://threads.net/@checkpointretro");
    expect(data.sameAs).toContain("https://instagram.com/checkpointretro");

    // Strictly NO VK or YouTube per project rules
    expect(data.sameAs.some((url: string) => url.includes("vk.com"))).toBe(false);
    expect(data.sameAs.some((url: string) => url.includes("youtube.com"))).toBe(false);
  });

  it("generates BreadcrumbList with correct hierarchy and 1-based indexing", () => {
    const data = buildBreadcrumbsJsonLd([
      { name: "Главная", url: "https://checkpoint-retro.org/ru" },
      { name: "Новости", url: "https://checkpoint-retro.org/ru/news" },
      { name: "Анонс", url: "https://checkpoint-retro.org/ru/news/post-1" },
    ]);

    expect(data["@type"]).toBe("BreadcrumbList");
    expect(data.itemListElement).toHaveLength(3);
    expect(data.itemListElement[0].position).toBe(1);
    expect(data.itemListElement[0].name).toBe("Главная");
    expect(data.itemListElement[2].position).toBe(3);
    expect(data.itemListElement[2].name).toBe("Анонс");
  });

  it("generates Article and NewsArticle structured data", () => {
    const articleData = buildArticleJsonLd({
      headline: "Тестовая статья",
      description: "Описание статьи",
      url: "https://checkpoint-retro.org/ru/articles/test",
      datePublished: "2024-05-18T10:00:00.000Z",
      authorName: "Алексей Морозов",
      isNews: false,
    });
    expect(articleData["@type"]).toBe("Article");
    expect(articleData.headline).toBe("Тестовая статья");
    expect(articleData.author.name).toBe("Алексей Морозов");
    expect(articleData.publisher.name).toBe("Checkpoint Retro");

    const newsData = buildArticleJsonLd({
      headline: "Тестовая новость",
      description: "Описание новости",
      url: "https://checkpoint-retro.org/ru/news/test",
      datePublished: "2024-06-01T12:00:00.000Z",
      authorName: "Редакция Checkpoint",
      isNews: true,
    });
    expect(newsData["@type"]).toBe("NewsArticle");
    expect(newsData.headline).toBe("Тестовая новость");
  });
});

describe("SEO - RSS Feed Generator (generateRssXml)", () => {
  const originalSiteUrl = process.env.SITE_URL;

  beforeAll(() => {
    process.env.SITE_URL = "https://checkpoint-retro.org";
  });

  afterAll(() => {
    process.env.SITE_URL = originalSiteUrl;
  });

  it("generates valid RSS 2.0 XML with items and escaped characters", () => {
    const xml = generateRssXml({
      locale: "ru",
      title: "Checkpoint Retro Feed",
      items: [
        {
          title: "Sega & Nintendo: 'Great' Battle <1990s>",
          link: "/ru/articles/sega-nintendo-battle",
          description: "War between 16-bit titans & consoles.",
          pubDate: "2024-08-10T12:00:00Z",
          category: "History",
        },
      ],
    });

    expect(xml).toContain('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
    expect(xml).toContain("<title>Checkpoint Retro Feed</title>");
    expect(xml).toContain("<language>ru</language>");
    expect(xml).toContain("Sega &amp; Nintendo: &apos;Great&apos; Battle &lt;1990s&gt;");
    expect(xml).toContain("https://checkpoint-retro.org/ru/articles/sega-nintendo-battle");
    expect(xml).toContain("<category>History</category>");
  });
});

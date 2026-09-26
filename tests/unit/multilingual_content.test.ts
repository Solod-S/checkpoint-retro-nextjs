import { describe, expect, it } from "vitest";
import { getDetailedArticleBySlug } from "@/fixtures/articlesContent";
import { getLocalizedAllArticles } from "@/fixtures/articles";
import { getLocalizedNewsGridFixtures } from "@/fixtures/news";
import { getDetailedNewsBySlug } from "@/fixtures/newsContent";
import { getLocalizedHeroStory } from "@/fixtures/homepage";
import { FallbackSearchProvider } from "@/lib/search/provider";
import { getDictionary } from "@/lib/i18n/getDictionary";

describe("Multilingual and routing verification", () => {
  it("Dreamcast hero story has localized slugs and correct titles (never points to Fallout)", () => {
    const ruHero = getLocalizedHeroStory("ru");
    expect(ruHero.title).toBe("Почему Dreamcast опередила своё время");
    expect(ruHero.ctaHref).toBe("/ru/articles/pochemu-dreamcast-operedila-svoyo-vremya");
    expect(ruHero.ctaHref).not.toContain("fallout");

    const ukHero = getLocalizedHeroStory("uk");
    expect(ukHero.title).toBe("Чому Dreamcast випередила свій час");
    expect(ukHero.ctaHref).toBe("/uk/articles/chomu-dreamcast-vperedyla-sviy-chas");
    expect(ukHero.ctaHref).not.toContain("fallout");

    const enHero = getLocalizedHeroStory("en");
    expect(enHero.title).toBe("Why Dreamcast was ahead of its time");
    expect(enHero.ctaHref).toBe("/en/articles/why-dreamcast-was-ahead-of-its-time");
    expect(enHero.ctaHref).not.toContain("fallout");
  });

  it("Article details return correct content for Dreamcast and Fallout separately", () => {
    const dreamcastRu = getDetailedArticleBySlug("ru", "pochemu-dreamcast-operedila-svoyo-vremya");
    expect(dreamcastRu).not.toBeNull();
    expect(dreamcastRu?.article.title.ru).toBe("Почему Dreamcast опередила своё время");
    expect(dreamcastRu?.article.factBox.ru.title).toContain("Dreamcast");

    const dreamcastEn = getDetailedArticleBySlug("en", "why-dreamcast-was-ahead-of-its-time");
    expect(dreamcastEn).not.toBeNull();
    expect(dreamcastEn?.article.title.en).toBe("Why Dreamcast was ahead of its time");

    const falloutRu = getDetailedArticleBySlug("ru", "kak-rozhdalsya-originalnyj-fallout-1997");
    expect(falloutRu).not.toBeNull();
    expect(falloutRu?.article.title.ru).toContain("Fallout");
    expect(falloutRu?.article.factBox.ru.title).toContain("Fallout");
  });

  it("News details return specific localized content", () => {
    const newsRu = getDetailedNewsBySlug("ru", "neizvestnyj-prototip-dlya-snes");
    expect(newsRu).not.toBeNull();
    expect(newsRu?.news.title.ru).toContain("SNES");

    const newsEn = getDetailedNewsBySlug("en", "sony-celebrates-30-years-of-playstation");
    expect(newsEn).not.toBeNull();
    expect(newsEn?.news.title.en).toContain("PlayStation");
  });

  it("Search provider returns valid localized links without broken stub IDs", async () => {
    const searchProvider = new FallbackSearchProvider();

    const dreamcastResults = await searchProvider.search({
      query: "Dreamcast",
      locale: "ru",
    });
    expect(dreamcastResults.hits.length).toBeGreaterThan(0);
    const topDreamcast = dreamcastResults.hits[0];
    expect(topDreamcast?.slug).toContain("/ru/articles/pochemu-dreamcast-operedila-svoyo-vremya");

    const zeldaResults = await searchProvider.search({
      query: "Zelda",
      locale: "en",
    });
    expect(zeldaResults.hits.length).toBeGreaterThan(0);
    const topZelda = zeldaResults.hits[0];
    expect(topZelda?.slug).toContain("/en/news/zelda-ocarina-of-time-early-build-recovered");
  });

  it("Dictionaries for RU, UK and EN are complete and valid", async () => {
    const [ru, uk, en] = await Promise.all([
      getDictionary("ru"),
      getDictionary("uk"),
      getDictionary("en"),
    ]);

    expect(ru.language).toBe("Язык");
    expect(uk.language).toBe("Мова");
    expect(en.language).toBe("Language");

    expect(ru.home.cta).toBe("Читать историю");
    expect(uk.home.cta).toBe("Читати історію");
    expect(en.home.cta).toBe("Read Story");

    expect(ru.about.title).toBeDefined();
    expect(uk.about.title).toBeDefined();
    expect(en.about.title).toBeDefined();

    expect(ru.news.popularWeekly).toBeDefined();
    expect(uk.news.popularWeekly).toBeDefined();
    expect(en.news.popularWeekly).toBeDefined();
  });

  it("Every article has a unique slug, unique image, and resolves to detailed content", () => {
    const locales = ["ru", "uk", "en"] as const;

    for (const loc of locales) {
      const articles = getLocalizedAllArticles(loc);
      const slugs = new Set<string>();
      const images = new Set<string>();

      for (const art of articles) {
        expect(slugs.has(art.slug), `Duplicate slug detected in ${loc}: ${art.slug}`).toBe(false);
        slugs.add(art.slug);

        if (art.imageUrl) {
          expect(images.has(art.imageUrl), `Duplicate image detected in ${loc}: ${art.imageUrl} for ${art.title}`).toBe(false);
          images.add(art.imageUrl);
        }

        // Must resolve to detailed content
        const cleanSlug = art.slug.replace(new RegExp(`^/${loc}/articles/`), "");
        const detailed = getDetailedArticleBySlug(loc, cleanSlug);
        expect(detailed, `Article ${art.title} (${cleanSlug}) must resolve to detailed content`).not.toBeNull();
      }
    }
  });

  it("Search era items (1970s, 1980s, etc.) have accurate unique links and matching images", async () => {
    const searchProvider = new FallbackSearchProvider();
    const locales = ["ru", "uk", "en"] as const;

    for (const loc of locales) {
      const results1970 = await searchProvider.search({
        query: "",
        era: "1970s",
        locale: loc,
      });

      // Pong must never point to Super FX
      const pong = results1970.hits.find((h) => h.id === "art-pong-odyssey");
      expect(pong).toBeDefined();
      expect(pong?.slug).not.toContain("super-fx");
      expect(pong?.imageUrl).toContain("pong-magnavox-odyssey");

      // Atari 2600 must never point to Sega Saturn or have Game Boy image
      const atari = results1970.hits.find((h) => h.id === "art-atari-2600");
      expect(atari).toBeDefined();
      expect(atari?.slug).not.toContain("sega-saturn");
      expect(atari?.imageUrl).toContain("atari-2600");

      // All hits in era must resolve
      for (const hit of results1970.hits) {
        if (hit.kind === "ARTICLE" || hit.kind === "STORY") {
          const cleanSlug = hit.slug.replace(new RegExp(`^/${loc}/articles/`), "");
          const detailed = getDetailedArticleBySlug(loc, cleanSlug);
          expect(detailed, `Search hit ${hit.title} (${cleanSlug}) must resolve`).not.toBeNull();
        }
      }
    }
  });

  it("Every news grid fixture has a unique image and resolves to detailed news content", () => {
    const locales = ["ru", "uk", "en"] as const;

    for (const loc of locales) {
      const newsItems = getLocalizedNewsGridFixtures(loc);
      const slugs = new Set<string>();
      const images = new Set<string>();

      for (const item of newsItems) {
        expect(slugs.has(item.slug), `Duplicate news slug in ${loc}: ${item.slug}`).toBe(false);
        slugs.add(item.slug);

        if (item.imageUrl) {
          expect(images.has(item.imageUrl), `Duplicate news image in ${loc}: ${item.imageUrl} for ${item.title}`).toBe(false);
          images.add(item.imageUrl);
        }

        const cleanSlug = item.slug.replace(new RegExp(`^/${loc}/news/`), "");
        const detailed = getDetailedNewsBySlug(loc, cleanSlug);
        expect(detailed, `News ${item.title} (${cleanSlug}) must resolve to detailed content`).not.toBeNull();
      }
    }
  });
});



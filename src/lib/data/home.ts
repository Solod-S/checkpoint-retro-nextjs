import { PostKind } from "@prisma/client";
import {
  getLocalizedBreakingNews,
  getLocalizedFeaturedArticles,
  getLocalizedHeroStory,
  getLocalizedLatestNews,
  getLocalizedPlatformTabs,
} from "@/fixtures/homepage";
import {
  getBreakingStripItems,
  getHeroStoryFromPlacement,
} from "@/lib/db/repositories/homepage";
import { getPublishedPostsByKind } from "@/lib/db/repositories/posts";
import { getPlatforms } from "@/lib/db/repositories/taxonomies";
import type { AppLocale } from "@/lib/i18n/config";
import type {
  BreakingNewsItem,
  ContentCardData,
  FilterTabItem,
  HeroStoryData,
} from "@/types/content";

export interface HomePageData {
  heroStory: HeroStoryData;
  breakingStrip: BreakingNewsItem[];
  latestNews: ContentCardData[];
  featuredArticles: ContentCardData[];
  platformTabs: FilterTabItem[];
}

export async function getHomePageData(locale: AppLocale): Promise<HomePageData> {
  const fallbackHero = getLocalizedHeroStory(locale);
  const fallbackBreaking = getLocalizedBreakingNews(locale);
  const fallbackNews = getLocalizedLatestNews(locale);
  const fallbackArticles = getLocalizedFeaturedArticles(locale);
  const fallbackTabs = getLocalizedPlatformTabs(locale);

  try {
    const [heroStory, breakingStrip, news, articles, platforms] =
      await Promise.all([
        getHeroStoryFromPlacement(locale),
        getBreakingStripItems(locale),
        getPublishedPostsByKind(locale, PostKind.NEWS, { limit: 4 }),
        getPublishedPostsByKind(locale, PostKind.ARTICLE, { limit: 6 }),
        getPlatforms(locale),
      ]);

    return {
      heroStory: heroStory || fallbackHero,
      breakingStrip:
        breakingStrip.length > 0 ? breakingStrip : fallbackBreaking,
      latestNews: news.length > 0 ? news : fallbackNews,
      featuredArticles:
        articles.length > 0 ? articles : fallbackArticles,
      platformTabs: platforms.length > 0 ? platforms : fallbackTabs,
    };
  } catch {
    return {
      heroStory: fallbackHero,
      breakingStrip: fallbackBreaking,
      latestNews: fallbackNews,
      featuredArticles: fallbackArticles,
      platformTabs: fallbackTabs,
    };
  }
}

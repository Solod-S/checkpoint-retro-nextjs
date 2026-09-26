import { PostKind } from "@prisma/client";
import {
  getLocalizedLeadNews,
  getLocalizedNewsGridFixtures,
  getLocalizedNewsPlatformTabs,
  getLocalizedPopularNews,
  type PopularNewsItem,
} from "@/fixtures/news";
import { getPublishedPostsByKind } from "@/lib/db/repositories/posts";
import { getPlatforms } from "@/lib/db/repositories/taxonomies";
import type { AppLocale } from "@/lib/i18n/config";
import type { ContentCardData, FilterTabItem } from "@/types/content";

export interface NewsPageData {
  leadNews: ContentCardData;
  allNews: ContentCardData[];
  popularNewsWeekly: PopularNewsItem[];
  platformTabs: FilterTabItem[];
}

export async function getNewsPageData(locale: AppLocale): Promise<NewsPageData> {
  const fallbackLead = getLocalizedLeadNews(locale);
  const fallbackAll = getLocalizedNewsGridFixtures(locale);
  const fallbackPopular = getLocalizedPopularNews(locale);
  const fallbackTabs = getLocalizedNewsPlatformTabs(locale);

  try {
    const [news, platforms] = await Promise.all([
      getPublishedPostsByKind(locale, PostKind.NEWS, { limit: 12 }),
      getPlatforms(locale),
    ]);

    const lead = news[0] ?? fallbackLead;
    const all = news.length > 1 ? news.slice(1) : fallbackAll;
    const popular = fallbackPopular;

    return {
      leadNews: lead,
      allNews: all,
      popularNewsWeekly: popular,
      platformTabs: platforms.length > 0 ? platforms : fallbackTabs,
    };
  } catch {
    return {
      leadNews: fallbackLead,
      allNews: fallbackAll,
      popularNewsWeekly: fallbackPopular,
      platformTabs: fallbackTabs,
    };
  }
}

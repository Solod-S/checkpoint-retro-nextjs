import { PostKind } from "@prisma/client";
import {
  getLocalizedAllArticles,
  getLocalizedArticleCategoryTabs,
  getLocalizedArticlesByCategory,
  getLocalizedArticlesHero,
  getLocalizedTimelineEras,
} from "@/fixtures/articles";
import { getPublishedPostsByKind } from "@/lib/db/repositories/posts";
import { getCategories, getEras } from "@/lib/db/repositories/taxonomies";
import type { AppLocale } from "@/lib/i18n/config";
import type { ContentCardData, FilterTabItem } from "@/types/content";
import type { TimelineItem } from "@/components/ui/Timeline";

export interface ArticlesPageData {
  categoryTabs: FilterTabItem[];
  heroFeatured: ContentCardData;
  editorPicks: ContentCardData[];
  latestArticles: ContentCardData[];
  eraTimelineItems: TimelineItem[];
  selectedCategory: string;
}

export async function getArticlesPageData(
  locale: AppLocale,
  category?: string
): Promise<ArticlesPageData> {
  const selectedCategory = category || "all";
  const allArticles = getLocalizedAllArticles(locale);
  const fallbackTabs = getLocalizedArticleCategoryTabs(locale).map((tab) => {
    const count =
      tab.id === "all"
        ? allArticles.length
        : allArticles.filter((a) => a.categoryKey === tab.id).length;
    return { ...tab, count };
  });

  const fallbackHero = getLocalizedArticlesHero(locale);
  const filteredArticles = getLocalizedArticlesByCategory(locale, selectedCategory);

  const fallbackEditorPicks =
    selectedCategory === "all"
      ? filteredArticles.slice(0, 3)
      : filteredArticles.slice(0, 3);

  const fallbackLatest =
    selectedCategory === "all"
      ? filteredArticles.slice(3)
      : filteredArticles.slice(3);

  const fallbackEras = getLocalizedTimelineEras(locale);

  try {
    const [categories, posts, eras] = await Promise.all([
      getCategories(locale),
      getPublishedPostsByKind(locale, PostKind.ARTICLE, {
        limit: 12,
        categoryKey: selectedCategory !== "all" ? selectedCategory : undefined,
      }),
      getEras(locale),
    ]);

    const heroFeatured = posts[0] ?? fallbackHero;
    const editorPicks =
      posts.length > 3 ? posts.slice(1, 4) : fallbackEditorPicks;
    const latestArticles =
      posts.length > 4 ? posts.slice(4) : fallbackLatest;

    const timelineItems: TimelineItem[] =
      eras.length > 0
        ? eras.map((era) => ({
            id: era.id,
            period: `${era.startYear ?? ""}-${era.endYear ?? ""}`,
            title: era.name,
            icon: "🕹️",
            href: `/${locale}/search?era=${era.id}`,
          }))
        : fallbackEras.map((era) => ({
            id: era.id,
            period: era.decade,
            title: era.label,
            icon: era.icon,
            href: era.slug,
          }));

    return {
      categoryTabs: categories.length > 0 ? categories : fallbackTabs,
      heroFeatured,
      editorPicks,
      latestArticles,
      eraTimelineItems: timelineItems,
      selectedCategory,
    };
  } catch {
    return {
      categoryTabs: fallbackTabs,
      heroFeatured: fallbackHero,
      editorPicks: fallbackEditorPicks,
      latestArticles: fallbackLatest,
      eraTimelineItems: fallbackEras.map((era) => ({
        id: era.id,
        period: era.decade,
        title: era.label,
        icon: era.icon,
        href: era.slug,
      })),
      selectedCategory,
    };
  }
}

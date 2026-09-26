import type { AppLocale } from "@/lib/i18n/config";

export interface SearchResultItem {
  id: string;
  kind: "ARTICLE" | "NEWS";
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  readingTimeMinutes: number;
  platform: string;
  imageUrl: string;
}

export interface RelatedTopic {
  id: string;
  title: string;
  countLabel: string;
  slug: string;
  imageUrl: string;
}

export function getLocalizedPopularQueries(locale: AppLocale = "ru"): string[] {
  if (locale === "en") {
    return [
      "PlayStation",
      "Dreamcast",
      "Doom",
      "Remasters",
      "Rare Games",
    ];
  }
  if (locale === "uk") {
    return [
      "PlayStation",
      "Dreamcast",
      "Doom",
      "Ремастери",
      "Рідкісні ігри",
    ];
  }
  return [
    "PlayStation",
    "Dreamcast",
    "Doom",
    "Ремастеры",
    "Редкие игры",
  ];
}

export function getLocalizedRecentQueries(locale: AppLocale = "ru"): string[] {
  if (locale === "en") {
    return [
      "SEGA Dreamcast",
      "Fallout",
      "Doom",
      "PlayStation",
      "Chrono Trigger",
    ];
  }
  if (locale === "uk") {
    return [
      "SEGA Dreamcast",
      "Fallout",
      "Doom",
      "PlayStation",
      "Chrono Trigger",
    ];
  }
  return [
    "SEGA Dreamcast",
    "Fallout",
    "Doom",
    "PlayStation",
    "Chrono Trigger",
  ];
}

export function getLocalizedRelatedTopics(locale: AppLocale = "ru"): RelatedTopic[] {
  if (locale === "en") {
    return [
      {
        id: "top-1",
        title: "Dreamcast",
        countLabel: "52 materials",
        slug: "/en/articles?platform=sega",
        imageUrl: "/images/hardware/dreamcast-hero.jpg",
      },
      {
        id: "top-2",
        title: "SEGA",
        countLabel: "118 materials",
        slug: "/en/articles?platform=sega",
        imageUrl: "/images/hardware/sega-saturn.jpg",
      },
      {
        id: "top-3",
        title: "Retro Hardware",
        countLabel: "276 materials",
        slug: "/en/articles?category=consoles",
        imageUrl: "/images/hardware/snes-console.jpg",
      },
      {
        id: "top-4",
        title: "Japanese RPGs",
        countLabel: "89 materials",
        slug: "/en/articles",
        imageUrl: "/images/games/chrono-trigger.jpg",
      },
      {
        id: "top-5",
        title: "Iconic Franchises",
        countLabel: "134 materials",
        slug: "/en/articles",
        imageUrl: "/images/games/fallout-vault.jpg",
      },
    ];
  }
  if (locale === "uk") {
    return [
      {
        id: "top-1",
        title: "Dreamcast",
        countLabel: "52 матеріали",
        slug: "/uk/articles?platform=sega",
        imageUrl: "/images/hardware/dreamcast-hero.jpg",
      },
      {
        id: "top-2",
        title: "SEGA",
        countLabel: "118 матеріалів",
        slug: "/uk/articles?platform=sega",
        imageUrl: "/images/hardware/sega-saturn.jpg",
      },
      {
        id: "top-3",
        title: "Ретро-консолі",
        countLabel: "276 матеріалів",
        slug: "/uk/articles?category=consoles",
        imageUrl: "/images/hardware/snes-console.jpg",
      },
      {
        id: "top-4",
        title: "Японські RPG",
        countLabel: "89 матеріалів",
        slug: "/uk/articles",
        imageUrl: "/images/games/chrono-trigger.jpg",
      },
      {
        id: "top-5",
        title: "Культові серії",
        countLabel: "134 матеріали",
        slug: "/uk/articles",
        imageUrl: "/images/games/fallout-vault.jpg",
      },
    ];
  }
  return [
    {
      id: "top-1",
      title: "Dreamcast",
      countLabel: "52 материала",
      slug: "/ru/articles?platform=sega",
      imageUrl: "/images/hardware/dreamcast-hero.jpg",
    },
    {
      id: "top-2",
      title: "SEGA",
      countLabel: "118 материалов",
      slug: "/ru/articles?platform=sega",
      imageUrl: "/images/hardware/sega-saturn.jpg",
    },
    {
      id: "top-3",
      title: "Ретро-консоли",
      countLabel: "276 материалов",
      slug: "/ru/articles?category=consoles",
      imageUrl: "/images/hardware/snes-console.jpg",
    },
    {
      id: "top-4",
      title: "Японские RPG",
      countLabel: "89 материалов",
      slug: "/ru/articles",
      imageUrl: "/images/games/chrono-trigger.jpg",
    },
    {
      id: "top-5",
      title: "Культовые серии",
      countLabel: "134 материала",
      slug: "/ru/articles",
      imageUrl: "/images/games/fallout-vault.jpg",
    },
  ];
}

export const popularSearchQueries = getLocalizedPopularQueries("ru");
export const recentSearchQueries = getLocalizedRecentQueries("ru");
export const relatedTopicsFixtures = getLocalizedRelatedTopics("ru");

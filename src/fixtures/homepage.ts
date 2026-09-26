import type { AppLocale } from "@/lib/i18n/config";
import type {
  BreakingNewsItem,
  ContentCardData,
  FilterTabItem,
  HeroStoryData,
} from "@/types/content";

const dreamcastImg = "/images/hardware/dreamcast-hero.jpg";
const zeldaImg = "/images/games/zelda-ocarina.jpg";
const psImg = "/images/hardware/ps1-console.jpg";
const segaImg = "/images/hardware/sega-mega-drive.jpg";
const doomImg = "/images/games/doom-classic.jpg";
const snesImg = "/images/hardware/snes-console.jpg";
const chronoImg = "/images/games/chrono-trigger.jpg";
const falloutImg = "/images/games/fallout-vault.jpg";
const sotnImg = "/images/games/castlevania-sotn.jpg";

export function getLocalizedHeroStory(locale: AppLocale = "ru"): HeroStoryData {
  if (locale === "en") {
    return {
      kicker: "FEATURED STORY",
      title: "Why Dreamcast was ahead of its time",
      dek: "Bold ideas, built-in 56k modem, VMU interactive memory cards, and timeless classics. Why Sega's swan song was a true vision of future gaming.",
      ctaText: "Read story",
      ctaHref: "/en/articles/why-dreamcast-was-ahead-of-its-time",
      readingTimeMinutes: 3,
      publishedAt: "AUG 16, 2024",
      imageUrl: dreamcastImg,
      imageAlt: "Sega Dreamcast console with controller and VMU",
      cornerTagline: "BOLD GAMES BEYOND TIME",
    };
  }
  if (locale === "uk") {
    return {
      kicker: "ГОЛОВНА ІСТОРІЯ",
      title: "Чому Dreamcast випередила свій час",
      dek: "Сміливі ідеї, вбудований модем, екранчик VMU та ігри, які досі виглядають сучасно. Досліджуємо останню домашню консоль Sega.",
      ctaText: "Читати історію",
      ctaHref: "/uk/articles/chomu-dreamcast-vperedyla-sviy-chas",
      readingTimeMinutes: 3,
      publishedAt: "16 СЕРП 2024",
      imageUrl: dreamcastImg,
      imageAlt: "Ігрова консоль Sega Dreamcast з джойстиком і картою пам'яті",
      cornerTagline: "СМІЛИВІ ІГРИ ДАЛІ ЧАСУ",
    };
  }
  return {
    kicker: "ГЛАВНАЯ ИСТОРИЯ",
    title: "Почему Dreamcast опередила своё время",
    dek: "Смелые идеи, онлайн-будущее и игры, которые до сих пор выглядят современно. Разбираемся, почему Dreamcast был не провалом, а взглядом в завтрашний день индустрии.",
    ctaText: "Читать историю",
    ctaHref: "/ru/articles/pochemu-dreamcast-operedila-svoyo-vremya",
    readingTimeMinutes: 3,
    publishedAt: "16 АВГ 2024",
    imageUrl: dreamcastImg,
    imageAlt: "Игровая консоль Sega Dreamcast с джойстиком и картой памяти",
    cornerTagline: "СМЕЛЕЕ ИГРЫ ДАЛЬШЕ ВРЕМЕНИ",
  };
}

export function getLocalizedBreakingNews(
  locale: AppLocale = "ru"
): BreakingNewsItem[] {
  if (locale === "en") {
    return [
      {
        id: "br-1",
        title: "Undiscovered SNES Prototype Cartridge Unveiled",
        href: "/en/news/unknown-snes-prototype-discovered",
        date: "AUG 15, 2024",
        isUrgent: true,
      },
      {
        id: "br-2",
        title: "Sony Celebrates 30 Years of PlayStation: Milestones & Legacy",
        href: "/en/news/sony-celebrates-30-years-of-playstation",
        date: "AUG 14, 2024",
      },
    ];
  }
  if (locale === "uk") {
    return [
      {
        id: "br-1",
        title: "Знайдено невідомий прототип гри для SNES",
        href: "/uk/news/nevidomyj-prototyp-dlya-snes",
        date: "15 СЕРП 2024",
        isUrgent: true,
      },
      {
        id: "br-2",
        title: "Sony відзначає 30 років PlayStation — головні віхи",
        href: "/uk/news/sony-30-rokiv-playstation",
        date: "14 СЕРП 2024",
      },
    ];
  }
  return [
    {
      id: "br-1",
      title: "Найден неизвестный прототип игры для SNES",
      href: "/ru/news/neizvestnyj-prototip-dlya-snes",
      date: "15 АВГ 2024",
      isUrgent: true,
    },
    {
      id: "br-2",
      title: "Sony отмечает 30 лет PlayStation — главные моменты",
      href: "/ru/news/sony-30-let-playstation",
      date: "14 АВГ 2024",
    },
  ];
}

export function getLocalizedLatestNews(
  locale: AppLocale = "ru"
): ContentCardData[] {
  if (locale === "en") {
    return [
      {
        id: "news-1",
        kind: "NEWS",
        title: "Early Build of Zelda: Ocarina of Time Discovered Online",
        slug: "/en/news/zelda-ocarina-of-time-early-build-recovered",
        publishedAt: "AUG 15, 2024",
        readingTimeMinutes: 2,
        imageUrl: zeldaImg,
        imageAlt: "Zelda: Ocarina of Time",
        platform: { key: "nintendo", label: "NINTENDO" },
      },
      {
        id: "news-2",
        kind: "NEWS",
        title: "Sony Celebrates 30 Years of PlayStation: Milestones & Legacy",
        slug: "/en/news/sony-celebrates-30-years-of-playstation",
        publishedAt: "AUG 14, 2024",
        readingTimeMinutes: 2,
        imageUrl: psImg,
        imageAlt: "PlayStation 30th Anniversary",
        platform: { key: "playstation", label: "PLAYSTATION" },
      },
      {
        id: "news-3",
        kind: "NEWS",
        title: "New Revelations on the Lost 1990s Sonic X-treme Project",
        slug: "/en/news/canceled-sonic-x-treme-new-builds",
        publishedAt: "AUG 13, 2024",
        readingTimeMinutes: 2,
        imageUrl: segaImg,
        imageAlt: "Sega Saturn & Sonic",
        platform: { key: "sega", label: "SEGA" },
      },
      {
        id: "news-4",
        kind: "NEWS",
        title: "Classic Doom & Quake Receive Modern Platform Enhancements",
        slug: "/en/articles/doom-1993-how-id-software-changed-everything",
        publishedAt: "AUG 12, 2024",
        readingTimeMinutes: 2,
        imageUrl: doomImg,
        imageAlt: "Doom Classic FPS Action",
        platform: { key: "pc", label: "PC" },
      },
    ];
  }
  if (locale === "uk") {
    return [
      {
        id: "news-1",
        kind: "NEWS",
        title: "Знайдено ранню версію Zelda: Ocarina of Time з вирізаними локаціями",
        slug: "/uk/news/zelda-ocarina-of-time-ranij-bild",
        publishedAt: "15 СЕРП 2024",
        readingTimeMinutes: 2,
        imageUrl: zeldaImg,
        imageAlt: "Zelda: Ocarina of Time",
        platform: { key: "nintendo", label: "NINTENDO" },
      },
      {
        id: "news-2",
        kind: "NEWS",
        title: "Sony відзначає 30 років PlayStation — згадуємо головні моменти",
        slug: "/uk/news/sony-30-rokiv-playstation",
        publishedAt: "14 СЕРП 2024",
        readingTimeMinutes: 2,
        imageUrl: psImg,
        imageAlt: "PlayStation 30th Anniversary",
        platform: { key: "playstation", label: "PLAYSTATION" },
      },
      {
        id: "news-3",
        kind: "NEWS",
        title: "Нові подробиці про скасовану Sonic X-treme з дев'яностих",
        slug: "/uk/news/skasovana-sonic-x-treme",
        publishedAt: "13 СЕРП 2024",
        readingTimeMinutes: 2,
        imageUrl: segaImg,
        imageAlt: "Sega Mega Drive & Sonic",
        platform: { key: "sega", label: "SEGA" },
      },
      {
        id: "news-4",
        kind: "NEWS",
        title: "Класичні Doom та Quake отримали оновлення для сучасних систем",
        slug: "/uk/articles/doom-1993-yak-id-software-pidirvala-svit",
        publishedAt: "12 СЕРП 2024",
        readingTimeMinutes: 2,
        imageUrl: doomImg,
        imageAlt: "Doom Classic FPS Action",
        platform: { key: "pc", label: "PC" },
      },
    ];
  }
  return [
    {
      id: "news-1",
      kind: "NEWS",
      title: "Найдена ранняя версия Zelda: Ocarina of Time с вырезанными локациями",
      slug: "/ru/news/zelda-ocarina-of-time-early-build",
      publishedAt: "15 АВГ 2024",
      readingTimeMinutes: 2,
      imageUrl: zeldaImg,
      imageAlt: "Zelda: Ocarina of Time",
      platform: { key: "nintendo", label: "NINTENDO" },
    },
    {
      id: "news-2",
      kind: "NEWS",
      title: "Sony отмечает 30 лет PlayStation — вспоминаем главные моменты",
      slug: "/ru/news/sony-30-let-playstation",
      publishedAt: "14 АВГ 2024",
      readingTimeMinutes: 2,
      imageUrl: psImg,
      imageAlt: "PlayStation 30th Anniversary",
      platform: { key: "playstation", label: "PLAYSTATION" },
    },
    {
      id: "news-3",
      kind: "NEWS",
      title: "Новые подробности о отменённой Sonic X-treme из девяностых",
      slug: "/ru/news/otmenennaya-sonic-x-treme",
      publishedAt: "13 АВГ 2024",
      readingTimeMinutes: 2,
      imageUrl: segaImg,
      imageAlt: "Sega Mega Drive & Sonic",
      platform: { key: "sega", label: "SEGA" },
    },
    {
      id: "news-4",
      kind: "NEWS",
      title: "Классические Doom и Quake получили обновления для современных систем",
      slug: "/ru/articles/doom-1993-kak-id-software-vzorvala-mir",
      publishedAt: "12 АВГ 2024",
      readingTimeMinutes: 2,
      imageUrl: doomImg,
      imageAlt: "Doom Classic FPS Action",
      platform: { key: "pc", label: "PC" },
    },
  ];
}

export function getLocalizedFeaturedArticles(
  locale: AppLocale = "ru"
): ContentCardData[] {
  if (locale === "en") {
    return [
      {
        id: "art-1",
        kind: "ARTICLE",
        title: "The Making of the Original Fallout (1997): From GURPS to Wastelands",
        slug: "/en/articles/making-of-original-fallout-1997",
        publishedAt: "AUG 15, 2024",
        readingTimeMinutes: 3,
        badgeLabel: "FEATURE",
        badgeVariant: "orange",
        imageUrl: falloutImg,
        imageAlt: "Fallout 1997 Vault 13",
        platform: { key: "pc", label: "PC" },
      },
      {
        id: "art-2",
        kind: "ARTICLE",
        title: "Symphony of the Night: How Castlevania Redefined 2D Action on PS1",
        slug: "/en/articles/castlevania-sotn-birth-of-metroidvania",
        publishedAt: "AUG 14, 2024",
        readingTimeMinutes: 3,
        badgeLabel: "FEATURE",
        badgeVariant: "orange",
        imageUrl: sotnImg,
        imageAlt: "Castlevania Symphony of the Night",
        platform: { key: "playstation", label: "PLAYSTATION" },
      },
      {
        id: "art-3",
        kind: "ARTICLE",
        title: "Super FX: How Nintendo Brought True 3D to 16-Bit SNES",
        slug: "/en/articles/super-fx-how-nintendo-entered-3d",
        publishedAt: "AUG 13, 2024",
        readingTimeMinutes: 3,
        badgeLabel: "FEATURE",
        badgeVariant: "orange",
        imageUrl: snesImg,
        imageAlt: "Super Nintendo 16-Bit 3D",
        platform: { key: "nintendo", label: "NINTENDO" },
      },
      {
        id: "art-4",
        kind: "ARTICLE",
        title: "Chrono Trigger: Inside Square's Legendary Dream Team",
        slug: "/en/articles/chrono-trigger-the-dream-team",
        publishedAt: "AUG 12, 2024",
        readingTimeMinutes: 3,
        badgeLabel: "HISTORY",
        badgeVariant: "orange",
        imageUrl: chronoImg,
        imageAlt: "Chrono Trigger Dream Team",
        platform: { key: "nintendo", label: "NINTENDO" },
      },
    ];
  }
  if (locale === "uk") {
    return [
      {
        id: "art-1",
        kind: "ARTICLE",
        title: "Як народжувався оригінальний Fallout (1997): від GURPS до пусток",
        slug: "/uk/articles/yak-narodzhuvavsya-originalnyj-fallout-1997",
        publishedAt: "15 СЕРП 2024",
        readingTimeMinutes: 3,
        badgeLabel: "ЛОНГРІД",
        badgeVariant: "orange",
        imageUrl: falloutImg,
        imageAlt: "Fallout 1997 Сховище 13",
        platform: { key: "pc", label: "PC" },
      },
      {
        id: "art-2",
        kind: "ARTICLE",
        title: "Симфонія ночі: Як Castlevania SOTN перевинайшла жанр на PlayStation",
        slug: "/uk/articles/castlevania-sotn-istoriya",
        publishedAt: "14 СЕРП 2024",
        readingTimeMinutes: 3,
        badgeLabel: "ЛОНГРІД",
        badgeVariant: "orange",
        imageUrl: sotnImg,
        imageAlt: "Castlevania Symphony of the Night",
        platform: { key: "playstation", label: "PLAYSTATION" },
      },
      {
        id: "art-3",
        kind: "ARTICLE",
        title: "Super FX: Як Nintendo подарувала 16-бітній SNES справжнє 3D",
        slug: "/uk/articles/super-fx-yak-nintendo-uviyshla-v-3d",
        publishedAt: "13 СЕРП 2024",
        readingTimeMinutes: 3,
        badgeLabel: "ЛОНГРІД",
        badgeVariant: "orange",
        imageUrl: snesImg,
        imageAlt: "Super Nintendo 16-Bit 3D",
        platform: { key: "nintendo", label: "NINTENDO" },
      },
      {
        id: "art-4",
        kind: "ARTICLE",
        title: "Chrono Trigger: Історія створення шедевра Команди Мрії",
        slug: "/uk/articles/chrono-trigger-istoriya-stvorennya",
        publishedAt: "12 СЕРП 2024",
        readingTimeMinutes: 3,
        badgeLabel: "ІСТОРІЯ",
        badgeVariant: "orange",
        imageUrl: chronoImg,
        imageAlt: "Chrono Trigger Dream Team",
        platform: { key: "nintendo", label: "NINTENDO" },
      },
    ];
  }
  return [
    {
      id: "art-1",
      kind: "ARTICLE",
      title: "Как рождался оригинальный Fallout (1997): от GURPS к пустошам",
      slug: "/ru/articles/kak-rozhdalsya-originalnyj-fallout-1997",
      publishedAt: "15 АВГ 2024",
      readingTimeMinutes: 3,
      badgeLabel: "ЛОНГРИД",
      badgeVariant: "orange",
      imageUrl: falloutImg,
      imageAlt: "Fallout 1997 Убежище 13",
      platform: { key: "pc", label: "PC" },
    },
    {
      id: "art-2",
      kind: "ARTICLE",
      title: "Симфония ночи: Как Castlevania SOTN переизобрела жанр на PlayStation",
      slug: "/ru/articles/castlevania-symphony-of-the-night-kak-sozdavalas-metroidvaniya",
      publishedAt: "14 АВГ 2024",
      readingTimeMinutes: 3,
      badgeLabel: "ЛОНГРИД",
      badgeVariant: "orange",
      imageUrl: sotnImg,
      imageAlt: "Castlevania Symphony of the Night",
      platform: { key: "playstation", label: "PLAYSTATION" },
    },
    {
      id: "art-3",
      kind: "ARTICLE",
      title: "Super FX: Как Nintendo подарила 16-битной SNES настоящее 3D",
      slug: "/ru/articles/super-fx-kak-nintendo-voshla-v-3d",
      publishedAt: "13 АВГ 2024",
      readingTimeMinutes: 3,
      badgeLabel: "ЛОНГРИД",
      badgeVariant: "orange",
      imageUrl: snesImg,
      imageAlt: "Super Nintendo 16-Bit 3D",
      platform: { key: "nintendo", label: "NINTENDO" },
    },
    {
      id: "art-4",
      kind: "ARTICLE",
      title: "Chrono Trigger: История создания шедевра Команды Мечты",
      slug: "/ru/articles/chrono-trigger-istoriya-sozdaniya-dream-team",
      publishedAt: "12 АВГ 2024",
      readingTimeMinutes: 3,
      badgeLabel: "ИСТОРИЯ",
      badgeVariant: "orange",
      imageUrl: chronoImg,
      imageAlt: "Chrono Trigger Dream Team",
      platform: { key: "nintendo", label: "NINTENDO" },
    },
  ];
}

export function getLocalizedPlatformTabs(
  locale: AppLocale = "ru"
): FilterTabItem[] {
  if (locale === "en") {
    return [
      { id: "all", label: "All" },
      { id: "pc", label: "PC", icon: "💻" },
      { id: "playstation", label: "PlayStation", icon: "🎮" },
      { id: "nintendo", label: "Nintendo", icon: "🕹️" },
      { id: "sega", label: "SEGA", icon: "🌀" },
      { id: "arcade", label: "Arcade", icon: "👾" },
    ];
  }
  if (locale === "uk") {
    return [
      { id: "all", label: "Всі" },
      { id: "pc", label: "PC", icon: "💻" },
      { id: "playstation", label: "PlayStation", icon: "🎮" },
      { id: "nintendo", label: "Nintendo", icon: "🕹️" },
      { id: "sega", label: "SEGA", icon: "🌀" },
      { id: "arcade", label: "Аркади", icon: "👾" },
    ];
  }
  return [
    { id: "all", label: "Все" },
    { id: "pc", label: "PC", icon: "💻" },
    { id: "playstation", label: "PlayStation", icon: "🎮" },
    { id: "nintendo", label: "Nintendo", icon: "🕹️" },
    { id: "sega", label: "SEGA", icon: "🌀" },
    { id: "arcade", label: "Аркады", icon: "👾" },
  ];
}

export const heroStoryFixture = getLocalizedHeroStory("ru");
export const breakingNewsFixture = getLocalizedBreakingNews("ru");
export const latestNewsFixtures = getLocalizedLatestNews("ru");
export const featuredArticlesFixtures = getLocalizedFeaturedArticles("ru");
export const articlePlatformTabs = getLocalizedPlatformTabs("ru");

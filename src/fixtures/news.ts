import type { AppLocale } from "@/lib/i18n/config";
import type { ContentCardData, FilterTabItem } from "@/types/content";

export interface PopularNewsItem {
  id: string;
  rank: number;
  title: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  viewsCount: string;
}

export function getLocalizedNewsPlatformTabs(
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

export function getLocalizedLeadNews(
  locale: AppLocale = "ru"
): ContentCardData {
  if (locale === "en") {
    return {
      id: "lead-news-1",
      kind: "NEWS",
      title: "Undiscovered SNES Prototype Cartridge Unveiled",
      excerpt:
        "Game archivists discovered an unreleased developmental build of a 1993 Super Nintendo platformer featuring Mode 7 hardware scaling and early stereo tracks.",
      slug: "/en/news/unknown-snes-prototype-discovered",
      publishedAt: "AUG 15, 2024",
      readingTimeMinutes: 2,
      badgeLabel: "BREAKING",
      badgeVariant: "orange",
      imageUrl: "/images/hardware/snes-console.jpg",
      imageAlt: "Super Nintendo Entertainment System prototype cartridge",
      platform: { key: "nintendo", label: "NINTENDO" },
    };
  }
  if (locale === "uk") {
    return {
      id: "lead-news-1",
      kind: "NEWS",
      title: "Знайдено невідомий прототип гри для SNES",
      excerpt:
        "Ентузіасти виявили ранній білд неанонсованої гри Nintendo для Super Nintendo з унікальними рівнями та графічними ефектами Mode 7.",
      slug: "/uk/news/nevidomyj-prototyp-dlya-snes",
      publishedAt: "15 СЕРП 2024",
      readingTimeMinutes: 2,
      badgeLabel: "ГОЛОВНА НОВИНА",
      badgeVariant: "orange",
      imageUrl: "/images/hardware/snes-console.jpg",
      imageAlt: "Super Nintendo Entertainment System з картриджем",
      platform: { key: "nintendo", label: "NINTENDO" },
    };
  }
  return {
    id: "lead-news-1",
    kind: "NEWS",
    title: "Найден неизвестный прототип игры для SNES",
    excerpt:
      "Энтузиасты обнаружили раннюю сборку неанонсированной игры Nintendo для Super Nintendo. В сети появились скриншоты и детали геймплея, которые раскрывают интересные отличия от финальной версии.",
    slug: "/ru/news/neizvestnyj-prototip-dlya-snes",
    publishedAt: "15 АВГ 2024",
    readingTimeMinutes: 2,
    badgeLabel: "КРУПНАЯ НОВОСТЬ",
    badgeVariant: "orange",
    imageUrl: "/images/hardware/snes-console.jpg",
    imageAlt: "Super Nintendo Entertainment System с картриджем",
    platform: { key: "nintendo", label: "NINTENDO" },
  };
}

export function getLocalizedNewsGridFixtures(
  locale: AppLocale = "ru"
): ContentCardData[] {
  if (locale === "en") {
    return [
      {
        id: "n-1",
        kind: "NEWS",
        title: "Undiscovered SNES Prototype Cartridge Unveiled",
        excerpt: "Archivists dump playable developmental ROM with cut zones.",
        slug: "/en/news/unknown-snes-prototype-discovered",
        publishedAt: "AUG 15, 2024",
        readingTimeMinutes: 2,
        platform: { key: "nintendo", label: "NINTENDO" },
        imageUrl: "/images/hardware/snes-console.jpg",
        imageAlt: "Super Nintendo Entertainment System",
      },
      {
        id: "n-2",
        kind: "NEWS",
        title: "Sony Celebrates 30 Years of PlayStation: Milestones & Legacy",
        excerpt: "Looking back at the December 1994 launch that changed home console gaming.",
        slug: "/en/news/sony-celebrates-30-years-of-playstation",
        publishedAt: "AUG 14, 2024",
        readingTimeMinutes: 2,
        platform: { key: "playstation", label: "PLAYSTATION" },
        imageUrl: "/images/news/playstation-launch-1994.jpg",
        imageAlt: "Original grey PlayStation 1 console",
      },
      {
        id: "n-3",
        kind: "NEWS",
        title: "New Revelations on the Canceled Sonic X-treme Project",
        excerpt: "Former STI developers reveal new engine footage and physics demos for Saturn.",
        slug: "/en/news/canceled-sonic-x-treme-new-builds",
        publishedAt: "AUG 13, 2024",
        readingTimeMinutes: 2,
        platform: { key: "sega", label: "SEGA" },
        imageUrl: "/images/news/sonic-xtreme-saturn.jpg",
        imageAlt: "Sega Saturn console",
      },
      {
        id: "n-4",
        kind: "NEWS",
        title: "Fans Restore Original Quake II Online Multiplayer",
        excerpt: "Authentic netcode and server browser running 25 years after release.",
        slug: "/en/news/multiplayer-quake-2-restored",
        publishedAt: "AUG 12, 2024",
        readingTimeMinutes: 2,
        platform: { key: "pc", label: "PC" },
        imageUrl: "/images/news/quake-2-multiplayer.jpg",
        imageAlt: "Quake II multiplayer match on CRT monitor",
      },
      {
        id: "n-5",
        kind: "NEWS",
        title: "Arcade Preservation: Saving Coin-Op CRT Cabinets",
        excerpt: "How worldwide retro communities restore and digitize rare coin-operated machines.",
        slug: "/en/news/saving-coin-op-crt-cabinets",
        publishedAt: "AUG 11, 2024",
        readingTimeMinutes: 2,
        platform: { key: "arcade", label: "ARCADE" },
        imageUrl: "/images/news/arcade-restoration-crt.jpg",
        imageAlt: "Retro arcade restoration workshop",
      },
      {
        id: "n-6",
        kind: "NEWS",
        title: "Early Build of Zelda: Ocarina of Time Discovered",
        excerpt: "Spaceworld 1997 build highlights experimental mechanics and early dungeons.",
        slug: "/en/news/zelda-ocarina-of-time-early-build-recovered",
        publishedAt: "AUG 10, 2024",
        readingTimeMinutes: 2,
        platform: { key: "nintendo", label: "NINTENDO" },
        imageUrl: "/images/news/zelda-spaceworld-room.jpg",
        imageAlt: "Early prototype of The Legend of Zelda Spaceworld 1997",
      },
      {
        id: "n-7",
        kind: "NEWS",
        title: "Retro Hardware: Rare 3dfx Voodoo Prototype Unearthed",
        excerpt: "An extraordinary find tested on a vintage Pentium II Windows 98 rig.",
        slug: "/en/news/rare-3dfx-voodoo-prototype-unearthed",
        publishedAt: "AUG 09, 2024",
        readingTimeMinutes: 2,
        platform: { key: "pc", label: "PC" },
        imageUrl: "/images/news/voodoo-graphics-card.jpg",
        imageAlt: "Engineering prototype of 3dfx Voodoo 3D accelerator",
      },
      {
        id: "n-8",
        kind: "NEWS",
        title: "Sega Saturn Turns 30: Architecture, Innovation & Legacy",
        excerpt: "Revisiting the twin-CPU marvel that challenged the 32-bit generation.",
        slug: "/en/news/sega-saturn-30-years-anniversary",
        publishedAt: "AUG 08, 2024",
        readingTimeMinutes: 2,
        platform: { key: "sega", label: "SEGA" },
        imageUrl: "/images/hardware/sega-saturn.jpg",
        imageAlt: "Sega Saturn 32-bit console",
      },
    ];
  }

  if (locale === "uk") {
    return [
      {
        id: "n-1",
        kind: "NEWS",
        title: "Знайдено невідомий прототип гри для SNES",
        excerpt: "Ентузіасти виявили ранню збірку з унікальними рівнями та механіками.",
        slug: "/uk/news/nevidomyj-prototyp-dlya-snes",
        publishedAt: "15 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "nintendo", label: "NINTENDO" },
        imageUrl: "/images/hardware/snes-console.jpg",
        imageAlt: "Super Nintendo Entertainment System",
      },
      {
        id: "n-2",
        kind: "NEWS",
        title: "Sony відзначає 30 років PlayStation — головні віхи",
        excerpt: "Згадуємо запуск культової консолі в грудні 1994 року та народження легендарних франшиз.",
        slug: "/uk/news/sony-30-rokiv-playstation",
        publishedAt: "14 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "playstation", label: "PLAYSTATION" },
        imageUrl: "/images/news/playstation-launch-1994.jpg",
        imageAlt: "Оригінальна сіра консоль PlayStation 1",
      },
      {
        id: "n-3",
        kind: "NEWS",
        title: "Нові подробиці про скасовану Sonic X-treme",
        excerpt: "У мережу витекли концепт-арти та робочі демо легендарної гри для Saturn.",
        slug: "/uk/news/skasovana-sonic-x-treme",
        publishedAt: "13 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "sega", label: "SEGA" },
        imageUrl: "/images/news/sonic-xtreme-saturn.jpg",
        imageAlt: "Консоль Sega Saturn",
      },
      {
        id: "n-4",
        kind: "NEWS",
        title: "Фанати відновили онлайн-мультиплеєр Quake II",
        excerpt: "Працюючий оригінальний мережевий код через 25 років після релізу.",
        slug: "/uk/news/multiplayer-quake-2-restored",
        publishedAt: "12 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "pc", label: "PC" },
        imageUrl: "/images/news/quake-2-multiplayer.jpg",
        imageAlt: "Мережевий матч Quake II на ЕПТ-моніторі",
      },
      {
        id: "n-5",
        kind: "NEWS",
        title: "Нове життя аркад: порятунок ігрових автоматів",
        excerpt: "Як ентузіасти рятують класичні монетоприймальні автомати від забуття.",
        slug: "/uk/news/zberezhennya-arkadnyh-avtomativ",
        publishedAt: "11 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "arcade", label: "АРКАДИ" },
        imageUrl: "/images/news/arcade-restoration-crt.jpg",
        imageAlt: "Майстерня реставрації аркадних автоматів",
      },
      {
        id: "n-6",
        kind: "NEWS",
        title: "Ранню версію Zelda: Ocarina of Time знайдено в мережі",
        excerpt: "Архівісти опублікували дамп картриджа Spaceworld 1997 з ранніми локаціями.",
        slug: "/uk/news/zelda-ocarina-of-time-ranij-bild",
        publishedAt: "10 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "nintendo", label: "NINTENDO" },
        imageUrl: "/images/news/zelda-spaceworld-room.jpg",
        imageAlt: "Ранній прототип The Legend of Zelda Spaceworld 1997",
      },
      {
        id: "n-7",
        kind: "NEWS",
        title: "Ретро-залізо: рідкісна відеокарта 3dfx знайдена на розпродажі",
        excerpt: "Історія дивовижної знахідки легендарного 3D-прискорювача Voodoo.",
        slug: "/uk/news/ridkisna-videokarta-3dfx",
        publishedAt: "09 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "pc", label: "PC" },
        imageUrl: "/images/news/voodoo-graphics-card.jpg",
        imageAlt: "Інженерна плата відеокарти 3dfx Voodoo",
      },
      {
        id: "n-8",
        kind: "NEWS",
        title: "Sega Saturn святкує 30 років з моменту запуску",
        excerpt: "Згадуємо історію консолі, що випередила свій час складною архітектурою.",
        slug: "/uk/news/sega-saturn-30-rokiv",
        publishedAt: "08 СЕРП 2024",
        readingTimeMinutes: 2,
        platform: { key: "sega", label: "SEGA" },
        imageUrl: "/images/hardware/sega-saturn.jpg",
        imageAlt: "Консоль Sega Saturn",
      },
    ];
  }

  return [
    {
      id: "n-1",
      kind: "NEWS",
      title: "Найден неизвестный прототип игры для SNES",
      excerpt: "Энтузиасты обнаружили раннюю сборку с уникальными уровнями и механиками.",
      slug: "/ru/news/neizvestnyj-prototip-dlya-snes",
      publishedAt: "15 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "nintendo", label: "NINTENDO" },
      imageUrl: "/images/hardware/snes-console.jpg",
      imageAlt: "Super Nintendo Entertainment System",
    },
    {
      id: "n-2",
      kind: "NEWS",
      title: "Sony отмечает 30 лет PlayStation — главные моменты",
      excerpt: "Вспоминаем запуск первой серой консоли в декабре 1994 года и рождение хитов.",
      slug: "/ru/news/sony-30-let-playstation",
      publishedAt: "14 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "playstation", label: "PLAYSTATION" },
      imageUrl: "/images/news/playstation-launch-1994.jpg",
      imageAlt: "Оригинальная серая консоль PlayStation 1",
    },
    {
      id: "n-3",
      kind: "NEWS",
      title: "Новые подробности об отменённой Sonic X-treme",
      excerpt: "В сеть утекли концепт-арты и прототипные уровни легендарной игры для Saturn.",
      slug: "/ru/news/otmenennaya-sonic-x-treme",
      publishedAt: "13 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "sega", label: "SEGA" },
      imageUrl: "/images/news/sonic-xtreme-saturn.jpg",
      imageAlt: "Sega Saturn консоль",
    },
    {
      id: "n-4",
      kind: "NEWS",
      title: "Фанаты восстановили мультиплеер Quake II",
      excerpt: "Работающий онлайн на оригинальном движке спустя 25 лет после релиза.",
      slug: "/ru/news/multiplayer-quake-2-restored",
      publishedAt: "12 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "pc", label: "PC" },
      imageUrl: "/images/news/quake-2-multiplayer.jpg",
      imageAlt: "Сетевой матч Quake II на ЭЛТ-мониторе",
    },
    {
      id: "n-5",
      kind: "NEWS",
      title: "Новая жизнь аркад: сохранение игровых автоматов",
      excerpt: "Как энтузиасты по всему миру спасают классические автоматы от исчезновения.",
      slug: "/ru/news/sohranenie-igrovyh-avtomatov",
      publishedAt: "11 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "arcade", label: "АРКАДЫ" },
      imageUrl: "/images/news/arcade-restoration-crt.jpg",
      imageAlt: "Мастерская реставрации аркадных автоматов",
    },
    {
      id: "n-6",
      kind: "NEWS",
      title: "Раннюю версию Zelda: Ocarina of Time нашли в сети",
      excerpt: "Архивисты опубликовали дамп картриджа Spaceworld 1997 с экспериментальной боевкой.",
      slug: "/ru/news/zelda-ocarina-of-time-early-build",
      publishedAt: "10 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "nintendo", label: "NINTENDO" },
      imageUrl: "/images/news/zelda-spaceworld-room.jpg",
      imageAlt: "Ранний прототип The Legend of Zelda Spaceworld 1997",
    },
    {
      id: "n-7",
      kind: "NEWS",
      title: "Ретро-железо: редкая видеокарта 3dfx найдена на свалке",
      excerpt: "История удивительной находки и тестирование легендарного ускорителя Voodoo.",
      slug: "/ru/news/redkaya-videokarta-3dfx",
      publishedAt: "9 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "pc", label: "PC" },
      imageUrl: "/images/news/voodoo-graphics-card.jpg",
      imageAlt: "Инженерная плата видеокарты 3dfx Voodoo",
    },
    {
      id: "n-8",
      kind: "NEWS",
      title: "Sega Saturn отмечает 30 лет с момента запуска",
      excerpt: "Вспоминаем историю консоли, которая опередила своё время сложной архитектурой.",
      slug: "/ru/news/sega-saturn-30-let",
      publishedAt: "8 АВГ 2024",
      readingTimeMinutes: 2,
      platform: { key: "sega", label: "SEGA" },
      imageUrl: "/images/hardware/sega-saturn.jpg",
      imageAlt: "Консоль Sega Saturn",
    },
  ];
}

export function getLocalizedPopularNews(
  locale: AppLocale = "ru"
): PopularNewsItem[] {
  if (locale === "en") {
    return [
      {
        id: "pop-1",
        rank: 1,
        title: "Early Build of Zelda: Ocarina of Time Discovered",
        slug: "/en/news/zelda-ocarina-of-time-early-build-recovered",
        imageUrl: "/images/news/zelda-spaceworld-room.jpg",
        imageAlt: "The Legend of Zelda: Ocarina of Time",
        viewsCount: "125,430 views",
      },
      {
        id: "pop-2",
        rank: 2,
        title: "Sony Celebrates 30 Years of PlayStation",
        slug: "/en/news/sony-celebrates-30-years-of-playstation",
        imageUrl: "/images/hardware/ps1-console.jpg",
        imageAlt: "Original PlayStation 1",
        viewsCount: "98,120 views",
      },
      {
        id: "pop-3",
        rank: 3,
        title: "Classic Doom & Quake Receive Modern Upgrades",
        slug: "/en/news/multiplayer-quake-2-restored",
        imageUrl: "/images/news/quake-2-multiplayer.jpg",
        imageAlt: "Quake II multiplayer",
        viewsCount: "76,540 views",
      },
      {
        id: "pop-4",
        rank: 4,
        title: "The Handheld Revolution: From Game Boy to Present",
        slug: "/en/news/handheld-revolution-game-boy",
        imageUrl: "/images/hardware/gameboy-classic.jpg",
        imageAlt: "Game Boy Classic",
        viewsCount: "61,330 views",
      },
      {
        id: "pop-5",
        rank: 5,
        title: "New Revelations on the Canceled Sonic X-treme",
        slug: "/en/news/canceled-sonic-x-treme-new-builds",
        imageUrl: "/images/hardware/sega-saturn.jpg",
        imageAlt: "Sega Saturn",
        viewsCount: "52,910 views",
      },
    ];
  }

  if (locale === "uk") {
    return [
      {
        id: "pop-1",
        rank: 1,
        title: "Ранню версію Zelda: Ocarina of Time знайдено в мережі",
        slug: "/uk/news/zelda-ocarina-of-time-ranij-bild",
        imageUrl: "/images/news/zelda-spaceworld-room.jpg",
        imageAlt: "The Legend of Zelda: Ocarina of Time",
        viewsCount: "125 430 переглядів",
      },
      {
        id: "pop-2",
        rank: 2,
        title: "Sony відзначає 30 років PlayStation — головні віхи",
        slug: "/uk/news/sony-30-rokiv-playstation",
        imageUrl: "/images/hardware/ps1-console.jpg",
        imageAlt: "Оригінальна PlayStation 1",
        viewsCount: "98 120 переглядів",
      },
      {
        id: "pop-3",
        rank: 3,
        title: "Фанати відновили онлайн-мультиплеєр Quake II",
        slug: "/uk/news/multiplayer-quake-2-restored",
        imageUrl: "/images/news/quake-2-multiplayer.jpg",
        imageAlt: "Quake II онлайн",
        viewsCount: "76 540 переглядів",
      },
      {
        id: "pop-4",
        rank: 4,
        title: "Портативна революція: від Game Boy до сучасних систем",
        slug: "/uk/news/portatyvna-revolyutsiya-game-boy",
        imageUrl: "/images/hardware/gameboy-classic.jpg",
        imageAlt: "Game Boy Classic",
        viewsCount: "61 330 переглядів",
      },
      {
        id: "pop-5",
        rank: 5,
        title: "Нові подробиці про скасовану Sonic X-treme",
        slug: "/uk/news/skasovana-sonic-x-treme",
        imageUrl: "/images/hardware/sega-saturn.jpg",
        imageAlt: "Sega Saturn",
        viewsCount: "52 910 переглядів",
      },
    ];
  }

  return [
    {
      id: "pop-1",
      rank: 1,
      title: "Раннюю версию Zelda: Ocarina of Time нашли в сети",
      slug: "/ru/news/zelda-ocarina-of-time-early-build",
      imageUrl: "/images/news/zelda-spaceworld-room.jpg",
      imageAlt: "The Legend of Zelda: Ocarina of Time",
      viewsCount: "125 430 просмотров",
    },
    {
      id: "pop-2",
      rank: 2,
      title: "Sony отмечает 30 лет PlayStation — главные моменты",
      slug: "/ru/news/sony-30-let-playstation",
      imageUrl: "/images/hardware/ps1-console.jpg",
      imageAlt: "Оригинальная PlayStation 1",
      viewsCount: "98 120 просмотров",
    },
    {
      id: "pop-3",
      rank: 3,
      title: "Фанаты восстановили мультиплеер Quake II",
      slug: "/ru/news/multiplayer-quake-2-restored",
      imageUrl: "/images/news/quake-2-multiplayer.jpg",
      imageAlt: "Quake II мультиплеер",
      viewsCount: "76 540 просмотров",
    },
    {
      id: "pop-4",
      rank: 4,
      title: "Портативная революция: от Game Boy до современных систем",
      slug: "/ru/news/portativnaya-revolyutsiya",
      imageUrl: "/images/hardware/gameboy-classic.jpg",
      imageAlt: "Game Boy Classic",
      viewsCount: "61 330 просмотров",
    },
    {
      id: "pop-5",
      rank: 5,
      title: "Новые подробности об отменённой Sonic X-treme",
      slug: "/ru/news/otmenennaya-sonic-x-treme",
      imageUrl: "/images/hardware/sega-saturn.jpg",
      imageAlt: "Sega Saturn",
      viewsCount: "52 910 просмотров",
    },
  ];
}

export const newsPlatformTabs = getLocalizedNewsPlatformTabs("ru");
export const leadNewsFixture = getLocalizedLeadNews("ru");
export const allNewsGridFixtures = getLocalizedNewsGridFixtures("ru");
export const popularNewsWeeklyFixtures = getLocalizedPopularNews("ru");

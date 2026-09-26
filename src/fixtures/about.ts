import type { AppLocale } from "@/lib/i18n/config";

export interface AboutStat {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarSvg: string;
}

export function getLocalizedAboutStats(locale: AppLocale = "ru"): AboutStat[] {
  if (locale === "en") {
    return [
      {
        value: "500+",
        label: "Stories & Articles",
        sublabel: "Deep dives, news, and investigative features",
        icon: "📄",
      },
      {
        value: "40 Years",
        label: "Of Gaming History",
        sublabel: "From 8-bit classics to Dreamcast and beyond",
        icon: "📅",
      },
      {
        value: "12",
        label: "Platforms",
        sublabel: "Iconic consoles, arcade boards, and retro PCs",
        icon: "🎮",
      },
    ];
  }
  if (locale === "uk") {
    return [
      {
        value: "500+",
        label: "матеріалів",
        sublabel: "Статті, новини та великі розслідування",
        icon: "📄",
      },
      {
        value: "40 років",
        label: "історії",
        sublabel: "Від 8 біт до Dreamcast та далі",
        icon: "📅",
      },
      {
        value: "12",
        label: "платформ",
        sublabel: "Легендарні консолі та системи",
        icon: "🎮",
      },
    ];
  }
  return [
    {
      value: "500+",
      label: "материалов",
      sublabel: "Статьи, новости и большие истории",
      icon: "📄",
    },
    {
      value: "40 лет",
      label: "истории",
      sublabel: "От 8 бит до Dreamcast и дальше",
      icon: "📅",
    },
    {
      value: "12",
      label: "платформ",
      sublabel: "Легендарные консоли и системы",
      icon: "🎮",
    },
  ];
}

export function getLocalizedAboutValues(locale: AppLocale = "ru"): AboutValue[] {
  if (locale === "en") {
    return [
      {
        id: "accuracy",
        title: "Historical Rigor",
        description: "We cross-reference primary sources, developer memoirs, and patent records.",
        icon: "🎯",
      },
      {
        id: "context",
        title: "Cultural Context",
        description: "Explaining not just what games achieved, but why they emerged within their era.",
        icon: "📜",
      },
      {
        id: "nostalgia",
        title: "Nostalgia Without Illusions",
        description: "Honoring golden eras with an objective, respectful critical perspective.",
        icon: "⭐",
      },
    ];
  }
  if (locale === "uk") {
    return [
      {
        id: "accuracy",
        title: "Точність",
        description: "Перевіряємо факти, шукаємо першоджерела та уникаємо вигадок.",
        icon: "🎯",
      },
      {
        id: "context",
        title: "Контекст",
        description: "Розповідаємо не тільки «що», а й «чому». Показуємо зв'язок між іграми, людьми та епохою.",
        icon: "📜",
      },
      {
        id: "nostalgia",
        title: "Ностальгія без міфів",
        description: "Ми любимо класику, але дивимось на неї тверезо — з повагою до історії та реального внеску.",
        icon: "⭐",
      },
    ];
  }
  return [
    {
      id: "accuracy",
      title: "Точность",
      description: "Проверяем факты, ищем первоисточники и избегаем домыслов.",
      icon: "🎯",
    },
    {
      id: "context",
      title: "Контекст",
      description: "Рассказываем не только «что», но и «почему». Показываем связи между играми, людьми и эпохой.",
      icon: "📜",
    },
    {
      id: "nostalgia",
      title: "Ностальгия без мифов",
      description: "Мы любим классику, но смотрим на неё трезво — с уважением к истории, людям и реальному вкладу.",
      icon: "⭐",
    },
  ];
}

export function getLocalizedAboutTimeline(locale: AppLocale = "ru"): MilestoneItem[] {
  if (locale === "en") {
    return [
      { year: "2023", title: "Project Launch", description: "Checkpoint Retro archive", icon: "💾" },
      { year: "2023", title: "First Longreads", description: "Deep tech analysis", icon: "📄" },
      { year: "2024", title: "Platform Expansion", description: "Hardware archives", icon: "🎮" },
      { year: "2024", title: "Community Growth", description: "International readers", icon: "👥" },
      { year: "2025", title: "500+ Articles", description: "Comprehensive library", icon: "📊" },
      { year: "Beyond", title: "Preserving Games", description: "The stories that remain", icon: "🏁" },
    ];
  }
  if (locale === "uk") {
    return [
      { year: "2023", title: "Старт проєкту", description: "Checkpoint Retro", icon: "💾" },
      { year: "2023", title: "Перші статті", description: "і новини", icon: "📄" },
      { year: "2024", title: "Розширення тем", description: "та платформ", icon: "🎮" },
      { year: "2024", title: "Зростання спільноти", description: "нові рубрики", icon: "👥" },
      { year: "2025", title: "Понад 500+", description: "матеріалів", icon: "📊" },
      { year: "Далі", title: "Ще більше історій", description: "гарних ігор", icon: "🏁" },
    ];
  }
  return [
    { year: "2023", title: "Старт проекта", description: "Checkpoint Retro", icon: "💾" },
    { year: "2023", title: "Первые статьи", description: "и новости", icon: "📄" },
    { year: "2024", title: "Расширение тем", description: "и платформ", icon: "🎮" },
    { year: "2024", title: "Рост сообщества", description: "и новые рубрики", icon: "👥" },
    { year: "2025", title: "Более 500+", description: "материалов", icon: "📊" },
    { year: "Дальше", title: "Ещё больше историй", description: "хороших игр", icon: "🏁" },
  ];
}

export function getLocalizedTeamMembers(locale: AppLocale = "ru"): TeamMember[] {
  if (locale === "en") {
    return [
      {
        id: "alexey",
        name: "Alexey",
        role: "Editor & Lead Author",
        bio: "Investigates lost hardware prototypes and interviews industry veterans.",
        avatarSvg:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%23101d24'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%23f4df19'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%23ff5a1f'/%3E%3C/svg%3E",
      },
      {
        id: "maria",
        name: "Maria",
        role: "Archivist & Researcher",
        bio: "Specializes in Japanese game publications, design documents, and translation.",
        avatarSvg:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%23161024'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%23b7ff3c'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%2327b7ff'/%3E%3C/svg%3E",
      },
      {
        id: "ivan",
        name: "Ivan",
        role: "Technical Editor",
        bio: "Deep dives into console silicon, custom DSPs, and sound chips.",
        avatarSvg:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%2320150a'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%2327b7ff'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%23f4df19'/%3E%3C/svg%3E",
      },
    ];
  }
  if (locale === "uk") {
    return [
      {
        id: "alexey",
        name: "Олексій",
        role: "Редактор та автор",
        bio: "Пише аналітичні лонгріди та досліджує історію індустрії.",
        avatarSvg:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%23101d24'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%23f4df19'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%23ff5a1f'/%3E%3C/svg%3E",
      },
      {
        id: "maria",
        name: "Марія",
        role: "Дослідниця архівів",
        bio: "Знаходить рідкісні історичні документи та працює з перекладами.",
        avatarSvg:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%23161024'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%23b7ff3c'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%2327b7ff'/%3E%3C/svg%3E",
      },
      {
        id: "ivan",
        name: "Іван",
        role: "Технічний редактор",
        bio: "Стежить за залізом, архітектурою та технічними деталями платформ.",
        avatarSvg:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%2320150a'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%2327b7ff'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%23f4df19'/%3E%3C/svg%3E",
      },
    ];
  }
  return [
    {
      id: "alexey",
      name: "Алексей",
      role: "Редактор и автор",
      bio: "Пишет статьи, берёт интервью и копается в истории индустрии.",
      avatarSvg:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%23101d24'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%23f4df19'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%23ff5a1f'/%3E%3C/svg%3E",
    },
    {
      id: "maria",
      name: "Мария",
      role: "Исследователь",
      bio: "Ищет редкие факты, работает с архивами и переводами.",
      avatarSvg:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%23161024'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%23b7ff3c'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%2327b7ff'/%3E%3C/svg%3E",
    },
    {
      id: "ivan",
      name: "Иван",
      role: "Технический редактор",
      bio: "Следит за платформами, железом и техническими деталями игр.",
      avatarSvg:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='100%25' height='100%25' fill='%2320150a'/%3E%3Ccircle cx='80' cy='70' r='36' fill='%2327b7ff'/%3E%3Cpath d='M30 150 C30 115 60 105 80 105 C100 105 130 115 130 150 Z' fill='%23f4df19'/%3E%3C/svg%3E",
    },
  ];
}

export const aboutStatsFixtures = getLocalizedAboutStats("ru");
export const aboutValuesFixtures = getLocalizedAboutValues("ru");
export const aboutTimelineFixtures = getLocalizedAboutTimeline("ru");
export const teamMembersFixtures = getLocalizedTeamMembers("ru");

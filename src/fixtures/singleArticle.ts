import type { ContentCardData } from "@/types/content";

export interface TocItem {
  id: string;
  number: string;
  title: string;
}

export interface FactBoxItem {
  label: string;
  value: string;
  icon?: string;
}

export interface SingleArticleData {
  id: string;
  kicker: string;
  title: string;
  dek: string;
  publishedAt: string;
  readingTimeMinutes: number;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  heroImageUrl: string;
  heroImageCaption?: string;
  toc: TocItem[];
  factBox: {
    title: string;
    items: FactBoxItem[];
  };
  relatedMaterials: ContentCardData[];
}

export const singleArticleFixture: SingleArticleData = {
  id: "article-fallout-1",
  kicker: "ИСТОРИЯ РАЗРАБОТКИ",
  title: "Как создавали первый Fallout",
  dek: "От настольных ролевых игр и «Безумного Макса» до культовой классики.",
  publishedAt: "12 августа 2024",
  readingTimeMinutes: 18,
  author: {
    name: "Алексей Морозов",
    role: "Редактор и автор",
  },
  heroImageUrl: "/images/games/fallout-vault.jpg",
  heroImageCaption: "Выходец из Убежища 13 и гермодверь в пустоши Калифорнии",
  toc: [
    { id: "world", number: "01", title: "Мир после катастрофы" },
    { id: "tabletop", number: "02", title: "От настольной игры к компьютеру" },
    { id: "cult", number: "03", title: "Почему Fallout стал культовым" },
    { id: "legacy", number: "04", title: "Наследие и влияние" },
    { id: "facts", number: "05", title: "Интересные факты" },
    { id: "sources", number: "06", title: "Источники и чтение" },
  ],
  factBox: {
    title: "Коротко",
    items: [
      { label: "Год выхода", value: "1997", icon: "📅" },
      { label: "Разработчик", value: "Interplay (Black Isle Studios)", icon: "💻" },
      { label: "Жанр", value: "RPG", icon: "🎮" },
      {
        label: "Вдохновение",
        value: "настольные RPG (GURPS), «Безумный Макс», постапокалиптическое кино",
        icon: "👥",
      },
      {
        label: "Почему важен",
        value: "задал тон целой серии и жанру постапокалиптических RPG",
        icon: "⭐",
      },
    ],
  },
  relatedMaterials: [
    {
      id: "rel-1",
      kind: "STORY",
      title: "Рождение Half-Life",
      slug: "/ru/articles/rozhdenie-half-life",
      publishedAt: "11 АВГ 2024",
      readingTimeMinutes: 14,
      badgeLabel: "ИСТОРИЯ РАЗРАБОТКИ",
      imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Crect width='100%25' height='100%25' fill='%23190e0b'/%3E%3Ctext x='200' y='130' fill='%23ff5a1f' font-family='monospace' font-weight='bold' font-size='22' text-anchor='middle'%3EHALF-LIFE%3C/text%3E%3C/svg%3E",
    },
    {
      id: "rel-2",
      kind: "ARTICLE",
      title: "Как игровые журналы меняли нас",
      slug: "/ru/articles/kak-igrovye-zhurnaly-menyali-nas",
      publishedAt: "14 АВГ 2024",
      readingTimeMinutes: 10,
      badgeLabel: "КУЛЬТУРА",
      imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Crect width='100%25' height='100%25' fill='%2319110c'/%3E%3Ctext x='200' y='130' fill='%23f4df19' font-family='monospace' font-weight='bold' font-size='22' text-anchor='middle'%3EMAGAZINES%3C/text%3E%3C/svg%3E",
    },
    {
      id: "rel-3",
      kind: "STORY",
      title: "История взлёта и падения SEGA",
      slug: "/ru/articles/istoriya-vzlyota-i-padeniya-sega",
      publishedAt: "3 АВГ 2024",
      readingTimeMinutes: 16,
      badgeLabel: "ИСТОРИЯ КОМПАНИИ",
      imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Crect width='100%25' height='100%25' fill='%23071321'/%3E%3Ctext x='200' y='130' fill='%2327b7ff' font-family='monospace' font-weight='bold' font-size='22' text-anchor='middle'%3ESEGA%3C/text%3E%3C/svg%3E",
    },
    {
      id: "rel-4",
      kind: "ARTICLE",
      title: "Как звук Doom изменил игры",
      slug: "/ru/articles/kak-zvuk-doom-izmenil-igry",
      publishedAt: "28 ИЮЛ 2024",
      readingTimeMinutes: 14,
      badgeLabel: "ТЕХНОЛОГИИ",
      imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Crect width='100%25' height='100%25' fill='%231f0b09'/%3E%3Ctext x='200' y='130' fill='%23ff5a1f' font-family='Impact' font-size='22' text-anchor='middle'%3EDOOM SOUND%3C/text%3E%3C/svg%3E",
    },
  ],
};

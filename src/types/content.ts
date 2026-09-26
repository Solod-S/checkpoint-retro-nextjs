export type ContentKind = "NEWS" | "ARTICLE" | "STORY";

export type PlatformKey = "nintendo" | "playstation" | "sega" | "pc" | "arcade" | "dreamcast" | "snes" | "gameboy";

export interface PlatformInfo {
  key: PlatformKey;
  label: string;
  color?: string;
}

export interface ContentCardData {
  id: string;
  kind: ContentKind;
  title: string;
  excerpt?: string;
  slug: string;
  publishedAt: string;
  readingTimeMinutes: number;
  imageUrl?: string;
  imageAlt?: string;
  platform?: PlatformInfo;
  categoryKey?: string;
  badgeLabel?: string;
  badgeVariant?: "default" | "orange" | "lime" | "yellow" | "blue" | "red";
  authorName?: string;
  authorAvatar?: string;
}

export interface BreakingNewsItem {
  id: string;
  title: string;
  href: string;
  date: string;
  isUrgent?: boolean;
}

export interface HeroStoryData {
  kicker: string;
  title: string;
  dek: string;
  ctaText: string;
  ctaHref: string;
  readingTimeMinutes: number;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  cornerTagline?: string;
}

export interface FilterTabItem {
  id: string;
  label: string;
  icon?: string;
  count?: number;
  href?: string;
}

import { Locale, PostKind, PostStatus, TranslationStatus } from "@prisma/client";

export { Locale, PostKind, PostStatus, TranslationStatus };

export interface PostTranslationInput {
  locale: Locale;
  slug: string;
  title: string;
  excerpt?: string;
  content: Record<string, unknown> | string;
  seoTitle?: string;
  seoDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  translationStatus?: TranslationStatus;
}

export interface PostInput {
  kind: PostKind;
  status: PostStatus;
  authorId?: string;
  platformKeys?: string[];
  categoryKeys?: string[];
  eraKeys?: string[];
  featuredImageUrl?: string;
  publishedAt?: Date | string | null;
  scheduledAt?: Date | string | null;
  translations: PostTranslationInput[];
}

export interface AdminPostListItem {
  id: string;
  kind: PostKind;
  status: PostStatus;
  title: string;
  slug: string;
  authorName: string;
  localeCoverage: {
    ru: boolean;
    uk: boolean;
    en: boolean;
  };
  publishedAt?: Date | null;
  updatedAt: Date;
}

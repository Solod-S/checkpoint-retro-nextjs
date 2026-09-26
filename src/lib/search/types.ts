import { PostKind } from "@prisma/client";
import type { AppLocale } from "@/lib/i18n/config";
import type { PlatformKey } from "@/types/content";

export { PostKind };

export interface SearchParams {
  query: string;
  locale: AppLocale;
  kind?: PostKind | "ALL";
  platform?: string;
  category?: string;
  era?: string;
  page?: number;
  pageSize?: number;
  sort?: "relevance" | "date_desc" | "date_asc";
}

export interface SearchHit {
  id: string;
  kind: "NEWS" | "ARTICLE" | "STORY";
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readingTimeMinutes: number;
  imageUrl?: string;
  platform?: {
    key: PlatformKey;
    label: string;
    color?: string;
  };
  authorName?: string;
  era?: string;
  category?: string;
  score: number;
}

export interface SearchResult {
  query: string;
  hits: SearchHit[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  countsByKind: {
    all: number;
    news: number;
    article: number;
    story: number;
  };
}

export interface SearchProvider {
  search(params: SearchParams): Promise<SearchResult>;
}

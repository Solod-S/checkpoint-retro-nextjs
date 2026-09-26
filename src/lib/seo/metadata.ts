import type { Metadata } from "next";
import { type AppLocale } from "@/lib/i18n/config";
import { getSiteUrl } from "./site";

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  locale: AppLocale;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
  translatedSlugs?: Partial<Record<AppLocale, string>>;
}

const OG_LOCALES: Record<AppLocale, string> = {
  ru: "ru_RU",
  uk: "uk_UA",
  en: "en_US",
};

const DEFAULT_OG_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630'%3E%3Crect width='100%25' height='100%25' fill='%23080c10'/%3E%3Crect x='60' y='60' width='1080' height='510' fill='%23121820' stroke='%23ff5a1f' stroke-width='4'/%3E%3Ctext x='600' y='280' fill='%23ff5a1f' font-family='monospace' font-weight='900' font-size='64' text-anchor='middle'%3ECHECKPOINT RETRO%3C/text%3E%3Ctext x='600' y='360' fill='%23b7ff3c' font-family='monospace' font-size='24' text-anchor='middle'%3ERETRO GAMING MEDIA ARCHIVE%3C/text%3E%3C/svg%3E";

export function buildPageMetadata({
  title,
  description,
  path,
  locale,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noindex = false,
  translatedSlugs,
}: MetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalUrl = new URL(`/${locale}${path}`, siteUrl).toString();

  // Multi-language hreflang mapping
  const languages: Record<string, string> = {};

  if (translatedSlugs) {
    // Page with differing localized slugs (e.g. articles)
    const section = path.split("/")[1] ?? "articles";
    if (translatedSlugs.ru) {
      languages.ru = new URL(`/ru/${section}/${translatedSlugs.ru}`, siteUrl).toString();
    }
    if (translatedSlugs.uk) {
      languages.uk = new URL(`/uk/${section}/${translatedSlugs.uk}`, siteUrl).toString();
    }
    if (translatedSlugs.en) {
      languages.en = new URL(`/en/${section}/${translatedSlugs.en}`, siteUrl).toString();
    }
    languages["x-default"] = languages.ru || canonicalUrl;
  } else {
    // Standard routes (/about, /news, /articles, /)
    languages.ru = new URL(`/ru${path}`, siteUrl).toString();
    languages.uk = new URL(`/uk${path}`, siteUrl).toString();
    languages.en = new URL(`/en${path}`, siteUrl).toString();
    languages["x-default"] = languages.ru;
  }

  const ogImageUrl = image || DEFAULT_OG_IMAGE;

  return {
    title: `${title} | Checkpoint Retro`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Checkpoint Retro",
      locale: OG_LOCALES[locale] ?? "ru_RU",
      type,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      creator: "@checkpoint_retro",
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

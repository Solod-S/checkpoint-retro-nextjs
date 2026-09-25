import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return locales.flatMap((locale) =>
    ["", "/news", "/articles", "/about"].map((path) => ({
      url: new URL(`/${locale}${path}`, siteUrl).toString(),
      changeFrequency: path === "" ? "daily" : "weekly",
      priority: path === "" ? 1 : 0.7,
    }))
  );
}

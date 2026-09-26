import type { MetadataRoute } from "next";
import { getPublishedPostsForSitemap } from "@/lib/db/repositories/posts";
import { locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: new URL(`/${locale}`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: new URL(`/${locale}/news`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: new URL(`/${locale}/articles`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: new URL(`/${locale}/about`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]);

  const dynamicPosts = await getPublishedPostsForSitemap();
  const dynamicEntries: MetadataRoute.Sitemap = dynamicPosts.map((post) => ({
    url: new URL(post.url, siteUrl).toString(),
    lastModified: post.lastModified,
    changeFrequency: post.changeFrequency,
    priority: post.priority,
  }));

  return [...staticEntries, ...dynamicEntries];
}

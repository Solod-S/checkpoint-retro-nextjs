import type { AppLocale } from "@/lib/i18n/config";
import { getSiteUrl } from "./site";

export interface RssFeedItem {
  title: string;
  link: string;
  description?: string;
  pubDate?: Date | string;
  category?: string;
  guid?: string;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateRssXml({
  locale,
  title = "Checkpoint Retro",
  description = "Независимый ретро-игровой медиапортал о классических играх, консолях и истории индустрии.",
  items,
}: {
  locale: AppLocale;
  title?: string;
  description?: string;
  items: RssFeedItem[];
}): string {
  const siteUrl = getSiteUrl().toString().replace(/\/$/, "");
  const channelUrl = `${siteUrl}/${locale}`;
  const feedUrl = `${siteUrl}/${locale}/feed.xml`;
  const lastBuildDate = new Date().toUTCString();

  const itemsXml = items
    .map((item) => {
      const itemLink = item.link.startsWith("http")
        ? item.link
        : `${siteUrl}${item.link.startsWith("/") ? "" : "/"}${item.link}`;
      const guid = item.guid || itemLink;
      const pubDate = item.pubDate
        ? new Date(item.pubDate).toUTCString()
        : new Date().toUTCString();
      const desc = item.description ? escapeXml(item.description) : "";
      const cat = item.category ? `<category>${escapeXml(item.category)}</category>` : "";

      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${itemLink}</link>
      <guid isPermaLink="true">${guid}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${desc}</description>
      ${cat}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${channelUrl}</link>
    <description>${escapeXml(description)}</description>
    <language>${locale}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;
}

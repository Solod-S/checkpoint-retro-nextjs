const fallbackSiteUrl = "http://localhost:3000";

export function getSiteUrl() {
  return new URL(process.env.SITE_URL ?? fallbackSiteUrl);
}

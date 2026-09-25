import Link from "next/link";
import type { AppLocale } from "@/lib/i18n/config";

type NavLabels = {
  home: string;
  news: string;
  articles: string;
  search: string;
  about: string;
};

export function SiteHeader({
  locale,
  labels,
}: {
  locale: AppLocale;
  labels: NavLabels;
}) {
  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <Link href={`/${locale}`} className="site-logo">
          CHECKPOINT
          <br />
          <span className="site-logo__accent">RETRO</span>
        </Link>

        <nav aria-label="Primary" className="site-nav">
          <Link href={`/${locale}`}>{labels.home}</Link>
          <Link href={`/${locale}/news`}>{labels.news}</Link>
          <Link href={`/${locale}/articles`}>{labels.articles}</Link>
          <Link href={`/${locale}/search`}>{labels.search}</Link>
          <Link href={`/${locale}/about`}>{labels.about}</Link>
        </nav>
      </div>
    </header>
  );
}

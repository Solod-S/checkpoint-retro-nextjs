import Image from "next/image";
import Link from "next/link";
import type { AppLocale } from "@/lib/i18n/config";

interface SiteFooterProps {
  locale?: AppLocale;
}

const socials = [
  { label: "X / Twitter", src: "/social/x.svg", href: "https://x.com" },
  { label: "Facebook", src: "/social/facebook.svg", href: "https://facebook.com" },
  { label: "Threads", src: "/social/threads.svg", href: "https://threads.net" },
  { label: "Instagram", src: "/social/instagram.svg", href: "https://instagram.com" },
] as const;

const footerNavLabels: Record<
  AppLocale,
  {
    home: string;
    news: string;
    articles: string;
    search: string;
    about: string;
    tagline: string;
    socialAriaLabel: string;
    navAriaLabel: string;
  }
> = {
  ru: {
    home: "Главная",
    news: "Новости",
    articles: "Статьи и истории",
    search: "Поиск",
    about: "О проекте",
    tagline: "ИГРЫ. ЛЮДИ. ИСТОРИИ. КОТОРЫЕ ОСТАЛИСЬ.",
    socialAriaLabel: "Социальные сети",
    navAriaLabel: "Навигация в подвале",
  },
  uk: {
    home: "Головна",
    news: "Новини",
    articles: "Статті та історії",
    search: "Пошук",
    about: "Про проєкт",
    tagline: "ІГРИ. ЛЮДИ. ІСТОРІЇ. ЯКІ ЗАЛИШИЛИСЯ.",
    socialAriaLabel: "Соціальні мережі",
    navAriaLabel: "Навігація у підвалі",
  },
  en: {
    home: "Home",
    news: "News",
    articles: "Articles & Stories",
    search: "Search",
    about: "About",
    tagline: "GAMES. PEOPLE. STORIES. THAT ENDURED.",
    socialAriaLabel: "Social networks",
    navAriaLabel: "Footer navigation",
  },
};

export function SiteFooter({ locale = "ru" }: SiteFooterProps) {
  const t = footerNavLabels[locale] ?? footerNavLabels.ru;

  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__brand-block">
          <span className="site-footer__copyright">
            CHECKPOINT RETRO © 2026
          </span>
          <span className="site-footer__sep" aria-hidden="true">|</span>
          <span className="site-footer__tagline muted">
            {t.tagline}
          </span>
        </div>

        <nav aria-label={t.navAriaLabel} className="site-footer__nav">
          <Link href={`/${locale}`}>{t.home}</Link>
          <Link href={`/${locale}/news`}>{t.news}</Link>
          <Link href={`/${locale}/articles`}>{t.articles}</Link>
          <Link href={`/${locale}/search`}>{t.search}</Link>
          <Link href={`/${locale}/about`}>{t.about}</Link>
        </nav>

        <div className="site-footer__social-group">
          <div className="social-links" aria-label={t.socialAriaLabel}>
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className="social-links__item"
              >
                <Image src={item.src} alt="" width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

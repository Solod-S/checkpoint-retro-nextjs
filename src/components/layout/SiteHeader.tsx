"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { AppLocale } from "@/lib/i18n/config";

type NavLabels = {
  home: string;
  news: string;
  articles: string;
  search: string;
  about: string;
};

interface SiteHeaderProps {
  locale: AppLocale;
  labels: NavLabels;
}

const taglines: Record<AppLocale, string[]> = {
  ru: ["ИГРЫ.", "ЛЮДИ.", "ИСТОРИИ.", "КОТОРЫЕ ОСТАЛИСЬ."],
  uk: ["ІГРИ.", "ЛЮДИ.", "ІСТОРІЇ.", "ЯКІ ЗАЛИШИЛИСЯ."],
  en: ["GAMES.", "PEOPLE.", "STORIES.", "THAT ENDURED."],
};

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: labels.home, exact: true },
    { href: `/${locale}/news`, label: labels.news },
    { href: `/${locale}/articles`, label: labels.articles },
    { href: `/${locale}/search`, label: labels.search, icon: "search" },
    { href: `/${locale}/about`, label: labels.about },
  ];

  const isActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname.startsWith(href);
  };

  const getAlternateLocaleUrl = (targetLocale: AppLocale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  };

  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        {/* Brand Group */}
        <div className="site-header__brand-group">
          <Link href={`/${locale}`} className="site-logo" aria-label="Checkpoint Retro">
            {/* Retro Floppy Icon */}
            <span className="site-logo__icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--color-text)" strokeWidth="2" />
                <rect x="7" y="3" width="10" height="7" stroke="var(--color-text)" strokeWidth="2" />
                <rect x="6" y="14" width="12" height="5" stroke="var(--color-orange)" strokeWidth="2" />
              </svg>
            </span>
            <div className="site-logo__text">
              <span className="site-logo__primary">CHECKPOINT</span>
              <span className="site-logo__accent">RETRO</span>
            </div>
          </Link>

          <div className="site-header__tagline" aria-hidden="true">
            {taglines[locale].map((word, idx) => (
              <span key={idx}>{word}</span>
            ))}
          </div>
        </div>

        {/* Desktop Nav */}
        <nav
          aria-label={
            locale === "en"
              ? "Primary navigation"
              : locale === "uk"
              ? "Основна навігація"
              : "Основная навигация"
          }
          className="site-nav"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href, link.exact);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`site-nav__link ${active ? "site-nav__link--active" : ""}`.trim()}
              >
                {link.icon === "search" ? (
                  <span className="site-nav__search-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  </span>
                ) : null}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Side Save Point Badge */}
        <div className="site-header__aside">
          <div
            className="site-header__save-point"
            title={
              locale === "en"
                ? "A save point for great games"
                : locale === "uk"
                ? "Точка збереження для гарних ігор"
                : "Точка сохранения для хороших игр"
            }
          >
            <span className="site-header__save-point-text">
              <span>SAVE</span>
              <span>POINT</span>
              <span>FOR</span>
              <span>GOOD</span>
              <span>GAMES</span>
            </span>
            <span className="site-header__save-point-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-lime)" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="8" y="4" width="8" height="6" />
                <rect x="7" y="14" width="10" height="4" />
              </svg>
            </span>
          </div>

          {/* Language Switcher (Select Dropdown) */}
          <div className="site-header__lang-select-wrap">
            <label htmlFor="header-lang-select" className="sr-only">
              {locale === "en" ? "Language" : locale === "uk" ? "Мова" : "Язык"}
            </label>
            <select
              id="header-lang-select"
              value={locale}
              onChange={(e) => {
                const targetLocale = e.target.value as AppLocale;
                router.push(getAlternateLocaleUrl(targetLocale));
              }}
              className="site-header__lang-select"
              aria-label={locale === "en" ? "Language" : locale === "uk" ? "Мова" : "Язык"}
            >
              <option value="ru">RU (Рус)</option>
              <option value="uk">UK (Укр)</option>
              <option value="en">EN (Eng)</option>
            </select>
          </div>

          {/* Mobile Actions: Search + Hamburger */}
          <div className="site-header__mobile-actions">
            <Link
              href={`/${locale}/search`}
              className="site-header__mobile-btn"
              aria-label={labels.search}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </Link>

            <button
              type="button"
              className="site-header__mobile-btn site-header__hamburger"
              aria-label={
                mobileMenuOpen
                  ? locale === "en"
                    ? "Close menu"
                    : locale === "uk"
                    ? "Закрити меню"
                    : "Закрыть меню"
                  : locale === "en"
                  ? "Open menu"
                  : locale === "uk"
                  ? "Відкрити меню"
                  : "Открыть меню"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen ? (
        <div
          className="site-header__mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={
            locale === "en"
              ? "Mobile menu"
              : locale === "uk"
              ? "Мобільне меню"
              : "Мобильное меню"
          }
        >
          <nav className="site-header__mobile-nav">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.exact);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`site-header__mobile-link ${
                    active ? "site-header__mobile-link--active" : ""
                  }`.trim()}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__mobile-footer">
            <span className="muted">
              {locale === "en" ? "Language:" : locale === "uk" ? "Мова:" : "Язык:"}
            </span>
            <div className="site-header__lang-select-wrap">
              <select
                value={locale}
                onChange={(e) => {
                  setMobileMenuOpen(false);
                  const targetLocale = e.target.value as AppLocale;
                  router.push(getAlternateLocaleUrl(targetLocale));
                }}
                className="site-header__lang-select"
                aria-label={locale === "en" ? "Language" : locale === "uk" ? "Мова" : "Язык"}
              >
                <option value="ru">Русский (RU)</option>
                <option value="uk">Українська (UK)</option>
                <option value="en">English (EN)</option>
              </select>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

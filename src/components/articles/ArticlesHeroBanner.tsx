import Image from "next/image";
import Link from "next/link";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroFrame } from "@/components/ui/RetroFrame";
import type { ContentCardData } from "@/types/content";

interface ArticlesHeroBannerProps {
  item: ContentCardData;
  className?: string;
}

export function ArticlesHeroBanner({
  item,
  className = "",
}: ArticlesHeroBannerProps) {
  const isEn = item.slug.startsWith("/en/") || item.slug === "/en";
  const isUk = item.slug.startsWith("/uk/") || item.slug === "/uk";

  const readTimeLabel = isEn ? "MIN READ" : isUk ? "ХВ ЧИТАННЯ" : "МИН ЧТЕНИЯ";
  const ctaText = isEn
    ? "Read Story"
    : isUk
    ? "Читати статтю"
    : "Читать статью";

  const badgeText =
    item.badgeLabel ??
    (isEn ? "DEV HISTORY" : isUk ? "ІСТОРІЯ СТВОРЕННЯ" : "ИСТОРИЯ СОЗДАНИЯ");

  return (
    <RetroFrame
      className={`articles-hero-banner ${className}`.trim()}
      brackets
      bracketVariant="orange"
      scanlines
    >
      <div className="articles-hero-banner__inner">
        {item.imageUrl ? (
          <div className="articles-hero-banner__media">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt ?? item.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="articles-hero-banner__image"
            />
            <div className="articles-hero-banner__gradient-overlay" />
          </div>
        ) : null}

        <div className="articles-hero-banner__content">
          <div className="articles-hero-banner__top">
            <span className="articles-hero-banner__badge">{badgeText}</span>
          </div>

          <div className="articles-hero-banner__meta">
            <time
              className="articles-hero-banner__date"
              dateTime={item.publishedAt}
            >
              {item.publishedAt}
            </time>
            <span className="articles-hero-banner__meta-sep">⊙</span>
            <span className="articles-hero-banner__time">
              {item.readingTimeMinutes || 18} {readTimeLabel}
            </span>
          </div>

          <h2 className="articles-hero-banner__title">
            <Link href={item.slug} className="articles-hero-banner__title-link">
              {item.title}
            </Link>
          </h2>

          {item.excerpt ? (
            <p className="articles-hero-banner__dek">{item.excerpt}</p>
          ) : null}

          <div className="articles-hero-banner__actions">
            <RetroButton href={item.slug} variant="primary" size="md">
              {ctaText} →
            </RetroButton>
          </div>
        </div>
      </div>
    </RetroFrame>
  );
}

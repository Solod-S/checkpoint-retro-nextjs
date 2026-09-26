import Link from "next/link";
import Image from "next/image";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { PlatformBadge } from "@/components/ui/PlatformBadge";
import type { ContentCardData } from "@/types/content";

export type ContentCardVariant = "grid" | "featured" | "compact" | "horizontal";

interface ContentCardProps {
  item: ContentCardData;
  variant?: ContentCardVariant;
  className?: string;
  showCornerBrackets?: boolean;
  priority?: boolean;
}

export function ContentCard({
  item,
  variant = "grid",
  className = "",
  showCornerBrackets = false,
  priority = false,
}: ContentCardProps) {
  const isFeatured = variant === "featured";
  const isHorizontal = variant === "horizontal";
  const isCompact = variant === "compact";

  const isEn = item.slug.startsWith("/en/") || item.slug === "/en";
  const isUk = item.slug.startsWith("/uk/") || item.slug === "/uk";
  const readTimeSuffix = isEn ? "MIN READ" : isUk ? "ХВ ЧИТАННЯ" : "МИН ЧТЕНИЯ";
  const kindLabel =
    item.kind === "NEWS"
      ? isEn ? "NEWS" : isUk ? "НОВИНИ" : "НОВОСТИ"
      : item.kind === "STORY"
        ? isEn ? "STORY" : isUk ? "ІСТОРІЯ" : "ИСТОРИЯ"
        : isEn ? "ARTICLE" : isUk ? "СТАТТЯ" : "СТАТЬЯ";

  return (
    <article
      className={`content-card content-card--${variant} ${className}`.trim()}
    >
      {showCornerBrackets ? <CornerBrackets variant="muted" size={6} /> : null}

      {item.imageUrl ? (
        <div className="content-card__media">
          <Link href={item.slug} tabIndex={-1} aria-hidden="true">
            <div className="content-card__image-wrap">
              <Image
                src={item.imageUrl}
                alt={item.imageAlt ?? item.title}
                fill
                priority={priority}
                sizes={
                  isFeatured
                    ? "(max-width: 768px) 100vw, 33vw"
                    : isHorizontal
                      ? "140px"
                      : "(max-width: 768px) 100vw, 25vw"
                }
                className="content-card__image"
              />
            </div>
          </Link>
        </div>
      ) : null}

      <div className="content-card__body">
        <div className="content-card__header-meta">
          {item.platform ? (
            <PlatformBadge platform={item.platform.key} size="sm">
              {item.platform.label}
            </PlatformBadge>
          ) : item.badgeLabel ? (
            <span
              className={`content-card__badge content-card__badge--${
                item.badgeVariant ?? "orange"
              }`}
            >
              {item.badgeLabel}
            </span>
          ) : null}

          {isFeatured && item.readingTimeMinutes ? (
            <span className="content-card__time">
              {item.readingTimeMinutes} {readTimeSuffix}
            </span>
          ) : (
            <time className="content-card__date" dateTime={item.publishedAt}>
              {item.publishedAt}
            </time>
          )}
        </div>

        <h3 className="content-card__title">
          <Link href={item.slug} className="content-card__link">
            {item.title}
          </Link>
        </h3>

        {item.excerpt && !isCompact ? (
          <p className="content-card__excerpt">{item.excerpt}</p>
        ) : null}

        <div className="content-card__footer-meta">
          {isFeatured ? (
            <time className="content-card__date" dateTime={item.publishedAt}>
              {item.publishedAt}
            </time>
          ) : (
            <>
              <span className="content-card__kind-label">
                {kindLabel}
              </span>
              <span className="content-card__meta-sep">|</span>
              <span className="content-card__time">
                {item.readingTimeMinutes} {readTimeSuffix}
              </span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

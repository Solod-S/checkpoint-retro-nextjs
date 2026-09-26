import Link from "next/link";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  action?: ReactNode;
  actionHref?: string;
  actionLabel?: string;
  kicker?: string;
  className?: string;
  level?: 2 | 3;
}

export function SectionHeading({
  title,
  action,
  actionHref,
  actionLabel,
  kicker,
  className = "",
  level = 2,
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as const;

  return (
    <div className={`section-heading ${className}`.trim()}>
      <div className="section-heading__main">
        {kicker ? <span className="section-heading__kicker">{kicker}</span> : null}
        <HeadingTag className="section-heading__title">{title}</HeadingTag>
      </div>

      <div className="section-heading__action">
        {action ??
          (actionHref && actionLabel ? (
            <Link href={actionHref} className="section-heading__link">
              <span>{actionLabel}</span>
              <span className="section-heading__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ) : null)}
      </div>
    </div>
  );
}

import Link from "next/link";
import type { BreakingNewsItem } from "@/types/content";

interface BreakingStripProps {
  label?: string;
  ariaLabel?: string;
  items: BreakingNewsItem[];
  className?: string;
}

export function BreakingStrip({
  label = "СРОЧНО",
  ariaLabel,
  items,
  className = "",
}: BreakingStripProps) {
  if (!items.length) return null;

  const resolvedAriaLabel = ariaLabel ?? label;

  return (
    <div
      className={`breaking-strip ${className}`.trim()}
      role="region"
      aria-label={resolvedAriaLabel}
    >
      <div className="breaking-strip__inner">
        <div className="breaking-strip__badge" aria-hidden="true">
          <span className="breaking-strip__badge-text">{label}</span>
        </div>

        <div className="breaking-strip__ticker">
          {items.map((item, idx) => (
            <div key={item.id} className="breaking-strip__item">
              <Link href={item.href} className="breaking-strip__link">
                {item.title}
              </Link>
              {idx < items.length - 1 ? (
                <span className="breaking-strip__sep" aria-hidden="true">
                  •
                </span>
              ) : null}
            </div>
          ))}
        </div>

        {items[0]?.date ? (
          <div className="breaking-strip__date">{items[0].date}</div>
        ) : null}
      </div>
    </div>
  );
}

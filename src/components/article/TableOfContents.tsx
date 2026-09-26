"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import type { TocItem } from "@/fixtures/singleArticle";

interface TableOfContentsProps {
  items: TocItem[];
  activeId?: string;
  headingLabel?: string;
  className?: string;
}

export function TableOfContents({
  items,
  activeId,
  headingLabel,
  className = "",
}: TableOfContentsProps) {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");
  const isUk = pathname?.startsWith("/uk");

  const resolvedLabel =
    headingLabel ??
    (isEn ? "Table of Contents" : isUk ? "Зміст" : "Содержание");

  const [mobileOpen, setMobileOpen] = useState(false);
  const currentActive = activeId ?? items[0]?.id;

  return (
    <aside className={`article-toc ${className}`.trim()} aria-label={resolvedLabel}>
      {/* Mobile Toggle Bar */}
      <button
        type="button"
        className="article-toc__mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-expanded={mobileOpen}
      >
        <span className="article-toc__heading-label">{resolvedLabel}</span>
        <span className="article-toc__toggle-icon" aria-hidden="true">
          {mobileOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Desktop / Expanded List */}
      <div
        className={`article-toc__container ${
          mobileOpen ? "article-toc__container--open" : ""
        }`.trim()}
      >
        <div className="article-toc__desktop-header">
          <span className="article-toc__heading-label">{resolvedLabel}</span>
        </div>

        <nav className="article-toc__nav">
          <ol className="article-toc__list">
            {items.map((item) => {
              const isActive = item.id === currentActive;
              return (
                <li key={item.id} className="article-toc__item">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`article-toc__link ${
                      isActive ? "article-toc__link--active" : ""
                    }`.trim()}
                  >
                    <span className="article-toc__number">{item.number}</span>
                    <span className="article-toc__title">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import type { FilterTabItem } from "@/types/content";

interface FilterTabsProps {
  items: FilterTabItem[];
  activeId: string;
  onSelect?: (id: string) => void;
  className?: string;
  ariaLabel?: string;
}

export function FilterTabs({
  items,
  activeId,
  onSelect,
  className = "",
  ariaLabel = "Filter",
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`filter-tabs ${className}`.trim()}
    >
      <div className="filter-tabs__track">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const content = (
            <>
              {item.icon ? (
                <span className="filter-tab__icon" aria-hidden="true">
                  {item.icon}
                </span>
              ) : null}
              <span className="filter-tab__label">{item.label}</span>
              {typeof item.count === "number" ? (
                <span className="filter-tab__count">({item.count})</span>
              ) : null}
            </>
          );

          if (item.href) {
            return (
              <Link
                key={item.id}
                href={item.href}
                role="tab"
                aria-selected={isActive}
                className={`filter-tab ${
                  isActive ? "filter-tab--active" : ""
                }`.trim()}
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect?.(item.id)}
              className={`filter-tab ${
                isActive ? "filter-tab--active" : ""
              }`.trim()}
            >
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
}

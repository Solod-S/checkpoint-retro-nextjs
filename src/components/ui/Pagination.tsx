import Link from "next/link";

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  hrefBuilder?: (page: number) => string;
  hrefTemplate?: string;
  className?: string;
  navAriaLabel?: string;
  prevAriaLabel?: string;
  nextAriaLabel?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 1,
  hrefBuilder,
  hrefTemplate,
  className = "",
  navAriaLabel = "Навигация по страницам",
  prevAriaLabel = "Предыдущая страница",
  nextAriaLabel = "Следующая страница",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const buildHref = (page: number): string => {
    if (hrefBuilder) return hrefBuilder(page);
    if (hrefTemplate) return hrefTemplate.replace("{page}", String(page));
    return `?page=${page}`;
  };

  return (
    <nav
      className={`retro-pagination ${className}`.trim()}
      aria-label={navAriaLabel}
    >
      {prevPage >= 1 ? (
        <Link
          href={buildHref(prevPage)}
          className="retro-pagination__btn retro-pagination__prev"
          aria-label={prevAriaLabel}
        >
          ‹
        </Link>
      ) : (
        <span
          className="retro-pagination__btn retro-pagination__prev retro-pagination__btn--disabled"
          aria-disabled="true"
        >
          ‹
        </span>
      )}

      <div className="retro-pagination__pages">
        {pages.map((p) => {
          const isActive = p === currentPage;
          return (
            <Link
              key={p}
              href={buildHref(p)}
              aria-current={isActive ? "page" : undefined}
              className={`retro-pagination__page ${
                isActive ? "retro-pagination__page--active" : ""
              }`.trim()}
            >
              {p}
            </Link>
          );
        })}
      </div>

      {nextPage <= totalPages ? (
        <Link
          href={buildHref(nextPage)}
          className="retro-pagination__btn retro-pagination__next"
          aria-label={nextAriaLabel}
        >
          ›
        </Link>
      ) : (
        <span
          className="retro-pagination__btn retro-pagination__next retro-pagination__btn--disabled"
          aria-disabled="true"
        >
          ›
        </span>
      )}
    </nav>
  );
}

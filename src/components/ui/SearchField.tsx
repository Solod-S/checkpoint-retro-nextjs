"use client";

import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { RetroButton } from "@/components/ui/RetroButton";

interface SearchFieldProps {
  initialQuery?: string;
  action?: string;
  onSearch?: (query: string) => void;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
}

export function SearchField({
  initialQuery = "",
  action,
  onSearch,
  placeholder,
  buttonLabel,
  className = "",
}: SearchFieldProps) {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");
  const isUk = pathname?.startsWith("/uk");

  const resolvedPlaceholder =
    placeholder ??
    (isEn
      ? "Enter query (e.g. Dreamcast, Super Nintendo, Doom...)"
      : isUk
      ? "Введіть запит (наприклад: Dreamcast, Super Nintendo, Doom...)"
      : "Введите запрос (например: Dreamcast, Super Nintendo, Doom...)");

  const resolvedButtonLabel =
    buttonLabel ?? (isEn ? "Search" : isUk ? "Знайти" : "Найти");

  const resolvedAriaLabel = isEn
    ? "Search archive"
    : isUk
    ? "Пошук по архіву"
    : "Поиск по архиву";

  const [prevInitialQuery, setPrevInitialQuery] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);

  if (initialQuery !== prevInitialQuery) {
    setPrevInitialQuery(initialQuery);
    setQuery(initialQuery);
  }

  const handleSubmit = (e: FormEvent) => {
    if (onSearch) {
      e.preventDefault();
      onSearch(query);
    }
  };

  return (
    <form
      action={action}
      method="GET"
      onSubmit={handleSubmit}
      className={`search-terminal ${className}`.trim()}
      role="search"
    >
      <div className="search-terminal__frame">
        <CornerBrackets variant="orange" size={8} />

        <div className="search-terminal__prompt" aria-hidden="true">
          &gt;
        </div>

        <input
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={resolvedPlaceholder}
          aria-label={resolvedAriaLabel}
          className="search-terminal__input"
        />

        <RetroButton
          type="submit"
          variant="primary"
          size="md"
          className="search-terminal__btn"
        >
          {resolvedButtonLabel}
        </RetroButton>
      </div>
    </form>
  );
}

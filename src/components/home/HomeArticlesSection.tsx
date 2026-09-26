"use client";

import { useState } from "react";
import { ContentCard } from "@/components/cards/ContentCard";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentCardData, FilterTabItem } from "@/types/content";

interface HomeArticlesSectionProps {
  title: string;
  actionLabel: string;
  actionHref: string;
  tabs: FilterTabItem[];
  articles: ContentCardData[];
  filterAriaLabel?: string;
}

export function HomeArticlesSection({
  title,
  actionLabel,
  actionHref,
  tabs,
  articles,
  filterAriaLabel,
}: HomeArticlesSectionProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredArticles =
    activeTab === "all"
      ? articles
      : articles.filter(
          (item) =>
            item.platform?.key.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <section className="home-section" aria-labelledby="articles-heading">
      <div className="home-section__header-row">
        <SectionHeading
          title={title}
          actionHref={actionHref}
          actionLabel={actionLabel}
        />
        <FilterTabs
          items={tabs}
          activeId={activeTab}
          onSelect={setActiveTab}
          ariaLabel={filterAriaLabel ?? title}
          className="home-section__tabs"
        />
      </div>

      <div className="articles-grid">
        {(filteredArticles.length > 0 ? filteredArticles : articles).map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            variant="featured"
            showCornerBrackets
          />
        ))}
      </div>
    </section>
  );
}

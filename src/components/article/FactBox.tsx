import { RetroFrame } from "@/components/ui/RetroFrame";
import type { FactBoxItem } from "@/fixtures/singleArticle";

interface FactBoxProps {
  title?: string;
  items: FactBoxItem[];
  className?: string;
}

export function FactBox({
  title = "Коротко",
  items,
  className = "",
}: FactBoxProps) {
  return (
    <RetroFrame className={`article-fact-box ${className}`.trim()} brackets bracketVariant="orange">
      <h3 className="article-fact-box__title">{title}</h3>

      <dl className="article-fact-box__list">
        {items.map((item, index) => (
          <div key={index} className="article-fact-box__item">
            <dt className="article-fact-box__term">
              {item.icon ? (
                <span className="article-fact-box__icon" aria-hidden="true">
                  {item.icon}
                </span>
              ) : null}
              <span>{item.label}:</span>
            </dt>
            <dd className="article-fact-box__desc">{item.value}</dd>
          </div>
        ))}
      </dl>
    </RetroFrame>
  );
}

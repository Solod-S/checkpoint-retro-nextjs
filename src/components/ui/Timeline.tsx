import Link from "next/link";
import { RetroFrame } from "./RetroFrame";

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description?: string;
  icon?: string;
  href?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: "horizontal" | "vertical";
  className?: string;
}

export function Timeline({
  items,
  variant = "horizontal",
  className = "",
}: TimelineProps) {
  return (
    <div className={`retro-timeline retro-timeline--${variant} ${className}`.trim()}>
      <div className="retro-timeline__track">
        {items.map((item, index) => {
          const content = (
            <div className="retro-timeline__item-content">
              <div className="retro-timeline__node">
                <span className="retro-timeline__icon" aria-hidden="true">
                  {item.icon ?? "●"}
                </span>
              </div>
              <div className="retro-timeline__meta">
                <span className="retro-timeline__period">{item.period}</span>
                <strong className="retro-timeline__title">{item.title}</strong>
                {item.description ? (
                  <span className="retro-timeline__desc">{item.description}</span>
                ) : null}
              </div>
            </div>
          );

          return (
            <div key={item.id || index} className="retro-timeline__step">
              {item.href ? (
                <Link href={item.href} className="retro-timeline__link">
                  <RetroFrame className="retro-timeline__card">{content}</RetroFrame>
                </Link>
              ) : (
                <div className="retro-timeline__card">{content}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

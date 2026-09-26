import Image from "next/image";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroFrame } from "@/components/ui/RetroFrame";
import type { HeroStoryData } from "@/types/content";

interface HeroStoryProps {
  story: HeroStoryData;
  className?: string;
  readTimeLabel?: string;
}

export function HeroStory({
  story,
  className = "",
  readTimeLabel = "МИН ЧТЕНИЯ",
}: HeroStoryProps) {
  return (
    <RetroFrame
      className={`hero-story ${className}`.trim()}
      brackets
      bracketVariant="orange"
      scanlines
    >
      <div className="hero-story__grid">
        <div className="hero-story__content">
          <div className="hero-story__kicker-wrap">
            <span className="hero-story__kicker">{story.kicker}</span>
          </div>

          <h1 className="hero-story__title">{story.title}</h1>

          <p className="hero-story__dek">{story.dek}</p>

          <div className="hero-story__actions">
            <RetroButton href={story.ctaHref} variant="primary" size="lg">
              {story.ctaText} →
            </RetroButton>
          </div>

          <div className="hero-story__meta">
            <span className="hero-story__meta-item">
              {story.readingTimeMinutes} {readTimeLabel}
            </span>
            <span className="hero-story__meta-sep">|</span>
            <time className="hero-story__meta-item" dateTime={story.publishedAt}>
              {story.publishedAt}
            </time>
          </div>
        </div>

        <div className="hero-story__visual">
          <div className="hero-story__image-frame">
            <CornerBrackets variant="orange" size={10} />
            <div className="hero-story__image-wrap">
              <Image
                src={story.imageUrl}
                alt={story.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="hero-story__image"
              />
            </div>
            {story.cornerTagline ? (
              <div className="hero-story__tagline" aria-hidden="true">
                {story.cornerTagline}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </RetroFrame>
  );
}

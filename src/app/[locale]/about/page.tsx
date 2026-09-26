import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NewsletterBanner } from "@/components/common/NewsletterBanner";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroFrame } from "@/components/ui/RetroFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline, type TimelineItem } from "@/components/ui/Timeline";
import {
  getLocalizedAboutStats,
  getLocalizedAboutTimeline,
  getLocalizedAboutValues,
  getLocalizedTeamMembers,
} from "@/fixtures/about";
import { isLocale, type AppLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import {
  JsonLd,
  buildBreadcrumbsJsonLd,
  buildOrganizationJsonLd,
} from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);

  return buildPageMetadata({
    title: dictionary.about?.title || dictionary.nav.about || "О проекте",
    description:
      dictionary.about?.missionLead ||
      "Checkpoint Retro — независимое медиа о классических играх, консолях и людях, изменивших игровую индустрию.",
    path: "/about",
    locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const appLocale = locale as AppLocale;
  const dictionary = await getDictionary(appLocale);
  const siteUrl = getSiteUrl();

  const orgJsonLd = buildOrganizationJsonLd();
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd([
    {
      name: dictionary.nav.home || "Главная",
      url: new URL(`/${locale}`, siteUrl).toString(),
    },
    {
      name: dictionary.nav.about || "О проекте",
      url: new URL(`/${locale}/about`, siteUrl).toString(),
    },
  ]);

  const stats = getLocalizedAboutStats(appLocale);
  const values = getLocalizedAboutValues(appLocale);
  const milestones = getLocalizedAboutTimeline(appLocale);
  const team = getLocalizedTeamMembers(appLocale);

  const aboutHeroArtSvg = "/images/about/crt-arcade.jpg";

  const timelineItems: TimelineItem[] = milestones.map((item) => ({
    id: `tl-${item.year}-${item.title}`,
    period: item.year,
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));

  return (
    <>
      <JsonLd data={orgJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />

      <main id="main-content" className="page-shell page-main about-page">
        {/* Hero Mission Section */}
        <section className="about-hero-section">
          <div className="about-hero-grid">
            <div className="about-hero-text">
              <h1 className="display-title">
                {dictionary.about?.title || "Про Checkpoint Retro"}
              </h1>
              <p className="about-hero-lead">
                {dictionary.about?.missionLead ||
                  "Сохраняем истории игр, людей и технологий, которые изменили индустрию."}
              </p>
              <div className="about-hero-body">
                <p>
                  {dictionary.about?.missionP1 ||
                    "Checkpoint Retro — это независимое медиа о классических играх, консолях и людях, которые сделали игровую культуру такой, какой мы её знаем и любим."}
                </p>
                <p>
                  {dictionary.about?.missionP2 ||
                    "Мы рассказываем проверенные истории, копаемся в деталях, собираем редкие факты и сохраняем память о золотых эпохах игр — от 8 и 16 бит до легендарной Dreamcast и далее."}
                </p>
              </div>
            </div>

            <div className="about-hero-visual">
              <div className="about-hero-frame">
                <CornerBrackets variant="orange" size={10} />
                <div className="about-hero-image-wrap">
                  <Image
                    src={aboutHeroArtSvg}
                    alt={dictionary.about?.title || "Retro arcade"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="about-hero-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="about-stats-row">
            {stats.map((stat, idx) => (
              <RetroFrame
                key={idx}
                className="about-stat-card"
                brackets
                bracketVariant="orange"
              >
                <span className="about-stat-card__icon" aria-hidden="true">
                  {stat.icon}
                </span>
                <div className="about-stat-card__content">
                  <strong className="about-stat-card__value">
                    {stat.value}
                  </strong>
                  <span className="about-stat-card__label">{stat.label}</span>
                  <span className="about-stat-card__sublabel muted">
                    {stat.sublabel}
                  </span>
                </div>
              </RetroFrame>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="home-section" aria-labelledby="values-heading">
          <SectionHeading
            title={dictionary.about?.values || "Наши ценности"}
          />
          <div className="about-values-grid">
            {values.map((val) => (
              <RetroFrame
                key={val.id}
                className="about-value-card"
                brackets
                bracketVariant="orange"
              >
                <div className="about-value-card__header">
                  <span className="about-value-card__icon" aria-hidden="true">
                    {val.icon}
                  </span>
                  <h3 className="about-value-card__title">{val.title}</h3>
                </div>
                <p className="about-value-card__desc">{val.description}</p>
              </RetroFrame>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="home-section" aria-labelledby="timeline-heading">
          <SectionHeading
            title={dictionary.about?.timeline || "Наш путь"}
            kicker={
              dictionary.about?.timelineKicker ||
              "От первых публикаций до большого сообщества — мы продолжаем сохранять истории, которые важны."
            }
          />
          <Timeline items={timelineItems} variant="horizontal" />
        </section>

        {/* Team Section */}
        <section className="home-section" aria-labelledby="team-heading">
          <SectionHeading
            title={dictionary.about?.team || "Наша команда"}
            kicker={
              dictionary.about?.teamKicker ||
              "Небольшая команда энтузиастов, которые живут играми."
            }
          />
          <div className="about-team-grid">
            {team.map((member) => (
              <RetroFrame
                key={member.id}
                className="about-member-card"
                brackets
                bracketVariant="orange"
              >
                <div className="about-member-card__avatar">
                  <Image src={member.avatarSvg} alt={member.name} fill sizes="72px" />
                </div>
                <div className="about-member-card__info">
                  <h3 className="about-member-card__name">{member.name}</h3>
                  <span className="about-member-card__role">{member.role}</span>
                  <p className="about-member-card__bio muted">{member.bio}</p>
                </div>
              </RetroFrame>
            ))}
          </div>
        </section>

        {/* Action Banners */}
        <section className="home-section about-action-banners">
          <RetroFrame
            className="about-action-card"
            brackets
            bracketVariant="orange"
          >
            <div className="about-action-card__icon" aria-hidden="true">
              ✉️
            </div>
            <div className="about-action-card__content">
              <h3 className="about-action-card__title">
                {dictionary.about?.suggestTopic || "Предложить тему"}
              </h3>
              <p className="about-action-card__text muted">
                {dictionary.about?.suggestDesc ||
                  "Есть идея для статьи, редкая история или интересный факт? Мы всегда открыты к предложениям!"}
              </p>
            </div>
            <RetroButton variant="primary" size="md">
              {dictionary.about?.suggestBtn || "Предложить тему →"}
            </RetroButton>
          </RetroFrame>
        </section>

        {/* Newsletter */}
        <section className="home-section--newsletter">
          <NewsletterBanner />
        </section>
      </main>
    </>
  );
}

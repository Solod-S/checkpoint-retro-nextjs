import Link from "next/link";
import { notFound } from "next/navigation";
import { RetroFrame } from "@/components/ui/RetroFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale } from "@/lib/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);

  return (
    <main className="page-shell page-main">
      <RetroFrame className="hero-shell">
        <div className="hero-shell__content">
          <div className="hero-kicker">{dictionary.home.kicker}</div>
          <h1 className="display-title">{dictionary.home.title}</h1>
          <p className="hero-dek">{dictionary.home.subtitle}</p>
          <Link href={`/${locale}/articles`} className="retro-button">
            {dictionary.home.cta} →
          </Link>
        </div>
      </RetroFrame>

      <section className="home-section">
        <SectionHeading title={dictionary.nav.news} />
        <div className="card-grid">
          {[1, 2, 3, 4].map((item) => (
            <RetroFrame key={item} className="content-card">
              <div className="content-card__meta">FIXTURE 0{item}</div>
              <h3>Content card placeholder</h3>
              <p className="muted">{dictionary.common.comingSoon}</p>
            </RetroFrame>
          ))}
        </div>
      </section>
    </main>
  );
}

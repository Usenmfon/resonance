import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AwardsGrid } from "@/components/awards-grid";
import { DiscographyCard } from "@/components/discography-card";
import { EditorialImage } from "@/components/editorial-image";
import { FeaturedMoments } from "@/components/featured-moments";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { LegacySection } from "@/components/legacy-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatCard } from "@/components/stat-card";
import { Timeline } from "@/components/timeline";
import { celebrities } from "@/data/celebrities";

type PageProps = {
  params: {
    slug: string;
  };
};

function getCelebrity(slug: string) {
  return celebrities.find((celebrity) => celebrity.slug === slug);
}

export function generateStaticParams() {
  return celebrities.map((celebrity) => ({ slug: celebrity.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const celebrity = getCelebrity(params.slug);

  if (!celebrity) {
    return {
      title: "Artist Not Found"
    };
  }

  return {
    title: celebrity.stageName,
    description: `${celebrity.stageName} biography, discography, awards, gallery, and cultural legacy.`
  };
}

export default function CelebrityDetailPage({ params }: PageProps) {
  const celebrity = getCelebrity(params.slug);

  if (!celebrity) {
    notFound();
  }

  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grain-radial" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:px-10 md:py-20">
          <Reveal>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xs uppercase tracking-[0.38em] text-muted">Artist Biography</p>
              <div className="space-y-4">
                <h1 className="font-display text-[clamp(3rem,14vw,4.5rem)] uppercase leading-[0.9] tracking-display md:text-7xl xl:text-8xl">
                  {celebrity.stageName}
                </h1>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">{celebrity.name}</p>
              </div>
              <p className="max-w-xl text-base leading-8 text-muted md:text-lg">{celebrity.shortBio}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-[24px] border border-line bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Birth Info</p>
                  <p className="mt-4 text-sm leading-7 text-foreground">{celebrity.birthInfo}</p>
                </article>
                <article className="rounded-[24px] border border-line bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Genres</p>
                  <p className="mt-4 text-sm leading-7 text-foreground">{celebrity.genres.join(" / ")}</p>
                </article>
                <article className="rounded-[24px] border border-line bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Labels</p>
                  <p className="mt-4 text-sm leading-7 text-foreground">{celebrity.labels.join(" / ")}</p>
                </article>
                <article className="rounded-[24px] border border-line bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Instruments</p>
                  <p className="mt-4 text-sm leading-7 text-foreground">
                    {celebrity.instruments.join(" / ")}
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-line shadow-glow sm:min-h-[520px] md:rounded-[36px]">
              <EditorialImage
                src={celebrity.heroImage}
                alt={celebrity.stageName}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-3 p-4 text-xs uppercase tracking-[0.24em] text-muted sm:p-6 sm:tracking-[0.28em]">
                <span>{celebrity.nationality}</span>
                <span>{celebrity.yearsActive}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[0.55fr_1fr] md:px-10 md:py-24">
        <Reveal className="space-y-6">
          <SectionHeading
            eyebrow="Biography"
            title="Life story shaped into an era-driven narrative."
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-line shadow-glow">
            <EditorialImage
              src={celebrity.coverImage}
              alt={celebrity.stageName}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">Biography Portrait</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-foreground">
                Editorial image treatment for {celebrity.stageName}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-8">
            <div className="space-y-6">
              {celebrity.fullBiography.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {celebrity.gallery.slice(0, 2).map((item) => (
                <figure
                  key={item.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-line"
                >
                  <EditorialImage src={item.src} alt={item.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm uppercase tracking-[0.12em] text-foreground">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.75fr_1.25fr] md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Early Life"
              title="Before the spotlight, the foundations were already cinematic."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="relative aspect-[16/8] overflow-hidden rounded-[30px] border border-line">
                <EditorialImage
                  src={celebrity.gallery[2]?.src ?? celebrity.heroImage}
                  alt={celebrity.gallery[2]?.alt ?? celebrity.stageName}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-muted">Origins</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-foreground">
                    Visual notes from the artist&apos;s early narrative
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                {celebrity.earlyLife.map((entry) => (
                  <article
                    key={entry}
                    className="rounded-[28px] border border-line bg-white/[0.03] p-6"
                  >
                    <p className="text-base leading-8 text-muted">{entry}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Career Timeline"
            title="Milestones that shaped the public narrative."
            description="A clean editorial timeline for breakthrough releases, tours, collaborations, and turning points."
          />
        </Reveal>
        <div className="mt-12">
          <Reveal delay={0.1}>
            <Timeline items={celebrity.timeline} />
          </Reveal>
        </div>
      </section>

      <section id="discography" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Discography"
              title="Albums, EPs, and singles that defined the sound."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {celebrity.discography.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <DiscographyCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Awards & Recognition"
            title="Proof of impact across performance, authorship, and visual direction."
          />
        </Reveal>
        <div className="mt-12">
          <Reveal delay={0.1}>
            <AwardsGrid awards={celebrity.awards} />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Stats"
              title="A premium snapshot of reach, longevity, and catalog scale."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {celebrity.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <StatCard stat={stat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A visual archive of performances, portraits, and studio rituals."
          />
        </Reveal>
        <div className="mt-12">
          <Reveal delay={0.1}>
            <GalleryLightbox items={celebrity.gallery} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Moments"
              title="Interviews, releases, tours, and public milestones."
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.1}>
              <FeaturedMoments items={celebrity.notableMoments} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <LegacySection title={celebrity.stageName} paragraphs={celebrity.influence} />
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="grid gap-8 rounded-[30px] border border-line bg-white/[0.03] p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end md:rounded-[36px] md:p-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-muted">Platforms</p>
              <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-display sm:text-4xl md:text-6xl">
                Follow the archive beyond the biography.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted">
                Explore official channels and streaming destinations connected to {celebrity.stageName}&apos;s public presence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {celebrity.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-line px-5 py-3 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-accent hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

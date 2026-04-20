import { Celebrity } from "@/lib/types";
import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";

type HeroSectionProps = {
  celebrity: Celebrity;
};

export function HeroSection({ celebrity }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-grain-radial" />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-end gap-10 px-6 pb-10 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-14">
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.38em] text-muted">Featured Biography</p>
            <div className="space-y-2">
              <h1 className="font-display text-[4rem] uppercase leading-[0.88] tracking-display text-foreground md:text-[7.2rem] xl:text-[9rem]">
                {celebrity.stageName.split(" ")[0]}
              </h1>
              <h1 className="font-display text-[4rem] uppercase leading-[0.88] tracking-display text-foreground/75 md:text-[7.2rem] xl:text-[9rem]">
                {celebrity.stageName.split(" ").slice(1).join(" ")}
              </h1>
            </div>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
            {celebrity.shortBio} Explore the life, sound, ambition, and enduring cultural footprint behind one of music&apos;s most magnetic figures.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/celebrities/${celebrity.slug}`}
              className="rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.32em] text-background transition hover:bg-accent"
            >
              Explore Biography
            </Link>
            <Link
              href={`/celebrities/${celebrity.slug}#discography`}
              className="rounded-full border border-line px-7 py-4 text-xs uppercase tracking-[0.32em] text-foreground transition hover:border-accent hover:text-accent"
            >
              View Discography
            </Link>
            <Link
              href={`/celebrities/${celebrity.slug}#awards`}
              className="rounded-full border border-line px-7 py-4 text-xs uppercase tracking-[0.32em] text-foreground transition hover:border-accent hover:text-accent"
            >
              See Achievements
            </Link>
          </div>
          <div className="grid max-w-2xl gap-4 pt-6 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Genres</p>
              <p className="mt-3 text-sm uppercase tracking-[0.1em] text-foreground">
                {celebrity.genres.join(" / ")}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Years Active</p>
              <p className="mt-3 text-sm uppercase tracking-[0.1em] text-foreground">{celebrity.yearsActive}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Labels</p>
              <p className="mt-3 text-sm uppercase tracking-[0.1em] text-foreground">
                {celebrity.labels.join(" / ")}
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[560px] overflow-hidden rounded-[36px] border border-line shadow-glow md:h-[720px]">
          <EditorialImage
            src={celebrity.heroImage}
            alt={celebrity.stageName}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">{celebrity.birthInfo}</p>
              <p className="mt-2 text-xl uppercase tracking-[0.1em] text-foreground">{celebrity.name}</p>
            </div>
            <p className="max-w-[180px] text-right text-sm leading-6 text-muted">{celebrity.nationality}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

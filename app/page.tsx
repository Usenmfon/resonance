import { CelebrityCard } from "@/components/celebrity-card";
import { FeaturedMoments } from "@/components/featured-moments";
import { HeroSection } from "@/components/hero-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatCard } from "@/components/stat-card";
import { celebrities, featuredCelebrity } from "@/data/celebrities";

export default function HomePage() {
  const featuredMoments = celebrities.flatMap((celebrity) =>
    celebrity.notableMoments.map((moment) => ({
      ...moment,
      title: `${celebrity.stageName}: ${moment.title}`
    }))
  );

  return (
    <main>
      <HeroSection celebrity={featuredCelebrity} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Celebrities"
            title="Three artists. Three worlds. One immersive archive."
            description="Discover music celebrities through rich editorial storytelling, visual identity, and career-defining milestones."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {celebrities.map((celebrity, index) => (
            <Reveal key={celebrity.id} delay={index * 0.08}>
              <CelebrityCard celebrity={celebrity} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Career Highlights"
              title="Editorial storytelling shaped by eras, milestones, and influence."
              description="The platform is designed to feel less like a database and more like a luxury exhibit for each artist's evolution."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredCelebrity.timeline.map((item) => (
                <article
                  key={item.year}
                  className="rounded-[28px] border border-line bg-white/[0.03] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.32em] text-muted">{item.year}</p>
                  <h3 className="mt-5 text-2xl uppercase tracking-[0.08em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Awards & Stats"
            title="Measured not only in streams, but in eras that moved culture."
            description="Quick-glance performance metrics create the same stat-led editorial rhythm that makes premium portfolio templates feel alive."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredCelebrity.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="featured-moments" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Moments"
              title="Interviews, releases, tours, and defining public chapters."
              description="A journal-inspired section adapted for artist milestones, release campaigns, and landmark performances."
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.1}>
              <FeaturedMoments items={featuredMoments} />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="legacy" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <div className="rounded-[30px] border border-line bg-white/[0.03] p-6 sm:p-8 md:grid md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:rounded-[36px] md:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted">Platform Vision</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-display sm:text-4xl md:text-6xl">
                Built for music stories that deserve cinematic space.
              </h2>
            </div>
            <div className="mt-8 space-y-5 md:mt-0">
              <p className="text-base leading-8 text-muted">
                Resonance translates the premium editorial cadence of a luxury Framer experience into a biography platform for modern music icons.
              </p>
              <p className="text-base leading-8 text-muted">
                Every page is structured to scale: artists live in a typed data layer, reusable components carry the visual system, and dynamic routes make it easy to introduce new biographies without redesigning the experience.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

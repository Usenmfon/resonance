import type { Metadata } from "next";
import { CelebrityFilter } from "@/components/celebrity-filter";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { celebrities, genres } from "@/data/celebrities";

export const metadata: Metadata = {
  title: "Music Celebrities",
  description: "Explore artist biographies, genres, discographies, achievements, and visual archives."
};

export default function CelebritiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Artist Directory"
          title="Search music celebrities by name, genre, and creative identity."
          description="An editorial index of modern artists, each leading to an immersive biography page with life story, discography, awards, and legacy."
        />
      </Reveal>
      <div className="mt-12">
        <CelebrityFilter celebrities={celebrities} genres={genres} />
      </div>
    </main>
  );
}

import { Celebrity } from "@/lib/types";
import { formatGenres } from "@/lib/utils";
import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";

type CelebrityCardProps = {
  celebrity: Celebrity;
};

export function CelebrityCard({ celebrity }: CelebrityCardProps) {
  return (
    <Link
      href={`/celebrities/${celebrity.slug}`}
      className="group block overflow-hidden rounded-[32px] border border-line bg-panel transition duration-500 hover:-translate-y-1 hover:border-accent/60"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <EditorialImage
          src={celebrity.coverImage}
          alt={celebrity.stageName}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.22em] text-muted sm:tracking-[0.26em]">
          <span>{celebrity.nationality}</span>
          <span>{celebrity.yearsActive}</span>
        </div>
        <div>
          <h3 className="font-display text-[1.75rem] uppercase tracking-display text-foreground sm:text-3xl">
            {celebrity.stageName}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted">{celebrity.name}</p>
        </div>
        <p className="text-sm leading-7 text-muted">{celebrity.shortBio}</p>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-xs uppercase tracking-[0.2em] text-foreground sm:tracking-[0.24em]">
          <span>{formatGenres(celebrity.genres)}</span>
          <span className="transition group-hover:text-accent">View Profile</span>
        </div>
      </div>
    </Link>
  );
}

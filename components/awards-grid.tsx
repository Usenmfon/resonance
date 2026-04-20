import { AwardItem } from "@/lib/types";

type AwardsGridProps = {
  awards: AwardItem[];
};

export function AwardsGrid({ awards }: AwardsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {awards.map((award) => (
        <article
          key={`${award.title}-${award.year}`}
          className="rounded-[24px] border border-line bg-white/[0.03] p-5"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-muted">{award.organization}</p>
          <h3 className="mt-4 text-lg uppercase tracking-[0.08em] text-foreground">{award.title}</h3>
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm text-muted">
            <span>{award.year}</span>
            <span className="uppercase tracking-[0.2em] text-accent">{award.result}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

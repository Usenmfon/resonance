import { NotableMoment } from "@/lib/types";

type FeaturedMomentsProps = {
  items: NotableMoment[];
};

export function FeaturedMoments({ items }: FeaturedMomentsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={`${item.title}-${item.year}`}
          className="rounded-[28px] border border-line bg-panel p-6 transition hover:border-accent/60"
        >
          <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-muted">
            <span>{item.category}</span>
            <span>{item.year}</span>
          </div>
          <h3 className="mt-5 text-2xl uppercase tracking-[0.08em] text-foreground">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

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
          className="rounded-[28px] border border-line bg-panel p-5 transition hover:border-accent/60 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.24em] text-muted sm:tracking-[0.28em]">
            <span>{item.category}</span>
            <span>{item.year}</span>
          </div>
          <h3 className="mt-5 text-xl uppercase tracking-[0.08em] text-foreground sm:text-2xl">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

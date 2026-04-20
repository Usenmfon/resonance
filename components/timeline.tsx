import { TimelineItem } from "@/lib/types";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <article
          key={`${item.year}-${item.title}`}
          className="grid gap-5 rounded-[28px] border border-line bg-white/[0.03] p-6 md:grid-cols-[120px_1fr]"
        >
          <div className="flex items-start gap-4 md:block">
            <span className="font-display text-4xl uppercase leading-none tracking-display text-accent">
              {item.year}
            </span>
            {index !== items.length - 1 ? (
              <span className="hidden h-16 w-px bg-line md:mx-5 md:mt-4 md:block" />
            ) : null}
          </div>
          <div className="space-y-3">
            <h3 className="text-xl uppercase tracking-[0.08em] text-foreground">{item.title}</h3>
            <p className="max-w-2xl text-sm leading-7 text-muted">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

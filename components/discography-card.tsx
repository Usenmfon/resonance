import { DiscographyItem } from "@/lib/types";
import { EditorialImage } from "@/components/editorial-image";

type DiscographyCardProps = {
  item: DiscographyItem;
};

export function DiscographyCard({ item }: DiscographyCardProps) {
  return (
    <article className="rounded-[28px] border border-line bg-panel p-5">
      <div className="relative aspect-square overflow-hidden rounded-[22px]">
        <EditorialImage src={item.cover} alt={item.title} fill className="object-cover" />
      </div>
      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted">
          <span>{item.type}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="font-display text-3xl uppercase leading-none tracking-display text-foreground">
          {item.title}
        </h3>
        <p className="text-sm leading-7 text-muted">{item.description}</p>
      </div>
    </article>
  );
}

import { StatItem } from "@/lib/types";

type StatCardProps = {
  stat: StatItem;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="rounded-[28px] border border-line bg-white/[0.03] p-6 backdrop-blur-sm">
      <p className="text-xs uppercase tracking-[0.32em] text-muted">{stat.label}</p>
      <p className="mt-5 font-display text-5xl uppercase leading-none tracking-display text-foreground">
        {stat.value}
      </p>
      <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{stat.detail}</p>
    </article>
  );
}

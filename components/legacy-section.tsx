type LegacySectionProps = {
  title: string;
  paragraphs: string[];
};

export function LegacySection({ title, paragraphs }: LegacySectionProps) {
  return (
    <section className="rounded-[36px] border border-line bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-12">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.34em] text-muted">Influence & Legacy</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-display text-foreground md:text-6xl">
            {title}
          </h2>
        </div>
        <div className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      <p className="text-xs uppercase tracking-[0.35em] text-muted">{eyebrow}</p>
      <h2 className="font-display text-4xl uppercase leading-none tracking-display text-foreground md:text-6xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}

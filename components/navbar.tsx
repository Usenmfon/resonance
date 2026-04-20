import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Celebrities", href: "/celebrities" },
  { label: "Featured Moments", href: "/#featured-moments" },
  { label: "Legacy", href: "/#legacy" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-display text-2xl uppercase tracking-[0.2em] text-foreground">
          Resonance
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.22em] text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/celebrities"
            className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.28em] text-foreground transition hover:border-accent hover:text-accent"
          >
            Explore
          </Link>
        </div>
      </div>
    </header>
  );
}

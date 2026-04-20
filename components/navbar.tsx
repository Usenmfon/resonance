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
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-xl uppercase tracking-[0.18em] text-foreground sm:text-2xl"
        >
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
            className="rounded-full border border-line px-3 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-foreground transition hover:border-accent hover:text-accent sm:px-4 sm:text-xs sm:tracking-[0.28em]"
          >
            Explore
          </Link>
        </div>
        <nav
          aria-label="Primary mobile"
          className="-mx-1 flex w-full gap-2 overflow-x-auto px-1 pb-1 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted transition hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

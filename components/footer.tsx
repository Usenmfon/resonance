import Link from "next/link";

const footerLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Spotify", href: "https://spotify.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Apple Music", href: "https://music.apple.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr] md:px-10">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Resonance Archive</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-display md:text-6xl">
            Music lives longer when its stories are preserved beautifully.
          </h2>
        </div>
        <div className="space-y-6 md:pl-16">
          <p className="max-w-md text-sm leading-7 text-muted">
            A premium editorial destination for modern music biographies, discographies, career milestones, and cultural legacy.
          </p>
          <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.22em] text-foreground">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            © 2026 Resonance. Crafted for immersive biography storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
}

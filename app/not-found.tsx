import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-20 md:px-10">
      <div className="w-full rounded-[36px] border border-line bg-white/[0.03] p-10 text-center md:p-14">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">404</p>
        <h1 className="mt-5 font-display text-5xl uppercase leading-none tracking-display md:text-7xl">
          Artist not found
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
          This biography page does not exist yet. Return to the archive to explore the featured music celebrities currently in the collection.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/celebrities"
            className="rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.32em] text-background transition hover:bg-accent"
          >
            Browse Celebrities
          </Link>
          <Link
            href="/"
            className="rounded-full border border-line px-7 py-4 text-xs uppercase tracking-[0.32em] text-foreground transition hover:border-accent hover:text-accent"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

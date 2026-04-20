"use client";

import { Celebrity } from "@/lib/types";
import { CelebrityCard } from "@/components/celebrity-card";
import { Search } from "lucide-react";
import { useState } from "react";

type CelebrityFilterProps = {
  celebrities: Celebrity[];
  genres: string[];
};

export function CelebrityFilter({ celebrities, genres }: CelebrityFilterProps) {
  const [query, setQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");

  const filteredCelebrities = celebrities.filter((celebrity) => {
    const matchesQuery =
      celebrity.stageName.toLowerCase().includes(query.toLowerCase()) ||
      celebrity.name.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = activeGenre === "All" || celebrity.genres.includes(activeGenre);
    return matchesQuery && matchesGenre;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 rounded-[32px] border border-line bg-white/[0.03] p-4 sm:p-6 md:flex-row md:items-center md:justify-between">
        <label className="flex w-full items-center gap-3 rounded-full border border-line px-5 py-3 md:max-w-md">
          <Search size={16} className="text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by artist or real name"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            aria-label="Search celebrities by name"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          {["All", ...genres].map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setActiveGenre(genre)}
              className={`rounded-full border px-3 py-2 text-[0.65rem] uppercase tracking-[0.22em] transition sm:px-4 sm:text-xs sm:tracking-[0.28em] ${
                activeGenre === genre
                  ? "border-accent bg-accent text-background"
                  : "border-line text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCelebrities.map((celebrity) => (
          <CelebrityCard key={celebrity.id} celebrity={celebrity} />
        ))}
      </div>
      {filteredCelebrities.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-line p-10 text-center text-sm text-muted">
          No artists match that search yet. Try another name or genre.
        </div>
      ) : null}
    </div>
  );
}

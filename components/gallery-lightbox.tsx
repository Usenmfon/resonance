"use client";

import { GalleryItem } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { EditorialImage } from "@/components/editorial-image";

type GalleryLightboxProps = {
  items: GalleryItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line text-left"
          >
            <EditorialImage
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Open Frame</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-foreground">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-6 top-6 rounded-full border border-line p-3 text-foreground transition hover:border-accent hover:text-accent"
              aria-label="Close gallery image"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-5xl space-y-5"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-line">
                <EditorialImage
                  src={items[activeIndex].src}
                  alt={items[activeIndex].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p className="text-lg uppercase tracking-[0.12em] text-foreground">
                  {items[activeIndex].caption}
                </p>
                <p className="text-sm text-muted">{items[activeIndex].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

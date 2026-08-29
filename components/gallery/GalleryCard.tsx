"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/content/gallery";

export function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      className="gallery-card"
      onClick={onOpen}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
    >
      <Image
        src={item.src}
        alt="Deepsom AI gallery photograph"
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
      />

      <span>{item.category}</span>
    </motion.button>
  );
}
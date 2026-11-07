"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectMediaItem } from "@/resources/project-showcase";
import styles from "./ProjectCardGallery.module.scss";

interface ProjectCardGalleryProps {
  title: string;
  media: readonly ProjectMediaItem[];
}

export function ProjectCardGallery({ title, media }: ProjectCardGalleryProps) {
  const images = media.filter((item) => item.type === "image");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];

  if (!selectedImage) return null;

  return (
    <section className={styles.gallery} aria-label={`${title} screenshots`}>
      <h3 className={styles.title}>Interface screenshots</h3>
      <div className={styles.layout}>
        <div className={styles.mainPreview} aria-live="polite" aria-atomic="true">
          <Image
            key={selectedImage.src}
            className={styles.mainImage}
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={selectedImage.width}
            height={selectedImage.height}
            sizes="(max-width: 640px) 90vw, 70vw"
            priority={selectedIndex === 0}
          />
        </div>
        <div className={styles.thumbnails} aria-label="Choose a screenshot">
          {images.map((image, index) => (
            <button
              className={`${styles.thumbnail} ${index === selectedIndex ? styles.selected : ""}`}
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Show ${image.title}`}
              aria-pressed={index === selectedIndex}
            >
              <Image
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 30vw, 18vw"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

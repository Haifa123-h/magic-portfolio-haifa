"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import type { ProjectMediaItem } from "@/resources/project-showcase";
import styles from "./ProjectMediaGallery.module.scss";

interface ProjectMediaGalleryProps {
  title: string;
  media: readonly ProjectMediaItem[];
  section?: "all" | "screenshots" | "videos";
}

export function ProjectMediaGallery({
  title,
  media,
  section = "all",
}: ProjectMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const images =
    section === "videos" ? [] : media.filter((item) => item.type === "image");
  const videos =
    section === "screenshots" ? [] : media.filter((item) => item.type === "video");
  const activeImage = images[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (lightboxOpen && !dialog.open) {
      dialog.showModal();
    } else if (!lightboxOpen && dialog.open) {
      dialog.close();
    }
  }, [lightboxOpen]);

  const moveTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStartX.current = event.clientX;
    suppressClick.current = false;
    setIsDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const offset = event.clientX - pointerStartX.current;
    setDragOffset(offset);
    if (Math.abs(offset) > 8) {
      suppressClick.current = true;
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    }
  };

  const finishPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const offset = event.clientX - pointerStartX.current;
    const wasDragged = Math.abs(offset) > 8;
    const threshold = Math.min(80, (carouselRef.current?.clientWidth ?? 400) * 0.18);
    if (Math.abs(offset) >= threshold) {
      moveTo(activeIndex + (offset < 0 ? 1 : -1));
    }
    pointerStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (wasDragged) {
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }
  };

  const onPointerCancel = () => {
    pointerStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const onCarouselKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTo(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTo(activeIndex + 1);
    }
  };

  if (images.length === 0 && videos.length === 0) return null;

  return (
    <div className={styles.media}>
      {images.length > 0 && (
        <section
          className={styles.gallerySection}
          aria-label={`${title} screenshot carousel`}
          onKeyDown={onCarouselKeyDown}
        >
          <h3 className={styles.mediaTitle}>Interface screenshots</h3>
          <div
            className={`${styles.carousel} ${isDragging ? styles.dragging : ""}`}
            ref={carouselRef}
          >
            <div
              className={styles.track}
              style={{ transform: `translate3d(calc(${-activeIndex * 100}% + ${dragOffset}px), 0, 0)` }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={finishPointer}
              onPointerCancel={onPointerCancel}
              onLostPointerCapture={onPointerCancel}
              onClickCapture={(event) => {
                if (!suppressClick.current) return;
                event.preventDefault();
                event.stopPropagation();
                suppressClick.current = false;
              }}
            >
              {images.map((image, index) => (
                <figure className={styles.slide} key={image.src}>
                  <button
                    className={styles.imageButton}
                    type="button"
                    onClick={(event) => {
                      setActiveIndex(index);
                      setLightboxOpen(true);
                    }}
                    aria-label={`Open ${image.title} in a larger view`}
                    tabIndex={index === activeIndex ? 0 : -1}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 700px) 90vw, 840px"
                      priority={index === 0}
                      draggable={false}
                    />
                  </button>
                  <figcaption>{image.title}</figcaption>
                </figure>
              ))}
            </div>
            {images.length > 1 && (
              <>
                <button
                  className={`${styles.arrow} ${styles.previous}`}
                  type="button"
                  onClick={() => moveTo(activeIndex - 1)}
                  aria-label="Show previous screenshot"
                >
                  <HiChevronLeft aria-hidden="true" />
                </button>
                <button
                  className={`${styles.arrow} ${styles.next}`}
                  type="button"
                  onClick={() => moveTo(activeIndex + 1)}
                  aria-label="Show next screenshot"
                >
                  <HiChevronRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>
          <div className={styles.carouselFooter}>
            {images.length > 1 && (
              <div className={styles.pagination} aria-label="Choose screenshot">
                {images.map((image, index) => (
                  <button
                    className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                    key={image.src}
                    type="button"
                    onClick={() => moveTo(index)}
                    aria-label={`Show screenshot ${index + 1}: ${image.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
            )}
            <span className={styles.counter} aria-live="polite">
              {activeIndex + 1} / {images.length}
            </span>
          </div>
        </section>
      )}

      {videos.map((video) => (
        <section className={styles.videoSection} key={video.src}>
          <h3>{video.title}</h3>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={video.alt}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </section>
      ))}

      {images.length > 0 && (
        <dialog
          className={styles.lightbox}
          ref={dialogRef}
          aria-labelledby="project-image-viewer-title"
          onCancel={() => setLightboxOpen(false)}
          onClose={() => setLightboxOpen(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              event.stopPropagation();
              setLightboxOpen(false);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              event.stopPropagation();
              moveTo(activeIndex - 1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              event.stopPropagation();
              moveTo(activeIndex + 1);
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxOpen(false);
          }}
        >
          {activeImage && (
            <div className={styles.lightboxContent}>
              <div className={styles.lightboxHeader}>
                <h2 id="project-image-viewer-title">{activeImage.title}</h2>
                <button
                  className={styles.closeButton}
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  aria-label="Close screenshot viewer"
                >
                  <HiXMark aria-hidden="true" />
                </button>
              </div>
              <div className={styles.lightboxImage}>
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={activeImage.width}
                  height={activeImage.height}
                  sizes="90vw"
                  priority
                />
              </div>
              <div className={styles.lightboxControls}>
                <button
                  type="button"
                  onClick={() => moveTo(activeIndex - 1)}
                  aria-label="View previous screenshot"
                >
                  <HiChevronLeft aria-hidden="true" />
                  Previous
                </button>
                <span aria-live="polite">
                  {activeIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={() => moveTo(activeIndex + 1)}
                  aria-label="View next screenshot"
                >
                  Next
                  <HiChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </dialog>
      )}
    </div>
  );
}

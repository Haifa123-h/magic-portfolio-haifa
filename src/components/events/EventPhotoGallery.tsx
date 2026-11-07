"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { EventPhoto } from "@/resources/events";
import styles from "./EventPhotoGallery.module.scss";

interface EventPhotoGalleryProps {
  eventName: string;
  photos: EventPhoto[];
}

export function EventPhotoGallery({ eventName, photos }: EventPhotoGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<EventPhoto | null>(null);

  const openPhoto = (photo: EventPhoto) => {
    setSelectedPhoto(photo);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <div className={styles.gallery} aria-label={`${eventName} photographs`}>
        {photos.map((photo) => (
          <figure className={styles.photo} key={photo.src}>
            <button
              className={styles.photoButton}
              type="button"
              onClick={() => openPhoto(photo)}
              aria-label={`View larger: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 90vw, 45vw"
              />
            </button>
            {photo.caption && <figcaption>{photo.caption}</figcaption>}
          </figure>
        ))}
      </div>
      <dialog
        className={styles.lightbox}
        ref={dialogRef}
        aria-label={`${eventName} photograph`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
        onClose={() => setSelectedPhoto(null)}
      >
        {selectedPhoto && (
          <div className={styles.lightboxContent}>
            <button
              className={styles.closeButton}
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close larger photograph"
            >
              ×
            </button>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              sizes="95vw"
            />
            {selectedPhoto.caption && <p>{selectedPhoto.caption}</p>}
          </div>
        )}
      </dialog>
    </>
  );
}

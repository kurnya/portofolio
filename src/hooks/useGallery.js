import { useEffect, useState } from "react";

export function useGallery(galleryMap) {
  const [gallerySet, setGallerySet] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const activeGallery = gallerySet ? galleryMap[gallerySet] : null;
  const images = activeGallery?.images ?? [];
  const title = activeGallery?.title ?? "Galeri";

  const showNext = () => {
    setActiveIndex((current) => ((current ?? 0) + 1) % images.length);
  };

  const showPrev = () => {
    setActiveIndex((current) => ((current ?? 0) - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (activeIndex === null || images.length === 0) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  const open = (set, index = 0) => {
    setGallerySet(set);
    setActiveIndex(index);
  };

  const close = () => {
    setGallerySet(null);
    setActiveIndex(null);
  };

  return {
    title,
    images,
    activeIndex,
    open,
    close,
    select: setActiveIndex,
    showNext,
    showPrev,
  };
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/icons";

export type GalleryItem = {
  label: string;
  src: string;
  alt: string;
};

type GalleryVariant = "saas" | "bi";

type ProjectGalleryProps = {
  items: readonly GalleryItem[];
  variant?: GalleryVariant;
};

const variantStyles = {
  saas: {
    frame: "gallery-frame-saas",
    activeThumb: "border-accent-border shadow-[0_0_24px_-8px_rgba(34,211,238,0.35)]",
    activeLabel: "text-accent-text",
    activeOverlay: "bg-accent-soft",
    navHover: "hover:border-accent-border",
    imageFit: "object-cover object-top",
    aspect: "aspect-[16/10]",
  },
  bi: {
    frame: "gallery-frame-bi",
    activeThumb:
      "border-violet-border shadow-[0_0_24px_-8px_rgba(139,92,246,0.3)]",
    activeLabel: "text-violet-text",
    activeOverlay: "bg-violet-soft",
    navHover: "hover:border-violet-border",
    imageFit: "object-contain object-center bg-gallery-image-bg",
    aspect: "aspect-[16/10] sm:aspect-[16/9]",
  },
} as const;

export function ProjectGallery({
  items,
  variant = "saas",
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const styles = variantStyles[variant];

  const active = items[activeIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + items.length) % items.length);
    },
    [items.length],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, goPrev, goNext]);

  if (!active) return null;

  const thumbColumns =
    items.length <= 2
      ? "grid-cols-2"
      : items.length === 3
        ? "grid-cols-3"
        : "grid-cols-2 sm:grid-cols-4";

  const lightbox =
    lightboxOpen && active ? (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-8"
        style={{ position: "fixed", inset: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Visualização ampliada: ${active.label}`}
        onClick={() => setLightboxOpen(false)}
      >
        <button
          type="button"
          onClick={() => setLightboxOpen(false)}
          className="absolute right-3 top-3 z-[10000] rounded-full border border-border bg-surface p-2 text-muted-foreground transition hover:text-heading sm:right-8 sm:top-8"
          aria-label="Fechar visualização ampliada"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        {items.length > 1 ? (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              className="absolute left-1 top-1/2 z-[10000] -translate-y-1/2 rounded-full border border-border bg-surface p-2 text-muted-foreground transition hover:text-heading sm:left-6 sm:p-3"
              aria-label="Imagem anterior"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              className="absolute right-1 top-1/2 z-[10000] -translate-y-1/2 rounded-full border border-border bg-surface p-2 text-muted-foreground transition hover:text-heading sm:right-6 sm:p-3"
              aria-label="Próxima imagem"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        ) : null}

        <div
          className="flex w-full max-w-6xl flex-col items-center justify-center"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex max-h-[70vh] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-lightbox shadow-2xl sm:max-h-[75vh] sm:rounded-2xl">
            <Image
              src={active.src}
              alt={active.alt}
              width={1920}
              height={1080}
              className="max-h-[70vh] w-auto max-w-full object-contain sm:max-h-[75vh]"
              sizes="100vw"
              priority
            />
          </div>
          <p className="mt-3 px-2 text-center text-xs font-medium text-white sm:mt-4 sm:text-sm">
            {active.label}
          </p>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className="relative">
        <div
          className={`group relative overflow-hidden rounded-2xl border border-border bg-gallery-bg ${styles.frame}`}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className={`relative block ${styles.aspect} w-full cursor-zoom-in overflow-hidden`}
            aria-label={`Ampliar imagem: ${active.label}`}
          >
            {items.map((item, index) => (
              <div
                key={item.src}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-[1.02] opacity-0"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`${styles.imageFit} transition duration-500 group-hover:scale-[1.015]`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                  priority={index === 0}
                />
              </div>
            ))}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2 sm:inset-x-auto sm:top-auto sm:block">
              <div className="max-w-[calc(100%-3rem)] rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-[11px] font-medium text-heading backdrop-blur-sm sm:absolute sm:bottom-4 sm:left-4 sm:max-w-[calc(100%-6rem)] sm:px-3 sm:text-xs">
                {active.label}
              </div>

              <div className="shrink-0 rounded-full border border-border bg-surface-elevated px-2 py-1 text-[11px] text-muted backdrop-blur-sm sm:absolute sm:right-4 sm:top-4 sm:px-2.5 sm:text-xs">
                {activeIndex + 1} / {items.length}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 hidden rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted-foreground opacity-0 backdrop-blur-sm transition group-hover:opacity-100 sm:block">
              Clique para ampliar
            </div>
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className={`absolute left-1.5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface-elevated p-1.5 text-muted-foreground backdrop-blur-sm transition sm:left-3 sm:p-2 ${styles.navHover} hover:text-heading`}
                aria-label="Imagem anterior"
              >
                <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button
                type="button"
                onClick={goNext}
                className={`absolute right-1.5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface-elevated p-1.5 text-muted-foreground backdrop-blur-sm transition sm:right-3 sm:p-2 ${styles.navHover} hover:text-heading`}
                aria-label="Próxima imagem"
              >
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </>
          ) : null}
        </div>

        {items.length > 1 ? (
          <div className={`mt-3 grid gap-2 sm:mt-4 sm:gap-3 ${thumbColumns}`}>
            {items.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group/thumb relative overflow-hidden rounded-xl border text-left transition duration-300 ${
                  index === activeIndex
                    ? styles.activeThumb
                    : "border-border hover:border-border hover:-translate-y-0.5"
                }`}
              >
                <div className={`relative ${styles.aspect} overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`${styles.imageFit} transition duration-500 group-hover/thumb:scale-105`}
                    sizes="(max-width: 768px) 45vw, 280px"
                  />
                  <div
                    className={`absolute inset-0 transition ${
                      index === activeIndex
                        ? styles.activeOverlay
                        : "bg-background/20 group-hover/thumb:bg-transparent"
                    }`}
                  />
                </div>
                <div className="border-t border-border-subtle bg-surface-elevated px-2 py-1.5 sm:px-3 sm:py-2">
                  <p
                    className={`truncate text-xs font-medium ${
                      index === activeIndex
                        ? styles.activeLabel
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {mounted && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  );
}

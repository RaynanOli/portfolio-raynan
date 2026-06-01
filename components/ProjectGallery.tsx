"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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
    frame:
      "shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_30px_80px_-30px_rgba(34,211,238,0.25)]",
    activeThumb:
      "border-cyan-400/50 shadow-[0_0_24px_-8px_rgba(34,211,238,0.5)]",
    activeLabel: "text-cyan-300",
    activeOverlay: "bg-cyan-400/10",
    navHover: "hover:border-cyan-400/30",
    imageFit: "object-cover object-top",
    aspect: "aspect-[16/10]",
  },
  bi: {
    frame:
      "shadow-[0_0_0_1px_rgba(139,92,246,0.08),0_30px_80px_-30px_rgba(139,92,246,0.2)]",
    activeThumb:
      "border-violet-400/50 shadow-[0_0_24px_-8px_rgba(139,92,246,0.45)]",
    activeLabel: "text-violet-300",
    activeOverlay: "bg-violet-400/10",
    navHover: "hover:border-violet-400/30",
    imageFit: "object-contain object-center bg-[#0a0f1a]",
    aspect: "aspect-[16/10] sm:aspect-[16/9]",
  },
} as const;

export function ProjectGallery({
  items,
  variant = "saas",
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const styles = variantStyles[variant];

  const active = items[activeIndex];

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

  return (
    <>
      <div className="relative">
        <div
          className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#030712]/80 ${styles.frame}`}
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

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#030712]/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {active.label}
            </div>

            <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-[#030712]/70 px-3 py-1 text-xs text-zinc-400 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
              Clique para ampliar
            </div>

            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#030712]/70 px-2.5 py-1 text-xs text-zinc-500 backdrop-blur-sm">
              {activeIndex + 1} / {items.length}
            </div>
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className={`absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-[#030712]/70 p-2 text-zinc-300 backdrop-blur-sm transition ${styles.navHover} hover:text-white`}
                aria-label="Imagem anterior"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goNext}
                className={`absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-[#030712]/70 p-2 text-zinc-300 backdrop-blur-sm transition ${styles.navHover} hover:text-white`}
                aria-label="Próxima imagem"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        {items.length > 1 ? (
          <div className={`mt-4 grid gap-3 ${thumbColumns}`}>
            {items.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group/thumb relative overflow-hidden rounded-xl border text-left transition duration-300 ${
                  index === activeIndex
                    ? styles.activeThumb
                    : "border-white/10 hover:border-white/25 hover:-translate-y-0.5"
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
                        : "bg-[#030712]/20 group-hover/thumb:bg-transparent"
                    }`}
                  />
                </div>
                <div className="border-t border-white/5 bg-[#030712]/60 px-3 py-2">
                  <p
                    className={`truncate text-xs font-medium ${
                      index === activeIndex
                        ? styles.activeLabel
                        : "text-zinc-400"
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

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]/95 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada: ${active.label}`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:text-white sm:right-8 sm:top-8"
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
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:text-white sm:left-6"
                aria-label="Imagem anterior"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:text-white sm:right-6"
                aria-label="Próxima imagem"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </>
          ) : null}

          <div
            className="relative max-h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative max-h-[75vh] min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#030712] shadow-2xl">
              <Image
                src={active.src}
                alt={active.alt}
                width={1920}
                height={1080}
                className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-zinc-300">
              {active.label}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

function isNearViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight + 120;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => setRevealed(true);

    if (isNearViewport(element)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(element);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 5% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-[transform,opacity] duration-700 ease-out ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-100"
      } ${className}`}
      style={{ transitionDelay: revealed ? "0ms" : `${delay}ms` }}
    >
      {children}
    </section>
  );
}

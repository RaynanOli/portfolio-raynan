"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/data";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-nav backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight text-heading"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-brand-fg">
            RM
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-hover hover:text-heading"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contato"
            className="rounded-full bg-btn-primary-bg px-4 py-2 text-sm font-medium text-btn-primary-fg transition hover:opacity-90"
          >
            Fale comigo
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="px-3 py-2 text-xs" />
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-muted-foreground transition hover:bg-surface-hover hover:text-heading"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-nav backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-3 text-base text-muted-foreground transition hover:bg-surface-hover hover:text-heading"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contato"
                onClick={handleNavClick}
                className="block rounded-full bg-btn-primary-bg px-4 py-3 text-center text-sm font-medium text-btn-primary-fg"
              >
                Fale comigo
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

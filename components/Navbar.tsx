"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/data";
import { CloseIcon, MenuIcon } from "@/components/icons";

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
          ? "border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-bold text-[#030712]">
            RM
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-[#030712] transition hover:bg-zinc-200 md:inline-flex"
        >
          Fale comigo
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white md:hidden"
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
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#030712]/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-3 text-base text-zinc-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contato"
                onClick={handleNavClick}
                className="block rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-[#030712]"
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

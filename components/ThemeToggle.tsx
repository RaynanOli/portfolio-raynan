"use client";

import { useTheme } from "@/components/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, toggleLabel } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/30 hover:bg-surface-hover ${className}`}
      aria-label={`Alternar para ${theme === "dark" ? "modo claro" : "modo escuro"}`}
    >
      {toggleLabel}
    </button>
  );
}

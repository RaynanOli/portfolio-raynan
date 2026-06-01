"use client";

import { useTheme } from "@/components/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

export function ThemeToggle({ className = "", compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme, toggleLabel } = useTheme();
  const compactLabel = theme === "dark" ? "Claro" : "Escuro";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/30 hover:bg-surface-hover ${className}`}
      aria-label={`Alternar para ${theme === "dark" ? "modo claro" : "modo escuro"}`}
    >
      {compact ? compactLabel : toggleLabel}
    </button>
  );
}

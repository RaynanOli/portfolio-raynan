export const THEME_STORAGE_KEY = "portfolio-raynan-theme";

export type Theme = "dark" | "light";

export function resolveTheme(stored: string | null, prefersLight: boolean): Theme {
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return prefersLight ? "light" : "dark";
}

export function getToggleLabel(theme: Theme): string {
  return theme === "dark" ? "Light Mode" : "Dark Mode";
}

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

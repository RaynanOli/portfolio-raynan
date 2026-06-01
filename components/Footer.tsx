import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-heading">{site.name}</p>
          <p className="mt-1 text-xs text-muted sm:text-sm">
            Desenvolvimento · BI · Automação · IA
          </p>
        </div>
        <p className="max-w-xs text-xs text-muted sm:max-w-none sm:text-sm">
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            Desenvolvimento · BI · Automação · IA
          </p>
        </div>
        <p className="text-sm text-zinc-500">
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

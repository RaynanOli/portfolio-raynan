import { site } from "@/lib/data";
import { ArrowDownIcon } from "@/components/icons";
import { ResumeDownload } from "@/components/ResumeDownload";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-14 lg:min-h-screen lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--glow-cyan)" }}
        />
        <div
          className="absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full blur-[100px]"
          style={{ backgroundColor: "var(--glow-violet)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full blur-[90px]"
          style={{ backgroundColor: "var(--glow-blue)" }}
        />
        <div className="hero-grid absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm sm:px-4 sm:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="text-balance">Disponível para novas oportunidades</span>
        </div>

        <h1 className="hero-title text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          {site.headline}
        </p>

        <div className="mx-auto mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#projetos"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-brand-fg transition hover:opacity-90 sm:w-auto sm:min-w-[180px]"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex w-full items-center justify-center rounded-full border border-btn-secondary-border bg-btn-secondary-bg px-6 py-3 text-sm font-medium text-btn-secondary-fg backdrop-blur-sm transition hover:bg-surface-hover sm:w-auto sm:min-w-[180px]"
          >
            Entrar em contato
          </a>
          <ResumeDownload
            variant="primary"
            className="w-full sm:w-auto sm:min-w-[180px]"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted sm:mt-12">
          {["Sistemas", "BI", "Automação", "Inteligência Artificial"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre Mim"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition hover:text-foreground"
      >
        <ArrowDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

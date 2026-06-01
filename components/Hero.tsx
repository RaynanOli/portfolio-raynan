import { site } from "@/lib/data";
import { ArrowDownIcon } from "@/components/icons";
import { ResumeDownload } from "@/components/ResumeDownload";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16"
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
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          Disponível para novas oportunidades
        </div>

        <h1 className="hero-title text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {site.headline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#projetos"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-brand-fg transition hover:opacity-90"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-btn-secondary-border bg-btn-secondary-bg px-6 py-3 text-sm font-medium text-btn-secondary-fg backdrop-blur-sm transition hover:bg-surface-hover"
          >
            Entrar em contato
          </a>
          <ResumeDownload variant="primary" />
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs text-muted">
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

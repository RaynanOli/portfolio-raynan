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
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          Disponível para novas oportunidades
        </div>

        <h1 className="bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {site.headline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#projetos"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#030712] transition hover:opacity-90"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Entrar em contato
          </a>
          <ResumeDownload variant="primary" />
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500">
          {["Sistemas", "BI", "Automação", "Inteligência Artificial"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-zinc-300"
      >
        <ArrowDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

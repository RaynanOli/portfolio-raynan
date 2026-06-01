import { site } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <AnimatedSection id="sobre" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Sobre Mim"
          title="Engenharia de software com visão de negócio"
          description="Combino desenvolvimento, dados e automação para entregar soluções corporativas de alto impacto."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-semibold text-white">Quem sou</h3>
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              {site.about.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
            <h3 className="mb-4 text-lg font-semibold text-white">
              Objetivo de carreira
            </h3>
            <p className="text-base leading-relaxed text-zinc-300">
              {site.careerGoal}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "BI", label: "Análise de dados" },
                { value: "SAP", label: "Processos corporativos" },
                { value: "IA", label: "Soluções inteligentes" },
                { value: "Dev", label: "Engenharia de software" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-[#030712]/40 p-4"
                >
                  <p className="text-xl font-semibold text-cyan-400">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

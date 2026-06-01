import { expertiseAreas } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";

const areaStyles = [
  "from-cyan-500/15 to-cyan-500/5 border-cyan-400/20 text-cyan-400",
  "from-violet-500/15 to-violet-500/5 border-violet-400/20 text-violet-400",
  "from-blue-500/15 to-blue-500/5 border-blue-400/20 text-blue-400",
  "from-emerald-500/15 to-emerald-500/5 border-emerald-400/20 text-emerald-400",
  "from-amber-500/15 to-amber-500/5 border-amber-400/20 text-amber-400",
  "from-rose-500/15 to-rose-500/5 border-rose-400/20 text-rose-400",
];

export function ExpertiseAreas() {
  return (
    <AnimatedSection className="px-6 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Expertise"
          title="Principais Áreas de Atuação"
          description="Competências multidisciplinares aplicadas em projetos corporativos de alto impacto."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <article
              key={area.title}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] ${areaStyles[index]}`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#030712]/40 text-lg font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-semibold text-white">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400 transition group-hover:text-zinc-300">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

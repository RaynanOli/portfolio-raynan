import { expertiseAreas } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";

const areaStyles = [
  "from-cyan-500/15 to-cyan-500/5 border-accent-border text-accent-text",
  "from-violet-500/15 to-violet-500/5 border-violet-border text-violet-text",
  "from-blue-500/15 to-blue-500/5 border-blue-400/20 text-blue-600 dark:text-blue-400",
  "from-emerald-500/15 to-emerald-500/5 border-emerald-400/20 text-emerald-600 dark:text-emerald-400",
  "from-amber-500/15 to-amber-500/5 border-amber-400/20 text-amber-700 dark:text-amber-400",
  "from-rose-500/15 to-rose-500/5 border-rose-400/20 text-rose-600 dark:text-rose-400",
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
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg ${areaStyles[index]}`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-lg font-bold text-heading">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-semibold text-heading">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition group-hover:text-foreground">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

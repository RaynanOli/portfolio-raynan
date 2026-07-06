import { experience } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  return (
    <AnimatedSection id="experiencia" className="px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experiência"
          title="Trajetória profissional e formação"
          description="Atuação corporativa aliada a formação contínua em engenharia, dados e inteligência artificial."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
              Experiência Profissional
            </h3>
            <div className="space-y-6">
              {experience.work.map((item) => (
                <article
                  key={item.company}
                  className="relative rounded-2xl border border-border bg-surface p-5 backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold text-heading sm:text-xl">
                        {item.company}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                    <span className="w-fit shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Formação Acadêmica
              </h3>
              <div className="relative space-y-0">
                {experience.education.map((item, index) => (
                  <article
                    key={item.title}
                    className="relative flex gap-4 pb-8 last:pb-0"
                  >
                    {index < experience.education.length - 1 ? (
                      <span className="absolute left-[11px] top-8 h-[calc(100%-1rem)] w-px bg-border" />
                    ) : null}
                    <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-border bg-violet-soft">
                      <span className="h-2 w-2 rounded-full bg-violet-500" />
                    </span>
                    <div className="min-w-0 flex-1 rounded-2xl border border-border bg-surface p-4 backdrop-blur-sm sm:p-5">
                      <h4 className="font-semibold text-heading">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Formação Complementar
              </h3>
              <div className="space-y-4">
                {experience.complementaryEducation.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface p-5 backdrop-blur-sm sm:p-6"
                  >
                    <h4 className="text-lg font-semibold text-heading sm:text-xl">
                      {item.title}
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {item.courses.map((course) => (
                        <li
                          key={course}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

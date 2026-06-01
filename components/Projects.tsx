import { projects } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BIGalleryShowcase } from "@/components/BIGalleryShowcase";
import { HerotrackShowcase } from "@/components/HerotrackShowcase";
import { SectionHeader } from "@/components/SectionHeader";

type Project = (typeof projects)[number];

function TechnologyTags({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted-foreground sm:text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 backdrop-blur-sm transition hover:border-border hover:bg-surface-hover sm:p-6 lg:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {project.description}
      </p>

      <div className="mt-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Destaques
        </p>
        <ul className="space-y-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-border-subtle pt-6">
        <TechnologyTags items={project.technologies} />
      </div>
    </article>
  );
}

export function Projects() {
  const cardProjects = projects.filter(
    (project) => !project.featured && !("gallery" in project),
  );

  return (
    <AnimatedSection id="projetos" className="px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projetos"
          title="Soluções que geram impacto"
          description="Projetos que unem engenharia de software, dados, automação e arquitetura corporativa."
        />

        <div className="space-y-6">
          <HerotrackShowcase />
          <BIGalleryShowcase />

          <div className="grid gap-6">
            {cardProjects.map((project) => (
              <SecondaryProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

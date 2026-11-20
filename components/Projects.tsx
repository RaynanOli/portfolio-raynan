import { projects } from "@/lib/data";
import { AthosDigitalShowcase } from "@/components/AthosDigitalShowcase";
import { BIGalleryShowcase } from "@/components/BIGalleryShowcase";
import { HerotrackShowcase } from "@/components/HerotrackShowcase";
import { ProjectGallery, type GalleryItem } from "@/components/ProjectGallery";
import { SectionHeader } from "@/components/SectionHeader";

type SecondaryProject = Pick<
  (typeof projects)[number],
  "title" | "description" | "highlights" | "technologies"
> & {
  badge?: string;
  gallery?: readonly GalleryItem[];
};

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

function SecondaryProjectCard({ project }: { project: SecondaryProject }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 backdrop-blur-sm transition hover:border-border hover:bg-surface-hover sm:p-6 lg:p-8">
      {project.badge ? (
        <p className="mb-4 w-fit rounded-full border border-violet-border bg-violet-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-text">
          {project.badge}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {project.description}
      </p>

      {project.gallery?.length ? (
        <div className="mt-6">
          <ProjectGallery items={project.gallery} />
        </div>
      ) : null}

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
    (project) => project.presentation === "card",
  );

  return (
    <section id="projetos" className="px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projetos"
          title="Sistemas, dashboards e automações"
          description="Projetos em logística, Business Intelligence e automação de rotinas."
        />

        <div className="space-y-6">
          <HerotrackShowcase />
          <BIGalleryShowcase />
          <AthosDigitalShowcase />

          <div className="grid gap-6">
            {cardProjects.map((project) => (
              <SecondaryProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { projects } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";

type Project = (typeof projects)[number];

function ProjectHighlights({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm text-zinc-400"
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TechnologyTags({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-[#030712]/60 px-3 py-1 text-xs text-zinc-300 sm:text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-8 backdrop-blur-sm transition hover:border-cyan-400/40 sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            {"badge" in project ? project.badge : "Projeto Principal"}
          </div>

          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
              Destaques
            </p>
            <ProjectHighlights items={project.highlights} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#030712]/60 p-6 lg:p-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
              Tecnologias
            </p>
            <div className="mt-4">
              <TechnologyTags items={project.technologies} />
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
            <p className="text-sm font-medium text-white">Arquitetura corporativa</p>
            <p className="mt-1 text-sm text-zinc-500">
              Plataforma completa para operações logísticas em escala.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.05] sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />

      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
        {project.description}
      </p>

      <div className="mt-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
          Destaques
        </p>
        <ul className="space-y-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-zinc-400"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-white/5 pt-6">
        <TechnologyTags items={project.technologies} />
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const secondary = projects.filter((p) => !p.featured);

  return (
    <AnimatedSection id="projetos" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projetos"
          title="Soluções que geram impacto"
          description="Projetos que unem engenharia de software, dados, automação e arquitetura corporativa."
        />

        <div className="space-y-6">
          <FeaturedProjectCard project={featured} />

          <div className="grid gap-6 lg:grid-cols-2">
            {secondary.map((project) => (
              <SecondaryProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

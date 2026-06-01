import { projects } from "@/lib/data";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { ProjectGallery } from "@/components/ProjectGallery";

const herotrack = projects[0];

export function HerotrackShowcase() {
  const project = herotrack;

  return (
    <article className="showcase-hero relative overflow-hidden rounded-2xl border border-accent-border bg-card p-4 backdrop-blur-sm sm:rounded-[2rem] sm:p-6 lg:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.12),transparent_50%)] dark:opacity-100 opacity-60" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-soft blur-3xl" />

      <div className="relative space-y-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-text">
              {project.badge}
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              <span className="mr-3" aria-hidden="true">
                {project.emoji}
              </span>
              {project.title}
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
              {project.shortDescription}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-brand-fg transition hover:opacity-90 sm:w-auto"
            >
              Ver Projeto
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-btn-secondary-border bg-btn-secondary-bg px-6 py-3 text-sm font-medium text-btn-secondary-fg backdrop-blur-sm transition hover:bg-surface-hover sm:w-auto"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <ProjectGallery items={project.gallery} variant="saas" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Destaques
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border-subtle bg-surface-elevated px-3 py-2.5 text-sm text-muted-foreground transition hover:border-accent-border"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Tecnologias
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground transition hover:border-violet-border hover:text-heading"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

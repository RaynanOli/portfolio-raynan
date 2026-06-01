import { projects } from "@/lib/data";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { ProjectGallery } from "@/components/ProjectGallery";

const herotrack = projects[0];

export function HerotrackShowcase() {
  const project = herotrack;

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_40px_120px_-40px_rgba(34,211,238,0.35)] backdrop-blur-sm sm:p-8 lg:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative space-y-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              {project.badge}
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="mr-3" aria-hidden="true">
                {project.emoji}
              </span>
              {project.title}
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {project.shortDescription}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#030712] transition hover:opacity-90"
            >
              Ver Projeto
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <ProjectGallery items={project.gallery} variant="saas" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
              Destaques
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-[#030712]/40 px-3 py-2.5 text-sm text-zinc-300 transition hover:border-cyan-400/20"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
              Tecnologias
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-[#030712]/60 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-violet-400/30 hover:text-white"
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

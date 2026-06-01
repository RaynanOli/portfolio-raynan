import { projects } from "@/lib/data";
import { ProjectGallery } from "@/components/ProjectGallery";

const biProject = projects[1];

export function BIGalleryShowcase() {
  if (!("gallery" in biProject) || !biProject.gallery) return null;

  return (
    <article className="showcase-bi relative overflow-hidden rounded-2xl border border-violet-border bg-card p-4 backdrop-blur-sm sm:rounded-[2rem] sm:p-6 lg:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_50%)] dark:opacity-100 opacity-60" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-soft blur-3xl" />

      <div className="relative space-y-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-border bg-violet-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-text">
            Business Intelligence
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl">
            {biProject.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {biProject.description}
          </p>
        </div>

        <ProjectGallery items={biProject.gallery} variant="bi" />

        <div className="rounded-xl border border-disclaimer-border bg-disclaimer-bg px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-sm leading-relaxed text-disclaimer-text">
            {"disclaimer" in biProject ? biProject.disclaimer : ""}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Destaques
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {biProject.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border-subtle bg-surface-elevated px-3 py-2.5 text-sm text-muted-foreground transition hover:border-violet-border"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
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
              {biProject.technologies.map((tech) => (
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

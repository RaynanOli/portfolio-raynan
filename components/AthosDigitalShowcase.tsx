import { projects } from "@/lib/data";
import { ProjectGallery } from "@/components/ProjectGallery";

const athosProject = projects.find(
  (project) => project.title === "Projeto Athos Digital",
);

export function AthosDigitalShowcase() {
  if (!athosProject || !("gallery" in athosProject) || !athosProject.gallery) {
    return null;
  }

  const dashboardItems = athosProject.gallery.filter(
    (item) => !item.label.toLowerCase().includes("certificado"),
  );
  const certificateItem = athosProject.gallery.find((item) =>
    item.label.toLowerCase().includes("certificado"),
  );

  return (
    <article className="showcase-athos relative overflow-hidden rounded-2xl border border-blue-400/20 bg-card p-4 backdrop-blur-sm sm:rounded-[2rem] sm:p-6 lg:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_50%)] opacity-60 dark:opacity-100" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative space-y-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-300">
            {"badge" in athosProject ? athosProject.badge : "Business Intelligence"}
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl">
            {athosProject.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {athosProject.description}
          </p>
        </div>

        {dashboardItems.length > 0 ? (
          <ProjectGallery items={dashboardItems} variant="bi" />
        ) : null}

        {certificateItem ? (
          <div className="certificate-showcase overflow-hidden rounded-2xl p-4 sm:p-6">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-700 dark:text-amber-300">
                  Comprovante de Participação
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Documento comprobatório da participação no projeto Athos
                  Digital.
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-200">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Certificado
              </span>
            </div>

            <div className="certificate-gallery">
              <ProjectGallery
                items={[certificateItem]}
                variant="bi"
                imageGradient={false}
              />
            </div>
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Destaques
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {athosProject.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border-subtle bg-surface-elevated px-3 py-2.5 text-sm text-muted-foreground transition hover:border-blue-400/30"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
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
              {athosProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground transition hover:border-blue-400/30 hover:text-heading"
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

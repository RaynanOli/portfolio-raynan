import { projects } from "@/lib/data";
import { ProjectGallery } from "@/components/ProjectGallery";

const biProject = projects[1];

export function BIGalleryShowcase() {
  if (!("gallery" in biProject) || !biProject.gallery) return null;

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(139,92,246,0.1),0_40px_120px_-40px_rgba(139,92,246,0.25)] backdrop-blur-sm sm:p-8 lg:p-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative space-y-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
            Business Intelligence
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {biProject.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {biProject.description}
          </p>
        </div>

        <ProjectGallery items={biProject.gallery} variant="bi" />

        <div className="rounded-xl border border-amber-400/15 bg-amber-400/5 px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-sm leading-relaxed text-amber-100/80">
            {"disclaimer" in biProject ? biProject.disclaimer : ""}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
              Destaques
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {biProject.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-[#030712]/40 px-3 py-2.5 text-sm text-zinc-300 transition hover:border-violet-400/20"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
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
              {biProject.technologies.map((tech) => (
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

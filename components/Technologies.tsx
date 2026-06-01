import { techCategories } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";

const categoryColors = [
  "from-cyan-500/15 to-cyan-500/5 border-accent-border",
  "from-violet-500/15 to-violet-500/5 border-violet-border",
  "from-blue-500/15 to-blue-500/5 border-blue-400/20",
  "from-emerald-500/15 to-emerald-500/5 border-emerald-400/20",
];

export function Technologies() {
  return (
    <AnimatedSection id="tecnologias" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Tecnologias"
          title="Stack multidisciplinar"
          description="Ferramentas e competências que aplico em projetos de software, dados, automação e IA."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={`rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm ${categoryColors[index]}`}
            >
              <h3 className="mb-5 text-lg font-semibold text-heading">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground transition hover:border-border hover:text-heading"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import { techCategories } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";

const categoryColors = [
  "from-cyan-500/20 to-cyan-500/5 border-cyan-400/20",
  "from-violet-500/20 to-violet-500/5 border-violet-400/20",
  "from-blue-500/20 to-blue-500/5 border-blue-400/20",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-400/20",
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
              <h3 className="mb-5 text-lg font-semibold text-white">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-[#030712]/50 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
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

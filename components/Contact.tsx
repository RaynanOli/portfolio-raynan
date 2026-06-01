import { contactLinks } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { ResumeDownload } from "@/components/ResumeDownload";
import { SectionHeader } from "@/components/SectionHeader";

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
} as const;

export function Contact() {
  return (
    <AnimatedSection id="contato" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos construir algo juntos"
          description="Entre em contato para conversar sobre projetos, oportunidades ou colaborações."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={
                  link.label === "Email" ? undefined : "noopener noreferrer"
                }
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-[#030712]/60 p-3 text-zinc-300 transition group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{link.description}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ResumeDownload variant="secondary" />
        </div>
      </div>
    </AnimatedSection>
  );
}

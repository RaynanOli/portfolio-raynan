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
    <AnimatedSection id="contato" className="px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
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
                className="group rounded-2xl border border-border bg-surface p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-accent-border hover:bg-surface-hover sm:p-6"
              >
                <div className="mb-4 inline-flex rounded-xl border border-border bg-surface-elevated p-3 text-muted-foreground transition group-hover:border-accent-border group-hover:text-accent-text">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-heading">
                  {link.label}
                </h3>
                <p className="mt-2 break-words text-sm text-muted-foreground">
                  {link.description}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <ResumeDownload
            variant="secondary"
            className="w-full max-w-sm sm:w-auto"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

import { resume } from "@/lib/data";
import { DownloadIcon } from "@/components/icons";

type ResumeDownloadProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

export function ResumeDownload({
  variant = "secondary",
  className = "",
}: ResumeDownloadProps) {
  const styles =
    variant === "primary"
      ? "border border-btn-secondary-border bg-btn-secondary-bg text-btn-secondary-fg backdrop-blur-sm hover:bg-surface-hover"
      : "border border-accent-border bg-accent-soft text-accent-text hover:border-accent/40 hover:bg-accent-soft";

  return (
    <a
      href={resume.href}
      target="_blank"
      rel="noopener noreferrer"
      download={resume.fileName}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition sm:min-w-[180px] ${styles} ${className}`}
    >
      <DownloadIcon className="h-4 w-4" />
      {resume.label}
    </a>
  );
}

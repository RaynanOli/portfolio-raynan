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
      ? "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
      : "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/15";

  return (
    <a
      href={resume.href}
      target="_blank"
      rel="noopener noreferrer"
      download={resume.fileName}
      className={`inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${styles} ${className}`}
    >
      <DownloadIcon className="h-4 w-4" />
      {resume.label}
    </a>
  );
}

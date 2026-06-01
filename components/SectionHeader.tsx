type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-text sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

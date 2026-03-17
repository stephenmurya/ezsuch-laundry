type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "";

  return (
    <div className={alignment}>
      <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}


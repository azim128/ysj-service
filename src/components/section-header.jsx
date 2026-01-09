export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
}) {
  return (
    <div
      className={`mb-12 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }`}
    >
      {subtitle && (
        <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary-foreground text-xs font-bold uppercase tracking-widest mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

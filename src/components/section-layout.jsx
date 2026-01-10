export default function SectionLayout({
  children,
  className = "",
  fullWidth = false,
}) {
  return (
    <section className={`relative py-20 lg:py-24 ${className} overflow-hidden`}>
      {/* Subtle Background Glow using theme colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none -z-10"></div>

      <div
        className={
          fullWidth ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        }
      >
        {children}
      </div>
    </section>
  );
}

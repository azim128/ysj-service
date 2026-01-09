import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";
import { data } from "../data/data";

export default function NarrativeSection() {
  return (
    <SectionLayout className="bg-card relative overflow-hidden">
      <SectionHeader
        subtitle="The Big Picture"
        title="Driving Future Growth"
        description="We don't just follow trends; we set the pace for what's next in digital marketing."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mt-16">
        {data.about.narrative.map((item, index) => (
          <div key={index} className="group relative">
            <div className="bg-background rounded-3xl p-8 h-full border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden relative">
              {/* Decorative Number Background */}
              <div className="absolute -bottom-6 -right-6 text-[10rem] font-bold text-foreground opacity-[0.03] group-hover:opacity-[0.06] transition-opacity leading-none select-none pointer-events-none">
                {index + 1}
              </div>

              {/* Decorative Line */}
              <div className="w-12 h-1 bg-primary rounded-full mb-8"></div>

              <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed relative z-10">
                {item.title === "Our Story" && (
                  <span className="font-bold text-foreground">
                    {data.company.name}
                  </span>
                )}{" "}
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

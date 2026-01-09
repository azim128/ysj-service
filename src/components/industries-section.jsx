import { Stethoscope, Building, GraduationCap, LandPlot } from "lucide-react";
import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";

const industries = [
  { icon: Stethoscope, name: "Healthcare", color: "#10B981" },
  { icon: Building, name: "SaaS & Tech", color: "#3B82F6" },
  { icon: GraduationCap, name: "Education", color: "#8B5CF6" },
  { icon: LandPlot, name: "Real Estate", color: "#EF4444" },
];

export default function IndustriesSection() {
  return (
    <SectionLayout className="bg-[hsl(var(--card))]">
      <SectionHeader tagline="Sectors" title="Industries We Transform" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-8 h-64 flex flex-col justify-end transition-all hover:border-[hsl(var(--primary)/0.5)]"
          >
            {/* Background Icon Watermark */}
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <ind.icon className="w-40 h-40" />
            </div>

            <div
              className="h-12 w-12 rounded-xl flex items-center justify-center mb-auto transition-transform group-hover:scale-110"
              style={{
                backgroundColor: `color-mix(in srgb, ${ind.color} 15%, transparent)`,
              }}
            >
              <ind.icon className="h-6 w-6" style={{ color: ind.color }} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">
                {ind.name}
              </h3>
              <div className="w-12 h-1 bg-[hsl(var(--border))] group-hover:bg-[hsl(var(--primary))] transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

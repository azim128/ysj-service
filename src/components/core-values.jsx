import SectionHeader from "../components/section-header";
import {
  Lightbulb,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Microscope,
  Users,
} from "lucide-react";
import SectionLayout from "./section-layout";

const valuesData = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Operating with unwavering honesty and transparency.",
    color: "#ef4444",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new ideas and technologies.",
    color: "#f59e0b",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Building collaborative relationships based on trust.",
    color: "#10b981",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "Focusing strictly on delivering measurable success.",
    color: "#3A6FF7",
  },
  {
    icon: Microscope,
    title: "Data-Obsessed",
    description: "Letting data guide every strategic move we make.",
    color: "#f59e0b",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is the ultimate measure of our own.",
    color: "#ef4444",
  },
];

export default function CoreValuesSection() {
  return (
    <SectionLayout className="bg-secondary/20">
      <SectionHeader
        subtitle="Principles"
        title="Our Core Values"
        description="The foundational pillars that drive our culture and our work."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valuesData.map((value, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 overflow-hidden"
          >
            {/* Top Border Accent on Hover */}
            <div
              className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ backgroundColor: value.color }}
            ></div>

            <div
              className="flex items-center justify-center h-14 w-14 rounded-2xl mb-6 bg-secondary/20 text-foreground transition-all duration-300 group-hover:scale-110"
              style={{ color: "inherit" }} // Let CSS hover handle color if needed, or inline style
            >
              <value.icon
                className="h-7 w-7 transition-colors duration-300"
                style={{ color: value.color }}
              />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">
              {value.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

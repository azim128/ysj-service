import { Database, Handshake, Lightbulb, CheckCircle2 } from "lucide-react";
import SectionLayout from "./section-layout";
import contactInfo from "../data/contactInfo";

const keyPoints = [
  {
    icon: Database,
    title: "Data-Driven Decisions",
    description: "Strategies built on analytics, not guesswork.",
    color: "#3A6FF7", // Primary
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "Blending art with marketing science.",
    color: "#f59e0b", // Amber
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "Extension of your team, shared commitment.",
    color: "#10b981", // Emerald
  },
];

export default function ServiceIntroSection() {
  return (
    <SectionLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left: Visual Composition */}
        <div className="relative group order-2 lg:order-1">
          {/* Abstract Backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[80px] opacity-60"></div>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
              alt="Team Strategy"
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
            />

            {/* Glass Overlay/Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-lg flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Success Rate
                </div>
                <div className="text-2xl font-bold text-foreground">98.5%</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
              Beyond services, <br />
              <span className="text-primary">we deliver solutions.</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            At {contactInfo.companyName}, we believe that effective digital
            marketing is a blend of art and science. We craft integrated
            solutions designed to solve your unique challenges.
          </p>

          <div className="grid gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="group flex items-start gap-6 p-6 rounded-3xl border border-transparent hover:border-secondary hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${point.color}15`, // 15% opacity hex
                    color: point.color,
                  }}
                >
                  <point.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

import SectionLayout from "./section-layout";
import { Zap, CheckCircle2 } from "lucide-react";
import { data } from "../data/data";
import contactInfo from "../data/contactInfo";

export default function AboutHero() {
  const { hero } = data.about;

  return (
    <SectionLayout className="bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 transform translate-x-20 z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full mb-8 border border-primary/20">
            <Zap size={14} className="text-primary fill-primary" />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              {hero.subtitle}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            We are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {contactInfo.companyNameShort}
            </span>
            <br />
            {hero.title}
          </h2>

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex gap-8 border-t border-border pt-8">
            <div>
              <span className="block text-4xl font-bold text-foreground">
                10<span className="text-primary">+</span>
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Years Experience
              </span>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div>
              <span className="block text-4xl font-bold text-foreground">
                500<span className="text-primary">+</span>
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Projects Done
              </span>
            </div>
          </div>
        </div>

        {/* Visual Grid - Modern Masonry */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Image 1: Top Right */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-card z-10 hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover"
              alt="Team"
            />
          </div>

          {/* Image 2: Middle Left (Main) */}
          <div className="absolute top-24 left-0 w-72 h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-card z-20 hover:scale-105 transition-transform duration-500 delay-100">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover"
              alt="Meeting"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-3 rounded-xl border border-border">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-sm font-bold text-foreground">
                  Certified Experts
                </span>
              </div>
            </div>
          </div>

          {/* Image 3: Bottom Right */}
          <div className="absolute bottom-10 right-10 w-56 h-56 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-card z-10 hover:scale-105 transition-transform duration-500 delay-200">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover"
              alt="Strategy"
            />
          </div>

          {/* Decorative Dots */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </div>
    </SectionLayout>
  );
}

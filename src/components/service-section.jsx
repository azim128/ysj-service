import { ArrowRight } from "lucide-react";
import { data } from "../data/data";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";

export default function ServicesSection() {
  return (
    <SectionLayout className="bg-secondary/30 relative">
      <SectionHeader
        subtitle="Our Expertise"
        title="We provide the best solution"
        description="Comprehensive digital services designed to scale your business."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {data.services.map((service, index) => {
          const Icon = service.icon;
          // Bento Logic: Make 1st and 4th item span 2 columns if on large screen
          const isWide = index === 0 || index === 3 || index === 4;

          return (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border p-8 flex flex-col justify-between transition-all hover:shadow-2xl hover:-translate-y-1 ${
                isWide ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Abstract Background Image from Unsplash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img
                  src={`https://images.unsplash.com/photo-${
                    index % 2 === 0
                      ? "1618005182384-a83a8bd57fbe"
                      : "1550751827-4bd374c3f58b"
                  }?auto=format&fit=crop&q=80`}
                  className="w-full h-full object-cover grayscale"
                  alt=""
                />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-6 pt-6 border-t border-border/50">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  0{index + 1}
                </span>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <ArrowRight
                    size={18}
                    className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}

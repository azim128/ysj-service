import SectionLayout from "./section-layout";
import { data } from "../data/data";

export default function IdentitySection() {
  return (
    <SectionLayout className="bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {data.about.identity.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group bg-card border border-border p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/30">
                  <Icon
                    size={24}
                    className="text-foreground group-hover:text-white transition-colors"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}

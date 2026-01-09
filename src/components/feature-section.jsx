import { Check, Sparkles } from "lucide-react";
import { data } from "../data/data";
import SectionLayout from "./section-layout";

export default function FeaturedServicesDeep() {
  return (
    <SectionLayout className="bg-secondary/20 relative overflow-hidden">
      <div className="space-y-32">
        {data.featuredServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-16 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={12} />
                {service.category}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                {service.title}
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="text-primary-foreground" size={14} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Content - Glass Dashboard Style */}
            <div className="flex-1 w-full">
              <div className="relative">
                {/* Background Blob */}
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full transform scale-75"></div>

                {/* Main Card */}
                <div className="relative bg-card rounded-[2rem] p-4 shadow-2xl border border-border">
                  {/* Image Header */}
                  <div className="h-64 rounded-3xl overflow-hidden mb-6 relative">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index % 2 === 0
                          ? "1460925895917-afdab827c52f"
                          : "1551288049-bebda4e38f71"
                      }?auto=format&fit=crop&w=800&q=80`}
                      className="w-full h-full object-cover"
                      alt="Service visual"
                    />
                    <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-border">
                      <span className="text-2xl font-bold text-foreground">
                        {service.stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {service.stat.label}
                      </span>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: "Success", v: "99%" },
                      { l: "Speed", v: "2x" },
                      { l: "Rating", v: "5.0" },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="bg-secondary/50 rounded-2xl p-4 text-center"
                      >
                        <div className="font-bold text-foreground text-lg">
                          {m.v}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

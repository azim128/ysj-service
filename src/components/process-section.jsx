import { Link } from "react-router-dom";
import { data } from "../data/data";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import { ArrowRight } from "lucide-react";

export default function ProcessSection() {
  return (
    <SectionLayout className="bg-background relative overflow-hidden">
      <SectionHeader
        subtitle="Our Process"
        title="From concept to launch"
        description="A streamlined workflow designed for transparency and results."
      />

      <div className="relative mt-16">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-secondary -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {data.process.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group relative">
                {/* Number Badge Floating */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg rotate-3 group-hover:rotate-12 transition-transform duration-300 z-20">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-card border border-border p-8 rounded-3xl h-full flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-primary/30">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <Icon
                      className="text-foreground group-hover:text-primary transition-colors"
                      size={32}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Decorative Image Strip */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/contact-us"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}

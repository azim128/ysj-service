import { ArrowUpRight } from "lucide-react";
import { data } from "../data/data";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import { Link } from "react-router-dom";

export default function SuccessStoriesSection() {
  return (
    <SectionLayout className="bg-background">
      <SectionHeader
        subtitle="Success Stories"
        title="Real Results, Real Growth"
        description="See how we've helped businesses transform their digital presence."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.successStories.map((story, index) => (
          <div
            key={index}
            className="group relative flex flex-col h-full bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Image Area */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
              <img
                src={`https://images.unsplash.com/photo-${
                  index === 0
                    ? "1556761175-5973dc0f32e7"
                    : "1522202176988-66273c2fd55f"
                }?auto=format&fit=crop&w=800&q=80`}
                alt={story.company}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-background/90 backdrop-blur text-foreground text-xs font-bold rounded-full border border-border">
                  {story.industry}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {story.company}
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Challenge
                  </span>
                  <p className="text-sm text-foreground mt-1">
                    {story.challenge}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Result
                  </span>
                  <p className="text-sm text-foreground mt-1">
                    {story.solution}
                  </p>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 border-t border-border pt-6">
                {story.metrics.slice(0, 3).map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact-us"
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg z-30"
              >
                <ArrowUpRight className="text-black" size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

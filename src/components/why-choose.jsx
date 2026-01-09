import { data } from "../data/data";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import { Check } from "lucide-react";

export default function WhyUsSection() {
  return (
    <SectionLayout className="bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <SectionHeader
            centered={false}
            subtitle="Why Choose Us"
            title="We help you to grow your business faster"
            description="Our methodology is proven, our team is passionate, and our results speak for themselves."
          />

          <div className="space-y-8 mt-8">
            {data.whyUs.slice(0, 3).map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                        size={24}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Image Mosaic */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Decorative Circle */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-4 pt-12">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt="Team meeting"
                />
              </div>
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-primary p-6 flex flex-col justify-center text-primary-foreground relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Check size={80} />
                </div>
                <span className="text-4xl font-bold mb-2">98%</span>
                <span className="font-medium opacity-90">
                  Client Satisfaction Rate
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-card border border-border p-6 flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-foreground">Fast Delivery</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  We respect deadlines
                </p>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt="Office"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

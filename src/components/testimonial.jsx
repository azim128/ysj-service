import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { data } from "../data/data";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import { useState } from "react";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % data.testimonials.length);
  const prev = () =>
    setCurrent(
      (current - 1 + data.testimonials.length) % data.testimonials.length
    );

  const testimonial = data.testimonials[current];

  return (
    <SectionLayout className="bg-secondary/30">
      <SectionHeader
        subtitle="Testimonials"
        title="Trusted by innovative companies"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-card rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-border">
          {/* Big Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
            <Quote size={28} />
          </div>

          <div className="text-center mt-6">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="fill-yellow-400 text-yellow-400 w-5 h-5"
                />
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-10">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={`https://i.pravatar.cc/150?img=${current + 30}`}
                alt={testimonial.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-left">
                <h4 className="font-bold text-foreground text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-5 md:-left-8 -translate-y-1/2 z-10">
            <button
              onClick={prev}
              className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-5 md:-right-8 -translate-y-1/2 z-10">
            <button
              onClick={next}
              className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {data.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

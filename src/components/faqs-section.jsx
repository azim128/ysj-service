import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "How fast can we begin?",
    answer:
      "We can usually start your marketing campaigns within 1-2 business days following our initial consultation and contract execution.",
  },
  {
    question: "Do you serve businesses of all sizes?",
    answer:
      "Absolutely! We collaborate with startups, expanding businesses, and established enterprises. Our solutions are tailored to match your specific requirements and budget.",
  },
  {
    question: "How do you evaluate success?",
    answer:
      "We monitor key performance metrics that impact your business - lead generation, conversion rates, revenue growth, and ROI. You receive comprehensive monthly reports.",
  },
  {
    question: "What distinguishes you from other agencies?",
    answer:
      "Our analytics-driven approach, partnership philosophy, and dedication to transparency differentiate us. We function as growth partners, not merely service providers.",
  },
];

export default function FaqSection() {
  return (
    <SectionLayout className="bg-secondary/20">
      <SectionHeader
        subtitle="Support"
        title="Common Questions"
        description="Everything you need to know about our partnership methodology."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-[2rem] border border-transparent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-5">
              <div className="shrink-0 h-12 w-12 rounded-2xl bg-secondary/30 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <HelpCircle size={24} />
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  {item.question}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 p-1 pr-4 bg-white rounded-full border border-secondary shadow-sm hover:shadow-md transition-shadow cursor-default">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <MessageCircle size={16} />
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            Have more questions?
          </span>
          <Link
            to="/contact-us"
            className="text-sm font-bold text-foreground hover:text-primary flex items-center gap-1 transition-colors ml-1 group"
          >
            Contact Support
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}

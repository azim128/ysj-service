import { MessageCircle, ArrowRight, Calendar } from "lucide-react";
import SectionLayout from "./section-layout";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <SectionLayout className="bg-background pt-0 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-foreground px-6 py-20 md:px-20 md:py-24 text-center text-background shadow-2xl">
          {/* Abstract Background Art */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to scale your <br />
              <span className="text-primary">Digital Presence?</span>
            </h2>

            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              Join 500+ companies that trust us with their marketing. Let's
              create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact-us"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-2" />
                Let's Talk
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center group"
              >
                <Calendar size={20} className="mr-2" />
                Schedule Audit
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm font-medium text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Reply time: &lt; 2 hours
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Free initial consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

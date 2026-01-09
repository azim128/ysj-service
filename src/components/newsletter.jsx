import { Mail, ArrowRight } from "lucide-react";
import SectionLayout from "./section-layout";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setEmail("");
    setLoading(false);
  };
  return (
    <SectionLayout>
      <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-24 text-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur mb-8">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Subscribe to our newsletter for the latest digital marketing
            insights, exclusive tips, and strategies.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button
              disabled={loading}
              onClick={handleSubscribe}
              className="px-8 py-4 rounded-xl bg-white text-[hsl(var(--primary))] font-bold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>Processing ...</>
              ) : (
                <>
                  Subscribe <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-sm text-white/60">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}

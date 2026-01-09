import SectionLayout from "./section-layout";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import { ArrowUpRight, PlayCircle, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <SectionLayout
      className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      fullWidth
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full mb-8 border border-border">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Digital Agency V2.0
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Grow your brand with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative">
                Digital Power
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              {data.company.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25"
              >
                Start Your Journey
                <ArrowUpRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/service"
                className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground border border-input rounded-xl font-semibold hover:bg-secondary transition-all"
              >
                <PlayCircle className="mr-2 text-primary" size={20} />
                View Showreel
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  <span className="text-foreground font-bold">500+</span> Happy
                  Clients
                </p>
              </div>
            </div>
          </div>

          {/* Visual Content / Image */}
          <div className="relative order-1 lg:order-2">
            {/* Main Hero Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-card/50 rotate-2 hover:rotate-0 transition-all duration-700 ease-out group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                alt="Team working"
                className="w-full h-[600px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Card 1 */}
              <div className="absolute top-8 left-8 z-20 bg-card/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce delay-700 duration-3000">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 font-bold text-xs">
                    +128%
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Growth</p>
                    <p className="text-sm font-bold text-foreground">
                      All Time High
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-8 right-8 z-20 bg-card/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-border/50 max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star size={18} className="text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Top Rated</p>
                    <p className="text-xs text-muted-foreground">Agency 2024</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

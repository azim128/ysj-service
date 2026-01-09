import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import contactInfo from "../data/contactInfo";
import SectionLayout from "./section-layout";

export default function HeadquartersSection() {
  return (
    <SectionLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Content & Links */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Global Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our Headquarters
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-md">
            Based in the heart of innovation. We are always ready to connect
            with you in person or virtually.
          </p>

          <div className="space-y-4">
            {/* Address Row */}
            <div className="group flex items-center justify-between p-6 rounded-2xl border border-secondary hover:border-primary/50 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-white/50">
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-1">
                    Office
                  </div>
                  <div className="font-semibold text-foreground">
                    {contactInfo.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Row */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex items-center justify-between p-6 rounded-2xl border border-secondary hover:border-primary/50 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-white/50 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-1">
                    Email
                  </div>
                  <div className="font-semibold text-foreground">
                    {contactInfo.email}
                  </div>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* Phone Row */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="group flex items-center justify-between p-6 rounded-2xl border border-secondary hover:border-primary/50 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-white/50 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-1">
                    Phone
                  </div>
                  <div className="font-semibold text-foreground">
                    {contactInfo.phone}
                  </div>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
              />
            </a>
          </div>
        </div>

        {/* Right: Visual/Map */}
        <div className="relative h-full min-h-[500px]">
          <div className="absolute top-10 right-10 w-full h-full bg-secondary/20 rounded-[3rem] -z-10"></div>

          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
              alt="Office Map"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

            {/* Floating Location Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <div className="text-xs font-bold text-muted-foreground">
                  Current Status
                </div>
                <div className="text-sm font-bold text-foreground">
                  Open for business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

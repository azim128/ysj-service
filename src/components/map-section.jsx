import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <div className="w-full h-[500px] relative overflow-hidden bg-background">
      {/* Map Container */}
      <div className="absolute inset-0 filter grayscale contrast-[1.1] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="Office Location"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(VoxElite)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Overlay Gradient for smooth blending with next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

      {/* Floating Card */}
      <div className="absolute bottom-10 left-4 right-4 md:left-10 md:right-auto md:w-96 z-20">
        <div className="bg-card/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 relative group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-3xl"></div>

          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
              <MapPin size={24} />
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">
              Open Now
            </span>
          </div>

          <h4 className="font-bold text-foreground text-xl mb-2">
            Headquarters
          </h4>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            123 Digital Avenue, Tech District
            <br />
            New York, NY 10012
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-foreground transition-colors gap-2"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}

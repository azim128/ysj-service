import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="relative pt-48 pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-foreground/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
          alt="Office Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8 hover:bg-white/20 transition-colors">
          <Link
            to="/"
            className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} className="text-white/40" />
          <span className="text-white font-semibold text-sm">
            {breadcrumb || title}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}

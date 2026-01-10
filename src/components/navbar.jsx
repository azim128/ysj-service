import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { X, Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Appearance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Body Scroll Lock when Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        // Added w-full and max-w-full to prevent horizontal overflow
        className={`fixed top-4 left-0 right-0 w-full z-50 transition-all duration-300 px-4 ${
          scrolled ? "py-0" : "py-2"
        }`}
      >
        <div
          // Added overflow-hidden to the container to contain children
          className={`max-w-5xl w-full mx-auto rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-card/80 border-border/50 backdrop-blur-xl shadow-lg py-3 px-6"
              : "bg-transparent border-transparent py-4 px-4"
          }`}
        >
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <img
                src="logo.png"
                alt="Logo"
                // Added max-w constraints to ensure logo doesn't push width on small screens
                className="h-10 md:h-16 w-auto object-contain rounded-lg max-w-[150px]"
                onError={(e) => (e.target.style.display = "none")}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {data.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-full transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block shrink-0">
              <Link
                to="/contact-us"
                className="group flex items-center space-x-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-accent transition-all shadow-md hover:shadow-xl"
              >
                <span>Get Started</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Changed logic: fixed inset-0 ensures it fills screen exactly without overflow */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-28 px-6 md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 h-full overflow-y-auto pb-10">
          {data.navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors block"
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-border opacity-50" />
          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </>
  );
}

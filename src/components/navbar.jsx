import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { X, Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 ${
          scrolled ? "py-0" : "py-2"
        }`}
      >
        <div
          className={`max-w-5xl mx-auto rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-card/80 border-border/50 backdrop-blur-xl shadow-lg py-3 px-6"
              : "bg-transparent border-transparent py-4 px-4"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="logo.png"
                alt="Logo"
                className="h-16 w-auto object-cover rounded-lg"
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

            {/* CTA Button */}
            <div className="hidden md:block">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {data.navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-border" />
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-bold text-lg"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

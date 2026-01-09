import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import contactInfo from "../data/contactInfo";
import { Building2 } from "lucide-react";
import { User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden pt-20 pb-10">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              {/* logo */}
              <img
                src="logo.png"
                alt="logo"
                className="h-24 rounded-2xl w-auto"
              />
            </Link>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
              Data-driven strategies to elevate your brand. We turn traffic into
              revenue and clicks into customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[hsl(var(--foreground))]">
              Company
            </h4>
            <ul className="space-y-4">
              {["About Us", "Our Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-[hsl(var(--foreground))]">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "SEO Optimization",
                "PPC Advertising",
                "Content Strategy",
                "Social Media",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--secondary))] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[hsl(var(--foreground))]">
              Get in Touch
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Building2 className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                <span className="text-[hsl(var(--muted-foreground))]">
                  {contactInfo.companyName}
                </span>
              </li>
              <li className="flex gap-4">
                <User className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                <span className="text-[hsl(var(--muted-foreground))]">
                  {contactInfo.contactPerson}
                </span>
              </li>
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                <span className="text-[hsl(var(--muted-foreground))]">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                <span className="text-[hsl(var(--muted-foreground))]">
                  {contactInfo.email}
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                <span className="text-[hsl(var(--muted-foreground))]">
                  {contactInfo.phone}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--border))] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
          <p>© 2024 {contactInfo.companyName}. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            {/* add images of payment systems */}
            {/* text we accept */}
            <p className="text-[hsl(var(--muted-foreground))] font-bold">
              We Accept:
            </p>
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mastercard.png"
              alt="Mastercard"
            />
            <img
              src="https://img.icons8.com/color/48/000000/paypal.png"
              alt="PayPal"
            />
          </div>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[hsl(var(--foreground))]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-[hsl(var(--foreground))]"
            >
              Terms of Service
            </Link>
            <Link
              to="/refund-policy"
              className="hover:text-[hsl(var(--foreground))]"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

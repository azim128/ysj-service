import React from "react";
import { Link } from "react-router-dom";
import { Check, Zap, ArrowRight, Sparkles } from "lucide-react";
import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";
import { data } from "../data/data";

export default function PricingSection() {
  const { header, tiers } = data.pricing;

  return (
    <SectionLayout className="bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <SectionHeader
        subtitle={header.subtitle}
        title={header.title}
        description={header.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 items-center max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`
              relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 h-full
              ${
                tier.isPopular
                  ? "bg-foreground text-background shadow-2xl scale-105 z-10 ring-1 ring-white/20"
                  : "bg-card text-foreground border border-border hover:shadow-xl hover:-translate-y-2"
              }
            `}
          >
            {/* Background Texture for Popular Card */}
            {tier.isPopular && (
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none rounded-[2rem]"></div>
            )}

            {/* Popular Badge */}
            {tier.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center shadow-lg shadow-primary/30">
                <Sparkles size={12} className="mr-2" />
                Most Popular
              </div>
            )}

            {/* Header */}
            <div className="mb-8 relative">
              <h3
                className={`text-lg font-bold mb-2 ${
                  tier.isPopular ? "text-white" : "text-primary"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-sm mb-6 h-10 ${
                  tier.isPopular ? "text-zinc-400" : "text-muted-foreground"
                }`}
              >
                {tier.description}
              </p>
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-5xl font-bold tracking-tight ${
                    tier.isPopular ? "text-white" : "text-foreground"
                  }`}
                >
                  {tier.price === "Custom" ? "" : "$"}
                  {tier.price}
                </span>
                <span
                  className={`text-sm font-medium ${
                    tier.isPopular ? "text-zinc-500" : "text-muted-foreground"
                  }`}
                >
                  {tier.period}
                </span>
              </div>
            </div>

            {/* Divider */}
            <hr
              className={`mb-8 border-t ${
                tier.isPopular ? "border-white/10" : "border-border"
              }`}
            />

            {/* Features List */}
            <ul className="flex-1 space-y-4 mb-10">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <div
                    className={`
                    mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3
                    ${
                      tier.isPopular
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }
                  `}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span
                    className={`text-sm ${
                      tier.isPopular ? "text-zinc-300" : "text-muted-foreground"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              to="/contact-us"
              className={`
                w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide text-center transition-all duration-300 flex items-center justify-center group
                ${
                  tier.isPopular
                    ? "bg-white text-black hover:bg-primary hover:text-white"
                    : "bg-primary text-white hover:bg-foreground hover:text-white shadow-lg shadow-primary/20"
                }
              `}
            >
              {tier.buttonText}
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";
import { Send } from "lucide-react";
import { data } from "../data/data";

export default function ContactSection() {
  const { section, info } = data.contactPage;

  return (
    <SectionLayout className="bg-background relative z-10 pt-20">
      <SectionHeader
        subtitle={section.subtitle}
        title={section.title}
        description={section.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-4 space-y-6">
          {info.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                className="flex items-start p-6 bg-card rounded-3xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon
                    size={20}
                    className="text-foreground group-hover:text-white transition-colors"
                  />
                </div>
                <div className="ml-5">
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-1 break-all">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.subtext}
                  </p>
                </div>
              </a>
            );
          })}

          {/* Trust Badge */}
          <div className="p-8 bg-foreground rounded-3xl text-background relative overflow-hidden mt-8">
            <div className="relative z-10">
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    className="w-10 h-10 rounded-full border-2 border-foreground"
                    alt=""
                  />
                ))}
              </div>
              <h4 className="font-bold text-xl mb-2">Ready to grow?</h4>
              <p className="text-zinc-400 text-sm">
                Join 500+ companies scaling with VoxElite.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px]"></div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-8">
          <form className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Send us a message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                  Subject
                </label>
                <div className="relative">
                  <select className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer text-foreground">
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Career Opportunity</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Company Size */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                  Company Size
                </label>
                <div className="relative">
                  <select className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer text-foreground">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-100 employees</option>
                    <option>100+ employees</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Interested */}
            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                Service Interested In
              </label>
              <div className="relative">
                <select className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer text-foreground">
                  {data.services.map((service) => (
                    <option key={service.id}>{service.title}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project goals..."
                className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none text-foreground placeholder:text-muted-foreground/50"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
}

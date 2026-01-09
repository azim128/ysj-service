import { Mail, Phone, Check, User } from "lucide-react";
import contactInfo from "../data/contactInfo";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";

const teamData = [
  {
    name: contactInfo.contactPerson,
    title: contactInfo.contactPersonRole,
    bio: `With comprehensive expertise in digital marketing strategy, ${contactInfo.contactPerson} directs our company vision and client partnerships. A recognized authority in growth acceleration and business transformation.`,
    tags: ["Strategy", "Leadership", "Growth"],
    contact: {
      email: contactInfo.email,
      phone: contactInfo.phone,
      location: contactInfo.address,
    },
  },
];

export default function TeamSection() {
  return (
    <SectionLayout>
      <SectionHeader subtitle="Leadership" title="Meet the expert" />

      <div className="max-w-5xl mx-auto">
        {teamData.map((member) => (
          <div
            key={member.name}
            className="group relative bg-white rounded-[2.5rem] border border-secondary p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Profile Side */}
              <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative h-40 w-40 rounded-full border-4 border-white shadow-xl bg-secondary/10 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for real image, using Icon for now */}
                    <User size={64} className="text-muted-foreground" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium bg-primary/5 px-4 py-1 rounded-full text-sm">
                  {member.title}
                </p>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  About
                </h4>
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-secondary text-sm font-medium text-muted-foreground"
                    >
                      <Check size={14} className="text-green-500" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-secondary">
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/30 transition-colors group/link"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm font-semibold text-foreground">
                        {member.contact.email}
                      </div>
                    </div>
                  </a>
                  <a
                    href={`tel:${member.contact.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/30 transition-colors group/link"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Phone</div>
                      <div className="text-sm font-semibold text-foreground">
                        {member.contact.phone}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

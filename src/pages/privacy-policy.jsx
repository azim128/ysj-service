import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/page-header";
import contactInfo from "../data/contactInfo";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen ">
      <div className="animate-fade-in">
        <PageHeader
          title="Privacy Policy"
          description="Last updated: January 2025"
          breadcrumbs={[{ label: "Privacy Policy" }]}
        />

        <section className="py-16 md:py-24 relative">
          {/* Decorative background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-[hsl(var(--primary)/0.02)] -z-10 rounded-[3rem]" />

          <div className="container mx-auto max-w-4xl px-6 space-y-12">
            {/* 1. Information Collection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-sm">
                  1
                </span>
                Information Collection
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We collect information that you provide voluntarily when
                creating accounts, using our services, submitting inquiries, or
                interacting with our platforms. This includes:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--primary))]">
                <li>
                  Personal identification information (name, email, phone,
                  address)
                </li>
                <li>Business details and company information</li>
                <li>Payment and billing information</li>
                <li>Communication history and feedback</li>
                <li>Marketing preferences and interests</li>
              </ul>
            </div>

            {/* 2. How We Use Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[hsl(var(--secondary)/0.1)] text-[hsl(var(--secondary))] text-sm">
                  2
                </span>
                How We Use Information
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We use collected information for business purposes, including:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--secondary))]">
                <li>Providing, maintaining, and improving our services</li>
                <li>
                  Processing transactions and sending related notifications
                </li>
                <li>
                  Sending technical updates, security alerts, and support
                  messages
                </li>
                <li>
                  Responding to comments, questions, and customer service
                  requests
                </li>
                <li>
                  Communicating about services, features, and opportunities
                </li>
                <li>
                  Monitoring usage patterns and analyzing service performance
                </li>
              </ul>
            </div>

            {/* 3. Information Sharing */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] text-sm">
                  3
                </span>
                Information Sharing
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We may share your information in these situations:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--accent))]">
                <li>
                  With service providers and partners who assist in delivering
                  our services
                </li>
                <li>When required by law or to respond to legal processes</li>
                <li>
                  To protect the rights and safety of {contactInfo.companyName}{" "}
                  and others
                </li>
                <li>
                  In connection with business transactions like mergers or
                  acquisitions
                </li>
              </ul>
            </div>

            {/* 4. Data Security */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                4. Data Security
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We implement robust security measures to protect your
                information from unauthorized access, alteration, disclosure, or
                destruction. However, no internet transmission or electronic
                storage method is completely secure.
              </p>
            </div>

            {/* 5. Cookies and Tracking */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                5. Cookies and Tracking
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We use cookies and similar technologies to track website
                activity and store preferences. Cookies are small data files
                that may include unique identifiers.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                You can set your browser to refuse cookies or alert you when
                cookies are sent. However, some features may not function
                properly without cookies.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">6. Your Rights</h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--primary))]">
                <li>Right to access, update, or delete your information</li>
                <li>Right to correct inaccurate or incomplete information</li>
                <li>
                  Right to object to processing of your personal information
                </li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent where applicable</li>
              </ul>
            </div>

            {/* 7. Data Retention */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                7. Data Retention
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We retain personal information as long as we have a legitimate
                business need. When no longer needed, we will delete or
                anonymize it, or securely store and isolate it from further
                processing.
              </p>
            </div>

            {/* 8. International Transfers */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                8. International Transfers
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Your information may be transferred to and processed in
                locations outside your jurisdiction where data protection laws
                may differ.
              </p>
            </div>

            {/* 9. Children's Privacy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                9. Children's Privacy
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Our services are not intended for individuals under 13. We do
                not knowingly collect personal information from children under
                13. If you become aware that a child has provided us with
                personal information, please contact us immediately.
              </p>
            </div>

            {/* 10. Policy Updates */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                10. Policy Updates
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                We may update this Privacy Policy periodically. We will notify
                you of changes by posting the updated policy on this page and
                updating the "Last updated" date.
              </p>
            </div>

            {/* 11. Contact Us */}
            <div className="mt-16 glass-panel rounded-3xl p-8 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)] transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                11. Contact Us
              </h3>
              <p className="text-white mb-6">
                If you have questions about this Privacy Policy, please contact
                us:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white">
                  <div className="p-2 rounded-lg bg-[hsl(var(--primary)/0.1)] text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>
                    Email:{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className=" hover:underline font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-4 text-white">
                  <div className="p-2 rounded-lg bg-[hsl(var(--primary)/0.1)] text-black">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>
                    Phone:{" "}
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className=" hover:underline font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 text-white">
                  <div className="p-2 rounded-lg bg-[hsl(var(--primary)/0.1)] text-black">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="whitespace-pre-line">
                    {contactInfo.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

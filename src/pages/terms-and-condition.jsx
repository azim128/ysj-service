import { Mail, MapPin, Phone, FileText } from "lucide-react";
import PageHeader from "../components/page-header";
import contactInfo from "../data/contactInfo";

export default function TermsConditions() {
  return (
    <main className="min-h-screen ">
      <div className="animate-fade-in">
        <PageHeader
          title="Terms & Conditions"
          description="Last updated: January 2025"
          breadcrumbs={[{ label: "Terms & Conditions" }]}
        />

        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto max-w-4xl px-6 space-y-12">
            {/* 1. Acceptance */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                <FileText className="h-6 w-6 " />
                1. Acceptance of Terms
              </h2>
              <p className=" leading-relaxed">
                By accessing and using the services provided by{" "}
                {contactInfo.companyName}, you accept and agree to be bound by
                the terms and provision of this agreement. These terms apply to
                all visitors, users, and others who access or use our services.
              </p>
              <p className="">
                If you do not agree to abide by the above, please do not use our
                services. We reserve the right to change these terms at any
                time.
              </p>
            </div>

            {/* 2. Service Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                2. Service Description
              </h2>
              <p className="">
                {contactInfo.companyName} provides digital marketing services
                including but not limited to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Search Engine Optimization (SEO)",
                  "Pay-Per-Click (PPC) Advertising",
                  "Social Media Marketing",
                  "Content Marketing",
                  "Email Marketing",
                  "Website Development",
                  "Analytics and Reporting",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 ">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))]"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Client Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                3. Client Responsibilities
              </h2>
              <div className="p-6 rounded-2xl  border border-[hsl(var(--border))]">
                <ul className="space-y-3 ">
                  <li>
                    • Providing accurate and complete information necessary for
                    service delivery
                  </li>
                  <li>• Timely payment of all fees and charges</li>
                  <li>
                    • Providing feedback and approvals within agreed timeframes
                  </li>
                  <li>• Maintaining confidentiality of login credentials</li>
                  <li>
                    • Ensuring compliance with applicable laws and regulations
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Payment Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                4. Payment Terms
              </h2>
              <ul className="list-disc list-inside pl-4 space-y-2  marker:">
                <li>
                  Monthly services are billed in advance on the same date each
                  month
                </li>
                <li>Payment is due within 15 days of invoice date</li>
                <li>Late payments may incur additional fees</li>
                <li>Services may be suspended for non-payment</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </div>

            {/* 5-7 Sections (Intellectual Property, Confidentiality, Liability) */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  5. Intellectual Property
                </h2>
                <p className=" leading-relaxed">
                  Client retains ownership of their brand and proprietary
                  content. {contactInfo.companyName} retains ownership of
                  methodologies. Work products created specifically for clients
                  become client property upon full payment.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  6. Confidentiality
                </h2>
                <p className=" leading-relaxed">
                  Both parties agree to maintain confidentiality of business
                  strategies, customer data, financial info, and technical
                  processes.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  7. Limitation of Liability
                </h2>
                <p className=" leading-relaxed">
                  Total liability shall not exceed the amount paid for services
                  in the preceding 12 months. We are not liable for indirect
                  damages and do not guarantee specific results.
                </p>
              </div>
            </div>

            {/* 8. Termination */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">8. Termination</h2>
              <p className="">Either party may terminate the agreement:</p>
              <ul className="list-disc list-inside pl-4 space-y-2  marker:text-[hsl(var(--accent))]">
                <li>With 30 days written notice for convenience</li>
                <li>
                  Immediately for material breach of contract or non-payment
                </li>
                <li>Upon completion of project-based work</li>
              </ul>
            </div>

            {/* 9-11 Legal Boilerplate */}
            <div className="space-y-8 p-6 bg-[hsl(var(--card)/0.3)] rounded-2xl">
              <div>
                <h2 className="text-xl font-bold text-black mb-2">
                  9. Dispute Resolution
                </h2>
                <p className="text-sm ">
                  Negotiation first, then mediation, then binding arbitration.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-black mb-2">
                  10. Governing Law
                </h2>
                <p className="text-sm ">
                  Governed by the laws of the State of Washington, United
                  States.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-black mb-2">
                  11. Changes to Terms
                </h2>
                <p className="text-sm ">
                  We reserve the right to modify these terms. Continued use
                  constitutes acceptance.
                </p>
              </div>
            </div>

            {/* 12. Contact Information */}
            <div className="mt-16 glass-panel rounded-3xl p-8 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)] transition-colors">
              <h3 className="text-xl font-bold text-black mb-6">
                12. Contact Information
              </h3>
              <p className=" mb-6">
                For questions about these terms, please contact us:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 ">
                  <Mail className="h-5 w-5 " />
                  <span>
                    Email:{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className=" hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-4 ">
                  <Phone className="h-5 w-5 " />
                  <span>
                    Phone:{" "}
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className=" hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 ">
                  <MapPin className="h-5 w-5 " />
                  <span className="whitespace-pre-line">
                    {contactInfo.address}
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-sm ">
                <strong className="text-black">Need Clarification?</strong> If
                you have questions about any of these terms, please contact us.
                We're here to ensure you understand your rights and
                responsibilities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

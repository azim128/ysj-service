import { Clock, Mail, MapPin, Phone, AlertCircle } from "lucide-react";
import PageHeader from "../components/page-header";
import contactInfo from "../data/contactInfo";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen ">
      <div className="animate-fade-in">
        <PageHeader
          title="Refund Policy"
          description="Last updated: January 2025"
          breadcrumbs={[{ label: "Refund Policy" }]}
        />

        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto max-w-4xl px-6 space-y-12">
            {/* 1. General Framework */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black">
                1. General Refund Framework
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                At {contactInfo.companyName}, we are committed to delivering
                exceptional service quality and ensuring client satisfaction.
                Our refund policy is designed to be fair and transparent while
                recognizing the specialized nature of strategic digital
                marketing services.
              </p>
              <div className="flex gap-4 p-5 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--primary)/0.3)]">
                <AlertCircle className="h-6 w-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  <strong className="text-[hsl(var(--foreground))] block mb-1">
                    Important:
                  </strong>
                  Due to the specialized nature of strategic marketing services,
                  which involve comprehensive planning, ongoing implementation,
                  and campaign optimization, refunds are evaluated on a
                  case-by-case basis.
                </p>
              </div>
            </div>

            {/* 2. Monthly Service Plans */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                2. Monthly Service Plans
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                For monthly recurring service subscriptions:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    label: "First Month Guarantee",
                    text: "Refund available within first 30 days if unsatisfied.",
                  },
                  {
                    label: "Service Cancellation",
                    text: "Cancel anytime with 30 days written notice.",
                  },
                  {
                    label: "No Partial Refunds",
                    text: "We do not refund unused portions of a billing cycle.",
                  },
                  {
                    label: "Work Delivery",
                    text: "Completed work delivered regardless of cancellation.",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="p-4 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))]"
                  >
                    <span className="font-bold text-[hsl(var(--primary))] block mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Annual Service Plans */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                3. Annual Service Plans
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                For annual prepaid service subscriptions:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--secondary))]">
                <li>
                  <strong className="text-black">60-Day Guarantee:</strong> If
                  you are not satisfied within the first 60 days, you may
                  request a prorated refund for the unused portion.
                </li>
                <li>
                  <strong className="text-black">After 60 Days:</strong> No
                  refunds are available after the initial 60-day period.
                </li>
                <li>
                  <strong className="text-black">Early Termination:</strong> No
                  refund provided for the unused portion after 60 days.
                </li>
                <li>
                  <strong className="text-black">Work Delivery:</strong> All
                  work completed up to the termination date will be delivered.
                </li>
              </ul>
            </div>

            {/* 4. Setup Fees */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                4. Setup Fees and One-Time Projects
              </h2>
              <ul className="list-disc list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--accent))]">
                <li>
                  <strong className="text-black">Setup Fees:</strong>{" "}
                  Non-refundable once work has begun.
                </li>
                <li>
                  <strong className="text-black">Project-Based Work:</strong>{" "}
                  Refunds considered only if we fail to deliver agreed-upon
                  deliverables.
                </li>
                <li>
                  <strong className="text-black">Completed Work:</strong> No
                  refunds for work that has been completed and delivered.
                </li>
                <li>
                  <strong className="text-black">Milestone Payments:</strong>{" "}
                  Refunds only available for incomplete milestone work.
                </li>
              </ul>
            </div>

            {/* 5. Advertising Spend */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                5. Advertising Spend
              </h2>
              <div className="p-5 rounded-xl bg-[hsl(var(--card))] border-l-4 border-[hsl(var(--secondary))]">
                <p className="text-[hsl(var(--muted-foreground))]">
                  <strong>Please Note:</strong> Advertising budget paid to
                  platforms (Google, Facebook, etc.) is{" "}
                  <span className="text-[hsl(var(--foreground))] font-bold underline">
                    non-refundable
                  </span>
                  . Any unused budget will remain in your advertising accounts.
                </p>
              </div>
            </div>

            {/* 6. Refund Exclusions */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                6. Refund Exclusions
              </h2>
              <p className="text-[hsl(var(--muted-foreground))]">
                Refunds will NOT be provided in the following situations:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))]">
                <li>
                  Failure to provide necessary access, information, or approvals
                </li>
                <li>Changes in business circumstances or priorities</li>
                <li>
                  Dissatisfaction with results due to factors beyond our control
                </li>
                <li>Violation of our Partnership Terms</li>
                <li>Fraudulent or chargeback activity</li>
                <li>Services already delivered and accepted</li>
              </ul>
            </div>

            {/* 7. Request Process */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                7. Refund Request Process
              </h2>
              <ol className="list-decimal list-inside pl-4 space-y-2 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--primary))] marker:font-bold">
                <li>
                  Contact us in writing at{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[hsl(var(--primary))] hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  Include your account information and reason for the refund
                  request
                </li>
                <li>
                  Provide any relevant documentation supporting your request
                </li>
                <li>Allow 5-10 business days for review and response</li>
                <li>
                  If approved, refunds will be processed within 10-15 business
                  days via original payment method
                </li>
              </ol>
            </div>

            {/* 8-11 Sections (Grouped for brevity but retaining content) */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  8. Alternative Solutions
                </h2>
                <p className="text-[hsl(var(--muted-foreground))]">
                  In certain cases, we may offer service credits, additional
                  services at no charge, or extended service periods instead of
                  monetary refunds.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  9. Dispute Resolution
                </h2>
                <p className="text-[hsl(var(--muted-foreground))]">
                  If you dispute our decision, you may request a senior review,
                  provide documentation, or seek mediation. Final decisions
                  align with our Partnership Terms.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  10. Chargeback Policy
                </h2>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Initiating a chargeback without contacting us first may result
                  in immediate service suspension and termination of our
                  business relationship.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-[hsl(var(--card))] rounded-3xl p-8 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)] transition-colors">
              <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-6">
                12. Contact Information
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-6">
                For refund requests or questions about this policy:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                    <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                    <Phone className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-[hsl(var(--muted-foreground))]">
                    <MapPin className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="whitespace-pre-line">
                      {contactInfo.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                    <Clock className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span>Mon-Fri: 9:00 AM - 6:00 PM CST</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[hsl(var(--border))]">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  <strong className="text-[hsl(var(--foreground))]">
                    Need Assistance?
                  </strong>{" "}
                  Before requesting a refund, please contact us. Many issues can
                  be resolved through clear communication and strategy
                  adjustments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

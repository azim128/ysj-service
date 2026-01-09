import ContactFormSection from "../components/contact-form";
import FaqSection from "../components/faqs-section";
import MapSection from "../components/map-section";
import PageHeader from "../components/page-header";

export default function Contact() {
  return (
    <main className="min-h-screen  overflow-hidden">
      <div className="animate-fade-in">
        <PageHeader
          title="Contact Us"
          description="We'd love to hear from you. Let's start a conversation about your digital future."
          breadcrumbs={[{ label: "Contact Us" }]}
        />
        <ContactFormSection />
        <MapSection />
        <FaqSection />
      </div>
    </main>
  );
}

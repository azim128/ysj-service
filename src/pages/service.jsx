import CtaSection from "../components/cta";
import PageHeader from "../components/page-header";
import PricingSection from "../components/pricing-plan";
import ServiceIntroSection from "../components/service-intro";
import ServicesSection from "../components/service-section";

export default function Service() {
  return (
    <main className="min-h-screen  overflow-hidden">
      <div className="animate-fade-in">
        <PageHeader
          title="Our Services"
          description="Comprehensive digital marketing solutions tailored to fuel your growth."
          breadcrumbs={[{ label: "Services" }]}
        />
        <ServiceIntroSection />
        <ServicesSection />
        <PricingSection />
        <CtaSection />
      </div>
    </main>
  );
}

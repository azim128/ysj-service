import AboutIntroSection from "../components/about-intro";
import CoreValuesSection from "../components/core-values";
import CtaSection from "../components/cta";
import HeadquartersSection from "../components/headquarters";
import IdentitySection from "../components/identity";
import NarrativeSection from "../components/narrative";
import PageHeader from "../components/page-header";
import TeamSection from "../components/team-section";
import contactInfo from "../data/contactInfo";

export default function About() {
  const title = `About ${contactInfo.companyName}`;

  return (
    <main className="min-h-screen  overflow-hidden">
      <PageHeader
        title={title}
        breadcrumbs={[{ label: "About Us" }]}
        description="We are a collective of thinkers, makers, and doers committed to your digital success."
      />
      <AboutIntroSection />
      <IdentitySection />
      <NarrativeSection />

      <CoreValuesSection />
      <TeamSection />
      <HeadquartersSection />
      <CtaSection />
    </main>
  );
}

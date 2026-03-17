import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { company } from "@/lib/site";

export default function HomePage() {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: company.directoryName,
    image: company.heroImage,
    description: company.description,
    telephone: company.phoneIntl,
    slogan: company.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLine1,
      addressLocality: "Ijaiye-Ojokoro",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    openingHours: "Mo-Sa 08:00-18:00",
    areaServed: ["Ijaiye", "Ijaiye-Ojokoro", "Lagos"],
    sameAs: [company.whatsappHref],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

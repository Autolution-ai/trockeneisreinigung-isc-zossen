import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Leistungen from "@/components/sections/Leistungen";
import Einsatzgebiete from "@/components/sections/Einsatzgebiete";
import Vorteile from "@/components/sections/Vorteile";
import Referenzen from "@/components/sections/Referenzen";
import UeberUns from "@/components/sections/UeberUns";
import FAQ from "@/components/sections/FAQ";
import CTASektion from "@/components/sections/CTASektion";
import { faqItems } from "@/lib/data/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.frage,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.antwort,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustBar />
      <Leistungen />
      <Einsatzgebiete />
      <Vorteile />
      <Referenzen />
      <UeberUns />
      <FAQ />
      <CTASektion />
    </>
  );
}

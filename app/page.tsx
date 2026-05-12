import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Leistungen from "@/components/sections/Leistungen";
import Einsatzgebiete from "@/components/sections/Einsatzgebiete";
import Vorteile from "@/components/sections/Vorteile";
import Referenzen from "@/components/sections/Referenzen";
import UeberUns from "@/components/sections/UeberUns";
import FAQ from "@/components/sections/FAQ";
import CTASektion from "@/components/sections/CTASektion";

export default function Home() {
  return (
    <>
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

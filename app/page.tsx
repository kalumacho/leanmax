import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import PressionSection from "@/components/sections/pression-section";
import SolutionSection from "@/components/sections/solution-section";
import ResultatsSection from "@/components/sections/resultats-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <PressionSection />
        <SolutionSection />
        <ResultatsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

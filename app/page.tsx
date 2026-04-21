import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import SolutionSection from "@/components/sections/solution-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <SolutionSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

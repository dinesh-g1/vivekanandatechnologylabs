import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import OurBusinesses from "@/components/home/OurBusinesses";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CoreValuesSection />
        <IndustriesSection />
        <OurBusinesses />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

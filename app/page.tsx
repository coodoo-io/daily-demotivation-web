import { NavBar } from "@/components/sections/nav-bar";
import { HeroSection } from "@/components/sections/hero-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ThemesSection } from "@/components/sections/themes-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <QuoteSection />
        <FeaturesSection />
        <ThemesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}

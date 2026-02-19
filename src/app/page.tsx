import { HeroSlider } from "@/components/HeroSlider";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
    </>
  );
}

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesStrip from "@/components/ServicesStrip";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import MotionSection from "@/components/MotionSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <IntroSection />
        <ServicesStrip />
        <PortfolioSection />
        <ServicesSection />
        <MotionSection />
        <AboutSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
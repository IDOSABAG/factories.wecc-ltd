import React, { useRef } from "react";
import HeroSection from "../components/factory-finder/HeroSection";
import ProcessSteps from "../components/factory-finder/ProcessSteps";
import VideoSection from "../components/factory-finder/VideoSection";
import BenefitsGrid from "../components/factory-finder/BenefitsGrid";
import SuccessStories from "../components/factory-finder/SuccessStories";
import ProductsInProgress from "../components/factory-finder/ProductsInProgress";
import SpecialOffer from "../components/factory-finder/SpecialOffer";
import ContactForm from "../components/factory-finder/ContactForm";
import FAQ from "../components/factory-finder/FAQ";
import FooterCTA from "../components/factory-finder/FooterCTA";
import CTABanner from "../components/factory-finder/CTABanner";

export default function FactoryFinderPage() {
  const contactFormRef = useRef(null);

  const scrollToForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#0a0e27]" dir="rtl">
      <HeroSection onCTAClick={scrollToForm} />
      <ProcessSteps />
      <CTABanner
        onCTAClick={scrollToForm}
        text="רוצה לדעת איך נוכל לעזור לך?"
        buttonText="לפגישת ייעוץ חינם"
      />
      <VideoSection />
      <BenefitsGrid />
      <CTABanner
        onCTAClick={scrollToForm}
        text="מוכן להפוך את הרעיון שלך למוצר?"
        buttonText="השאר פרטים עכשיו"
      />
      <SuccessStories />
      <CTABanner
        onCTAClick={scrollToForm}
        text="המוצר שלך יכול להיות הבא!"
        buttonText="בוא נתחיל"
      />
      <ProductsInProgress />
      <SpecialOffer onCTAClick={scrollToForm} />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <FAQ />
      <FooterCTA onCTAClick={scrollToForm} />
    </div>
  );
}

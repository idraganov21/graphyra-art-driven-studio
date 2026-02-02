import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollEffects from "@/components/ScrollEffects";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro
    const visited = sessionStorage.getItem("graphyra-visited");
    if (visited) {
      setShowIntro(false);
      setHasVisited(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasVisited(true);
    sessionStorage.setItem("graphyra-visited", "true");
  };

  return (
    <>
      <CustomCursor />
      
      {showIntro && !hasVisited && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      <div className={showIntro && !hasVisited ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <ScrollEffects>
          <Navigation />
          <main>
            <HeroSection />
            <div className="section-divider" />
            <PrinciplesSection />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <ContactSection />
          </main>
          <Footer />
        </ScrollEffects>
      </div>

      {/* Global grain overlay */}
      <div className="grain-overlay" />
    </>
  );
};

export default Index;

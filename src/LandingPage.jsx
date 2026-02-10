import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResponsibleSection from "./components/ResponsibleSection";
import ServicesSection from "./components/ServicesSection";
import MistakesSection from "./components/MistakesSection";
import DifferentialsSection from "./components/DifferentialsSection";
import EnvironmentalSimulatorSection from "./components/EnvironmentalSimulatorSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

/**
 * Landing Page Principal
 *
 * Componente que organiza todas as seções da landing page
 * em uma estrutura fluida e responsiva
 */

const LandingPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <HeroSection />
      <AboutSection />
      <ResponsibleSection />
      <ServicesSection />
      <MistakesSection />
      <DifferentialsSection />
      <EnvironmentalSimulatorSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </Box>
  );
};

export default LandingPage;

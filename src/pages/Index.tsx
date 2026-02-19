import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProductPhilosophySection from "@/sections/ProductPhilosophySection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import MetricsImpactSection from "@/sections/MetricsImpactSection";
import ProductToolkitSection from "@/sections/ProductToolkitSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import ContactSection from "@/components/portfolio/ContactSection";

const SECTIONS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "philosophy", label: "PHILOSOPHY" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "metrics", label: "IMPACT" },
  { id: "toolkit", label: "TOOLKIT" },
  { id: "leadership", label: "LEADERSHIP" },
  { id: "contact", label: "CONTACT" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowH * 0.4) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar sections={SECTIONS} activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="relative">
        <HeroSection onScrollToProjects={() => scrollToSection("projects")} />
        <AboutSection variant="light" />
        <ProductPhilosophySection variant="dark" />
        <ExperienceSection variant="light" />
        <ProjectsSection variant="dark" />
        <MetricsImpactSection variant="light" />
        <ProductToolkitSection variant="dark" />
        <LeadershipSection variant="light" />
        <ContactSection variant="light" />
      </main>
    </>
  );
};

export default Index;

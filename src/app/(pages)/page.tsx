import Grids from "@/components/common/grids";
import HeroSection from "@/components/hero-section/hero-section";
import AboutSection from "@/components/about/about";
import SkillsSection from "@/components/skills/skills";
import ProjectsSection from "@/components/projects/projects";
import ServicesSection from "@/components/services/services";

export default function Home() {
  return (
    <div className="px-24 pt-16">
      <div className="relative h-full w-full">
        <Grids />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
      </div>
    </div>
  );
}

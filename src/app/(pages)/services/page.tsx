import Grids from "@/components/common/grids";
import React from "react";
import ServicesSection from "@/components/services/services";
import ProjectsSection from "@/components/projects/projects";

const ServicesPage = () => {
  return (
    <div className="px-24 pt-16">
      <div className="relative h-full w-full">
        <Grids />
        <ServicesSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ServicesPage;

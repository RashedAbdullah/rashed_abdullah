import React from "react";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";
import ProjectCard from "@/app/projects/_components/project-card";
import { getProjects } from "@/controllers/projects";

export default async function Works() {
  const projects = await getProjects();
  return (
    <div id="works" className="min-h-screen w-full">
      <div className="container">
        <div className="flex justify-center items-center mt-20">
          <ScrollMouse />
        </div>
        <div>
          <PageTitle>Projects</PageTitle>
          <p className="text-center text-sm">
            I had the pleasure of working with these awesome projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

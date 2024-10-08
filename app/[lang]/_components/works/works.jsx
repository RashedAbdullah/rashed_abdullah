import React from "react";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";
import Projects from "../projects/projects";
import { getManageLangs } from "@/manage-langs/manage-langs";

export default async function Works({ lang = "en" }) {
  const langs = await getManageLangs(lang);

  return (
    <div
      id="works"
      className="min-h-screen w-full bg-deepBlack bg-grid-small-white/[0.2] relative"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-deepBlack [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container">
        <div className="flex justify-center items-center mt-20">
          <ScrollMouse />
        </div>
        <div>
          <PageTitle>{langs.projects}</PageTitle>
          <p className="text-center text-sm">{langs.workDesc}</p>
        </div>
        <div className="flex justify-center items-center my-10">
          <Projects />
        </div>
      </div>
    </div>
  );
}

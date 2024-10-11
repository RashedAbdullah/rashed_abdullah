import React from "react";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";
import Projects from "../projects/projects";


export default async function Works() {

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
          <PageTitle>Works</PageTitle>
          <p className="text-center text-sm">
            I had the pleasure of working with these awesome projects
          </p>
        </div>
        <div className="flex justify-center items-center my-10">
          <Projects />
        </div>
      </div>
    </div>
  );
}

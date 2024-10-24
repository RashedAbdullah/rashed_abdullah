import React from "react";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";
import Projects from "../projects/projects";

export default async function Works() {
  return (
    <div id="works" className="min-h-screen w-full">
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

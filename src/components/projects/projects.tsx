import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import React from "react";

const ProjectsSection = () => {
  return (
    <section
      className="font-plus-jakarta-sans pt-20 pb-50"
      aria-labelledby="projects-heading"
    >
      <div className="pb-20 pl-16 space-y-4">
        <div className="flex items-center gap-2 font-medium">
          <span className="h-3 w-3 bg-primary" aria-hidden="true" />
          <span>PROJECTS</span>
          <span>06</span>
        </div>
        <h2 id="projects-heading" className="uppercase text-4xl font-semibold">
          case study
        </h2>
      </div>

      <article className="bg-secondary h-screen grid grid-cols-2 overflow-hidden">
        <div className="h-full overflow-hidden relative">
          <Image
            height={979}
            width={864}
            src="/images/project.jpg"
            alt="DIRASAH project showcase - academic platform interface"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between pt-22 px-6 pb-8">
          <div className="space-y-20">
            {/* Project Navigation */}
            <nav aria-label="Project navigation">
              <div className="flex gap-5">
                <LiquidButton
                  className="rounded-full [--liquid-button-background-color:var(--color-primary)] text-white"
                  size="icon"
                  aria-label="View project 1"
                >
                  1
                </LiquidButton>
                <LiquidButton
                  className="rounded-full"
                  size="icon"
                  aria-label="View project 2"
                >
                  2
                </LiquidButton>
                <LiquidButton
                  className="rounded-full"
                  size="icon"
                  aria-label="View project 3"
                >
                  3
                </LiquidButton>
              </div>
            </nav>

            {/* Project Title */}
            <div className="space-y-2">
              <h3 className="text-4xl font-semibold">DIRASAH</h3>
              <button
                className="py-2 px-4 text-sm uppercase flex justify-center gap-2 bg-gray-300"
                aria-label="View DIRASAH project details"
              >
                View details <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h4 className="font-semibold">DIRASAH</h4>
            <p className="text-justify text-gray-500">
              Dirasah is a private academic platform dedicated to fostering
              knowledge, growth, and collaboration. It enables focused
              discussions, resource sharing, and personalized learning paths —
              empowering learners and scholars to grow together in a secure,
              meaningful environment.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectsSection;

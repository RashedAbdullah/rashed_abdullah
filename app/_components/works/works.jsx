import ProjectCard from "@/app/projects/_components/project-card";
import { getProjects } from "@/controllers/projects";
import jamiatullatif from "@/public/jamiatullatif.jpg";
import Image from "next/image";
import arrow from "@/public/arrowbottom.svg";

export default async function Works() {
  const projects = await getProjects();

  return (
    <div
      id="works"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-10 md:py-16 lg:py-20 gap-6"
    >
      {/* Left sidebar (Title + Year) */}
      <div className="col-span-1 flex flex-col gap-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4">
          <Image src={arrow} alt="Arrow" />
          <div className="text-white text-xl font-medium leading-loose">
            Works
          </div>
        </div>
        <div className="text-neutral-400 text-xl font-medium leading-loose">
          2022-{new Date().getFullYear()}
        </div>
      </div>

      {/* Project Block 1 */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 text-neutral-400 text-xl font-medium leading-loose">
        (01)
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 mb-10 lg:mb-[120px]">
        <div className="flex flex-col gap-4">
          <Image className="w-full" src={jamiatullatif} alt="Project image" />
          <div className="pb-4 border-b border-neutral-700 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="text-white text-2xl sm:text-3xl font-medium leading-10">
              Sihabul Khair
            </div>
            <div className="text-neutral-400 text-base sm:text-xl font-medium leading-loose mt-2 sm:mt-0">
              <a
                target="_blank"
                href="#"
                className="text-white underline underline-offset-4"
              >
                Github
              </a>{" "}
              /{" "}
              <a
                target="_blank"
                href="#"
                className="text-white underline underline-offset-4"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Block 2 (optional: remove if duplicate) */}
      <div className="hidden lg:block"></div>
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 text-neutral-400 text-xl font-medium leading-loose">
        (02)
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 mb-10">
        <div className="flex flex-col gap-4">
          <Image className="w-full" src={jamiatullatif} alt="Project image" />
          <div className="pb-4 border-b border-neutral-700 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="text-white text-2xl sm:text-3xl font-medium leading-10">
              Sihabul Khair
            </div>
            <div className="text-neutral-400 text-base sm:text-xl font-medium leading-loose mt-2 sm:mt-0">
              Github / Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
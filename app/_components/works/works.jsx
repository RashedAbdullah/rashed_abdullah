import ProjectCard from "@/app/projects/_components/project-card";
import { getProjects } from "@/controllers/projects";
import jamiatullatif from "@/public/jamiatullatif.jpg";
import Image from "next/image";
import arrow from "@/public/arrowbottom.svg";

export default async function Works() {
  const projects = await getProjects();
  return (
    <div id="works" className="grid grid-cols-6">
      <div className="col-span-1 inline-flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch inline-flex justify-start items-center gap-4">
          <Image src={arrow} alt="" />
          <div className="flex-1 justify-start text-white text-xl font-medium leading-loose">
            Works
          </div>
        </div>
        <div className="self-stretch justify-start text-neutral-400 text-xl font-medium leading-loose">
          2022-{new Date().getFullYear()}
        </div>
      </div>
      <>
        <div className="col-span-1 justify-start text-neutral-400 text-xl font-medium leading-loose">
          (01)
        </div>
        <div className="col-span-4 mb-10">
          <div className="flex-1 inline-flex flex-col justify-center items-end w-full gap-4">
            <Image className="w-full" src={jamiatullatif} alt="" />
            <div className="self-stretch pb-4 border-b-[0.80px] border-neutral-700 inline-flex justify-between items-center">
              <div className="justify-start text-white text-3xl font-medium leading-10">
                Sihabul Khair
              </div>
              <div className="justify-start text-neutral-400 text-xl font-medium leading-loose">
                <a target="_blank" href="" className="text-blue-500 underline">
                  Github
                </a>{" "}
                /{" "}
                <a target="_blank" href="" className="text-blue-500 underline">
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div></div>
        <div className="col-span-1 justify-start text-neutral-400 text-xl font-medium leading-loose">
          (01)
        </div>
        <div className="col-span-4 mb-10">
          <div className="flex-1 inline-flex flex-col justify-center items-end w-full gap-4">
            <Image className="w-full" src={jamiatullatif} alt="" />
            <div className="self-stretch pb-4 border-b-[0.80px] border-neutral-700 inline-flex justify-between items-center">
              <div className="justify-start text-white text-3xl font-medium leading-10">
                Sihabul Khair
              </div>
              <div className="justify-start text-neutral-400 text-xl font-medium leading-loose">
                Github / Live
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import ProjectSchemaScript from "@/meta/project-schema-script";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group block p-2 h-full w-full">
      <ProjectSchemaScript project={project} />
      <span className="absolute inset-0 h-full w-full bg-slate-500 dark:bg-neutral-400 block rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

      <div className="rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-lightBlack bg-slate-400 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-colors duration-300">
        <div className="relative z-50">
          <div className="p-4">
            <h4 className="text-slate-900 dark:text-zinc-100 text-xl md:text-2xl font-bold tracking-wide my-2">
              {project?.title}
            </h4>
            <Image
              src={
                project?.image
                  ? project?.image
                  : "https://i.ibb.co.com/kHSHKLx/code-image.webp"
              }
              alt={project?.title}
              height={400}
              width={500}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <p className="mt-8 text-slate-800 dark:text-white tracking-wide leading-relaxed text-sm">
              {project?.description?.slice(0, 120) + "..."}
            </p>
            <a
              target="_blank"
              href={project.link}
              className="block text-end mt-2"
            >
              <Button>Details</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

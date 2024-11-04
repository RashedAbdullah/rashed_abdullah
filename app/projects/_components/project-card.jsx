import ProjectSchemaScript from "@/meta/project-schema-script";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group block p-4 h-full w-full transition-transform">
      <ProjectSchemaScript project={project} />

      <div className="rounded-2xl h-full w-full p-4 overflow-hidden backdrop-blur-lg shadow-sm border border-gray-200 dark:border-gray-800 group-hover:shadow-lg relative z-20 flex flex-col justify-between transition-colors duration-300">
        <div className="relative z-50 flex-1">
          <div className="p-4 space-y-4">
            {/* Category Display */}
            {project?.category && (
              <span className="inline-block bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded-full">
                {project.category}
              </span>
            )}

            {/* Title */}
            <h4 className="text-gray-900 dark:text-zinc-100 text-xl md:text-2xl font-semibold tracking-wide my-2">
              {project?.title}
            </h4>

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={
                  project?.image
                    ? project?.image
                    : "https://i.ibb.co.com/kHSHKLx/code-image.webp"
                }
                alt={project?.title}
                height={300}
                width={500}
                className="transition-transform duration-300 group-hover:scale-110 w-full h-auto object-cover"
              />
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed text-sm md:text-base">
              {project?.description}
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-4 flex justify-between space-x-4 border-t border-gray-300 pt-3">
          {project.link && (
            <a
              target="_blank"
              href={project.link}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition flex items-center gap-1"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              target="_blank"
              href={project.live}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition flex items-center gap-1"
              rel="noopener noreferrer"
            >
              <CgWebsite />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

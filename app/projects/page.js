import { projects } from "@/data/projects";
import ProjectCard from "./_components/project-card";
import { getProjects } from "@/controllers/projects";
import Ads from "@/components/ads";

const ProjectPage = async () => {
  const projects = await getProjects();
  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <Ads />
    </div>
  );
};

export default ProjectPage;

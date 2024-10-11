import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/data/projects";

const ProjectPage = () => {
  return (
    <div className="container min-h-screen">
      <HoverEffect items={projects} />
    </div>
  );
};

export default ProjectPage;

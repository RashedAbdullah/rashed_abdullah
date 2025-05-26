import ProjectCard from "./_components/project-card";
import { MotionDiv } from "@/components/motion-div";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projects.json";

const ProjectPage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <MotionDiv
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="outline"
            className="mb-4 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200 dark:border-blue-800"
          >
            Portfolio
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            My Creative Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Showcasing innovative solutions and beautiful designs that bring
            ideas to life
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

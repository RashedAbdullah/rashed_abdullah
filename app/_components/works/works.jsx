import { Icons } from "@/components/icons";
import { MotionDiv } from "@/components/motion-div";
import { getProjects } from "@/controllers/projects";
import ProjectSchemaScript from "@/meta/project-schema-script";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Works() {
  const projects = await getProjects();

  return (
    <section
      id="works"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container">
        {/* Animated Header Section */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <ProjectSchemaScript project={project} />

              <Card className="h-full group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/30">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project?.image || "/project-placeholder.jpg"}
                    alt={project?.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project?.category && (
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300"
                      >
                        {project.category}
                      </Badge>
                    )}
                    {project?.tags?.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground line-clamp-1">
                    {project?.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project?.shortDescription || project?.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project?.technologies?.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3 pt-4 border-t border-border/50">
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" className="gap-2" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.externalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* View More Button */}
        <MotionDiv
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" className="rounded-full px-8">
            View All Projects
            <Icons.arrowRight className="ml-2 h-4 w-4" />
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}

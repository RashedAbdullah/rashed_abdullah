import { MotionDiv } from "@/components/motion-div";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/app/projects/_components/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import projects from "@/data/projects.json";

export default function Works() {
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

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(-3).map((project, idx) => (
            <ProjectCard key={idx} project={project} />
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
          <MotionDiv
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/projects"
              className={cn(
                "relative inline-flex items-center justify-center",
                "rounded-full px-8 py-3 text-sm font-medium",
                "border border-primary/30 hover:border-primary/50",
                "bg-background/80 backdrop-blur-sm",
                "text-primary hover:text-primary/90",
                "shadow-sm hover:shadow-md",
                "transition-all duration-300 ease-in-out",
                "overflow-hidden group"
              )}
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              {/* Animated border gradient */}
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/20 transition-all duration-500 -z-20" />
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(125,211,252,0)] group-hover:shadow-[inset_0_0_12px_rgba(125,211,252,0.2)] transition-shadow duration-500" />
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-black dark:text-white" />
              {/* Sparkle effect */}
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

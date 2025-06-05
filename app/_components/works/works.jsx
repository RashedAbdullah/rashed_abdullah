import projects from "@/data/projects.json";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Works() {
  return <HeroParallax products={projects} />;
}

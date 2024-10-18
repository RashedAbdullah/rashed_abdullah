import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {projects.map((project, ind) => (
          <CarouselItem key={ind} className="pl-1 md:basis-1/2 lg:basis-1/5 ">
            <Card className="group relative transition-all bg-slate-200 dark:bg-slate-800 mx-1 duration-300 transform hover:-translate-y-2 hover:shadow-xl  border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={"https://i.ibb.co.com/kHSHKLx/code-image.webp"}
                  alt={project?.title}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  target="_blank"
                  href={project?.link}
                  className="mt-4 block text-end"
                >
                  <Button>View Project</Button>
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex justify-center items-center" />
      <CarouselNext className="hidden md:flex justify-center items-center" />
    </Carousel>
  );
}

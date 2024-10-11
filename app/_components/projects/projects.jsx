"use client";

import Autoplay from "embla-carousel-autoplay";
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

export default function Projects() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {projects.map((project, ind) => (
          <CarouselItem key={ind} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center lg:p-6">
                <Link target="_blank" href={project?.link} className="lg:p-2">
                  <div>
                    <h2 className="text-2xl pb-3">{project.title}</h2>
                    <p className="lg:text-sm">{project.description}</p>
                  </div>
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

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import ServiceCard from "@/components/services/service-card";

const ServicesSection = () => {
  return (
    <section
      className="border-y-[0.1px] relative mb-8"
      aria-labelledby="services-heading"
    >
      <span className="absolute -top-3.5 -left-[5px]" aria-hidden="true">
        +
      </span>
      <span className="absolute -bottom-2.5 -left-[5px]" aria-hidden="true">
        +
      </span>
      <span className="absolute -bottom-2.5 -right-[5px]" aria-hidden="true">
        +
      </span>

      <div className="grid grid-cols-4">
        <div className="p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-medium">
              <span className="h-3 w-3 bg-primary" aria-hidden="true" />
              <span>SERVICES</span>
              <span>03</span>
            </div>
            <div className="flex">
              <div>
                <h2
                  id="services-heading"
                  className="uppercase text-4xl font-semibold"
                >
                  my services
                </h2>
                <button
                  className="flex justify-between items-center w-full py-2 px-3 bg-secondary font-sf-mono text-sm mt-4 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Get a quote for services"
                >
                  GET A QUOTE <ArrowUpRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-20">
            <div
              className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
              aria-label="Client avatars"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Client avatar"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="Client avatar"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="Client avatar"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <p className="uppercase text-gray-500 text-xs">
              How I change the way your business works
            </p>
          </div>
        </div>

        {/* Services List */}
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

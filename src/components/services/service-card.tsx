import { services } from "@/data/services";
import React from "react";

const ServiceCard = ({
  service,
  index,
}: {
  service: {
    id: number;
    title: string;
    subtitle: string;
    quetes: string[];
  };
  index: number;
  key: number;
}) => {
  return (
    <article key={service.id} className="">
      <div
        className={`px-8 py-4 border-l text-sm bg-secondary flex justify-between items-center ${
          index === services.length - 1 && "border-r"
        }`}
      >
        <h3 className="font-medium">{service.title}</h3>
        <div className="flex items-center gap-1" aria-hidden="true">
          {[...Array(service.id)].map((_, i) => (
            <span key={i} className="h-3 w-3 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col justify-between gap-100">
        <h4 className="text-xl font-medium">{service.subtitle}</h4>
        <ul aria-label={`${service.title} features`}>
          {service.quetes.map((qoute, index) => (
            <li key={index} className="text-xs flex gap-1 mt-2">
              <span>0{index + 1}</span>
              <span aria-hidden="true">/</span>
              <span className="text-gray-500 leading-relaxed">{qoute}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ServiceCard;

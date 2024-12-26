import React from "react";
import Link from "next/link";
import { getEngToBn } from "@/utils/getEngToAr";

const LearningResourcesPage = () => {
  const resources = [
    {
      title: "أسئلة هداية النحو",
      desc: "",
      path: "/resources/hedayetunnahu",
    },
    {
      title: "الطريق إلى الإنشاء",
      desc: "",
      path: "/resources/insha",
    },
    {
      title: "JavaScript Essentials",
      desc: "",
      path: "/resources/js-essentials",
    },
    {
      title: "CSS Tricks",
      desc: "",
      path: "/resources/css-tricks",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-white">
          Explore Learning Resources
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {resources.map((resource, ind) => (
            <li key={ind} className="list-none">
              <Link
                href={resource.path}
                className="block bg-white shadow-lg rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-xl font-bold">
                      {getEngToBn(ind + 1)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {resource.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {resource.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearningResourcesPage;

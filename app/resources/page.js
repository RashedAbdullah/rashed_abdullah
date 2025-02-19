import React from "react";
import Link from "next/link";
import { getEngToBn } from "@/utils/getEngToAr";

const LearningResourcesPage = () => {
  const resources = [
    {
      title: "أسئلة هداية النحو",
      desc: "النحو العربي بأسلوب سهل ومبسط",
      path: "/resources/hedayetunnahu",
    },
    {
      title: "الطريق إلى الإنشاء",
      desc: "دليل متكامل لتعلم الإنشاء باللغة العربية",
      path: "/resources/insha",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-zinc-100">
        ✨ পাঠ উপকরণ
      </h1>

      <div className="space-y-8">
        {resources.map((resource, ind) => (
          <div
            key={ind}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold py-1 px-4 rounded-full shadow">
                {getEngToBn(ind + 1)}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
              {resource.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-center">
              {resource.desc}
            </p>
            <div className="mt-4 text-center">
              <Link
                href={resource.path}
                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-all"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningResourcesPage;

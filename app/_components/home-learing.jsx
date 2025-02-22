import React from "react";
import Link from "next/link";
import { getEngToBn } from "@/utils/getEngToAr";
import { Tiro_Bangla } from "next/font/google";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const HomeLearningResources = () => {
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
    {
      title: "JavaScript Essentials",
      desc: "শিখুন জাভাস্ক্রিপ্টের গুরুত্বপূর্ণ কনসেপ্ট",
      path: "/resources/js-essentials",
    },
  ];

  return (
    <div className={`${tiro.className} container mx-auto px-4 py-12`}>
      <h2 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-zinc-100">
        পাঠ উপকরণ 💡
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resources.map((resource, ind) => (
          <div
            key={ind}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-center mb-3">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold py-1 px-4 rounded-full shadow">
                {getEngToBn(ind + 1)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
              {resource.title}
            </h3>
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

      <div className="mt-8 text-center">
        <Link
          href="/resources"
          className="inline-block px-6 py-2 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-900 transition-all"
        >
          সব দেখুন →
        </Link>
      </div>
    </div>
  );
};

export default HomeLearningResources;

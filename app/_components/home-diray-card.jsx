"use client";

import { useState } from "react";

const HomeDiaryCard = ({ diary }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <span className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 text-sm font-semibold py-1 px-4 rounded-full shadow">
          {new Date(diary.date).toLocaleDateString("bn", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          ইং
        </span>
      </div>
      <p
        className="text-gray-800 dark:text-gray-300 text-[15px] leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: expanded ? diary.text : diary.text.slice(0, 150) + "...",
        }}
      />

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-blue-600 dark:text-blue-400 font-semibold hover:underline focus:outline-none"
      >
        {expanded ? "সংক্ষেপ দেখুন" : "আরও পড়ুন"}
      </button>
    </div>
  );
};

export default HomeDiaryCard;

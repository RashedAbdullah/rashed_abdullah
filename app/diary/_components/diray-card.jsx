"use client";

import { useState } from "react";

const DiaryCard = ({ diary }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold py-1 px-4 rounded-full shadow">
          {new Date(diary.date).toLocaleDateString("bn", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          ইং
        </span>
      </div>
      <div
        className="text-gray-800 dark:text-gray-200 text-base leading-relaxed"
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

export default DiaryCard;

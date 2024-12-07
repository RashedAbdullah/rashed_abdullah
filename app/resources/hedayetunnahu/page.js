import { getHedayetunnahuQuestion } from "@/controllers/hedayetunnahu";
import React from "react";
import { Aref_Ruqaa } from "next/font/google";
import { getEngToAr } from "@/utils/getEngToAr";

const aref = Aref_Ruqaa({ subsets: ["arabic"], weight: "400" });

const HedayetunnahuPage = async () => {
  const questionsData = await getHedayetunnahuQuestion();

  return (
    <div
      dir="rtl"
      className={`min-h-screen p-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 ${aref.className}`}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          أسئلة هداية النحو
        </h1>
        {questionsData.map((item) => (
          <div
            key={item._id}
            className="p-6 mb-6 border shadow-lg rounded-lg transition-shadow duration-300
                       bg-white text-gray-800 border-gray-300
                       dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              {item.chapter}
            </h2>
            <ul className="space-y-4">
              {item.questions.map((question, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-md shadow-md border
                             bg-gray-50 text-gray-700 border-gray-200
                             hover:bg-gray-100 hover:shadow-lg
                             dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600
                             dark:hover:bg-gray-600"
                >
                  <div className="flex-shrink-0 font-bold text-lg text-gray-600 dark:text-gray-400">
                    {getEngToAr(index + 1)}.{" "}
                  </div>
                  <p className="leading-relaxed text-lg">{question}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HedayetunnahuPage;

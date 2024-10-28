import { getQuranByJuz } from "@/data/fetch-quran-by-juz";
import { getEngToAr } from "@/utils/getEngToAr";
import Link from "next/link";
import React from "react";
import ToggleSurahJuz from "../_components/toggle-surah-jux";

const QuranByJuzPage = async () => {
  const juzArray = Array.from({ length: 30 }, (_, index) => index + 1);

  const juzData = await Promise.all(juzArray.map((juz) => getQuranByJuz(juz)));

  return (
    <>
      <ToggleSurahJuz />
      <div className="p-8 min-h-screen flex flex-col items-center container">
        <h1 className="text-4xl font-bold text-center mb-10 text-indigo-800 dark:text-white">
          Quran by Juz
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {juzData.map((juz, index) => (
            <div
              key={index}
              className="flex flex-col mb-6 p-6 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-900 transition-transform duration-300 ease-in-out"
            >
              <Link
                href={`/quran/juz/${index + 1}/translation`}
                className="flex justify-between mb-4 group border-b hover:border-indigo-600"
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 group-hover:text-indigo-600 transition-all duration-300">
                  Juz {index + 1}
                </h2>
                <h2
                  dir="rtl"
                  className="text-xl font-semibold text-gray-800 dark:text-gray-300 ayah-font group-hover:text-indigo-600 transition-all duration-300"
                >
                  الجزء {getEngToAr(index + 1)}
                </h2>
              </Link>
              <div className="flex-grow">
                {Object.values(juz.data.surahs).map((surah) => (
                  <Link
                    href={`/quran/surah/${surah.number}/translation`}
                    key={surah.number}
                  >
                    <div className="mb-4 pb-2 bg-white p-4 rounded dark:bg-gray-800 transition-all duration-300 border hover:border-indigo-600 group border-transparent">
                      <h3 className="text-lg text-slate-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                        {surah.englishName}
                      </h3>
                      <p className="text-right font-arabic text-2xl text-slate-800 dark:text-gray-300 ayah-font group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                        {surah.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Revelation Type: {surah.revelationType} | Ayahs:{" "}
                        {surah.numberOfAyahs}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuranByJuzPage;

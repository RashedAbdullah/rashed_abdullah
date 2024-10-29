import Link from "next/link";
import { surahNames } from "@/data/surah-names";
import ToggleSurahJuz from "../_components/toggle-surah-jux";

const QuranBySurahPage = () => {
  return (
    <>
      <ToggleSurahJuz />
      <div className="p-8  flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-800 dark:text-cyan-300">
          Surah List
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl"
          dir="rtl"
        >
          {surahNames.map((surah) => (
            <Link
              key={surah.number}
              href={`/quran/surah/${surah.number}/translation`}
              className="p-6 border rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700"
            >
              <div className="text-lg font-medium text-gray-600 dark:text-gray-300 text-center mb-2">
                {surah.englishName}
              </div>
              <div
                className="text-2xl font-extrabold text-indigo-700 dark:text-cyan-300 mt-1 text-center mb-3 ayah-font"
                dir="rtl"
              >
                سورة {surah.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Total Ayahs:{" "}
                <span className="font-medium">{surah.ayahCount}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuranBySurahPage;

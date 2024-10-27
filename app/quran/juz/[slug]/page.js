import { getQuranByJuz } from "@/data/fetch-quran-by-juz";
import React from "react";

const GetSingleJuzPage = async ({ params: { slug } }) => {
  const singleJuz = await getQuranByJuz(slug);
  const ayahs = singleJuz.data.ayahs; // Assuming this is the structure returned by your API

  return (
    <div className="p-8 min-h-screen flex flex-col items-center container">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-800 dark:text-white">
        Juz {slug} Ayahs
      </h1>
      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-center"
      >
        {ayahs.map((ayah) => (
          <div
            key={ayah.number}
            className="mb-6 p-6 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-200">
              Ayah {ayah.numberInSurah} from Surah {ayah.surah.englishName}
            </h2>
            <h3 className="text-lg text-slate-700 dark:text-gray-300 ayah-font">
              {ayah.surah.name} (Sura {ayah.surah.number})
            </h3>
            <p className="text-right font-arabic text-2xl text-slate-800 mb-4 dark:text-gray-100 ayah-font">
              {ayah.text}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Revelation Type: {ayah.surah.revelationType} | Ayahs in Surah:{" "}
              {ayah.surah.numberOfAyahs}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Juz: {ayah.juz} | Manzil: {ayah.manzil} | Page: {ayah.page} |
              Ruku: {ayah.ruku}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetSingleJuzPage;

import { getEngToAr } from "@/utils/getEngToAr";
import basmalah from "@/public/basmalah.png";
import Image from "next/image";
const SingleSurahPage = ({ surahData, translationData }) => {
  return (
    <div className="px-8 py-10 dark:text-white min-h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-auto">
        {/* Surah Header */}
        <h1 className="text-3xl mb-3 text-center amiriQuran font-bold">
          {surahData.name}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 text-center">
          {surahData.englishName} - {surahData.englishNameTranslation}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
          Revelation Type: {surahData.revelationType} | Ayahs:{" "}
          {surahData.numberOfAyahs}
        </p>

        <div className="flex justify-center">
          <Image src={basmalah} alt="Bismillahir rahim" width={300} />
        </div>

        {/* Ayahs Content */}
        <div className="space-y-6">
          {surahData.ayahs.map((ayah, index) => {
            const ayahText =
              index === 0
                ? ayah.text.replace(
                    "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ ",
                    ""
                  )
                : ayah.text;
            const translationText = translationData[index]?.text;

            return (
              <div
                key={ayah.number}
                className="p-6 bg-white dark:bg-deepBlack rounded-md shadow-md ayah-font"
              >
                <p
                  dir="rtl"
                  className="text-right text-xl md:text-2xl font-arabic leading-relaxed md:leading-loose"
                >
                  {ayahText}{" "}
                  <span className="bg-gray-200 dark:text-slate-950 h-8 w-8 text-lg inline-block rounded-full text-center leading-8 ml-2">
                    {getEngToAr(ayah.numberInSurah)}
                  </span>
                </p>
                {/* Translation Text */}
                <p className="mt-4 text-base text-gray-700 dark:text-gray-300 italic text-center">
                  {translationText}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                  Ayah {ayah.numberInSurah} | Juz {ayah.juz} | Page {ayah.page}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleSurahPage;

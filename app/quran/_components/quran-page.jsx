import { getEngToAr, getEngToBn } from "@/utils/getEngToAr";
import basmalah from "@/public/basmalah.png";
import Image from "next/image";
import { bnSurahList } from "@/utils/bn-surah-list";

const SingleSurahPage = ({ surahData, translationData }) => {
  return (
    <div className="px-8 py-10 dark:text-white min-h-screen flex justify-center items-center relative">
      <div className="max-w-2xl mx-auto">
        {/* Surah Header */}
        <h1 className="text-3xl mb-3 text-center amiriQuran font-bold">
          {surahData.name}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 text-center">
          {bnSurahList[surahData.number - 1].name} -{" "}
          {surahData.englishNameTranslation}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
          অবতীর্ণ: {surahData.revelationType === "Medinan" ? "মাদানী" : "মক্কী"}{" "}
          | আয়াত: {getEngToBn(surahData.numberOfAyahs)}
        </p>

        <div className="flex justify-center mb-10">
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
                  আয়াত {getEngToBn(ayah.numberInSurah)} | পৃষ্ঠা
                  {getEngToBn(ayah.page)} | পারা {getEngToBn(ayah.juz)}
                </p>

                <audio controls className="w-full mt-3">
                  <source
                    src={`https://cdn.islamic.network/quran/audio/64/ar.alafasy/${ayah.number}.mp3`}
                    type="audio/mpeg"
                  />
                </audio>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleSurahPage;

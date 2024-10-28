import { getQuranByJuz } from "@/data/fetch-quran-by-juz";
import { getEngToAr } from "@/utils/getEngToAr";
import basmalah from "@/public/basmalah.png";
import Image from "next/image";

const QuranJuzByTranslation = async ({ params: { slug } }) => {
  const singleJuz = await getQuranByJuz(slug);
  const ayahs = singleJuz.data.ayahs;

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-4">
        <div className="px-8 py-10 dark:text-white min-h-screen flex justify-center items-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl mb-3 text-center amiriQuran font-bold">
              {/* {singleJuz.data.surah.name} */}
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 text-center">
              {/* {singleJuz.data.surah.englishName} -{" "}
              {singleJuz.data.surah.englishNameTranslation} */}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
              {/* Revelation Type: {singleJuz.data.surah.revelationType} | Ayahs:{" "}
              {singleJuz.data.surah.numberOfAyahs} */}
            </p>

            <div className="space-y-6">
              {ayahs.map((ayah) => {
                const ayahText = ayah.text.startsWith(
                  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
                )
                  ? ayah.text.replace(
                      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                      ""
                    )
                  : ayah.text;

                return (
                  <>
                    {ayah.text.startsWith(
                      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
                    ) && (
                      <div className="py-5 bg-white dark:bg-deepBlack shadow-md ayah-font">
                        <h3 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 text-center ayah-font ">
                          {ayah.surah.name}
                        </h3>
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 text-center ayah-font ">
                          {ayah.surah.englishName} -
                          {ayah.surah.englishNameTranslation}
                        </h2>
                        <div className="flex justify-center">
                          <Image
                            src={basmalah}
                            alt="Bismillahir rahim"
                            width={300}
                          />
                        </div>
                      </div>
                    )}
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

                      <p className="mt-4 text-base text-gray-700 dark:text-gray-300 italic text-center">
                        Translation here{" "}
                        {/* Add translation text if available */}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                        {ayah.surah.englishName} | Ayah {ayah.numberInSurah} |
                        Juz {ayah.juz} | Page {ayah.page}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranJuzByTranslation;

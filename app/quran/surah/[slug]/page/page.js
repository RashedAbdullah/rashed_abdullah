import { getSingleSurah } from "@/data/fetch-quran-by-surah";
import { getEngToAr } from "@/utils/getEngToAr";

const SurahByPagePage = async ({ params: { slug } }) => {
  const singleSurah = await getSingleSurah(slug);
  const { surah } = singleSurah;

  const ayahsByPage = surah.ayahs.reduce((pages, ayah) => {
    if (!pages[ayah.page]) pages[ayah.page] = [];
    pages[ayah.page].push(ayah);
    return pages;
  }, {});

  return (
    <div className="min-h-screen p-6 container lg:w-[800px]">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-900 dark:text-teal-200">
        {surah.englishName} - {surah.englishNameTranslation}
      </h1>
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-300">
        Surah {surah.number} | Total Ayahs: {surah.numberOfAyahs}
      </h2>

      {/* Display Ayahs grouped by page */}
      <div className="space-y-12">
        {Object.entries(ayahsByPage).map(([page, ayahs]) => (
          <div
            key={page}
            className="mb-12 p-4 border border-teal-200 dark:border-teal-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform duration-200 hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-6 text-teal-700 dark:text-teal-300">
              Page {page}
            </h3>
            <div
              dir="rtl"
              className="rounded-md py-8 px-4 lg:text-3xl text-2xl font-arabic text-gray-800 dark:text-gray-200 ayah-font leading-relaxed"
            >
              {ayahs.map((ayah, index) => {
                const ayahText =
                  index === 0
                    ? ayah.text.replace(
                        "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ ",
                        ""
                      )
                    : ayah.text;
                return (
                  <div key={ayah.number} className="">
                    {ayahText}
                    <span className="ml-2 bg-teal-200 dark:bg-teal-500 text-slate-900 dark:text-slate-950 h-6 w-6 text-lg inline-flex items-center justify-center rounded-full mx-1">
                      {getEngToAr(ayah.numberInSurah)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahByPagePage;

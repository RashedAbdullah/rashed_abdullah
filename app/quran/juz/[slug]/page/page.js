import { getQuranByJuz } from "@/data/fetch-quran-by-juz";
import { getEngToAr } from "@/utils/getEngToAr";
import Image from "next/image";
import basmalah from "@/public/basmalah.png";

const QuranJuzByPage = async props => {
  const params = await props.params;

  const {
    slug
  } = params;

  const singleJuz = await getQuranByJuz(slug);
  const { juz } = singleJuz;

  const ayahsByPage = juz.reduce((pages, ayah) => {
    if (!pages[ayah.page]) pages[ayah.page] = [];
    pages[ayah.page].push(ayah);
    return pages;
  }, {});

  return (
    <div className="p-8 min-h-screen flex flex-col items-center container">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-800 dark:text-white">
        Juz {slug} Ayahs
      </h1>

      <div className="space-y-12">
        {Object.entries(ayahsByPage).map(([page, ayahs]) => {
          return (
            <div
              key={page}
              className="mb-12 p-4 border border-teal-200 dark:border-teal-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform duration-200 lg:w-[800px]"
            >
              <div className="flex justify-between items-center border-b">
                <h3 className="text-lg font-semibold mb-6 text-teal-700 dark:text-teal-300 ayah-font">
                  {ayahs[0].surah.name}
                </h3>
                <h3 className="text-lg font-semibold mb-6 text-teal-700 dark:text-teal-300">
                  {page}
                </h3>
                <h3 className="text-lg font-semibold mb-6 text-teal-700 dark:text-teal-300">
                  {ayahs[0].surah.englishName}
                </h3>
              </div>
              <div
                dir="rtl"
                className="rounded-md py-4 px-4 lg:text-3xl text-2xl font-arabic text-gray-800 dark:text-gray-200 ayah-font leading-relaxed"
              >
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
                    <div key={ayah.number}>
                      {ayah.text.startsWith(
                        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ "
                      ) && (
                        <div className="py-3 mb-5 border-y flex flex-col justify-between items-center gap-4">
                          <h2 className="text-2xl">{ayah.surah.name}</h2>
                          <div className="flex justify-center">
                            <Image
                              src={basmalah}
                              alt="Bismillahir rahim"
                              width={300}
                            />
                          </div>
                        </div>
                      )}
                      <p className="leading-normal">
                        {ayahText}
                        <span className="ml-2 bg-gray-100 dark:bg-teal-300 dark:text-slate-950 text-black h-6 w-6 text-lg inline-flex items-center justify-center rounded-full mx-1">
                          {getEngToAr(ayah.numberInSurah)}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuranJuzByPage;

import { getSingleSurah } from "@/data/fetch-quran-by-surah";
import { getEngToAr, getEngToBn } from "@/utils/getEngToAr";
import Image from "next/image";
import basmalah from "@/public/basmalah.png";
import { bnSurahList } from "@/utils/bn-surah-list";

export const metadata = {
  title: "Quran Kareem - Surah by Page",
  description:
    "Read and listen to the Surah text and its audio by page. Experience the holy words of the Quran.",
  keywords: "Quran, Surah, Islamic Studies, Surah by Page, Surah Audio",
  openGraph: {
    title: "Quran Kareem - Surah by Page",
    description:
      "Read and listen to the Surah text and its audio by page. Experience the holy words of the Quran.",
    type: "article",
    images: [
      {
        url: "https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
        width: 1200,
        height: 630,
        alt: "Surah Page Thumbnail",
      },
    ],
  },
};

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
        {bnSurahList[surah.number - 1].name} - {surah.englishNameTranslation}
      </h1>
      <h3 className="text-sm font-semibold text-center mb-6 text-gray-800 dark:text-gray-300">
        সুরা নং: {getEngToBn(surah.number)} | আয়াত সংখ্যা:{" "}
        {getEngToBn(surah.numberOfAyahs)}
      </h3>

      <div className="flex justify-center">
        <Image src={basmalah} alt="Bismillahir Rahmanir Rahim" width={300} />
      </div>

      {/* Display Ayahs grouped by page */}
      <section
        className="space-y-12"
        aria-label={`Surah ${surah.englishName} Ayahs by Page`}
      >
        {Object.entries(ayahsByPage).map(([page, ayahs]) => (
          <div
            key={page}
            className="mb-12 p-4 border border-teal-200 dark:border-teal-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform duration-200"
          >
            <header className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-lg font-semibold text-teal-700 dark:text-teal-300 ayah-font">
                পৃষ্ঠা {getEngToBn(page)} - {bnSurahList[surah.number - 1].name}
              </h2>
            </header>
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
                  <p key={ayah.number} className="leading-normal mb-4">
                    {ayahText}
                    <span className="ml-2 bg-gray-100 dark:bg-teal-300 dark:text-slate-950 text-black h-6 w-6 text-lg inline-flex items-center justify-center rounded-full mx-1">
                      {getEngToAr(ayah.numberInSurah)}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        ))}

        {/* Sticky Audio Player */}
        <div className="sticky bottom-5 left-0 right-0 mx-auto mt-10 bg-slate-600 dark:bg-slate-800 p-4 rounded-lg shadow-lg max-w-md text-center">
          <h3 className="text-lg font-semibold text-white mb-2">
            সুরা {bnSurahList[surah?.number - 1].name} শুনুন
          </h3>
          <audio
            controls
            className="w-full"
            aria-label={`Audio of Surah ${surah.englishName}`}
          >
            <source
              src={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surah?.number}.mp3`}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
    </div>
  );
};

export default SurahByPagePage;

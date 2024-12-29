import Link from "next/link";
import { surahNames } from "@/data/surah-names";
import ToggleSurahJuz from "../_components/toggle-surah-jux";
import { bnSurahList } from "@/utils/bn-surah-list";
import { getEngToBn } from "@/utils/getEngToAr";

export const metadata = {
  title: "Quran Kareem - Surah List",
  description:
    "Browse the complete list of Surahs in the Holy Quran. Access translations and details for each Surah.",
  keywords: "Quran, Surah List, Islamic Studies, Quran Kareem, Surah Details",
  openGraph: {
    title: "Quran Kareem - Surah List",
    description:
      "Browse the complete list of Surahs in the Holy Quran. Access translations and details for each Surah.",
    type: "website",
    url: "http://localhost:3000/quran/surah",
    images: [
      {
        url: "https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
        width: 1200,
        height: 630,
        alt: "Surah List Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Kareem - Surah List",
    description: "Browse the complete list of Surahs in the Holy Quran.",
    image: "https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
  },
};

const QuranBySurahPage = () => {
  return (
    <>
      <ToggleSurahJuz />
      <main className="p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-800 dark:text-cyan-300">
          সুরা সমূহ
        </h1>
        <section
          aria-label="List of Quran Surahs"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl"
          dir="rtl"
        >
          {surahNames.map((surah) => (
            <Link
              key={surah.number}
              href={`/quran/surah/${surah.number}/translation`}
              aria-label={`Surah ${surah.name} - ${surah.englishName}`}
              className="p-6 border rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700"
            >
              <div className="text-lg font-medium text-gray-600 dark:text-gray-300 text-center mb-2">
                {bnSurahList[surah.number - 1]?.name}
              </div>
              <div
                className="text-2xl font-extrabold text-indigo-700 dark:text-cyan-300 mt-1 text-center mb-3 ayah-font"
                dir="rtl"
              >
                سورة {surah.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                আয়াত সংখ্যা:{" "}
                <span className="font-medium">
                  {getEngToBn(surah.ayahCount)}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default QuranBySurahPage;

import { getSingleSurah } from "@/data/fetch-quran-by-surah";
import SingleSurahPage from "../../_components/quran-page";

const QuranFetcher = async ({ params: { slug } }) => {
  const singleSurah = await getSingleSurah(slug);
  const { surah, transition } = singleSurah;

  return (
    <div className="flex min-h-screen text-slate-900 dark:text-white">
      <div className="flex-1 p-4">
        {surah && transition && (
          <SingleSurahPage
            surahData={surah}
            translationData={transition.ayahs}
          />
        )}
      </div>
    </div>
  );
};

export default QuranFetcher;

import SingleSurahPage from "@/app/quran/_components/quran-page";
import { getSingleSurah } from "@/data/fetch-quran-by-surah";

const QuranFetcher = async ({ params: { slug } }) => {
  const singleSurah = await getSingleSurah(slug);
  const { surah, transition } = singleSurah;

  return (
    <div className="flex min-h-screen">
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

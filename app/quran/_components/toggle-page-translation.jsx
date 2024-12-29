import ActiveSurahJuz from "./active-surah-suz";

const TogglePageAndTranslation = ({ slug, type = "surah" }) => {
  return (
    <nav className="flex justify-center items-center">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <ActiveSurahJuz link={`/quran/${type}/${slug}/page`}>
            তিলাওয়াত
          </ActiveSurahJuz>
          <ActiveSurahJuz link={`/quran/${type}/${slug}/translation`}>
            তরজমা
          </ActiveSurahJuz>
        </div>
      </div>
    </nav>
  );
};

export default TogglePageAndTranslation;

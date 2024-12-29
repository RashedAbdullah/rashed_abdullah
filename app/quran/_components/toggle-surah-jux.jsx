import ActiveSurahJuz from "./active-surah-suz";

const ToggleSurahJuz = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <ActiveSurahJuz link="/quran/surah">সুরা ভিত্তিক</ActiveSurahJuz>
          <ActiveSurahJuz link="/quran/juz">পারা ভিত্তিক</ActiveSurahJuz>
        </div>
      </div>
    </nav>
  );
};

export default ToggleSurahJuz;

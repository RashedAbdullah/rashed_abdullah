import Link from "next/link";
import ActiveSurahJuz from "./_components/active-surah-suz";

const QuranKareemLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <nav className="bg-white dark:bg-gray-800 shadow-md flex justify-center items-center">
        <div className="mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex space-x-4">
            <ActiveSurahJuz link="/quran/surah">Surah</ActiveSurahJuz>
            <ActiveSurahJuz link="/quran/juz">Juz</ActiveSurahJuz>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default QuranKareemLayout;

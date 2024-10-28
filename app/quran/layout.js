import Link from "next/link";
import ActiveSurahJuz from "./_components/active-surah-suz";

const QuranKareemLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      {children}
    </div>
  );
};

export default QuranKareemLayout;

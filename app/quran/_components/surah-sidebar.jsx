"use client";
import { surahNames } from "@/data/surah-names";
import { bnSurahList } from "@/utils/bn-surah-list";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const SidebarSurah = () => {
  const path = useSelectedLayoutSegment();
  return (
    <div className="backdrop-blur-lg dark:text-white w-72 h-[870px] fixed top-20 z-20 left-0 p-6 shadow-lg overflow-y-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">সুরা সমূহ</h2>
      <ul className="space-y-3">
        {surahNames.map((surah) => (
          <li key={surah.number} className="group">
            <Link
              href={`/quran/surah/${surah.number}/${path}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <p className="text-sm dark:text-gray-400 group-hover:text-white">
                {bnSurahList[surah.number - 1].name}
              </p>
              <p className="text-lg font-medium ayah-font group-hover:text-white">
                {surah.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSurah;

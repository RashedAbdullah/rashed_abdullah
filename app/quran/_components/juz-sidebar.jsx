"use client";
import { surahNames } from "@/data/surah-names";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const JuzSidebar = () => {
  const juzArray = Array.from({ length: 30 }, (_, index) => index + 1);
  const path = useSelectedLayoutSegment();

  return (
    <div className="backdrop-blur-lg dark:text-white w-52 h-[870px] fixed top-20 left-0 p-6 shadow-lg overflow-y-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Juz List</h2>
      <ul className="space-y-3">
        {juzArray.map((juz) => (
          <li key={juz} className="group">
            <Link
              href={`/quran/juz/${juz}/${path}`}
              className="flex items-center justify-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <p className="text-sm dark:text-gray-400 group-hover:text-white">
                Juz {juz}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JuzSidebar;

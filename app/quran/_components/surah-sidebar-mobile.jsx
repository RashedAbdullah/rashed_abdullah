"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { surahNames } from "@/data/surah-names";
import { bnSurahList } from "@/utils/bn-surah-list";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { CgMoveRight } from "react-icons/cg";

export function SurahSideBarMobile() {
  const path = useSelectedLayoutSegment();

  return (
    <Sheet>
      <SheetTrigger asChild className="sticky top-24 z-50 lg:hidden">
        <Button variant="outline">
          <CgMoveRight size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="text-center">সুরা সমূহ</SheetTitle>
        </SheetHeader>
        <ul className="space-y-4">
          {surahNames.map((surah) => (
            <li key={surah.name} className="">
              <SheetTrigger asChild>
                <Link
                  href={`/quran/surah/${surah.number}/${path}`}
                  className="flex flex-col hover:bg-slate-200 p-2 border-b rounded-lg transition-colors duration-200"
                >
                  <p className="text-lg font-semibold ayah-font text-black">
                    سورة {surah.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {bnSurahList[surah.number - 1].name}
                  </p>
                </Link>
              </SheetTrigger>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

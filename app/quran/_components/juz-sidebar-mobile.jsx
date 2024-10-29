"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { CgMoveRight } from "react-icons/cg";

export function JuzSideBarMobile() {
  const juzArray = Array.from({ length: 30 }, (_, index) => index + 1);
  const path = useSelectedLayoutSegment();

  return (
    <Sheet>
      <SheetTrigger asChild className="sticky top-24 z-50 lg:hidden">
        <Button variant="outline">
          <CgMoveRight size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-auto w-52">
        <SheetHeader>
          <SheetTitle className="text-center">Surah List</SheetTitle>
        </SheetHeader>
        <ul className="space-y-4">
          {juzArray.map((juz) => (
            <li key={juz} className="">
              <SheetTrigger asChild>
                <Link
                  href={`/quran/juz/${juz}/${path}`}
                  className="flex flex-col items-center dark:text-slate-900 hover:bg-slate-200 p-2 border-b rounded-lg transition-colors duration-200"
                >
                  <p className="text-lg">Juz {juz}</p>
                </Link>
              </SheetTrigger>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Navigations from "./navigations";

import FooterSocial from "./social";
import Link from "next/link";

const MobileNav = async () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="bg-transparent dark:text-white border-transparent hover:bg-transparent"
          variant="outline"
          aria-label="Open mobile navigation"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-lightBlack text-white"
        role="dialog"
        aria-labelledby="sheet-title"
        aria-describedby="sheet-description"
      >
        <SheetHeader>
          <SheetTitle id="sheet-title" className="text-white">
            Rashed Abdullah
          </SheetTitle>
          <SheetDescription id="sheet-description" className="text-slate-300">
            Front-end Developer
          </SheetDescription>
        </SheetHeader>

        <div className="text-center py-4">
          <nav className="py-5">
            <div>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  Home
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/blogs"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  Blogs
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/projects"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  Works
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/diary"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  Diary
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/youtube"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  Youtube
                </Link>
              </SheetClose>
            </div>
          </nav>

          <div className="flex justify-center">
            <FooterSocial />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

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

import FooterSocial from "./social";
import Link from "next/link";
import { auth } from "@/auth";

const MobileNav = async () => {
  const session = await auth();
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
            রাশেদ আব্দুল্লাহ
          </SheetTitle>
          <SheetDescription id="sheet-description" className="text-slate-300">
            শিক্ষক ও প্রোগ্রামার
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
                  হোম
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/quran/surah"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  কুরআন কারীম
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/resources"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  পাঠ উপকরণ
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/blogs"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  ব্লগ
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/projects"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  প্রজেক্ট
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/diary"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  দিনলিপি
                </Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  href="/youtube"
                  className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                >
                  ইউটিউব
                </Link>
              </SheetClose>
            </div>

            {session && (
              <div>
                <SheetClose asChild>
                  <Link
                    href="/dashboard"
                    className="hover:text-aqua w-full lg:inline block p-2 rounded-md hover:bg-deepBlack"
                  >
                    {session.user.name}
                  </Link>
                </SheetClose>
              </div>
            )}
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

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
            <Navigations />
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

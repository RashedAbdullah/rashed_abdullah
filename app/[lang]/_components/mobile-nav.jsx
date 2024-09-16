import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getManageLangs } from "@/manage-langs/manage-langs";
import { Menu } from "lucide-react";
import Navigations from "./navigations";
import LanguageSwitcher from "./language-witcher";
import FooterSocial from "./social";

const MobileNav = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-deepBlack" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="bg-lightBlack text-white">
        <SheetHeader>
          <SheetTitle className="text-white">{langs.name}</SheetTitle>
          <SheetDescription className="text-slate-300">
            {langs.profession}
          </SheetDescription>
        </SheetHeader>

        <div className="text-center py-4">
          <Navigations lang={lang} />
          <LanguageSwitcher lang={lang} />
          <div className="flex justify-center">
            <FooterSocial lang={lang} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

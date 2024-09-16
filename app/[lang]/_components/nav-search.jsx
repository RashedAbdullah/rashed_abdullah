import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getManageLangs } from "@/manage-langs/manage-langs";
import { Search } from "lucide-react";

const NavSearch = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <div className="flex justify-center text-lightBlack">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={`px-2 flex gap-2 ${lang === "ar" ? "pl-14" : "pr-14"}`}
          >
            <Search size={15} />
            <span className="text-gray-500">{langs.search} ...</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-deepBlack">
              {langs.search}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div>
              <Input placeholder={langs.search} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavSearch;

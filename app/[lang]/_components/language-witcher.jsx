"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "bn",
    label: "বাংলা",
  },
  {
    value: "ar",
    label: "العربية",
  },
];

const LanguageSwitcher = ({ lang = "en" }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(lang); // Set default value from lang

  const router = useRouter();
  const handleLangs = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="true"
          className="lg:w-[130px] w-[200px] justify-between"
        >
          {languages.find((language) => language.value === value)?.label || lang}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lg:w-[130px] w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    handleLangs(language.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;

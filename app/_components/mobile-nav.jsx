"use client";

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
import { motion } from "framer-motion";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/diary", name: "Diary" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary/50"
          aria-label="Open mobile navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full max-w-xs bg-gray-900 text-white border-r border-gray-800"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full flex flex-col"
        >
          <SheetHeader className="text-left border-b border-gray-800 pb-4">
            <SheetTitle className="text-2xl font-bold text-white">
              Rashed Abdullah
            </SheetTitle>
            <SheetDescription className="text-gray-400">
              Teacher & Software Developer
            </SheetDescription>
          </SheetHeader>

          <nav className="flex-1 py-6 space-y-2">
            {navItems.map((item) => (
              <SheetClose asChild key={item.path}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.path}
                    className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              </SheetClose>
            ))}
          </nav>

          <div className="pb-6 pt-4 border-t border-gray-800">
            <div className="flex justify-center">
              <FooterSocial className="text-gray-400 hover:text-white [&>a]:hover:bg-gray-800" />
            </div>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

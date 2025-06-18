"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/diary", name: "Diary" },
];

const socialLinks = [
  { icon: Github, url: "https://github.com/RashedAbdullah" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/rashed4abdullah" },
  { icon: Mail, url: "mailto:maarashed40@gmail.com" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 hover:bg-gray-100/30 dark:hover:bg-gray-800/50"
            aria-label="Open mobile navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </motion.div>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full p-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-r border-gray-200/20 dark:border-gray-800/20"
      >
        <div className="h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200/20 dark:border-gray-800/20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Rashed Abdullah
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Teacher & Software Developer
              </p>
            </motion.div>

            <SheetClose asChild>
              <motion.div whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 hover:bg-gray-100/30 dark:hover:bg-gray-800/50"
                >
                  <X className="h-5 w-5" />
                </Button>
              </motion.div>
            </SheetClose>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-6 space-y-2">
            <AnimatePresence>
              {navItems.map((item, index) => (
                <SheetClose asChild key={item.path}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        pathname === item.path
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500"
                          : "text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <motion.span
                          layoutId="mobileNavActive"
                          className="block h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-1"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                </SheetClose>
              ))}
            </AnimatePresence>
          </nav>

          {/* Social Links */}
          <div className="p-6 border-t border-gray-200/20 dark:border-gray-800/20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 hover:bg-gray-100/30 dark:hover:bg-gray-800/50 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

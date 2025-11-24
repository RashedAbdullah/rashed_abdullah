"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Menu, X } from "lucide-react";

const SCROLL_THRESHOLD = 600;

import {
  ThemeTogglerButton,
  type ThemeTogglerButtonProps,
} from "@/components/animate-ui/components/buttons/theme-toggler";
import Link from "next/link";

interface ThemeTogglerButtonDemoProps {
  variant: ThemeTogglerButtonProps["variant"];
  size: ThemeTogglerButtonProps["size"];
  direction: ThemeTogglerButtonProps["direction"];
  system: boolean;
}

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowHeader(y >= SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {showHeader && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-10 left-1/2 -translate-x-1/2 z-50"
        >
          <header className="flex gap-1 font-sf-mono">
            <a
              target="_blank"
              href="https://github.com/RashedAbdullah"
              className="p-3 bg-secondary dark:bg-neutral-800 rounded-full backdrop-blur hover:bg-primary hover:text-white transition-colors"
            >
              <Github />
            </a>

            <div className="flex items-center gap-20 py-3 px-6 rounded-lg bg-secondary dark:bg-neutral-800 backdrop-blur relative">
              <h1 className="tracking-wide">RASHED ABDULLAH</h1>
              <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                {isOpenMenu ? <X /> : <Menu />}
              </button>
              {isOpenMenu && (
                <div className="absolute top-14 right-0 left-0">
                  <ul className="text-lg w-full bg-secondary rounded-lg shadow-sm">
                    <li>
                      <Link
                        href="/"
                        className="block p-2 hover:bg-gray-800 hover:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block p-2 hover:bg-gray-800 hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="block p-2 hover:bg-gray-800 hover:text-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block p-2 hover:bg-gray-800 hover:text-white"
                      >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block p-2 hover:bg-gray-800 hover:text-white"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block p-2 hover:bg-gray-800 hover:text-white"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </header>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;

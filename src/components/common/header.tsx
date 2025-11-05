"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Menu, X } from "lucide-react";

const SCROLL_THRESHOLD = 600;

import {
  ThemeTogglerButton,
  type ThemeTogglerButtonProps,
} from "@/components/animate-ui/components/buttons/theme-toggler";

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
          <header className="flex gap-1">
            <a
              target="_blank"
              href="https://github.com/RashedAbdullah"
              className="p-3 bg-secondary dark:bg-neutral-800 rounded-full backdrop-blur"
            >
              <Github />
            </a>

            <div className="flex items-center gap-20 py-3 px-6 rounded-lg bg-secondary dark:bg-neutral-800 backdrop-blur">
              <h1 className="tracking-wide font-sf-mono">RASHED ABDULLAH</h1>
              <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                {isOpenMenu ? <X /> : <Menu />}
              </button>
            </div>
          </header>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;

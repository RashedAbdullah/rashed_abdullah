"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";

const SocialLinks = () => {
  const socials = [
    { icon: Github, url: "https://github.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: Twitter, url: "https://twitter.com" },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 hover:bg-gray-100/30 dark:hover:bg-gray-800/50 transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        </motion.a>
      ))}
    </div>
  );
};

const ActiveLink = ({ link = "", children }) => {
  const path = usePathname();
  const isActive = path === link;

  return (
    <Link href={link} passHref legacyBehavior>
      <motion.a
        className={`relative flex h-full items-center px-4 text-sm font-medium transition-all duration-300 ${
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        }`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <motion.span
            layoutId="navActiveIndicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full"
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          />
        )}
      </motion.a>
    </Link>
  );
};

const Navigations = () => {
  return (
    <div className="flex h-full items-center space-x-1">
      <ActiveLink link="/">Home</ActiveLink>
      <ActiveLink link="/projects">Projects</ActiveLink>
      <ActiveLink link="/diary">Diary</ActiveLink>
    </div>
  );
};

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/50 hover:bg-gray-100/30 dark:hover:bg-gray-800/50 transition-colors"
      whileHover={{ scale: 1.05, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="h-4 w-4 text-yellow-300" />
      ) : (
        <Moon className="h-4 w-4 text-gray-700" />
      )}
    </motion.button>
  );
};

const Logo = () => {
  return (
    <Link href="/" passHref legacyBehavior>
      <motion.a
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
          RA
        </div>
        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Rashed Abdullah
        </span>
      </motion.a>
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 border-b border-gray-200/20 dark:border-gray-800/20 shadow-sm"
          : "bg-white/50 dark:bg-gray-950/50"
      } backdrop-blur-lg transition-all duration-300`}
    >
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="lg:hidden">
              <MobileNav />
            </div>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center h-full gap-8">
            <Navigations />
            <div className="flex items-center gap-4">
              <SocialLinks />
              <div className="w-px h-6 bg-gray-200 dark:bg-gray-800"></div>
              <ThemeSwitcher />
            </div>
          </nav>

          <div className="flex lg:hidden items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ActiveHash = ({ hashId = "", children }) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const updateActiveState = () => {
      // Check both hash and scroll position
      const currentHash = window.location.hash;
      const section = document.querySelector(hashId);

      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 3;

        setIsActive(currentHash === hashId || isInView);
      } else {
        setIsActive(currentHash === hashId);
      }
    };

    const handleScroll = () => {
      updateActiveState();
    };

    const handleHashChange = () => {
      updateActiveState();
    };

    // Initial check
    updateActiveState();

    // Set up event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hashId, pathname]);

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(hashId);

    if (element) {
      // Update URL without page reload
      router.push(`${pathname}${hashId}`, undefined, { shallow: true });

      // Smooth scroll to section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.a
      href={hashId}
      onClick={handleClick}
      className="relative flex flex-col items-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          color: isActive
            ? "hsl(var(--primary))"
            : "hsl(var(--muted-foreground))",
        }}
        className="p-3 rounded-full transition-all duration-300"
      >
        {children}
      </motion.div>

      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute bottom-0 left-1/2 w-4 h-1 bg-primary rounded-full"
          initial={{ x: "-50%", scaleX: 0 }}
          animate={{ x: "-50%", scaleX: 1 }}
          exit={{ x: "-50%", scaleX: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 0.3,
          }}
        />
      )}

      {/* Tooltip for better UX */}
      <motion.span
        className="absolute left-1/2 -translate-x-1/2 mt-12 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        {hashId.replace("#", "")}
      </motion.span>
    </motion.a>
  );
};

export default ActiveHash;

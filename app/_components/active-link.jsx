"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ActiveLink = ({ link = "", children, className = "" }) => {
  const path = usePathname();
  const isActive = path === link;

  return (
    <Link href={link} passHref legacyBehavior>
      <motion.a
        className={`relative group ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 block px-3 py-2 transition-colors duration-200">
          {children}
        </span>

        {/* Animated underline */}
        {isActive && (
          <motion.span
            layoutId="activeLinkUnderline"
            className="absolute left-0 right-0 bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-aqua dark:from-aqua dark:to-green-400"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}

        {/* Hover effect */}
        <motion.span
          className="absolute left-1/2 right-1/2 bottom-1 h-0.5 bg-gray-300 dark:bg-gray-600 group-hover:bg-green-300 dark:group-hover:bg-aqua/50"
          initial={{ width: 0 }}
          animate={{
            width: isActive ? "0%" : "0%",
            left: isActive ? "0%" : "50%",
            right: isActive ? "0%" : "50%",
          }}
          whileHover={{
            width: "100%",
            left: "0%",
            right: "0%",
            transition: { duration: 0.3 },
          }}
        />
      </motion.a>
    </Link>
  );
};

export default ActiveLink;

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
        className={`relative flex h-full items-center px-4 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-white bg-gray-800/50 border-t-2 border-blue-400"
            : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
        } ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">{children}</span>

        {/* Hover effect */}
        {!isActive && (
          <motion.span
            className="absolute inset-0 bg-gray-800/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.a>
    </Link>
  );
};

export default ActiveLink;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlineTranslation } from "react-icons/ai";
import { SiReadme } from "react-icons/si";
import { FaQuran } from "react-icons/fa";
import { LiaQuranSolid } from "react-icons/lia";
import { IoReader } from "react-icons/io5";

const ActiveSurahJuz = ({ link, children }) => {
  const path = usePathname();

  const iconForLink = () => {
    if (children === "তরজমা") {
      return <AiOutlineTranslation size={18} />;
    } else if (children === "তিলাওয়াত") {
      return <IoReader size={18} />;
    } else if (children === "সুরা ভিত্তিক") {
      return <FaQuran size={18} />;
    } else if (children === "পারা ভিত্তিক") {
      return <LiaQuranSolid size={20} />;
    }
  };

  return (
    <Link href={link}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative inline-block px-5 py-2 transition-colors duration-300`}
      >
        <div className="flex justify-center items-center gap-2">
          <p>{iconForLink()}</p>
          <p className="relative z-10">{children}</p>
        </div>
        {link === path && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-300 rounded"
          />
        )}
      </motion.div>
    </Link>
  );
};

export default ActiveSurahJuz;

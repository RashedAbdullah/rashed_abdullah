"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveSurahJuz = ({ link, children }) => {
  const path = usePathname();
  return (
    <Link
      href={link}
      className={`text-indigo-600 dark:text-indigo-300 ${
        link === path && "underline"
      } hover:underline`}
    >
      {children}
    </Link>
  );
};

export default ActiveSurahJuz;

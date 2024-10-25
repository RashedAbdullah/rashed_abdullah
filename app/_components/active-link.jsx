"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ link = "", children }) => {
  const path = usePathname();

  return (
    <Link
      className={`${
        path === link && "dark:text-aqua text-green-600"
      } ark:hover:text-aqua hover:text-green-600 w-full lg:inline block p-2 rounded-md`}
      href={link}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;

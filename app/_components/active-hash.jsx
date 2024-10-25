"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ActiveHash = ({ hashId = "", children }) => {
  const [hash, setHash] = useState("");
  const router = useRouter();

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
          const newHash = `#${section.id}`;
          if (window.location.hash !== newHash) {
            router.push(newHash, undefined, { shallow: true });
            updateHash();
          }
        }
      });
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    <a
      className={`${
        hash === hashId && "dark:text-aqua text-green-600"
      } flex justify-center items-center align-middle h-10 w-10 rounded-full`}
      href={hashId}
    >
      {children}
    </a>
  );
};

export default ActiveHash;

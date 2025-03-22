"use client";
import ScrollDown from "@/components/scroll-down";
import coding_image from "@/public/coding-image.jpg";
import { roboto } from "@/utils/fetch-fonts";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const titles = ["Software Developer", "Educator", "Ontrapreneur"];

const HeaderInfo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="col-span-1 flex items-end pb-2">
          <ScrollDown />
        </div>
        <div className="col-span-5 flex justify-end pb-12">
          <div className="space-y-8">
            <div>
              <div
                className={`justify-start text-white text-5xl font-medium leading-[83.20px] ${roboto.className}`}
              >
                Rashed Abdullah
              </div>
              <div className="inline-flex justify-start items-center gap-2 relative">
                <div className="w-9 h-9 bg-white rounded-full animate-pulse-infinite"></div>

                {/* Adjusted container height */}
                <div className="relative h-12 w-[300px] flex-nowrap overflow-hidden flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={titles[index]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute text-white text-2xl font-medium leading-10"
                    >
                      {titles[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div>
              <Image src={coding_image} alt="Coding Demo Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
    </div>
  );
};

export default HeaderInfo;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/icons";

const HomeDiaryCard = ({ diary }) => {
  const [expanded, setExpanded] = useState(false);

  // Format date in Bengali
  const formattedDate = new Date(diary.date).toLocaleDateString("bn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
      whileHover={{ y: -5 }}
    >
      {/* Date Badge */}
      <div className="flex justify-center pt-6 mb-4">
        <span className="bg-primary/10 text-primary text-sm font-medium py-2 px-4 rounded-full inline-flex items-center">
          <Icons.calendar className="w-4 h-4 mr-2" />
          {formattedDate} ইং
        </span>
      </div>

      {/* Diary Content */}
      <div className="px-6 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={expanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="prose prose-sm dark:prose-invert max-w-none text-foreground/90"
              dangerouslySetInnerHTML={{
                __html: expanded
                  ? diary.text
                  : `${diary.text.slice(0, 150)}...`,
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Read More Button */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          {expanded ? (
            <>
              সংক্ষেপ দেখুন
              <Icons.chevronUp className="ml-1 w-4 h-4" />
            </>
          ) : (
            <>
              আরও পড়ুন
              <Icons.chevronDown className="ml-1 w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HomeDiaryCard;

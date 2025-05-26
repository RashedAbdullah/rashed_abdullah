"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp, Lock } from "lucide-react";

const DiaryCard = ({ diary }) => {
  const [expanded, setExpanded] = useState(false);

  // Format date in Bengali
  const formattedDate = new Date(diary.date).toLocaleDateString("bn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      className="relative bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group"
      whileHover={{ y: -8, scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-2xl" />

      {/* Date Badge with Glass Effect */}
      <div className="flex justify-center pt-6 mb-4 relative z-10">
        <motion.span
          className="backdrop-blur-sm bg-white/50 dark:bg-black/30 text-primary text-sm font-medium py-2 px-4 rounded-full inline-flex items-center border border-primary/20 shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Calendar className="w-4 h-4 mr-2" />
          {formattedDate} ইং
          {!diary.visibility && (
            <span className="ml-2 flex items-center">
              <Lock className="w-3 h-3 mr-1" />
              প্রাইভেট
            </span>
          )}
        </motion.span>
      </div>

      {/* Diary Content */}
      <div className="px-6 pb-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={expanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="prose prose-sm dark:prose-invert max-w-none text-foreground/90 leading-relaxed"
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
          className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 transition-all flex items-center justify-center text-primary font-medium text-sm border border-primary/20"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {expanded ? (
            <>
              সংক্ষেপ দেখুন
              <ChevronUp className="ml-2 w-4 h-4" />
            </>
          ) : (
            <>
              আরও পড়ুন
              <ChevronDown className="ml-2 w-4 h-4" />
            </>
          )}
          <span className="absolute right-6 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default DiaryCard;

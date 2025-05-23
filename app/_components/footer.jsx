"use client";

import { motion } from "framer-motion";
import FooterSocial from "./social";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-100 dark:border-gray-800/50 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-900/95 dark:to-gray-900 backdrop-blur-xl">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-aqua via-green-400 to-purple-500 opacity-10"></div>
      </div>

      <div className="container px-6 py-16 mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Branding with elegant typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-100 mb-2">
              Rashed Abdullah
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md text-center md:text-left">
              Building digital experiences that inspire and delight. Focused on
              creating meaningful solutions through code and design.
            </p>
          </motion.div>

          {/* Social links with floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 tracking-wider">
              CONNECT WITH ME
            </h4>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FooterSocial className="flex space-x-5 [&>a]:p-2 [&>a]:rounded-full [&>a]:transition-all [&>a]:duration-300 [&>a]:bg-white [&>a]:shadow-sm [&>a]:hover:shadow-md [&>a]:dark:bg-gray-800/50 [&>a]:hover:-translate-y-1" />
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright and credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            &copy; {currentYear} All rights reserved by Rashed Abdullah
          </div>

          {/* Back to top button with elegant animation */}
          <motion.a
            href="#top"
            className="group flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <motion.span
              className="ml-2 inline-block group-hover:rotate-45 transition-transform"
              initial={{ rotate: 0 }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

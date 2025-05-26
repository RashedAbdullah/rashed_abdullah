"use client";

import { Home, User, Code, Monitor, PenTool, Mail } from "lucide-react"; // Using direct Lucide icons as fallback
import { MotionDiv } from "@/components/motion-div";
import ActiveHash from "./active-hash";

// Fallback icons in case your Icons component isn't working
const fallbackIcons = {
  home: <Home className="w-5 h-5" />,
  user: <User className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  monitor: <Monitor className="w-5 h-5" />,
  penTool: <PenTool className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

const navItems = [
  { id: "#hero", iconName: "home", label: "Home" },
  { id: "#about", iconName: "user", label: "About" },
  { id: "#skills", iconName: "code", label: "Skills" },
  { id: "#works", iconName: "monitor", label: "Works" },
  { id: "#diary", iconName: "penTool", label: "Diary" },
  { id: "#contact", iconName: "mail", label: "Contact" },
];

const HeaderNavigations = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <MotionDiv
        className="hidden lg:flex fixed top-1/2 left-6 transform -translate-y-1/2 z-50"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm px-2 py-4 rounded-full flex flex-col gap-3">
          {navItems.map((item) => (
            <MotionDiv
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ActiveHash hashId={item.id}>
                {(isActive) => (
                  <div className="p-2 group relative">
                    <div
                      className={`relative ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
                      }`}
                    >
                      {/* Try both your icons and fallback */}
                      {fallbackIcons[item.iconName]}
                      {isActive && (
                        <span className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      )}
                    </div>
                    <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
                      {item.label}
                    </span>
                  </div>
                )}
              </ActiveHash>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      {/* Mobile Navigation */}
      <MotionDiv
        className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-max max-w-[calc(100%-2rem)]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm px-4 py-2 rounded-full flex gap-1 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <MotionDiv
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <ActiveHash hashId={item.id}>
                {(isActive) => (
                  <div className="p-2 relative">
                    <div
                      className={`${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
                      }`}
                    >
                      {fallbackIcons[item.iconName]}
                    </div>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    )}
                  </div>
                )}
              </ActiveHash>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default HeaderNavigations;

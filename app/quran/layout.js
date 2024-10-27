"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const QuranKareemLayoutPage = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar with toggle button */}
      <aside
        className={`fixed top-0 left-0 z-20 h-full w-64 transition-transform duration-300 transform bg-[#C5DEFE] text-slate-900 dark:bg-deepBlack dark:text-white p-6 space-y-4
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Quran Kareem</h2>
        <nav className="space-y-2">
          <Link
            href="/quran/surah"
            className="block px-4 py-2 hover:bg-gray-400 rounded"
          >
            Surahs
          </Link>
          <Link
            href="/quran/juz"
            className="block px-4 py-2 hover:bg-gray-400 rounded"
          >
            Juz
          </Link>
          <Link
            href="/quran/page"
            className="block px-4 py-2 hover:bg-gray-400 rounded"
          >
            Pages
          </Link>
          <Link
            href="/quran/manzil"
            className="block px-4 py-2 hover:bg-gray-400 rounded"
          >
            Manzil
          </Link>
          <Link
            href="/quran/hizb"
            className="block px-4 py-2 hover:bg-gray-400 rounded"
          >
            Hizb
          </Link>
          <Link
            href="/quran/sajda"
            className="block px-4 py-2 hover:bg-gray-400 rounded"
          >
            Sajda
          </Link>
          <Link
            href="/quran/ruku"
            className="block px-4 py-2 hover:bg-gray-400 rounded"
          >
            Ruku
          </Link>
        </nav>
      </aside>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="z-30 md:hidden fixed top-20 left-4 p-2 bg-gray-800 text-white rounded-full"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Main Content */}
      <main
        className={`flex-1 transition-transform duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } md:ml-64`}
      >
        {children}
      </main>
    </div>
  );
};

export default QuranKareemLayoutPage;

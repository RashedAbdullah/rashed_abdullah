"use client";

import React, { useState, useEffect } from "react";
import QuranPage from "./_components/quran-page";

const QuranFetcher = () => {
  const [surah, setSurah] = useState(1);
  const [translation, setTranslation] = useState("bn.bengali");
  const [surahData, setSurahData] = useState(null);
  const [translationData, setTranslationData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [translations, setTranslations] = useState([]); // State to hold translations list

  // Fetch translation names
  const fetchTranslations = async () => {
    try {
      const response = await fetch(
        "https://api.alquran.cloud/v1/edition?format=text&type=translation"
      );
      const result = await response.json();
      setTranslations(result.data); // Set translations list
    } catch (error) {
      console.error("Failed to fetch translations");
    }
  };

  const fetchQuranData = async () => {
    try {
      setErrorMessage("");
      const surahResponse = await fetch(
        `https://api.alquran.cloud/v1/surah/${surah}`
      );
      const surahResult = await surahResponse.json();

      const translationResponse = await fetch(
        `https://api.alquran.cloud/v1/surah/${surah}/${translation}`
      );
      const translationResult = await translationResponse.json();

      setSurahData(surahResult.data);
      setTranslationData(translationResult.data.ayahs);
    } catch (error) {
      setErrorMessage("Failed to fetch data. Please try again.");
    }
  };

  useEffect(() => {
    fetchTranslations(); // Fetch translation options on component mount
    fetchQuranData(); // Fetch surah data when surah or translation changes
  }, [surah, translation]);

  return (
    <div className="flex min-h-screen bg-[#C5DEFE] dark:bg-deepBlack text-slate-900 dark:text-white">
      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 md:w-64 w-64 z-10 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-gray-200 dark:bg-gray-800 p-6 shadow-lg md:block`}
      >
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Select Options
          </h2>

          {/* Surah Selection */}
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Surah Number:
          </label>
          <input
            type="number"
            min="1"
            max="114"
            value={surah}
            onChange={(e) => setSurah(Number(e.target.value))}
            className="w-full p-2 mb-4 text-center rounded border dark:bg-gray-700 dark:text-white"
          />

          {/* Dynamic Translation Selection */}
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Translation:
          </label>
          <select
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-white"
          >
            {translations.map((trans) => (
              <option key={trans.identifier} value={trans.identifier}>
                {trans.name} - {trans.englishName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {errorMessage ? (
          <p className="text-red-500 text-center">{errorMessage}</p>
        ) : (
          surahData &&
          translationData && (
            <QuranPage
              surahData={surahData}
              translationData={translationData}
            />
          )
        )}
      </div>

      {/* Toggle Button for Sidebar on Small Screens */}
      <button
        className="fixed bottom-4 left-4 md:hidden p-3 bg-blue-500 text-white rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio possimus,
        numquam quia maiores doloribus tenetur aliquam unde inventore aspernatur
        optio expedita esse perferendis quidem hic, nobis obcaecati quis
        pariatur? Repellat!
      </button>
    </div>
  );
};

export default QuranFetcher;

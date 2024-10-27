"use client";
import React, { useState } from "react";

const TranslationSelector = ({ onSelectLanguage }) => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLang(lang);
    onSelectLanguage(lang);
  };

  return (
    <div className="text-center mb-6">
      <label htmlFor="language" className="text-lg font-medium">
        Select Translation Language:
      </label>
      <select
        id="language"
        value={selectedLang}
        onChange={handleLanguageChange}
        className="ml-3 px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
      >
        <option value="en">English</option>
        <option value="ur">Urdu</option>
        <option value="bn">Bengali</option>
        <option value="fr">French</option>
        {/* Add other languages as needed */}
      </select>
    </div>
  );
};

export default TranslationSelector;

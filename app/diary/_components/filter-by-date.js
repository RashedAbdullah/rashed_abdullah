"use client"; // This is a client component

import { useState } from "react";

const FilterByDate = ({ entries }) => {
  const [filteredEntries, setFilteredEntries] = useState(entries);
  const [selectedDate, setSelectedDate] = useState("");

  const handleFilterChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);

    if (date) {
      const filtered = entries.filter((entry) => entry.date === date);
      setFilteredEntries(filtered);
    } else {
      setFilteredEntries(entries); // Reset to all entries if no date selected
    }
  };

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="date-filter"
          className="block text-sm font-medium text-gray-700"
        >
          ফিল্টার করুন তারিখ দিয়ে:
        </label>
        <input
          type="date"
          id="date-filter"
          value={selectedDate}
          onChange={handleFilterChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="space-y-8">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
                {entry.date}
              </p>
              <div
                className="text-gray-800 dark:text-gray-200 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: entry.text }}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-800 dark:text-gray-200">
            কোন ডায়েরি পাওয়া যায়নি।
          </p>
        )}
      </div>
    </>
  );
};

export default FilterByDate;

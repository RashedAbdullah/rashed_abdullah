"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
          Oops! Something Went Wrong
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          It seems there was an error. Don&apos;t worry, we&apos;re on it!
        </p>

        <button
          onClick={reset}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
        >
          Try Again
        </button>
      </div>

    
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          What you can try
        </h3>
        <div className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            You can reload the page by clicking the &quot;Try Again&quot; button
            above. If the issue persists, please check back later. In the
            meantime, here are some things you can try:
          </p>
          <ul className="list-disc list-inside space-y-3 text-left">
            <li>Check your internet connection.</li>
            <li>Clear your browser cache and cookies.</li>
            <li>Try accessing the page from another browser or device.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 w-full flex justify-center">
        <div className="bg-gray-200 dark:bg-gray-700 w-2/3 h-64 rounded-lg shadow-md"></div>
      </div>

      <div className="mt-16">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          If you&apos;re experiencing this issue repeatedly, feel free to
          contact our support team.
        </p>
      </div>
    </div>
  );
}

"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Oops! Something Went Wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We&apos;re sorry, but something unexpected happened.
          </p>
          <button
            onClick={reset}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}

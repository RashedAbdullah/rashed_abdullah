"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProjectForm = ({ handlingNewProject }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    link: "",
    live: "",
    category: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await handlingNewProject(formData);
      router.push("/projects");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-300 dark:border-gray-600"
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            শিরোনাম
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            ইমেজ URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            বিবরণ
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            minLength={10}
            className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            লিঙ্ক
          </label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            লাইভ
          </label>
          <input
            type="text"
            name="live"
            value={formData.live}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            ক্যাটেগরি
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          প্রজেক্ট যোগ করুন
        </button>
      </form>
    </>
  );
};

export default AddProjectForm;

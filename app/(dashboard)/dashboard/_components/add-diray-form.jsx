"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const AddDirayForm = ({ createDiray }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dirayData = {
        date,
        text,
        visibility,
      };

      await createDiray(dirayData);
      setLoading(false);
      router.push("/diary");
    } catch (error) {
      console.error("প্রবন্ধ জমা দেওয়ার সময় সমস্যা:", error);
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            তারিখ
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="visibility"
            className="block text-sm font-medium text-gray-700"
          >
            ভিজিবিলিটি
          </label>
          <select
            id="visibility"
            onChange={(e) => setVisibility(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
            <option value={true}>পাবলিক</option>
            <option value={false}>প্রাইভেট</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          >
            দিনলিপি
          </label>
          <ReactQuill
            id="text"
            value={text}
            onChange={setText}
            className="h-64 bg-white"
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-md mt-10 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "জমা হচ্ছে..." : "প্রবন্ধ যোগ করুন"}
        </button>
      </form>
    </div>
  );
};

export default AddDirayForm;

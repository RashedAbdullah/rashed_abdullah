"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import "react-quill/dist/quill.snow.css"; // এটিকে আলাদাভাবে ইমপোর্ট করো

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddBlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const blogData = {
        title,
        content,
        description,
        author,
        thumbnail,
      };

      await createBlog(blogData);
      setLoading(false);
      router.push("/blogs");
    } catch (error) {
      console.error("প্রবন্ধ জমা দেওয়ার সময় সমস্যা:", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          শিরোনাম
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          বিষয়বস্তু
        </label>
        <ReactQuill
          id="content"
          value={content}
          onChange={setContent}
          className="h-64 bg-white"
        />
      </div>

      <div className="mb-4 mt-16">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          সংক্ষিপ্ত বিবরণ
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          rows="3"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          লেখক
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="thumbnail"
          className="block text-sm font-medium text-gray-700"
        >
          কাভার ইমেজ URL (ঐচ্ছিক)
        </label>
        <input
          id="thumbnail"
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        disabled={loading}
      >
        {loading ? "জমা হচ্ছে..." : "প্রবন্ধ যোগ করুন"}
      </button>
    </form>
  );
};

export default AddBlogForm;

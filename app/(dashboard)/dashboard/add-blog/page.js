import React from "react";
import AddBlogForm from "../_components/add-blog-form";
import { createBlog } from "@/controllers/articles";

const DashAddBlogPage = () => {
  const handleCreateingBlog = async (blog) => {
    "use server";
    await createBlog(blog);
  };
  return (
    <div>
      <AddBlogForm createBlog={handleCreateingBlog} />
    </div>
  );
};

export default DashAddBlogPage;

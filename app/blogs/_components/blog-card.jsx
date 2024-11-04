import { Button } from "@/components/ui/button";
import BlogSchemaScript from "@/meta/blog-schema-script";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="relative group block p-4 h-full w-full rounded-3xl">
      <BlogSchemaScript blog={blog} />

      <div className="rounded-2xl h-full w-full p-6 overflow-hidden dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 relative z-20 transition-colors duration-300">
        <div className="relative z-50">
          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-zinc-100 text-2xl md:text-3xl font-semibold tracking-wide">
              {blog?.title}
            </h4>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={blog?.thumbnail}
                alt={blog?.title}
                height={400}
                width={500}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex justify-between items-center mt-4 text-sm italic">
              {blog?.author && (
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
                  <FaUserAlt size={12} />
                  {blog?.author}
                </p>
              )}
              {blog?.createdAt && (
                <p className="text-gray-600 dark:text-gray-300">
                  {new Date(blog?.createdAt).toLocaleDateString("bn", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  ইং
                </p>
              )}
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-200 tracking-wide leading-relaxed text-sm line-clamp-3 bg-gradient-to-t from-transparent to-gray-50 dark:to-gray-800 bg-clip-text">
              {blog?.description?.slice(0, 120) + "..."}
            </p>
            <div className="text-right mt-4">
              <Link href={`/blogs/${blog.title.replaceAll(" ", "-")}`}>
                <Button>বিস্তারিত</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

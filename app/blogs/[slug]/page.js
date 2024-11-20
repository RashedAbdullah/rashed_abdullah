import Link from "next/link";
import Image from "next/image";
import BlogSchemaScript from "@/meta/blog-schema-script";
import { getSingleBlog } from "@/controllers/blogs";
import { FaUserAlt } from "react-icons/fa";

const SingleBlogPage = async ({ params: { slug } }) => {
  const title = decodeURIComponent(
    decodeURIComponent(slug.replaceAll("-", " "))
  );

  const singleBlog = await getSingleBlog(title);

  if (!singleBlog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The blog you are looking for does not exist.
          </p>
          <Link
            href="/blogs"
            className="inline-block mt-6 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const {
    title: titleOfBlog,
    content,
    description,
    createdAt,
    author,
    thumbnail,
  } = singleBlog;

  return (
    <div className="container mx-auto px-4 py-16">
      <BlogSchemaScript blog={singleBlog} />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Image
            src={thumbnail}
            alt={titleOfBlog}
            height={800}
            width={1000}
            className="h-64 md:h-96 w-full object-cover"
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {titleOfBlog}
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-500 dark:text-gray-400 italic mb-6 space-y-2 md:space-y-0">
            <p className="font-medium flex items-center gap-1">
              <FaUserAlt size={12} />
              {author}
            </p>
            <p>
              {new Date(createdAt).toLocaleDateString("bn", {
                year: "numeric",
                day: "numeric",
                month: "long",
              })}{" "}
              ইং
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {description}
          </p>

          <div
            className="prose dark:prose-invert leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-10 text-center">
            <Link
              href="/blogs"
              className="inline-block px-8 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition-all"
            >
              ব্লগে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

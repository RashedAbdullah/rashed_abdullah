import { blogs } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import BlogSchemaScript from "@/meta/blog-schema-script";

const SingleBlogPage = ({ params: { slug } }) => {
  const id = decodeURIComponent(slug.replaceAll("-", " "));

  // Filter the blogs array to find the matching blog
  const singleBlogArray = blogs.filter((blog) => blog.title === id);

  // Ensure there's at least one matching blog
  if (singleBlogArray.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-lightBlack rounded-lg shadow-lg p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-zinc-100 mb-4">
            Blog Not Found
          </h1>
          <p className="text-slate-500 dark:text-zinc-400">
            The blog you are looking for does not exist.
          </p>
          <Link href="/blogs" className="text-blue-600 hover:underline mt-4">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const { title, content, description, createdAt, author, thumbnail } =
    singleBlogArray[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogSchemaScript blog={singleBlogArray[0]} />
      <div className="bg-slate-200 dark:bg-lightBlack rounded-lg shadow-lg p-6">
        {/* Thumbnail Image */}
        <div className="flex justify-center">
          <Image
            src="https://i.ibb.co.com/kHSHKLx/code-image.webp"
            alt={title}
            height={800}
            width={600}
            className="h-96 w-full rounded-lg mb-4 object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-zinc-100 mb-4">
          {title}
        </h1>

        <div className="flex justify-between items-center text-sm text-slate-500 dark:text-zinc-400 mb-4">
          <p>{author}</p>
          <p>{new Date(createdAt).toLocaleDateString("bn")}</p>
        </div>

        <p className="text-sm text-slate-800 dark:text-zinc-400 mb-4">
          {description}
        </p>

        <div
          className="mt-4 leading-relaxed text-slate-800 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: content }} // Correctly set the HTML
        />

        {/* Optional: Add a back link or button */}
        <div className="mt-6">
          <Link href="/blogs" className="text-blue-600 hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

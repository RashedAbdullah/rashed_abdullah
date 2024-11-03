import Link from "next/link";
import Image from "next/image";
import BlogSchemaScript from "@/meta/blog-schema-script";
import { getSingleBlog } from "@/controllers/blogs";

const SingleBlogPage = async ({ params: { slug } }) => {
  const title = decodeURIComponent(
    decodeURIComponent(slug.replaceAll("-", " "))
  );

  const singleBlog = await getSingleBlog(title);

  if (!singleBlog) {
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

  const {
    title: titleOfBlog,
    content,
    description,
    createdAt,
    author,
    thumbnail,
  } = singleBlog;

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogSchemaScript blog={singleBlog} />
      <div className="bg-slate-200 dark:bg-lightBlack rounded-lg shadow-lg p-6">
        {/* Thumbnail Image */}
        <div className="flex justify-center">
          <Image
            src={thumbnail}
            alt={titleOfBlog}
            height={800}
            width={1000}
            className="h-96 w-full rounded-lg mb-4 object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-zinc-100 mb-4">
          {titleOfBlog}
        </h1>

        <div className="flex justify-between items-center text-sm text-slate-500 dark:text-zinc-400 mb-4">
          <p>{author}</p>
          <p>{new Date(createdAt).toLocaleDateString("bn")} ইং</p>
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

import BlogCard from "./_components/blog-card";
import { getBlogs } from "@/controllers/articles";

const BlogsPage = async () => {
  const blogs = await getBlogs();
  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

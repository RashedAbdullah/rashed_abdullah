import { blogs } from "@/data/blogs";
import BlogCard from "./_components/blog-card";

const BlogsPage = () => {
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

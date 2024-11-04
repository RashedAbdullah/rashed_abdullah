const { mongoDBConnection } = require("@/database/mongoDBConnection");
const { blogModel } = require("@/models/blog-model");

const getBlogs = async () => {
  try {
    await mongoDBConnection();
    const blogs = await blogModel.find({}).sort({ createdAt: -1 });
    return blogs;
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleBlog = async (title) => {
  try {
    await mongoDBConnection();
    const singleBlog = await blogModel.findOne({ title });
    return singleBlog;
  } catch (err) {
    console.log(err.message);
  }
};

const createBlog = async (blog) => {
  try {
    await mongoDBConnection();
    const createdBlog = await blogModel.create(blog);
    return createdBlog;
  } catch (err) {
    console.log(err.message);
  }
};

export { getBlogs, createBlog, getSingleBlog };

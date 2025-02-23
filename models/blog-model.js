import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // thumbnail: {
    //   type: String,
    //   default:
    //     "https://i.ibb.co.com/ncLKb5m/DALL-E-2024-11-03-21-52-28-A-serene-Islamic-blog-image-featuring-a-beautiful-open-Quran-with-elegant.webp",
    //   required: false,
    // },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export { blogModel };

import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://i.ibb.co.com/kHSHKLx/code-image.webp",
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const projectModel =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export { projectModel };

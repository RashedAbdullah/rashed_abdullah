import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: "https://i.ibb.co.com/kHSHKLx/code-image.webp",
      required: false,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    link: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\..+/i.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    live: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\..+/i.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },

    category: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const projectModel =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export { projectModel };

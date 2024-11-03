import mongoose from "mongoose";

const diraySchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: Date.now(),
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const dirayModel =
  mongoose.models.Diray || mongoose.model("Diray", diraySchema);

export { dirayModel };

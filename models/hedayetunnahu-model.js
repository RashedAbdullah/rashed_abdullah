import mongoose from "mongoose";

const hedayetunnahuSchema = new mongoose.Schema(
  {
    chapter: {
      type: String,
    },

    questions: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const hedayetunnahuModel =
  mongoose.models.hedayetunnahu ||
  mongoose.model("hedayetunnahu", hedayetunnahuSchema);

export { hedayetunnahuModel };

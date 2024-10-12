import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const videoModel =
  mongoose.models.Video || mongoose.model("Video", videoSchema);

export { videoModel };

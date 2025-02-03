const { mongoDBConnection } = require("@/database/mongoDBConnection");
const { videoModel } = require("@/models/video-model");

const getVideos = async () => {
  try {
    await mongoDBConnection();

    const videos = await videoModel.find({}).limit(6);
    return videos;
  } catch (err) {
    console.log(err.message);
  }
};

const getVideosByCategory = async (category) => {
  try {
    await mongoDBConnection();

    const videos = await videoModel.find({ category });
    return videos;
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleVideo = async (videoId) => {
  try {
    await mongoDBConnection();

    const videos = await videoModel.findOne({ videoId });
    return videos;
  } catch (err) {
    console.log(err.message);
  }
};

const createNewVideo = async (video) => {
  try {
    await mongoDBConnection();

    const newVideo = await videoModel.create(video);
    return newVideo;
  } catch (err) {
    console.log(err.message);
  }
};

export { getVideos, getVideosByCategory, getSingleVideo, createNewVideo };

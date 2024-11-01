import {
  getSingleVideo,
  getVideos,
  getVideosByCategory,
} from "@/controllers/videos";
import { fetchFromYoutube } from "./fetch-from-youtube";

export const getLatestVideos = async () => {
  try {
    const allVideos = await getVideos();

    const result = await Promise.all(
      allVideos.map(async (video) => {
        const newResult = await fetchFromYoutube(video.videoId);
        return newResult;
      })
    );

    
    result.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    return result;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

export const getVideosByCategories = async (category) => {
  try {
    const allVideos = await getVideosByCategory(category);

    const result = await Promise.all(
      allVideos.map(async (video) => {
        const newResult = await fetchFromYoutube(video.videoId);
        return newResult;
      })
    );


    result.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    return result;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

export const getSingleYoutubeVideo = async (id) => {
  try {
    const singleVideo = await getSingleVideo(id);

    const result = await fetchFromYoutube(singleVideo.videoId);

    return result;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

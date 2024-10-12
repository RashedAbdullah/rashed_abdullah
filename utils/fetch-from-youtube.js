export const fetchFromYoutube = async (VIDEO_ID) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${VIDEO_ID}&key=${process.env.API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch video data");
    }

    const data = await response.json();

    if (data.items.length === 0) {
      console.log("No video found");
      return;
    }

    const video = data.items[0];
    const id = video.id;
    const title = video.snippet.title;
    const description = video.snippet.description;
    const publishedAt = video.snippet.publishedAt;
    const thumbnailUrl = video.snippet.thumbnails.standard.url;
    const embedCode = `https://www.youtube.com/embed/${VIDEO_ID}`;
    const viewsCount = video.statistics.viewCount;
    const likes = video.statistics.likeCount;
    const comments = video.statistics.commentCount;
    const tags = video.snippet.tags;

    return {
      id,
      title,
      description,
      thumbnailUrl,
      embedCode,
      totalView: viewsCount,
      publishedAt,
      likes,
      comments,
      tags,
    };
  } catch (error) {
    console.error("Error fetching video data:", error);
  }
};

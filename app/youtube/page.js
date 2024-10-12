import VideoCategories from "./_components/video-categories";
import LatestVideos from "./_components/latest-videos";
import YoutubeHeroSection from "./_components/youtube-hero-section";

const YoutubePage = async () => {
  return (
    <div className="min-h-screen dark:text-gray-300">
      <YoutubeHeroSection />
      <VideoCategories />
      <LatestVideos />
    </div>
  );
};

export default YoutubePage;

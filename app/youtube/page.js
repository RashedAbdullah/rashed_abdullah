import VideoCategories from "./_components/video-categories";
import LatestVideos from "./_components/latest-videos";
import YoutubeHeroSection from "./_components/youtube-hero-section";
import Ads from "@/components/ads";

export async function generateMetadata() {
  return {
    title: "Rashed Abdullah's YouTube Videos | Nasheed, Quran, and More",
    description:
      "Watch YouTube videos from Rashed Abdullah, featuring Nasheeds, Quran recitations, and lectures. Explore categories and enjoy the latest uploads.",
    keywords: [
      "Rashed Abdullah",
      "YouTube",
      "Nasheed",
      "Quran",
      "Islamic Videos",
      "Lectures",
      "Bangla Subtitles",
    ],
    openGraph: {
      title: "Rashed Abdullah's YouTube Videos",
      description:
        "Explore Rashed Abdullah's collection of Nasheeds, Quran recitations, and more on YouTube.",
      url: "https://www.youtube.com/@RashedAbdullahBD",
      images: [
        {
          url: "https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
          width: 800,
          height: 600,
          alt: "Rashed Abdullah's YouTube Videos",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Rashed Abdullah's YouTube Videos",
      description:
        "Watch the latest YouTube videos by Rashed Abdullah, including Nasheeds, Quran recitations, and lectures.",
      images: ["https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg"],
    },
  };
}

const YoutubePage = async () => {
  return (
    <div className="min-h-screen dark:text-gray-300 container">
      <YoutubeHeroSection />
      <Ads />
      <VideoCategories />
      <LatestVideos />
      <Ads />
    </div>
  );
};

export default YoutubePage;

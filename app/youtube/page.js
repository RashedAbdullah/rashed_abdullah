import VideoCategories from "./_components/video-categories";
import LatestVideos from "./_components/latest-videos";
import YoutubeHeroSection from "./_components/youtube-hero-section";

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
    <div className="min-h-screen dark:text-gray-300">
      <YoutubeHeroSection />

      <VideoCategories />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245"
        crossorigin="anonymous"
      ></script>

      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6921856465558245"
        data-ad-slot="2560710651"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <LatestVideos />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245"
        crossorigin="anonymous"
      ></script>

      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6921856465558245"
        data-ad-slot="2560710651"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};

export default YoutubePage;

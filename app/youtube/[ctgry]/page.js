import Ads from "@/components/ads";
import VideoCard from "../_components/video-card";
import { getVideosByCategories } from "@/utils/fetch-vidoes";

export async function generateMetadata({ params }) {
  const { ctgry } = params;

  const selectCategory = (ctg) => {
    if (ctg === "quran") {
      return "Quran Kareem";
    } else if (ctg === "nasheed") {
      return "Nasheeds";
    } else if (ctg === "lecture") {
      return "Lectures";
    }
  };

  const categoryName = selectCategory(ctgry);
  const pageTitle = `Latest ${categoryName} Videos | Rashed Abdullah`;
  const pageDescription = `Watch the latest ${categoryName} videos by Rashed Abdullah, including recitations, nasheeds, and lectures.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "Rashed Abdullah",
      categoryName,
      "YouTube",
      "Nasheeds",
      "Lectures",
      "Quran",
      "Bangla Subtitles",
    ],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://rashedabdullah.vercel.app/youtube/${ctgry}`,
      images: [
        {
          url: "/path/to/category-specific-image.jpg",
          width: 800,
          height: 600,
          alt: `${categoryName} Videos`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/path/to/category-specific-twitter-image.jpg"],
    },
  };
}

const YoutubeVideoByCategoryPage = async ({ params }) => {
  const { ctgry } = params;
  const videos = await getVideosByCategories(ctgry);

  const selectCategory = (ctg) => {
    if (ctg === "quran") {
      return "Quran Kareem";
    } else if (ctg === "nasheed") {
      return "Nasheeds";
    } else if (ctg === "lecture") {
      return "Lectures";
    }
  };

  return (
    <div className="min-h-screen dark:text-gray-300">
      <div className="text-center py-16 bg-gradient-to-r from-blue-600 to-teal-600 dark:bg-gradient-to-r dark:from-darkTeal dark:to-darkBlue text-white">
        <h1 className="text-5xl font-bold tracking-tight">
          {selectCategory(ctgry)}
        </h1>
        <p className="mt-6 text-2xl font-light">
          Enjoy our collection of {selectCategory(ctgry)}.
        </p>
      </div>
      {/* <Ads /> */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">
          Latest {selectCategory(ctgry)} Videos
        </h2>
        <div
          className={`${
            videos?.length > 0 && "grid"
          }  gap-8 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {videos?.length > 0 ? (
            videos.map((video) => <VideoCard key={video?.id} video={video} />)
          ) : (
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-red-500 dark:text-red-400 mb-4">
                No Videos Found
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sorry, there are no videos available in this category at the
                moment.
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Please check back later or explore other categories!
              </p>
              <a
                href="/youtube"
                className="mt-6 inline-block px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-400 transition-all duration-300"
              >
                Back to Videos
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoByCategoryPage;

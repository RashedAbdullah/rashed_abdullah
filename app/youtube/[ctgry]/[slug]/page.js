import { getSingleYoutubeVideo } from "@/utils/fetch-vidoes";
import Image from "next/image";
import { FaEye, FaThumbsUp, FaComment, FaYoutube } from "react-icons/fa";
import { formatCount } from "@/utils/format-view";
import { Tiro_Bangla } from "next/font/google";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

export async function generateMetadata({ params: { slug } }) {
  const singleVideo = await getSingleYoutubeVideo(slug);

  const title = `${singleVideo?.title} | Rashed Abdullah YouTube`;
  const description =
    singleVideo?.description?.slice(0, 155) ||
    "Watch high-quality videos by Rashed Abdullah, including Quran recitations, nasheeds, and lectures.";
  const videoUrl = `https://www.youtube.com/watch?v=${singleVideo?.id}`;
  const imageUrl = singleVideo?.thumbnailUrl;

  return {
    title,
    description,
    keywords: [
      ...singleVideo.tags,
      "Rashed Abdullah",
      "YouTube",
      "Islamic Videos",
      "Nasheeds",
      "Quran Recitations",
    ],
    authors: [{ name: "Rashed Abdullah", url: "https://rashedabdullah.com" }],
    creator: "Rashed Abdullah",
    publisher: "Rashed Abdullah",
    formatDetection: {
      email: false,
      address: "Feni, Bangladesh",
      telephone: "+8801603443214",
    },
    openGraph: {
      title,
      description,
      url: `https://rashedabdullah.com/youtube/description/${slug}`,
      type: "video.other",
      video: {
        url: videoUrl,
        width: 1280,
        height: 720,
      },
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: singleVideo?.title,
        },
      ],
      site_name: "Rashed Abdullah's Portfolio",
      locale: "en_US",
      video: {
        url: videoUrl,
        secure_url: videoUrl,
        type: "text/html",
        width: 1280,
        height: 720,
      },
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@RashedAbdullah",
    },
  };
}

const getSingleVideo = async ({ params: { ctgry, slug } }) => {
  const singleVideo = await getSingleYoutubeVideo(slug);

  if (!singleVideo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-xl text-gray-500">খুঁজে পাওয়া যায় নি।</h2>
      </div>
    );
  }

  return (
    <div className={`${tiro.className} container mx-auto p-4 md:p-8 lg:p-12`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="relative">
          <Image
            src={singleVideo.thumbnailUrl}
            alt={singleVideo.title}
            width={1280}
            height={720}
            className="w-full h-auto object-cover rounded-t-lg md:h-[400px] lg:h-[500px]"
          />
          <a
            href={`https://www.youtube.com/watch?v=${singleVideo.id}`}
            target="_blank"
            className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <FaYoutube className="mr-2" />
            এখনই দেখুন
          </a>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {singleVideo.title}
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:flex-wrap items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 mb-4">
        <div className="flex items-center">
          <FaEye className="mr-2 text-blue-500 dark:text-teal-300" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {formatCount(singleVideo.totalView)} ভিউ
          </span>
        </div>
        <div className="flex items-center justify-end md:justify-normal">
          <FaThumbsUp className="mr-2 text-green-500 dark:text-green-400" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {formatCount(singleVideo.likes)} লাইক
          </span>
        </div>
        <div className="flex items-center">
          <FaComment className="mr-2 text-purple-500 dark:text-purple-400" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {formatCount(singleVideo.comments)} কমেন্ট
          </span>
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0 text-right">
          <p>{new Date(singleVideo.publishedAt).toLocaleDateString("bn-bd")}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          ডেসক্রিপশন
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
          {singleVideo.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default getSingleVideo;

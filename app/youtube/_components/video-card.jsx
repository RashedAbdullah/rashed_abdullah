import Image from "next/image";
import { FaComment } from "react-icons/fa6";
import { formatCount } from "@/utils/format-view";
import { FaYoutube, FaEye, FaThumbsUp } from "react-icons/fa";
import Link from "next/link";
import VideoScheamScript from "@/meta/video-scheam-script";

const VideoCard = ({ video }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <VideoScheamScript video={video} />
      <div className="relative group">
        <Image
          src={video?.thumbnailUrl}
          alt={video?.title}
          width={1280}
          height={720}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <a
          href={`https://www.youtube.com/watch?v=${video?.id}`}
          target="_blank"
          className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FaYoutube className="mr-2" />
          Watch Now
        </a>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/youtube/description/${video?.id}`}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 cursor-pointer">
              {video?.title}
            </h3>
          </Link>

          {/* Date and Time */}
          <div className="text-gray-500 dark:text-gray-400 text-sm mt-3 flex items-center gap-2">
            <p>{new Date(video?.publishedAt).toLocaleDateString()}</p>
            <p>|</p>
            <p>{new Date(video?.publishedAt).toLocaleTimeString()}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg">
            <FaEye className="mr-2 text-blue-500 dark:text-teal-300" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {formatCount(video?.totalView)}
            </span>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg">
            <FaThumbsUp className="mr-2 text-green-500 dark:text-green-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {formatCount(video?.likes)}
            </span>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg">
            <FaComment className="mr-2 text-purple-500 dark:text-purple-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {formatCount(video?.comments)} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

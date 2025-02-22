import { getLatestVideos } from "@/utils/fetch-vidoes";
import VideoCard from "./video-card";
import { Tiro_Bangla } from "next/font/google";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const LatestVideos = async () => {
  const latestVideos = await getLatestVideos();

  return (
    <div className={`${tiro.className} mx-auto px-4 py-12`}>
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">
        সর্বশেষ ভিডিও সমূহ
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {latestVideos.map((video) => (
          <VideoCard key={video?.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default LatestVideos;

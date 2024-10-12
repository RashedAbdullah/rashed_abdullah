import { FaYoutube } from "react-icons/fa";

const YoutubeHeroSection = () => {
  return (
    <div className="text-center py-16 bg-gradient-to-r from-[#A4C8F0] to-[#A4C8F0] dark:bg-gradient-to-r dark:from-[#0f1a33] dark:to-[#0c1a37] text-black dark:text-inherit">
      <h1 className="text-5xl font-bold tracking-tight">
        Quran Kareem | Nasheeds
      </h1>
      <p className="mt-6 text-2xl font-light">
        Nasheed and Quran recitations with Bangla subtitles.
      </p>
      <div className="flex justify-center items-center">
        <a
          href="https://www.youtube.com/@RashedAbdullahBD"
          target="_blank"
          className="mt-8 px-8 py-3 bg-red-600 rounded-full text-white font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg flex justify-center items-center"
        >
          <FaYoutube className="inline-block mr-2" />
          Subscribe on YouTube
        </a>
      </div>
    </div>
  );
};

export default YoutubeHeroSection;

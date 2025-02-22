import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Tiro_Bangla } from "next/font/google";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

const SubscribeSection = () => {
  return (
    <div
      className={`${tiro.className} bg-white dark:bg-gray-900 py-12 px-6 text-center shadow-md rounded-lg`}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center">
          <FaYoutube className="text-red-600 dark:text-red-400 text-6xl mb-4" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          আমার ইউটিউব চ্যানেল
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          নতুন নতুন কুরআন তিলাওয়াত ও নাশীদ পেতে এখনই সাবস্ক্রাইব করুন।
        </p>
        <Link
          href="https://www.youtube.com/@RashedAbdullahBD"
          target="_blank"
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 inline-block shadow-lg"
        >
          🔔 সাবস্ক্রাইব করুন
        </Link>
      </div>
    </div>
  );
};

export default SubscribeSection;

import Link from "next/link";

const categories = [
  {
    category: "কুরআন কারীম",
    desc: "মনোরম তিলাওয়াত",
    navlink: "quran",
  },
  {
    category: "নাশীদ",
    desc: "বাংলা সাইবটাইটেলসহ",
    navlink: "nasheed",
  },
  {
    category: "লেকচার",
    desc: "গুরুত্বপূর্ণ আলোচনা",
    navlink: "lecture",
  },
];

const VideoCategories = () => {
  return (
    <div className="mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">
        ভিডিও ক্যাটাগরি
      </h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {categories.map((category) => (
          <div key={category.category} className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 text-center transition-shadow duration-300 w-56">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {category.category}
              </h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                {category.desc}
              </p>
            </div>
            <Link
              href={`/youtube/${category.navlink}`}
              className="absolute inset-0 flex justify-center  items-center text-white text-2xl font-bold transition-opacity duration-300"
            ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCategories;

import Link from "next/link";

const categories = [
  {
    category: "Quran Kareem",
    desc: "Recitations",
    navlink: "quran",
  },
  {
    category: "Nasheeds",
    desc: "Bangla Subtitle",
    navlink: "nasheed",
  },
  {
    category: "Lectures",
    desc: "Islamic Talks",
    navlink: "lecture",
  },
];

const VideoCategories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">
        Video Categories
      </h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {categories.map((category) => (
          <div key={category.category} className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 w-56">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {category.category}
              </h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                {category.desc}
              </p>
            </div>
            <Link
              href={`/youtube/${category.navlink}`}
              className="absolute inset-0 dark:bg-gray-900 bg-gray-200 bg-opacity-40 flex justify-center items-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCategories;

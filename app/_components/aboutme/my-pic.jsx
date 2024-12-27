import Image from "next/image";

const MyPicture = () => {
  const imageUrl = "https://i.ibb.co/GkdZpf8/IMG-20240621-WA0029-Copy.jpg";

  return (
    <div className="col-span-4 flex justify-center items-center">
      <div className="relative group w-[300px] h-[380px]">
        <Image
          src={imageUrl}
          alt="Rashed Abdullah"
          layout="fill"
          objectFit="cover"
          fill
          className="rounded-lg transition-opacity duration-500 group-hover:opacity-30"
        />

        <div className="absolute inset-0 flex flex-col justify-end py-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h2 className="font-bold text-xl text-gray-800 dark:text-white">
            রাশেদ আব্দুল্লাহ
          </h2>
          <p className="font-normal text-sm text-gray-600 dark:text-gray-300">
            শিক্ষক ও সফটওয়্যার ডেভেলপার
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPicture;

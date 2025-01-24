import React from "react";
import { IoMail } from "react-icons/io5";

const NameTitle = async () => {
  return (
    <div className="col-span-4 flex flex-col justify-center gap-5">
      <div className="flex flex-col justify-center">
        <h1 className="md:text-4xl text-3xl ml-6">
          <strong className="text-deepAqua dark:text-aqua">
            রাশেদ আব্দুল্লাহ
          </strong>
        </h1>

        <div className="flex items-end gap-3 ml-6">
          <h2 className="md:text-3xl text-3xl">শিক্ষক ও ডেভেলপার</h2>
        </div>

        <div>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"<p>"}</p>
          <p className="leading-6 ml-6">
            শিক্ষা ও প্রযুক্তির মেলবন্ধনে সবসময় নতুন কিছু তৈরি করতে ভালোবাসি।
            React.js, React Native, Next.js এবং Node.js ব্যবহার করে চমৎকার,
            আধুনিক ও ইউজার ফ্রেন্ডলি সফটওয়্যার তৈরি করি। পাশাপাশি
            ছাত্র-শিক্ষকদের জন্য মানসম্মত পাঠ উপকরণ সরবরাহ করে শিক্ষাকে সহজলভ্য
            করার চেষ্টা করি।
          </p>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"</p>"}</p>
        </div>

        <div className="ml-6 flex items-center gap-4">
          <h3 className="text-3xl text-deepAqua dark:text-aqua">
            কানেক্ট উইথ মি
          </h3>
          <a
            href="#contact"
            className="h-10 w-10 rounded-full text-aqua bg-deepBlack flex justify-center items-center"
            aria-label="Contact me via email"
          >
            <IoMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameTitle;

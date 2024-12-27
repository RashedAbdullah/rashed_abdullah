import ScrollMouse from "@/app/_components/scroll-mouse";
import MyPicture from "./my-pic";

export default async function AboutMe() {
  return (
    <div
      id="about"
      className="min-h-screen relative w-full md:py-0 py-10 overflow-hidden flex flex-col items-center justify-center"
    >
      <ScrollMouse />

      <div className="container flex flex-col md:grid grid-cols-10 gap-10">
        <div className="col-span-6 flex flex-col gap-14 justify-center">
          <div className="flex md:justify-start justify-center">
            <div className="py-4 px-6 rounded-tl-xl rounded-br-xl border-4 border-deepAqua dark:border-aqua z-40 relative">
              <h2 className="text-4xl font-semibold">আমার সম্পর্কে</h2>
            </div>
          </div>
          <div>
            <div className="dark:bg-lightBlack bg-gray-100 relative z-40 p-5 rounded-3xl">
              <p>
                আমি রাশেদ আব্দুল্লাহ। শিক্ষক ও সফটওয়্যার ডেভেলপার। শিক্ষা ও
                প্রযুক্তির মেলবন্ধনে সবসময় নতুন কিছু তৈরি করতে ভালোবাসি।
                React.js, React Native, Next.js এবং Node.js ব্যবহার করে চমৎকার,
                আধুনিক ও ইউজার ফ্রেন্ডলি সফটওয়্যার তৈরি করি। পাশাপাশি
                ছাত্র-শিক্ষকদের জন্য মানসম্মত পাঠ উপকরণ সরবরাহ করে শিক্ষাকে
                সহজলভ্য করার চেষ্টা করি।
              </p>
            </div>
          </div>
        </div>
        <MyPicture />
      </div>
    </div>
  );
}

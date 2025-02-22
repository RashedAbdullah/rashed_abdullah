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
              <h2 className="text-4xl font-semibold">About Me</h2>
            </div>
          </div>
          <div>
            <div className="dark:bg-lightBlack bg-gray-100 relative z-40 p-5 rounded-3xl">
              <p>
                I always love creating something new at the intersection of
                education and technology. Using React.js, React Native, Next.js,
                and Node.js, I develop modern, user-friendly, and efficient
                software. At the same time, I strive to make education more
                accessible by providing high-quality learning materials for
                students and teachers.
              </p>
            </div>
          </div>
        </div>
        <MyPicture />
      </div>
    </div>
  );
}

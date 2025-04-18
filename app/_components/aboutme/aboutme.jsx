import arrow from "@/public/arrowbottom.svg";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import { roboto } from "@/utils/fetch-fonts";

export default async function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10 lg:gap-12 py-10 md:py-16 lg:py-20">
      {/* Skills Section */}
      <div className="col-span-1 lg:col-span-3 flex flex-col justify-start items-start gap-7">
        <div className="w-full h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="text-white text-xl font-medium leading-loose">
                Skills
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white text-xl font-medium leading-loose">
            <div>Javascript</div>
            <div>Next.js</div>
            <div>Node.js</div>
            <div>MongoDB</div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="col-span-1 lg:col-span-3 flex flex-col justify-start items-start gap-7">
        <div className="w-full h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="text-white text-xl font-medium leading-loose">
                About Me
              </div>
            </div>
          </div>
          <Image
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover"
            src={profile}
            alt=""
          />
          <div className="flex flex-col gap-8">
            <div
              className={`text-white text-2xl md:text-3xl font-medium leading-[1.6] ${roboto.className}`}
            >
              Great software isn’t just built—it’s woven into how people
              interact with technology, making complexity feel simple.
            </div>
            <div className="text-neutral-400 text-base md:text-lg font-medium leading-7">
              Hello there! I’m Rashed Abdullah, a software developer passionate
              about building modern, efficient, and user-friendly applications.
              I love exploring new technologies and crafting solutions that not
              only solve problems but also enhance user experiences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

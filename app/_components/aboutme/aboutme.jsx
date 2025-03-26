import arrow from "@/public/arrowbottom.svg";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import { roboto } from "@/utils/fetch-fonts";

export default async function AboutMe() {
  return (
    <div className="grid grid-cols-6 gap-12 py-20">
      <div className="col-span-3 flex-1 inline-flex flex-col justify-start items-start gap-7">
        <div className="self-stretch h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="justify-start text-white text-xl font-medium leading-loose">
                Skills
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-xl font-medium leading-loose">
              Javascript
            </div>
            <div className="self-stretch justify-start text-white text-xl font-medium leading-loose">
              Next.js
            </div>
            <div className="self-stretch justify-start text-white text-xl font-medium leading-loose">
              Node.js
            </div>
            <div className="self-stretch justify-start text-white text-xl font-medium leading-loose">
              MongoDB
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex-1 inline-flex flex-col justify-start items-start gap-7">
        <div className="self-stretch h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="justify-start text-white text-xl font-medium leading-loose">
                About Me
              </div>
            </div>
          </div>
          <Image className="w-72 h-72" src={profile} alt="" />
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <div
              className={`self-stretch justify-start text-white text-3xl font-medium leading-[51.20px] ${roboto.className}`}
            >
              Great software isn’t just built—it’s woven into how people
              interact with technology, making complexity feel simple.
            </div>
            <div className="self-stretch justify-start text-neutral-400 text-lg font-medium leading-7">
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

import PageTitle from "@/components/page-title";
import ScrollMouse from "../scroll-mouse";
import { MdOutlineTv } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import nodejs from "@/public/nodejs.svg";
import nextjs from "@/public/nextjs.svg";
import mongodb from "@/public/mongodb.svg";
import javascript from "@/public/js.svg";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import { getManageLangs } from "@/manage-langs/manage-langs";

const Skills = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <div
      className={`min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-end rounded-lg `}
      style={{
        backgroundImage: `url(${"https://i.ibb.co.com/kHSHKLx/code-image.webp"})`,
      }}
    >
      <div className="bg-deepBlack bg-opacity-80 min-h-screen w-full">
        <div className="container relative">
          <BackgroundLines>
            <div className="z-40 relative">
              <div className="flex justify-center mt-20">
                <ScrollMouse />
              </div>
              <div>
                <PageTitle>{langs.skills}</PageTitle>
                <p className="text-center text-sm">
                  I&apos;m never striving to never stop learning and improving
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
                <div className="bg-white text-deepBlack py-2 px-7 flex flex-col justify-center gap-2 border-l-8 border-aqua rounded-lg">
                  <div className="flex justify-center">
                    <FaRegUser />
                  </div>
                  <div className="text-center text-lg">
                    <h2>Self Development</h2>
                  </div>
                  <div className="text-sm">
                    <p>Creativity - Communication</p>
                  </div>
                </div>

                <div className="bg-white text-deepBlack py-2 px-7 flex flex-col justify-center gap-2 border-l-8 border-aqua rounded-lg">
                  <div className="flex justify-center">
                    <MdOutlineTv />
                  </div>
                  <div className="text-center text-lg">
                    <h2>Web Development</h2>
                  </div>
                  <div className="text-sm">
                    <p>Next.js - Node.js - MongoDB</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:flex justify-center gap-0 md:gap-10">
                <div className="col-span-1 flex flex-col justify-center items-center text-xl font-semibold gap-2">
                  <Image
                    src={javascript}
                    alt="Javascript Icon"
                    height={60}
                    width={60}
                    className="border-2 rounded-full border-white bg-white"
                  />
                  <p className="text-[#F7DF1E]">JS</p>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center text-xl font-semibold gap-2">
                  <Image
                    src={nextjs}
                    alt="Nextjs Icon"
                    height={60}
                    width={60}
                    className="border-2 rounded-full border-white bg-white"
                  />
                  <p className="text-white">Next.js</p>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center text-xl font-semibold gap-2 mt-10 md:mt-0">
                  <Image
                    src={nodejs}
                    alt="Nodejs Icon"
                    height={60}
                    width={60}
                    className="border-2 rounded-full border-white bg-white"
                  />
                  <p className="text-white">Node.js</p>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center text-xl font-semibold gap-2 mt-10 md:mt-0">
                  <Image
                    src={mongodb}
                    alt="Nodejs Icon"
                    height={60}
                    width={60}
                    className="border-2 rounded-full border-white bg-white"
                  />
                  <p className="text-[#13AA52]">MongoDB</p>
                </div>
              </div>
            </div>
          </BackgroundLines>
        </div>
      </div>
    </div>
  );
};

export default Skills;

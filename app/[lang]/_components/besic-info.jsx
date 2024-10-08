import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { FaLink } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { BiDownload } from "react-icons/bi";
import { getManageLangs } from "@/manage-langs/manage-langs";

const BesicInfo = async ({ lang }) => {
  const langs = await getManageLangs(lang);

  return (
    <div className="col-span-3 flex justify-center items-center">
      <div>
        <div className="border-4 flex flex-col justify-center  gap-5 p-10 rounded-tl-[60px] rounded-br-[60px]">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg`}
              alt={langs.name}
              height={300}
              width={300}
              className={`h-[120px] w-[120px] object-cover bg-cover bg-no-repeat bg-center rounded-full`}
            ></Image>
            <div className="text-2xl font-semibold">
              <h2>{langs.name}</h2>
            </div>
            <div>
              <p>{langs.profession}</p>
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-8 items-center align-middle">
            <div className="col-span-1 text-aqua">
              <MdOutlineMailOutline />
            </div>
            <div className="col-span-7">maarashed40@gmail.com</div>

            <div className="col-span-1 text-aqua">
              <IoLocationOutline />
            </div>
            <div className="col-span-7">{langs.address}</div>

            <div className="col-span-1 text-aqua">
              <GiRotaryPhone />
            </div>
            <div className="col-span-7">+8801603443214</div>

            <div className="col-span-1 text-aqua">
              <FaLink />
            </div>
            <div className="col-span-7">www.rashedabdullah.com</div>
          </div>

          {/* Skills */}
          <div className="text-deepBlack flex justify-evenly items-center">
            <div className="bg-aqua py-1 px-3 rounded-xl">
              <p>JS</p>
            </div>
            <div className="bg-aqua py-1 px-3 rounded-xl">
              <p>Next.js</p>
            </div>
            <div className="bg-aqua py-1 px-3 rounded-xl">
              <p>Node.js</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="/RashedAbdullahResume.pdf"
              download="RashedResume.pdf"
              className="bg-white text-deepBlack hover:text-white px-10 py-2 flex items-center gap-2 text-lg"
            >
              {langs.resume} <BiDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BesicInfo;

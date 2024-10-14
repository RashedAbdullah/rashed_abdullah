import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { FaLink } from "react-icons/fa6";

import { BiDownload } from "react-icons/bi";

const BesicInfo = async () => {
  return (
    <div className="col-span-3 flex justify-center items-center">
      <div>
        <div className="border-4 flex flex-col justify-center  gap-5 p-10 rounded-tl-[60px] rounded-br-[60px]">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg`}
              alt="Rashed Abdullah"
              height={300}
              width={300}
              className={`h-[120px] w-[120px] object-cover bg-cover bg-no-repeat bg-center rounded-full`}
            ></Image>
            <div className="text-2xl font-semibold">
              <h2>Rashed Abdullah</h2>
            </div>
            <div>
              <p>Front-end Developer</p>
            </div>
          </div>


          <div className="grid grid-cols-8 items-center align-middle">
            <div className="col-span-1 dark:text-aqua text-deepAqua">
              <MdOutlineMailOutline />
            </div>
            <div className="col-span-7">maarashed40@gmail.com</div>

            <div className="col-span-1 dark:text-aqua text-deepAqua">
              <IoLocationOutline />
            </div>
            <div className="col-span-7">Feni, Bangladesh</div>

            <div className="col-span-1 dark:text-aqua text-deepAqua">
              <GiRotaryPhone />
            </div>
            <div className="col-span-7">+8801603443214</div>

            <div className="col-span-1 dark:text-aqua text-deepAqua">
              <FaLink />
            </div>
            <div className="col-span-7">www.rashedabdullah.com</div>
          </div>


          <div className="flex justify-evenly items-center text-white dark:text-slate-900">
            <div className="dark:bg-aqua bg-deepAqua py-1 px-3 rounded-xl">
              <p>JS</p>
            </div>
            <div className="dark:bg-aqua bg-deepAqua py-1 px-3 rounded-xl">
              <p>Next.js</p>
            </div>
            <div className="dark:bg-aqua bg-deepAqua py-1 px-3 rounded-xl">
              <p>Node.js</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="/RashedAbdullahResume.pdf"
              download="RashedResume.pdf"
              className="bg-white text-deepBlack hover:text-white px-10 py-2 flex items-center gap-2 text-lg"
            >
              Resume <BiDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BesicInfo;

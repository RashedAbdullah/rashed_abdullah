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
        <div className="border-4 backdrop-blur-lg flex flex-col justify-center  gap-5 p-10 rounded-tl-[60px] rounded-br-[60px] border-deepAqua dark:border-white">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/logo.png"
              alt="রাশেদ আব্দুল্লাহ"
              height={300}
              width={300}
              className={`h-[120px] w-[120px] object-cover bg-cover bg-no-repeat bg-center rounded-full border-2`}
            ></Image>
            <div className="text-2xl font-semibold">
              <h2>রাশেদ আব্দুল্লাহ</h2>
            </div>
            <div>
              <p>শিক্ষক ও ডেভেলপার</p>
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
            <div className="col-span-7">ফেনী, বাংলাদেশ।</div>

            <div className="col-span-1 dark:text-aqua text-deepAqua">
              <GiRotaryPhone />
            </div>
            <div className="col-span-7">+8801603-443214</div>

            <div className="col-span-1 dark:text-aqua text-deepAqua">
              <FaLink />
            </div>
            <div className="col-span-7">www.rashedabdullah.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BesicInfo;

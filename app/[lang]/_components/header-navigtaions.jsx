import { MdOutlineDashboard } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const HeaderNavigations = () => {
  return (
    <div className="col-span-2 hidden md:flex fixed top-1/2 left-28 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="border bg-deepBlack px-1 py-2 rounded-full flex flex-col gap-2 text-lg">
        <div>
          <Link
            href=""
            className="flex justify-center items-center align-middle h-10 w-10 bg-white rounded-full text-lightBlack"
          >
            <MdOutlineDashboard />
          </Link>
        </div>
        <div>
          <Link
            href=""
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <LuUser2 />
          </Link>
        </div>
        <div>
          <Link
            href=""
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <BsCodeSlash size={20} />
          </Link>
        </div>
        <div>
          <Link
            href=""
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <MdTv />
          </Link>
        </div>
        <div>
          <Link
            href=""
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <FaRegPenToSquare />
          </Link>
        </div>
        <div>
          <Link
            href=""
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <MdOutlineEmail />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigations;

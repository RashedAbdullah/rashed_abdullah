import { MdOutlineDashboard } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const HeaderNavigations = () => {
  return (
    <>
      {/* For large screens */}
      <div className="hidden lg:flex fixed top-1/2 left-28 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="border bg-gray-100 dark:bg-deepBlack px-1 py-2 rounded-full flex flex-col gap-2 text-lg">
          <div>
            <a
              href="#hero"
              className="flex justify-center items-center align-middle h-10 w-10 bg-white rounded-full text-lightBlack"
            >
              <MdOutlineDashboard />
            </a>
          </div>
          <div>
            <a
              href="#about"
              className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
            >
              <LuUser2 />
            </a>
          </div>
          <div>
            <a
              href="#skills"
              className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
            >
              <BsCodeSlash size={20} />
            </a>
          </div>
          <div>
            <a
              href="#works"
              className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
            >
              <MdTv />
            </a>
          </div>
          <div>
            <a
              href="#blogs"
              className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
            >
              <FaRegPenToSquare />
            </a>
          </div>
          <div>
            <a
              href="#contact"
              className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
            >
              <MdOutlineEmail />
            </a>
          </div>
        </div>
      </div>

      {/* For medium and small screens */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-100 dark:bg-deepBlack py-2 flex justify-around items-center">
        <div>
          <a
            href="#hero"
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full text-lightBlack"
          >
            <MdOutlineDashboard />
          </a>
        </div>
        <div>
          <a
            href="#about"
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <LuUser2 />
          </a>
        </div>
        <div>
          <a
            href="#skills"
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <BsCodeSlash size={20} />
          </a>
        </div>
        <div>
          <a
            href="#works"
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <MdTv />
          </a>
        </div>
        <div>
          <a
            href="#blogs"
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <FaRegPenToSquare />
          </a>
        </div>
        <div>
          <a
            href="#contact"
            className="flex justify-center items-center align-middle h-10 w-10 rounded-full"
          >
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderNavigations;

import { MdOutlineDashboard } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import ActiveHash from "./active-hash";

const HeaderNavigations = () => {
  return (
    <>
      <ActiveHash />
      <div className="hidden lg:flex fixed top-1/2 left-28 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="border backdrop-blur-sm shadow-lg border-slate-800 px-1 py-2 rounded-full flex flex-col gap-2 text-lg">
          <div>
            <ActiveHash hashId="#hero">
              <MdOutlineDashboard />
            </ActiveHash>
          </div>
          <div>
            <ActiveHash hashId="#about">
              <LuUser2 />
            </ActiveHash>
          </div>
          <div>
            <ActiveHash hashId="#skills">
              <BsCodeSlash size={20} />
            </ActiveHash>
          </div>
          <div>
            <ActiveHash hashId="#works">
              <MdTv />
            </ActiveHash>
          </div>
          <div>
            <ActiveHash hashId="#blogs">
              <FaRegPenToSquare />
            </ActiveHash>
          </div>
          <div>
            <ActiveHash hashId="#contact">
              <MdOutlineEmail />
            </ActiveHash>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg py-2 flex justify-around items-center">
        <div>
          <ActiveHash hashId="#hero">
            <MdOutlineDashboard />
          </ActiveHash>
        </div>
        <div>
          <ActiveHash hashId="#about">
            <LuUser2 />
          </ActiveHash>
        </div>
        <div>
          <ActiveHash hashId="#skills">
            <BsCodeSlash size={20} />
          </ActiveHash>
        </div>
        <div>
          <ActiveHash hashId="#works">
            <MdTv />
          </ActiveHash>
        </div>
        <div>
          <ActiveHash hashId="#blogs">
            <FaRegPenToSquare />
          </ActiveHash>
        </div>
        <div>
          <ActiveHash hashId="#contact">
            <MdOutlineEmail />
          </ActiveHash>
        </div>
      </div>
    </>
  );
};

export default HeaderNavigations;

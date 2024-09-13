import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BesicInfo from "./besic-info";
import NameTItle from "./name-title";

const HeaderInfo = ({ lang = "en" }) => {
  return (
    <div className="container min-h-[90vh] py-10 md:py-0">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col md:grid grid-cols-10 md:gap-5 gap-10">
          <BesicInfo lang={lang} />
          <NameTItle />
          <div className="col-span-3 flex justify-center items-center">
            <div className="text-[100px] text-aqua">{"</>"}</div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default HeaderInfo;

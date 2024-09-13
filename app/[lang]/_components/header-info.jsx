import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BesicInfo from "./besic-info";
import NameTItle from "./name-title";

const HeaderInfo = () => {
  return (
    <div className="container min-h-[90vh]">
      <BackgroundBeamsWithCollision>
        <div className="grid grid-cols-10 gap-5">
          <BesicInfo />
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

import BesicInfo from "./besic-info";
import NameTItle from "./name-title";

const HeaderInfo = () => {
  return (
    <div className="container flex justify-center items-center min-h-[82vh] py-10 md:py-0">
      <div className="flex flex-col md:grid grid-cols-10 gap-10">
        <BesicInfo />
        <NameTItle />
        <div className="col-span-3 flex justify-center items-center relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-deepAqua to-aqua blur-[80px] opacity-50 animate-pulse"></div>
            <div className="text-[200px] text-white bg-clip-text bg-gradient-to-br from-deepAqua to-aqua font-extrabold drop-shadow-lg">
              {"</>"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;

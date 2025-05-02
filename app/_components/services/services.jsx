import arrow from "@/public/arrowbottom.svg";
import Image from "next/image";

const ServicesAndExp = () => {
  return (
    <div className="md:grid grid-cols-6 gap-12 pt-20">
      <div className="col-span-3 inline-flex flex-col justify-start items-start gap-7">
        <div className="self-stretch h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="justify-start text-white text-xl font-medium leading-loose">
                Services
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-xl font-medium leading-loose">
              Web Development
            </div>
            <div className="self-stretch justify-start text-white text-xl font-medium leading-loose">
              Software Development
            </div>
            <div className="self-stretch justify-start text-white text-xl font-medium leading-loose">
              UI/UX Design
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 inline-flex flex-col justify-start items-start gap-7">
        <div className="self-stretch h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="justify-start text-white text-xl font-medium leading-loose">
                Experience
              </div>
            </div>
          </div>
          <div className="w-[610px] flex flex-col justify-start items-start gap-6">
            <div className="self-stretch pb-6 border-b-[0.80px] border-neutral-700 flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-start text-white text-xl font-medium leading-loose">
                  Front-end Developer
                </div>
                <div className="text-right justify-start text-white text-xl font-medium leading-loose">
                  2025-Now
                </div>
              </div>
              <div className="self-stretch justify-start text-neutral-400 text-xl font-medium leading-loose">
                TopOfStack Software
              </div>
            </div>
            <div className="self-stretch pb-6 border-b-[0.80px] border-neutral-700 flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-start text-white text-xl font-medium leading-loose">
                  Teacher for Arabic and Science of Quran
                </div>
                <div className="text-right justify-start text-white text-xl font-medium leading-loose">
                  2024-2025
                </div>
              </div>
              <div className="self-stretch justify-start text-neutral-400 text-xl font-medium leading-loose">
                Jamiatul Latif Rupganj
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndExp;

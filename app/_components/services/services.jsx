import arrow from "@/public/arrowbottom.svg";
import Image from "next/image";

const ServicesAndExp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10 lg:gap-12 pt-10 md:pt-16 lg:pt-20">
      {/* Services */}
      <div className="lg:col-span-3 flex flex-col gap-7">
        <div className="w-full h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="text-white text-xl font-medium leading-loose">
                Services
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-white text-xl font-medium leading-loose">
            <div>Web Development</div>
            <div>Software Development</div>
            <div>UI/UX Design</div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="lg:col-span-3 flex flex-col gap-7">
        <div className="w-full h-0 outline outline-[0.80px] outline-offset-[-0.40px] outline-neutral-700"></div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image src={arrow} alt="" />
              <div className="text-white text-xl font-medium leading-loose">
                Experience
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[610px] flex flex-col gap-6">
            {/* Job 1 */}
            <div className="w-full pb-6 border-b border-neutral-700 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="text-white text-xl font-medium leading-loose">
                  Front-end Developer
                </div>
                <div className="text-white text-xl font-medium leading-loose">
                  2025-Now
                </div>
              </div>
              <div className="text-neutral-400 text-xl font-medium leading-loose">
                TopOfStack Software
              </div>
            </div>

            {/* Job 2 */}
            <div className="w-full pb-6 border-b border-neutral-700 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="text-white text-xl font-medium leading-loose">
                  Teacher for Arabic and Science of Quran
                </div>
                <div className="text-white text-xl font-medium leading-loose">
                  2024-2025
                </div>
              </div>
              <div className="text-neutral-400 text-xl font-medium leading-loose">
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

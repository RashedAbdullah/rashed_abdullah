import ScrollDown from "@/components/scroll-down";
import coding_image from "@/public/coding-image.jpg";
import Image from "next/image";

const HeaderInfo = () => {
  return (
    <div className="min-h-[90vh] border-b border-[#A6A6A6] grid grid-cols-6">
      <ScrollDown />
      <div className="col-span-5 flex flex-col justify-center gap-8">
        <div>
          <h1 className="text-5xl font-semibold">Rashed Abdullah</h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>
                {`
          .globe {
            fill: none;
            stroke: white;
            stroke-width: 2;
          }

          .rotate {
            animation: rotateGlobe 6s linear infinite;
            transform-origin: center;
          }

          @keyframes rotateGlobe {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
              </style>

              {/* Outer Circle (Globe Frame) */}
              <circle cx="50" cy="50" r="40" className="globe rotate" />

              {/* Longitude Lines */}
              <ellipse
                cx="50"
                cy="50"
                rx="18"
                ry="40"
                className="globe rotate"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="32"
                ry="40"
                className="globe rotate"
              />

              {/* Latitude Lines */}
              <line x1="10" y1="50" x2="90" y2="50" className="globe rotate" />
              <path d="M15 30 Q50 10 85 30" className="globe rotate" />
              <path d="M15 70 Q50 90 85 70" className="globe rotate" />
            </svg>
          </div>
          <p className="text-2xl">Software Developer</p>
        </div>
        <div>
          <Image src={coding_image} alt="Coding image" />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;

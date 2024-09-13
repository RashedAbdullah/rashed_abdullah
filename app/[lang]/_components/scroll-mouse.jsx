import scroll from "@/public/Scroll.png";
import Image from "next/image";

const ScrollMouse = () => {
  return (
    <div className="py-10 z-20">
      <Image
        src={scroll}
        alt="Scroll mouse"
        height={28}
        width={28}
        className={`object-cover bg-cover`}
      />
    </div>
  );
};

export default ScrollMouse;

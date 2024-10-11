import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const MyPicture = () => {
  const imageUrl = "https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg";
  return (
    <div className="col-span-4 flex justify-center items-center align-middle z-40">
      <div className="relative">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">Rashed Abdullah</p>
          <p className="font-normal text-sm">Web Developer</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
};

export default MyPicture;

import ScrollMouse from "@/app/_components/scroll-mouse";
import { Boxes } from "@/components/ui/background-boxes";
import MyPicture from "./my-pic";

export default async function AboutMe() {
  return (
    <div
      id="about"
      className="min-h-screen relative w-full md:py-0 py-10 overflow-hidden dark:bg-deepBlack flex flex-col items-center justify-center"
    >
      <ScrollMouse />
      <div className="absolute inset-0 w-full h-full bg-[#C5DEFE] dark:bg-deepBlack z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="container flex flex-col md:grid grid-cols-10 gap-10">
        <div className="col-span-6 flex flex-col gap-14 justify-center">
          <div className="flex md:justify-start justify-center">
            <div className="py-4 px-6 rounded-tl-xl rounded-br-xl border-4 border-deepAqua dark:border-aqua z-40 relative">
              <h2 className="text-4xl font-semibold">About Me</h2>
            </div>
          </div>
          <div>
          <div className="dark:bg-lightBlack bg-gray-100 relative z-40 p-5 rounded-3xl text-sm">
              <p className="text-deepAqua dark:text-aqua">{`<p>`}</p>
              <br />
              <h3 className="text-deepAqua dark:text-aqua text-xl">Hey!</h3>
              <p>
                I&apos;m Rashed Abdullah, a passionate front-end developer. I
                specialize in crafting stunning web experiences using{" "}
                <span className="text-deepAqua dark:text-aqua">React.js</span> And{" "}
                <span className="text-deepAqua dark:text-aqua">Next.js</span> With a focus on
                innovation and user engagement, I create immersive interfaces
                and high-performance applications. Let&apos;s collaborate to
                bring your ideas to life and enchant users with interactive
                wonders on the web. ✨
              </p>
              <br />
              <p className="text-deepAqua dark:text-aqua">{`</p>`}</p>
            </div>
          </div>
        </div>
        <MyPicture />
      </div>
    </div>
  );
}

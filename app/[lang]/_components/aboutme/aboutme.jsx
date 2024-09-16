import ScrollMouse from "@/app/[lang]/_components/scroll-mouse";
import { Boxes } from "@/components/ui/background-boxes";
import MyPicture from "./my-pic";
import { getManageLangs } from "@/manage-langs/manage-langs";

export default async function AboutMe({ lang = "en" }) {
  const langs = await getManageLangs(lang);
  return (
    <div className="min-h-screen relative w-full md:py-0 py-10 overflow-hidden bg-deepBlack flex flex-col items-center justify-center">
      <ScrollMouse />
      <div className="absolute inset-0 w-full h-full bg-deepBlack z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="container flex flex-col md:grid grid-cols-10 gap-10">
        <div className="col-span-6 flex flex-col gap-14 justify-center">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="flex md:justify-start justify-center"
          >
            <div className="py-4 px-6 rounded-tl-xl rounded-br-xl border-4 border-aqua z-40 relative">
              <h2 className="text-4xl font-semibold">{langs.about}</h2>
            </div>
          </div>
          <div  dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="bg-lightBlack relative z-40 p-5 rounded-3xl text-sm">
              <p className="text-aqua">{`<p>`}</p>
              <br />
              <h3 className="text-aqua text-xl">{langs.hey}!</h3>
              <p>
                {langs.desc1} <span className="text-aqua">React.js</span>{" "}
                {langs.and} <span className="text-aqua">Next.js</span>{" "}
                {langs.desc2} ✨
              </p>
              <br />
              <p className="text-aqua">{`</p>`}</p>
            </div>
          </div>
        </div>
        <MyPicture />
      </div>
    </div>
  );
}

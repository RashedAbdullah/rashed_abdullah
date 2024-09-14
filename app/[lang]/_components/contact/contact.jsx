import { BackgroundBeams } from "@/components/ui/background-beams";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";
import { FiSend } from "react-icons/fi";
import { getManageLangs } from "@/manage-langs/manage-langs";

const Contact = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <div className="min-h-screen w-full relative antialiased">
      <BackgroundBeams />
      <div className="container z-20 relative">
        <div className="flex justify-center items-center mt-20">
          <ScrollMouse />
        </div>
        <div className="flex flex-col gap-14">
          <div>
            <PageTitle>{langs.contact}</PageTitle>
            <p className="text-center text-sm">{langs.contactDesc}</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="py-3 px-5 border-2 border-aqua text-aqua font-semibold text-2xl md:text-3xl rounded-tl-xl rounded-br-xl">
              <h3>{langs.sendAMessage}</h3>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-2"></div>
            <form action="" className="flex flex-col gap-14 col-span-8">
              <div className="flex flex-col md:grid grid-cols-8 justify-center gap-14">
                <div className="col-span-4" dir={lang === "ar" ? "rtl" : "ltr"}>
                  <p className="text-aqua">{langs.yourname}*</p>
                  <div>
                    <input
                      type="text"
                      placeholder={langs.enterName}
                      className="bg-transparent w-full outline-none border-b border-aqua py-1"
                    />
                  </div>
                </div>

                <div className="col-span-4" dir={lang === "ar" ? "rtl" : "ltr"}>
                  <p className="text-aqua">{langs.youremail}*</p>
                  <div>
                    <input
                      type="email"
                      placeholder={langs.enterMail}
                      className="bg-transparent w-full outline-none border-b border-aqua py-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div dir={lang === "ar" ? "rtl" : "ltr"}>
                  <p className="text-aqua">{langs.yourmessage}*</p>
                  <div>
                    <input
                      type="text"
                      placeholder={langs.enterNeed}
                      className="bg-transparent w-full outline-none border-b border-aqua py-1"
                    />
                  </div>
                </div>
              </div>
              <div
                dir={lang === "ar" ? "rtl" : "ltr"}
                className="flex justify-center items-center"
              >
                <button className="bg-aqua text-deepBlack py-3 px-8 rounded-full flex justify-center items-center gap-3">
                  {langs.sendMessage} <FiSend />
                </button>
              </div>
            </form>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

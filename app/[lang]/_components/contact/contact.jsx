import { BackgroundBeams } from "@/components/ui/background-beams";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";

import { getManageLangs } from "@/manage-langs/manage-langs";
import ContactForm from "./contact-form";

const Contact = async ({ lang = "en" }) => {
  const langs = await getManageLangs(lang);
  return (
    <div id="contact" className="min-h-screen w-full relative antialiased">
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
            <ContactForm lang={lang} />
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { BackgroundBeams } from "@/components/ui/background-beams";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";


import ContactForm from "./contact-form";

const Contact = async () => {

  return (
    <div id="contact" className="min-h-screen w-full relative antialiased">
      <BackgroundBeams />
      <div className="container z-20 relative">
        <div className="flex justify-center items-center mt-20">
          <ScrollMouse />
        </div>
        <div className="flex flex-col gap-14">
          <div>
            <PageTitle>Contact</PageTitle>
            <p className="text-center text-sm">
              Let&apos;s collaborate to bring your ideas
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="py-3 px-5 border-2 border-deepAqua dark:border-aqua text-deepAqua dark:text-aqua font-semibold text-2xl md:text-3xl rounded-tl-xl rounded-br-xl">
              <h3>Send Me A Message</h3>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-2"></div>
            <ContactForm  />
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

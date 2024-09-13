import { BackgroundBeams } from "@/components/ui/background-beams";
import ScrollMouse from "../scroll-mouse";
import PageTitle from "@/components/page-title";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen w-full relative antialiased">
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
            <div className="py-3 px-5 border-2 border-aqua text-aqua font-semibold text-3xl rounded-tl-xl rounded-br-xl">
              <h3>Send Me A Message</h3>
            </div>
          </div>

          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-2"></div>
            <form action="" className="flex flex-col gap-14 col-span-8">
              <div className="grid grid-cols-8 justify-center gap-14">
                <div className="col-span-4">
                  <p className="text-aqua">Your name*</p>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="bg-transparent w-full outline-none border-b border-aqua py-1"
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <p className="text-aqua">Your Email*</p>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent w-full outline-none border-b border-aqua py-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <p className="text-aqua">Your Message*</p>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your needs"
                      className="bg-transparent w-full outline-none border-b border-aqua py-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-aqua text-deepBlack py-3 px-8 rounded-full flex justify-center items-center gap-3">
                  Send Message <FiSend />
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

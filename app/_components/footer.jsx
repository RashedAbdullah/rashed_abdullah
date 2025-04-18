import Image from "next/image";
import arrow from "@/public/arrowbottom.svg";
import { MdArrowOutward, MdArrowUpward } from "react-icons/md";
import { roboto } from "@/utils/fetch-fonts";

const Footer = async () => {
  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/RashedAbdullah",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/rashed4abdullah/",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@RashedAbdullahBD",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/Rashed4Abdullah",
    },
  ];

  return (
    <footer className="pt-16 bg-[#19191B] flex flex-col items-start gap-11">
      {/* Top grid */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-3 flex flex-col justify-between gap-8">
          <div className="w-32 flex items-center gap-4">
            <Image src={arrow} alt="" />
            <div className="text-white text-xl leading-loose">Contacts</div>
          </div>

          <a
            href="#hero"
            className="flex items-center gap-3 text-white text-xl font-medium leading-loose"
          >
            <p>Back to Top</p> <MdArrowUpward />
          </a>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            {socialLinks.map((social) => (
              <a
                href={social.link}
                target="_blank"
                key={social.name}
                className="flex gap-2 items-center text-white"
              >
                <MdArrowOutward size={22} />
                <div className="w-24 flex items-center gap-2.5">
                  <div className="text-xl font-medium leading-loose">
                    {social.name}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-neutral-400 text-2xl font-medium leading-10">
              I am currently available for freelance.
            </div>
            <div
              className={`${roboto.className} text-white text-4xl font-medium leading-[60.80px]`}
            >
              maarashed40@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-[0.80px] border-neutral-600 w-full">
        <div className="container py-3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 text-xl text-gray-400">
          <div className="lg:col-span-3">Rashed Abdullah©</div>
          <div className="lg:col-span-3 flex md:justify-between md:flex-row flex-col gap-2 md:gap-0">
            <div>{new Date().getFullYear()}</div>
            <div>All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

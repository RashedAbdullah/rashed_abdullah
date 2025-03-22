import Image from "next/image";
import arrow from "@/public/arrowbottom.svg";
import { MdArrowOutward } from "react-icons/md";
import { roboto } from "@/utils/fetch-fonts";
import { MdArrowUpward } from "react-icons/md";

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
    <footer className="pt-10 bg-zinc-900 flex flex-col justify-start items-start gap-11">
      <div className="grid grid-cols-6 container">
        <div className="col-span-3 flex flex-col justify-between">
          <div className="w-32 flex justify-start items-center gap-4 mb-32">
            <Image src={arrow} alt="" />
            <div className="justify-start text-white text-xl leading-loose">
              Contacts
            </div>
          </div>
          <a
            href="#hero"
            className="flex items-center justify-start gap-3 align-middle text-white text-xl font-medium leading-loose"
          >
            <p>Back to Top</p> <MdArrowUpward />
          </a>
        </div>
        <div className="col-span-3">
          <div className="inline-flex flex-col justify-start items-start gap-2 mb-32">
            {socialLinks.map((social) => (
              <a
                href={social.link}
                target="_blank"
                key={social.name}
                className="flex gap-2 justify-between items-center text-gray-400"
              >
                <MdArrowOutward size={22} />
                <div className="w-24 flex justify-start items-center gap-2.5">
                  <div className="justify-start text-xl font-medium leading-loose">
                    {social.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-neutral-400 text-2xl font-medium leading-10">
              I am currently available for freelance.
            </div>
            <div
              className={`${roboto.className} justify-start text-white text-4xl font-medium leading-[60.80px]`}
            >
              rashedabdullah12@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Actual footer */}
      <div className="border-t-[0.80px] border-neutral-600 w-full">
        <div className="container py-5 w-full inline-flex justify-between items-center text-xl text-gray-400">
          <div className="">Rashed Abdullah©</div>
          <div className="flex justify-between items-center">
            <div className="">{new Date().getFullYear()}</div>
          </div>
          <div className="">All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { IoMail } from "react-icons/io5";

const NameTitle = async () => {
  return (
    <div className="col-span-4 flex flex-col justify-center gap-5">
      <div className="flex flex-col justify-center gap-4">
        <header>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"<h1>"}</p>
          <h2 className="md:text-4xl text-3xl font-semibold ml-6">
            Hey
          </h2>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"</h1>"}</p>
        </header>

        <h1 className="md:text-4xl text-3xl font-semibold ml-6">
          <span>I&apos;m</span>{" "}
          <strong className="text-deepAqua dark:text-aqua">
            Rashed Abdullah
          </strong>
        </h1>

        <div className="flex items-end gap-3 ml-6">
          <h2 className="md:text-4xl text-3xl font-semibold">
            A Teacher & Developer
          </h2>
        </div>

        <div>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"<p>"}</p>
          <p className="leading-6 ml-6">
            I&apos;m Rashed Abdullah, a devoted teacher and passionate front-end
            developer. While I teach subjects outside of web development, I
            channel my creativity and expertise into crafting exceptional web
            experiences using Next.js and Node.js.
          </p>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"</p>"}</p>
        </div>

        <div className="ml-6 flex items-center gap-4">
          <h3 className="text-3xl text-deepAqua dark:text-aqua">
            Let&apos;s Talk
          </h3>
          <a
            href="#contact"
            className="h-10 w-10 rounded-full text-aqua bg-deepBlack flex justify-center items-center"
            aria-label="Contact me via email"
          >
            <IoMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameTitle;

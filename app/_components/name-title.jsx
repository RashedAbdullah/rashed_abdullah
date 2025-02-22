import React from "react";
import { IoMail } from "react-icons/io5";

const NameTitle = async () => {
  return (
    <div className="col-span-4 flex flex-col justify-center gap-5">
      <div className="flex flex-col justify-center">
        <h1 className="md:text-4xl text-3xl ml-6">
          <strong className="text-deepAqua dark:text-aqua">
            Rashed Abdullah
          </strong>
        </h1>

        <div className="flex items-end gap-3 ml-6">
          <h2 className="md:text-3xl text-3xl">Teacher & Software developer</h2>
        </div>

        <div>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"<p>"}</p>
          <p className="leading-6 ml-6">
            I always love creating something new at the intersection of
            education and technology. Using React.js, React Native, Next.js, and
            Node.js, I develop modern, user-friendly, and efficient software. At
            the same time, I strive to make education more accessible by
            providing high-quality learning materials for students and teachers.
          </p>
          <p className="text-[13px] text-deepAqua dark:text-aqua2">{"</p>"}</p>
        </div>

        <div className="ml-6 flex items-center gap-4">
          <h3 className="text-3xl text-deepAqua dark:text-aqua">
            Contact with me
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

import { getManageLangs } from "@/manage-langs/manage-langs";
import Link from "next/link";
import React from "react";
import { IoMail } from "react-icons/io5";

const NameTitle = async ({ lang }) => {
  const langs = await getManageLangs(lang);

  return (
    <div
      className="col-span-4 flex flex-col justify-center gap-5"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col justify-center gap-4">
        {/* Semantic Header Tag */}
        <header>
          <p className="text-[13px] text-aqua2">{"<h1>"}</p>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold ml-6">
            {langs.hey}
          </h1>
          <p className="text-[13px] text-aqua2">{"</h1>"}</p>
        </header>

        {/* Main Name Title */}
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold ml-6 text-nowrap">
          <span>{langs.im}</span>{" "}
          <strong className="text-aqua">{langs.name}</strong>
        </h2>

        {/* Profession Section */}
        <div className="flex items-end gap-3 ml-6">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-nowrap">
            {langs.profession}
          </h2>
        </div>

        {/* Description Section */}
        <div>
          <p className="text-[13px] text-aqua2">{"<p>"}</p>
          <p className="text-[14px] leading-6 ml-6">{langs.description}</p>
          <p className="text-[13px] text-aqua2">{"</p>"}</p>
        </div>

        {/* Contact Section */}
        <div className="ml-6 flex items-center gap-4">
          <h3 className="text-3xl text-aqua">{langs.talk}</h3>
          <Link
            href="mailto:your-email@example.com" // Update with your actual email
            className="h-10 w-10 rounded-full text-aqua bg-deepBlack flex justify-center items-center"
            aria-label="Contact me via email"
          >
            <IoMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NameTitle;

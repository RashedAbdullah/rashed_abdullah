import { getManageLangs } from "@/manage-langs/manage-langs";
import Link from "next/link";
import React from "react";
import { IoMail } from "react-icons/io5";

const NameTItle = async ({ lang }) => {
  const langs = await getManageLangs(lang);
  return (
    <div className="col-span-4 flex flex-col justify-center gap-5">
      <div className="flex flex-col justify-center gap-4">
        <div>
          <p className="text-[13px] text-aqua2">{"<h1>"}</p>
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold ml-6">
            {langs.hey}
          </h2>
        </div>
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold ml-6 text-nowrap">
          <span>{langs.im}</span>{" "}
          <strong className="text-aqua">{langs.name}</strong>
        </h2>
        <div className="flex items-end gap-3 ml-6">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-nowrap">
            {langs.profession}
          </h2>
          <p className="text-[13px] text-aqua2">{"</h1>"}</p>
        </div>
        <div>
          <p className="text-[13px] text-aqua2">{"<p>"}</p>
          <p className="text-[14px] leading-6 ml-6">{langs.description}</p>
          <p className="text-[13px] text-aqua2">{"</p>"}</p>
        </div>
        <div className="ml-6 flex items-center gap-4">
          <h3 className=" text-3xl text-aqua">{langs.talk}</h3>
          <Link
            href=""
            className="h-10 w-10 rounded-full text-aqua bg-deepBlack flex justify-center items-center"
          >
            <IoMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NameTItle;

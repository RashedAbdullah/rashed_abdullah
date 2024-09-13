import Link from 'next/link'
import React from 'react'
import { IoMail } from 'react-icons/io5'

const NameTItle = () => {
  return (
    <div className="col-span-4 flex flex-col justify-center gap-5">
          <div className="flex flex-col justify-center gap-4">
            <div>
              <p className="text-[13px] text-aqua2">{"<h1>"}</p>
              <h2 className="text-5xl font-semibold ml-6">Hey</h2>
            </div>
            <h2 className="text-5xl font-semibold ml-6 text-nowrap">
              <span>I&apos;m</span>{" "}
              <strong className="text-aqua">Rashed Abdullah</strong>
            </h2>
            <div className="flex items-end gap-3 ml-6">
              <h2 className="text-5xl font-semibold text-nowrap">
                Front-End Developer
              </h2>
              <p className="text-[13px] text-aqua2">{"</h1>"}</p>
            </div>
            <div>
              <p className="text-[13px] text-aqua2">{"<p>"}</p>
              <p className="text-[14px] leading-6 ml-6">
                I&apos;m a Front-End Developer from Bangladesh, My name is Abdul
                Ahad Rashed, i help you for growing your business and your
                vertual velue between peoples
              </p>
              <p className="text-[13px] text-aqua2">{"</p>"}</p>
            </div>
            <div className="ml-6 flex items-center gap-4">
              <h3 className=" text-3xl text-aqua">Let&apos;s Talk</h3>
              <Link
                href=""
                className="h-10 w-10 rounded-full text-aqua bg-deepBlack flex justify-center items-center"
              >
                <IoMail size={20} />
              </Link>
            </div>
          </div>
        </div>
  )
}

export default NameTItle
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="grid grid-cols-4 py-40 font-plus-jakarta-sans"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="text-xs">
        ABOUT
      </h2>
      <div className="col-span-3 space-y-30 px-2">
        <div className="text-justify">
          Hi, I&apos;m <strong>Rashed Abdullah</strong>, a freelance frontend
          developer and designer specializing in bringing seamless digital
          experiences to life. With over 2+ years of hands-on experience, I
          craft clean, intuitive interfaces and build solutions with a deep
          focus on users and thoughtful brand expression. I partner with
          startups and businesses to transform ideas into dynamic web products
          and memorable brand identities, translating vision into scalable,
          high-performing code and visually compelling pages. My goal is to
          deliver designs that feel effortless and develop frontends that
          engage, impress, and endure.
        </div>
        <div className="grid grid-cols-3">
          {/* Experience */}
          <div className="flex justify-start">
            <div>
              <div className="flex">
                <div className="text-5xl relative">
                  <span>02</span>
                  <span
                    className="text-lg absolute -top-2 -right-3"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="uppercase">years of experience</div>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="flex justify-center">
            <div>
              <div className="flex">
                <div className="text-5xl relative">
                  <span>06</span>
                  <span
                    className="text-lg absolute -top-2 -right-3"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="uppercase">projects completed</div>
            </div>
          </div>

          {/* Client Satisfaction */}
          <div className="flex justify-end">
            <div>
              <div className="flex">
                <div className="text-5xl relative">
                  <span>95</span>
                  <span
                    className="text-sm absolute top-0 -right-4"
                    aria-hidden="true"
                  >
                    %
                  </span>
                </div>
              </div>
              <div className="uppercase">client satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

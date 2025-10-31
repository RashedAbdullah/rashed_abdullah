import Image from "next/image";
import React from "react";

const SkillsSection = () => {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="sr-only">
        Technical Skills
      </h2>

      <div className="p-9 border-[0.1px] border-border bg-white max-h-screen overflow-hidden">
        <Image
          className="object-cover h-full w-full"
          height={834}
          width={1660}
          src="/images/coding-image.jpg"
          alt="Developer working on code in a modern development environment"
          priority
        />
      </div>

      <div className="grid grid-cols-4">
        {/* Typescript */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1"
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1"
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -left-1"
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">
            Typescript
          </p>
          <Image
            src="/icons/typescript.png"
            alt="TypeScript programming language logo"
            height={32}
            width={32}
          />
        </div>

        {/* React.js */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1"
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">React.js</p>
          <Image
            src="/icons/react.png"
            alt="React JavaScript library logo"
            height={32}
            width={32}
          />
        </div>

        {/* Next.js */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1"
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">Next.js</p>
          <Image
            src="/icons/next.png"
            alt="Next.js framework logo"
            height={32}
            width={32}
          />
        </div>

        {/* Typescript - Duplicate removed in actual implementation */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1"
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">
            Typescript
          </p>
          <Image
            src="/icons/typescript.png"
            alt="TypeScript programming language logo"
            height={32}
            width={32}
          />
        </div>

        {/* Express */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -left-1"
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">
            Express.js
          </p>
          <Image
            src="/icons/express.png"
            alt="Express.js web framework logo"
            height={32}
            width={32}
          />
        </div>

        {/* Prisma */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">Prisma</p>
          <Image
            src="/icons/prisma.png"
            alt="Prisma ORM logo"
            height={32}
            width={32}
          />
        </div>

        {/* MongoDB */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">MongoDB</p>
          <Image
            src="/icons/mongodb.png"
            alt="MongoDB database logo"
            height={32}
            width={32}
          />
        </div>

        {/* PostgreSQL */}
        <div className="border-b-[0.1px] border-border h-50 px-14 flex justify-between items-center relative">
          <span
            className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1"
            aria-hidden="true"
          />
          <p className="font-medium font-plus-jakarta-sans text-xl">
            PostgreSQL
          </p>
          <Image
            src="/icons/postgresql.png"
            alt="PostgreSQL database logo"
            height={32}
            width={32}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import React from "react";
import Boxes from "../common/boxes";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="bg-white" role="banner" aria-label="Hero section">
      <div className="grid grid-cols-4">
        {/* Navigation Links */}
        <Boxes>
          <Link
            href="/"
            className="h-full w-full p-8 flex items-end"
            aria-label="Home page"
          >
            <span>HOME</span>
          </Link>
        </Boxes>
        <Boxes>
          <Link
            href="/"
            className="h-full w-full block p-8"
            aria-label="Articles page"
          >
            <span>ARTICLES</span>
          </Link>
        </Boxes>
        <Boxes>
          <Link
            href="/"
            className="h-full w-full p-8 flex justify-end"
            aria-label="About page"
          >
            <span>ABOUT</span>
          </Link>
        </Boxes>
        <Boxes>
          <Link
            href="/"
            className="h-full w-full p-8 block"
            aria-label="Navigation indicator"
          >
            <span className="w-2 h-8 bg-secondary" aria-hidden="true" />
          </Link>
        </Boxes>

        {/* Main Heading */}
        <Boxes>
          <Link href="/" className="h-full w-full p-8 block uppercase">
            <h1 className="sr-only">Transforming ideas into elegant code</h1>
            <span aria-hidden="true">Transforming ideas into elegant code</span>
          </Link>
        </Boxes>

        <Boxes>
          <Link
            href="/"
            className="h-full w-full p-8 flex items-end"
            aria-label="Works portfolio"
          >
            <span>WORKS (05)</span>
          </Link>
        </Boxes>
        <Boxes>
          <Link
            href="/"
            className="h-full w-full p-8 flex justify-end items-end"
            aria-label="Services offered"
          >
            <span>SERVICES</span>
          </Link>
        </Boxes>

        {/* Mission Statement */}
        <Boxes>
          <Link href="/" className="h-full w-full p-8 block uppercase">
            <p className="sr-only">
              Good is not where I stop, it&apos;s where I begin
            </p>
            <span aria-hidden="true">
              good is not where i stop, it&apos;s where i begin.
            </span>
          </Link>
        </Boxes>

        <Boxes>
          <Link
            href="/"
            className="h-full w-full p-8 block"
            aria-label="Navigation indicator"
          >
            <span className="w-2 h-8 bg-secondary" aria-hidden="true" />
          </Link>
        </Boxes>

        {/* Call to Action Buttons */}
        <Boxes>
          <Link
            href="/"
            className="h-full w-full p-8 flex justify-center items-end"
          >
            <div>
              <button
                className="flex items-center gap-2 px-3 py-2 bg-secondary"
                aria-label="Explore projects"
              >
                Explore projects <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </Link>
        </Boxes>
        <Boxes>
          <Link href="/" className="h-full w-full block p-8 text-end uppercase">
            <p className="sr-only">
              Let&apos;s create something amazing together
            </p>
            <span aria-hidden="true"> let&apos;s create something AMAZING</span>
          </Link>
        </Boxes>
        <Boxes>
          <Link
            href="/"
            className="h-full w-full flex justify-center items-end p-8"
          >
            <div>
              <button
                className="flex items-center gap-2 px-3 py-2 bg-primary text-white uppercase"
                aria-label="Get in touch with me"
              >
                get in touch with me <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </Link>
        </Boxes>
      </div>
    </header>
  );
};

export default HeroSection;

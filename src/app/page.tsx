import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="h-screen">
        <div className="grid grid-cols-4 p-20">
          {/* Home */}
          <Link href="/" className="border rounded-lg h-48">
            <div>Home</div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div>WORKS</div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div>ABOUT</div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div></div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div>TRNANSFORMING IDEAS INTO ELEGANT CODE</div>
          </Link>
          <div className="border rounded-lg h-48 col-span-2 bg-transparent" />
          <Link href="/" className="border rounded-lg h-48">
            <div>GOOD IS NOT WHERE I STOP, IT&lsquo;S WHERE I BEGIN.</div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div></div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div>
              <button>EXPLORE PROJECTS</button>
            </div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div>LET&lsquo;S CREATE SOMTHING AMAZING</div>
          </Link>
          <Link href="/" className="border rounded-lg h-48">
            <div>
              <button>GET IN TOUCH WITH ME</button>
            </div>
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 py-7 h-screen">
        <div className="bg-amber-200 h-full grid grid-cols-2 rounded-lg overflow-hidden">
          <div className="h-full overflow-hidden relative">
            <img src="/project.jpg" alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col justify-between pt-40 px-6 pb-8">
            <div>
              {/* Numbers */}
              <div className="flex gap-5">
                <LiquidButton className="rounded-full" size="icon">
                  1
                </LiquidButton>
                <LiquidButton className="rounded-full" size="icon">
                  2
                </LiquidButton>
                <LiquidButton className="rounded-full" size="icon">
                  3
                </LiquidButton>
              </div>
              {/* title */}
              <div>
                <h2>DIRASAH</h2>
              </div>
              {/* Details Button */}
              <div>
                <LiquidButton>
                  View details <ArrowUpRight />
                </LiquidButton>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3>DIRASAH</h3>
              <p className="text-justify">
                Dirasah is a private academic platform dedicated to fostering
                knowledge, growth, and collaboration. It enables focused
                discussions, resource sharing, and personalized learning paths —
                empowering learners and scholars to grow together in a secure,
                meaningful environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

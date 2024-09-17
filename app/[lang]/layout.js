import { Ubuntu, Hind_Siliguri, Reem_Kufi, Aref_Ruqaa } from "next/font/google";
import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import HeaderNavigations from "./_components/header-navigtaions";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500"],
});
const arefRuqaa = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata = {
  title: "Rashed Abdullah",
  description:
    "Rashed Abdullah's Portfolio Website, he is a Programmer and Teacher of Madrasha",
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body
        className={`${
          lang === "en"
            ? ubuntu.className
            : lang === "bn"
            ? hindSiliguri.className
            : arefRuqaa.className
        } bg-deepBlack text-white min-h-screen selection:bg-lightBlack selection:text-aqua px-5 md:px-0`}
      >
        <Suspense fallback={<Skeleton className="w-full h-[30px]" />}>
          <Navbar lang={lang} />
        </Suspense>
        <HeaderNavigations lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}

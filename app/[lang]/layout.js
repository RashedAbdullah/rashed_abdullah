import { Ubuntu, Hind_Siliguri, Reem_Kufi } from "next/font/google";
import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import HeaderNavigations from "./_components/header-navigtaions";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });
const hindSiliguri = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });
const reemKufi = Reem_Kufi({ subsets: ["arabic"], weight: "400" });

export const metadata = {
  title: "Rashed Abdullah",
  description: "Rashed Abdullah's Portfolio Website",
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
            : reemKufi.className
        } bg-deepBlack text-white min-h-screen selection:bg-lightBlack selection:text-aqua px-5 md:px-0`}
      >
        <Navbar lang={lang} />
        <HeaderNavigations lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}

import { Ubuntu } from "next/font/google";
import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import HeaderNavigations from "./_components/header-navigtaions";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Rashed Abdullah",
  description: "Rashed Abdullah's Portfolio Website",
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body
        className={`${ubuntu.className} bg-deepBlack text-white min-h-screen selection:bg-lightBlack selection:text-aqua flex flex-col justify-between`}
      >
        <Navbar />
        <HeaderNavigations />
        {children}
        <Footer />
      </body>
    </html>
  );
}

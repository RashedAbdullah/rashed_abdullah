import { Ubuntu, Hind_Siliguri, Aref_Ruqaa } from "next/font/google";
import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import HeaderNavigations from "./_components/header-navigtaions";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500"],
});
const arefRuqaa = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata = {
  title: "Rashed Abdullah",
  description:
    "Rashed Abdullah's Portfolio Website, showcasing his work as a Programmer and Teacher of Madrasha.",
  keywords:
    "Rashed Abdullah, Programmer, Teacher, Portfolio, Student, Next.js, Web Development",
  author: "Rashed Abdullah",
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rashedabdullah.vercel.app" />
        {/* Replace with your actual URL */}
        <meta
          property="og:rashedabdullah"
          content="https://yourwebsite.com/image.jpg"
        />
        {/* Replace with your actual image URL */}
        <link
          rel="canonical"
          href="https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg"
        />
        {/* Replace with your actual URL */}
      </head>
      <body
        className={`${
          lang === "en"
            ? ubuntu.className
            : lang === "bn"
            ? hindSiliguri.className
            : arefRuqaa.className
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

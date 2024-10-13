import { Ubuntu } from "next/font/google";
import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Rashed Abdullah",
  description:
    "Rashed Abdullah's Portfolio Website, showcasing his work as a Programmer and Teacher of Madrasha.",
  keywords:
    "Rashed Abdullah, Programmer, Teacher, Portfolio, Student, Next.js, Web Development",
  author: "Rashed Abdullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
        {/* Replace with your actual image URL */}
        <link
          rel="canonical"
          href="https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg"
        />
        {/* Replace with your actual URL */}
      </head>
      <body
        className={`${ubuntu.className} bg-[#C5DEFE] text-black dark:bg-deepBlack dark:text-white min-h-screen selection:bg-deepAqua selection:text-white dark:selection:bg-aqua md:px-0`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

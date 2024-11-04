import { Ubuntu } from "next/font/google";
import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import PersonSchemaScript from "@/meta/person-schema-script";
import { myInfo } from "@/data/my-info";
import { Toaster } from "sonner";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title:
    "Rashed Abdullah - Programmer & Teacher | রাশেদ আব্দুল্লাহ - প্রোগ্রামার ও শিক্ষক",
  description:
    "Rashed Abdullah is a passionate web developer specializing in React.js and Next.js, and a committed teacher at Jamiatul Latif Rupgaj Madrasha. His portfolio highlights his work in programming, education, and personal projects.",
  keywords:
    "Rashed Abdullah, Programmer, Web Developer, React.js, Next.js, Teacher, Madrasha, Portfolio, Projects, Blog, রাশেদ আব্দুল্লাহ, প্রোগ্রামার, ওয়েব ডেভেলপার, শিক্ষক, জামিয়াতুল লতিফ রূপগঞ্জ",
  authors: [{ name: "Rashed Abdullah", url: "https://rashedabdullah.com" }],
  creator: "Rashed Abdullah",
  publisher: "Rashed Abdullah",
  formatDetection: {
    email: "abdulahad4rashed@gmail.com",
    address: "Feni, Bangladesh | ফেনী, বাংলাদেশ",
    telephone: "+8801603443214",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rashedabdullah.com",
    title:
      "Rashed Abdullah - Programmer & Teacher | রাশেদ আব্দুল্লাহ - প্রোগ্রামার ও শিক্ষক",
    description:
      "Explore Rashed Abdullah's works, including web development projects, teaching endeavors, and insightful blogs in both English and Bangla.",
    images: [
      {
        url: "https://i.ibb.co/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
        width: 1200,
        height: 630,
        alt: "Rashed Abdullah Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="google-site-verification"
          content="0HkNNGr94rr80ljfJoeaBbzofA25UWIZ5so-LeTNVzM"
        />
        <meta name="google-adsense-account" content="ca-pub-6921856465558245" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rashedabdullah.com" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        ></script>
        <meta
          property="og:image"
          content="https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg"
        />
        <link
          rel="canonical"
          href="https://i.ibb.co.com/GkdZpf8/IMG-20240621-WA0029-Copy.jpg"
        />
      </head>
      <body
        className={`${ubuntu.className} bg-gradient-to-r from-indigo-50 to-cyan-50 text-black dark:bg-gradient-to-r dark:from-[#1e293b] dark:to-[#0f172a] dark:text-white min-h-screen selection:bg-deepAqua selection:text-white dark:selection:bg-aqua md:px-0`}
      >
        <PersonSchemaScript person={myInfo} />
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-6921856465558245"
        ></amp-auto-ads>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
            <Navbar />
            <Toaster position="top-center"  />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

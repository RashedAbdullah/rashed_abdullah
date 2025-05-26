import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import PersonSchemaScript from "@/meta/person-schema-script";
import { myInfo } from "@/data/my-info";
import { Ubuntu } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "Rashed Abdullah | Software Developer & Educator",
  description:
    "Rashed Abdullah is a skilled software developer and educator. Developing websites and mobile applications since 2023. Also a teacher at Jamiatul Latif Rupganj.",
  keywords:
    "Rashed Abdullah, রাশেদ আব্দুল্লাহ, Software Developer, Web Developer, React.js, Next.js, Full Stack Developer, JavaScript, Educator, Teacher, Madrasha, Portfolio, Projects, Blog, Programming, Coding, Islamic Software",
  authors: [{ name: "Rashed Abdullah", url: "https://rashedabdullah.com" }],
  creator: "Rashed Abdullah",
  publisher: "Rashed Abdullah",
  formatDetection: {
    email: "maarashed40@gmail.com",
    address: "Feni, Bangladesh",
    telephone: "+8801603443214",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rashedabdullah.com",
    title: "Rashed Abdullah | Developer & Educator",
    description:
      "Explore Rashed Abdullah’s work, educational resources, learning materials, articles, diary entries, and more.",
    images: [
      {
        url: "https://i.ibb.co.com/VDVrwHW/rashed-avatar.png",
        width: 800,
        height: 800,
        alt: "Rashed Abdullah Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        className={`${ubuntu.className} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen selection:bg-amber-400 selection:text-zinc-900 antialiased relative`}
      >
        <PersonSchemaScript person={myInfo} />
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-6921856465558245"
        ></amp-auto-ads>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5"></div>
              <div className="absolute -top-[500px] -left-[100px] w-[600px] h-[600px] rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/20"></div>
              <div className="absolute -bottom-[400px] -right-[100px] w-[500px] h-[500px] rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-900/20"></div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

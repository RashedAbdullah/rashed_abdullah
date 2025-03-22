import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";
import PersonSchemaScript from "@/meta/person-schema-script";
import { myInfo } from "@/data/my-info";
import { jetBrains } from "@/utils/fetch-fonts";

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
        id="hero"
        className={`${jetBrains.className} bg-[#171717] text-white min-h-screen selection:bg-white selection:text-black`}
      >
        <PersonSchemaScript person={myInfo} />
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-6921856465558245"
        ></amp-auto-ads>

        <div className="bg-grid-white/[0.03]">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

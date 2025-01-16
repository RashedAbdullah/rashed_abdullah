import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import PersonSchemaScript from "@/meta/person-schema-script";
import { myInfo } from "@/data/my-info";

export const metadata = {
  title: "রাশেদ আব্দুল্লাহ | Rashed Abdullah",
  description:
    "রাশেদ আব্দুল্লাহ। সফটওয়্যার ডেভেলপার ও শিক্ষক। ২০২৩ থেকে ওয়েবসাইট ও মোবাইল এপ্লিকেশন ডেভেলপ করছেন। পাশাপাশি জামিয়াতুল লতিফ রূপগঞ্জ এর শিক্ষক।",
  keywords:
    "Rashed Abdullah, রাশেদ আব্দুল্লাহ, Programmer, প্রোগ্রামার, ডেভেলপার, Web Developer, React.js, Next.js, Teacher, Madrasha, Portfolio, Projects, Blog, রাশেদ আব্দুল্লাহ, ওয়েব ডেভেলপার, শিক্ষক, জামিয়াতুল লতিফ রূপগঞ্জ",
  authors: [{ name: "Rashed Abdullah", url: "https://rashedabdullah.com" }],
  creator: "Rashed Abdullah",
  publisher: "Rashed Abdullah",
  formatDetection: {
    email: "maarashed40@gmail.com",
    address: "Feni, Bangladesh | ফেনী, বাংলাদেশ",
    telephone: "+8801603443214",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://rashedabdullah.com",
    title: "Developer & Teacher | রাশেদ আব্দুল্লাহ - ডেভেলপার ও শিক্ষক",
    description:
      "রাশেদ আব্দুল্লাহর কাজ। পড়াশোনা রিলেটেড টপিকস। লার্নিং রিসোর্স। আর্টিকেলস। দিনলিপি। প্রভৃতি।",
    images: [
      {
        url: "https://i.ibb.co.com/VDVrwHW/rashed-avatar.png",
        width: 800,
        height: 800,
        alt: "রাশেদ আব্দুল্লাহ পোর্টফোলিও",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
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
        className={`bg-gradient-to-r from-indigo-50 to-cyan-50 text-black dark:bg-gradient-to-r dark:from-[#1e293b] dark:to-[#0f172a] dark:text-white min-h-screen selection:bg-deepAqua selection:text-white dark:selection:bg-aqua md:px-0`}
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
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

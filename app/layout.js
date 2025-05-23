import "@/css/globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import PersonSchemaScript from "@/meta/person-schema-script";
import { myInfo } from "@/data/my-info";
import { Ubuntu } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import DecorativeElements from "@/components/decorative-elements";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "Rashed Abdullah",
  description:
    "Skilled software developer and educator creating digital solutions and sharing knowledge since 2023.",
  // ... rest of your metadata remains the same
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* ... your existing head content remains the same ... */}</head>
      <body
        className={`${ubuntu.className} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen selection:bg-amber-400 selection:text-zinc-900 antialiased relative`}
      >
        <DecorativeElements />
        <PersonSchemaScript person={myInfo} />
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-6921856465558245"
        ></amp-auto-ads>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Changed to light as default
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
                <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,transparent)] dark:bg-[url('/grid-dark.svg')]"></div>
              </div>
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

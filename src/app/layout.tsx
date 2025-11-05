import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const sfMono = localFont({
  src: "../assets/fonts/sf-mono/SFMonoRegular.otf",
  variable: "--font-sf-mono",
  preload: true,
  display: "swap",
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rashed Abdullah — Web Developer",
    template: "%s | Rashed Abdullah",
  },
  description:
    "Front-end focused full-stack developer specializing in React, Next.js, Node.js, and scalable web applications. Building polished interfaces, robust backends, and modern digital products.",
  keywords: [
    "Full-stack JavaScript developer",
    "Front-end focused full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Web developer Bangladesh",
    "TypeScript",
    "Modern UI development",
    "Portfolio",
  ],
  authors: [{ name: "Rashed Abdullah", url: "https://rashedabdullah.com" }],
  creator: "Rashed Abdullah",
  publisher: "Rashed Abdullah",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://rashedabdullah.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rashedabdullah.com",
    siteName: "Rashed Abdullah Portfolio",
    title: "Rashed Abdullah — Web Developer",
    description:
      "Portfolio of Rashed Abdullah — crafting performant, intuitive front-end experiences supported by scalable back-end systems.",
    images: [
      {
        url: "https://rashedabdullah.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio — Rashed Abdullah",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rashed Abdullah — Web Developer",
    description:
      "React, Next.js, and Node.js developer building modern web apps.",
    images: ["https://rashedabdullah.com/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  themeColor: "#3A4C50",
  category: "technology",
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rashed Abdullah",
  jobTitle: "Front-End Focused Full-Stack Developer",
  description:
    "Full-stack JavaScript developer specializing in React, Next.js, Node.js, and TypeScript.",
  url: "https://rashedabdullah.com",
  sameAs: [
    "https://linkedin.com/in/your-profile",
    "https://github.com/your-profile",
    "https://twitter.com/rashedabdullah",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "REST API",
    "Front-end Architecture",
    "UI Engineering",
  ],
  hasCredential: "Full-Stack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Independent Developer",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "your-email@example.com",
    telephone: "+8801XXXXXXXX",
    contactType: "business",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Bengali"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Bangladesh",
  },
};

import {
  Cursor,
  CursorFollow,
  CursorProvider,
  type CursorFollowProps,
} from "@/components/animate-ui/components/animate/cursor";
import Header from "@/components/common/header";

interface CursorDemoProps {
  global?: boolean;
  enableCursor?: boolean;
  enableCursorFollow?: boolean;
  side?: CursorFollowProps["side"];
  sideOffset?: number;
  align?: CursorFollowProps["align"];
  alignOffset?: number;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#3A4C50" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <body
        className={`${plus_jakarta_sans.variable} ${sfMono.variable} antialiased text-primary`}
      >
        <CursorProvider global={true}>
          <Cursor />
          {/* <CursorFollow
            side={"bottom"}
            sideOffset={15}
            align={"end"}
            alignOffset={5}
          >
            About Me
          </CursorFollow> */}
          <Header />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}

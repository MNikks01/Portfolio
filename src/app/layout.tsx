import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const url = "https://nikhilmeshram.dev";
const title = "Nikhil Meshram — Senior Full Stack Engineer";
const description =
  "Senior Full Stack Engineer building scalable systems, AI-powered developer tools, and modern cloud platforms. MERN, Node.js, AWS, Docker, Kubernetes, and AI engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: title, template: "%s — Nikhil Meshram" },
  description,
  applicationName: "Nikhil Meshram Portfolio",
  authors: [{ name: "Nikhil Meshram", url }],
  creator: "Nikhil Meshram",
  keywords: [
    "Senior Full Stack Engineer",
    "Node.js Developer",
    "MERN Stack Developer",
    "AWS Engineer",
    "DevOps Engineer",
    "AI Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Kubernetes",
    "Docker",
    "MCP",
    "Claude",
  ],
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Nikhil Meshram",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Meshram — Senior Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
    creator: "@nikhilmeshram",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: url },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikhil Meshram",
    url,
    jobTitle: "Senior Full Stack Engineer",
    email: "mailto:mnikks01@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/MNikks01",
      "https://linkedin.com/in/nikhil-shakya-5b7318a1",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
      "AI Engineering",
      "MCP",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans bg-bg-deep text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

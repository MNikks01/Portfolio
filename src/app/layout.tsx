import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

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

const url = site.url;
const title = `${site.name} — ${site.role}`;
const description =
  "Senior Full Stack Engineer building scalable systems, AI-powered developer tools, and modern cloud platforms. MERN, Node.js, AWS, Docker, Kubernetes, and AI engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: title, template: `%s — ${site.name}` },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url }],
  creator: site.name,
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
    siteName: site.name,
    // og:image is provided by src/app/opengraph-image.tsx (auto-wired by Next).
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // twitter:image is provided by src/app/twitter-image.tsx (auto-wired).
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
    name: site.name,
    url,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [site.social.github.url, site.social.linkedin.url],
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
      <body className="bg-bg-deep font-sans text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only z-[300] rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-bg-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <main id="main" className="relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

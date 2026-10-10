import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Green Minds Malawi is a youth-led organisation empowering young people and communities through climate education, clean energy access, environmental conservation and climate justice advocacy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greenmindsmw.com"),
  title: {
    default: "Green Minds Malawi | Empowering Young Minds, Building Greener Futures",
    template: "%s | Green Minds Malawi"
  },
  description,
  keywords: ["Green Minds Malawi", "Climate Education", "Clean Energy Access", "Youth Leadership", "Environmental Conservation", "Climate Justice", "Solar Lamps", "Tree Planting", "Malawi", "Non-profit"],
  authors: [{ name: "Green Minds Malawi" }],
  creator: "Green Minds Malawi",
  publisher: "Green Minds Malawi",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Green Minds Malawi | Empowering Young Minds, Building Greener Futures",
    description,
    url: "/",
    siteName: "Green Minds Malawi",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Minds Malawi | Empowering Young Minds, Building Greener Futures",
    description,
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
  category: "environment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Sections only start hidden (for the reveal animation) when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full flex flex-col selection:bg-accent/30 selection:text-primary">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-primary focus:rounded-full focus:shadow-xl focus:font-bold"
        >
          Skip to content
        </a>
        <main id="main-content" className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}

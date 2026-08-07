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

export const metadata: Metadata = {
  title: {
    default: "Green Minds INC | Pioneering Sustainable Development",
    template: "%s | Green Minds INC"
  },
  description: "Green Minds INC is a leading non-profit organization dedicated to pioneering sustainable development through technology, community action, and education. Join our mission for a greener future.",
  keywords: ["Sustainability", "Environmental Conservation", "Green Innovation", "Climate Action", "Non-profit", "Malawi", "Eco-friendly solutions", "Renewable Energy", "Reforestation"],
  authors: [{ name: "Green Minds INC" }],
  creator: "Green Minds INC",
  publisher: "Green Minds INC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Green Minds INC | Building a Sustainable Tomorrow",
    description: "Empowering communities to create environmentally responsible solutions for a better world. Discover our impact and focus areas.",
    url: "https://greenminds.inc",
    siteName: "Green Minds INC",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Green Minds INC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Minds INC | Building a Sustainable Tomorrow",
    description: "Empowering communities to create environmentally responsible solutions for a better world.",
    images: ["/logo.png"],
    creator: "@greenmindsinc",
  },
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    >
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

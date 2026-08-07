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
  title: "Green Minds INC | Pioneering Sustainable Development",
  description: "Green Minds INC is a non-profit organization dedicated to pioneering sustainable development through technology, community action, and education. Empowering communities for a better world.",
  keywords: ["Sustainability", "Environmental Conservation", "Green Innovation", "Climate Action", "Non-profit", "Malawi", "Eco-friendly solutions"],
  authors: [{ name: "Green Minds INC" }],
  openGraph: {
    title: "Green Minds INC | Building a Sustainable Tomorrow",
    description: "Empowering communities to create environmentally responsible solutions for a better world.",
    url: "https://greenminds.inc",
    siteName: "Green Minds INC",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
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
  },
  icons: {
    icon: "/logo.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

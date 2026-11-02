import type { Metadata } from "next"

// Public address of the live site, used for search engine metadata,
// robots.txt and the sitemap
export const siteUrl = "https://www.greenmindsmw.org"

export const siteName = "Green Minds Malawi"

export const socialLinks = {
  facebook: "https://www.facebook.com/p/Green-Minds-Malawi-61584288335665/",
  instagram: "https://www.instagram.com/green_minds_malawi/",
}

// Pages listed in the sitemap (the homepage plus one page per main section)
export const sitePages = ["/", "/about", "/team", "/our-work", "/get-involved"]

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Green Minds Malawi: Empowering Young Minds, Building Greener Futures",
}

// Title, description, canonical address and share details for an inner page
// (the share image is repeated here because a page's own openGraph replaces
// the one it would otherwise inherit)
export const pageMetadata = (title: string, description: string, path: string): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: path,
    siteName,
    locale: "en_GB",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: [shareImage],
  },
})

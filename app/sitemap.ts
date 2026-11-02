import type { MetadataRoute } from "next"
import { sitePages, siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }))
}

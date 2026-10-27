import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: DATA.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${DATA.url}/llms.txt`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${DATA.url}/llms-full.txt`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}

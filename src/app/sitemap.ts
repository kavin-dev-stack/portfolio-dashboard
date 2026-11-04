import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kavins-projects-6e7b51b1.vercel.app",
      priority: 1,
    },
  ];
}

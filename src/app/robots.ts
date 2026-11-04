import type { MetadataRoute } from "next";

const productionUrl = "https://kavins-projects-6e7b51b1.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${productionUrl}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://harmony-saudi.com",
      priority: 1,
    },
    {
      url: "https://harmony-saudi.com/contact",
      priority: 0.8,
    },
  ];
}

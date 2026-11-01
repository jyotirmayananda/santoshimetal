import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://santoshimetal.com";

  const routes = [
    "",
    "/about",
    "/capabilities",
    "/capabilities/powder-coating",
    "/capabilities/anodising",
    "/capabilities/aluminium-ingots",
    "/capabilities/aluminium-supply",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/capabilities") ? 0.9 : 0.8,
  }));
}


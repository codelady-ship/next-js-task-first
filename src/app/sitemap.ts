import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// JSONPlaceholder always has users 1 to 10.
const ids = Array.from({ length: 10 }, (_, i) => i + 1);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/home", "/users", "/image", "/contact"].map((p) => ({
    url: SITE_URL + p,
    changeFrequency: "monthly" as const,
    priority: p === "/home" ? 1 : 0.7,
  }));
  const users = ids
    .flatMap((id) => [`/home/${id}`, `/users/${id}`])
    .map((p) => ({ url: SITE_URL + p, changeFrequency: "yearly" as const, priority: 0.4 }));
  return [...pages, ...users];
}

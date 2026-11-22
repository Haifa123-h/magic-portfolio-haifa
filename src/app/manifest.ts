import type { MetadataRoute } from "next";

import { home } from "@/resources";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: home.title,
    short_name: "Haifa Kechiche",
    description: home.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06131f",
    theme_color: "#06131f",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

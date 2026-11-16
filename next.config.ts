import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Needed for the remote-image example on /image.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // There is no page at "/", so send visitors to the SSR demo.
  async redirects() {
    return [{ source: "/", destination: "/home", permanent: false }];
  },
};

export default nextConfig;

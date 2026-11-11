import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // There is no page at "/", so send visitors to the home page.
  async redirects() {
    return [{ source: "/", destination: "/home", permanent: false }];
  },
};

export default nextConfig;

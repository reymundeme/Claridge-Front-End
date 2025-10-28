import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow images from Wix static host used in CMS content and other external sources
    domains: [
      "static.wixstatic.com",
      "www.travelandleisure.com"
    ],
  },
  /* other config options here */
};

export default nextConfig;

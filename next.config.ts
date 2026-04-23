import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:'img.daisyui.com'
      },
      {
        protocol:"https",
        hostname:'randomuser.me'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;

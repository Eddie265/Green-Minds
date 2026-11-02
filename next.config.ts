import type { NextConfig } from "next";

// Photos uploaded from /admin are served from the Neon "site-images" bucket
const storageEndpoint = process.env.AWS_ENDPOINT_URL_S3 ? new URL(process.env.AWS_ENDPOINT_URL_S3) : null;

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the Our Work photo galleries so small photos stay crisp
    qualities: [75, 90],
    remotePatterns: storageEndpoint
      ? [{ protocol: "https", hostname: storageEndpoint.hostname, pathname: "/site-images/**" }]
      : [],
  },
};

export default nextConfig;

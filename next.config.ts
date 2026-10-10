import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the Our Work photo galleries so small photos stay crisp
    qualities: [75, 90],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/blog": ["./content/**/*"],
    "/blog/**/*": ["./content/**/*"],
    "/categorias": ["./content/**/*"],
    "/categoria/**/*": ["./content/**/*"],
  },
};

export default nextConfig;
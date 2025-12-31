import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

// TS-safe workaround (runtime config still works)
(nextConfig as any).experimental = {
  ...(nextConfig as any).experimental,
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://10.0.0.7:3000",
  ],
};

export default nextConfig;

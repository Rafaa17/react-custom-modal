import path from "path";

const config = {
  webpack: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/component": path.resolve(__dirname, "src/component"),
      "@/context": path.resolve(__dirname, "src/context"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/styles": path.resolve(__dirname, "src/styles"),
    },
  },
};

export default config;
